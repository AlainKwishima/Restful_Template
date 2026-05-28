import nodemailer from "nodemailer";
import { env } from "@/config/env.js";
import { logger } from "@/shared/logger/logger.js";
import { passwordResetTemplate, verificationTemplate } from "@/shared/email/templates.js";

type EmailMessage = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

class EmailService {
  private readonly transporter = env.SMTP_HOST
    ? nodemailer.createTransport({
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        ...(env.SMTP_USER && env.SMTP_PASS
          ? {
              auth: {
                user: env.SMTP_USER,
                pass: env.SMTP_PASS,
              },
            }
          : {}),
      })
    : null;

  async send(message: EmailMessage): Promise<void> {
    if (!this.transporter) {
      logger.info({ to: message.to, subject: message.subject }, "Email preview");
      return;
    }

    await this.transporter.sendMail({
      from: env.SMTP_FROM,
      to: message.to,
      subject: message.subject,
      html: message.html,
      ...(message.text ? { text: message.text } : {}),
    });
  }

  async sendVerificationEmail(to: string, token: string, name?: string) {
    const template = verificationTemplate(token, name);
    await this.send({ to, ...template });
  }

  async sendPasswordResetEmail(to: string, token: string, name?: string) {
    const template = passwordResetTemplate(token, name);
    await this.send({ to, ...template });
  }
}

export const emailService = new EmailService();
