import { createTransport } from "nodemailer";
import { ConfigurationError } from "#libs/errors/ConfigurationError";

type SendMailOptions = {
  from: string;
  message: string;
  subject: string;
};

export const sendMail = async ({ from, message, subject }: SendMailOptions) => {
  // Note: we do not use the astro:env as it does not enable error handling like here
  const { EMAIL_ACCOUNT, EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT } = import.meta
    .env;

  if (!EMAIL_ACCOUNT || !EMAIL_HOST || !EMAIL_PASSWORD || !EMAIL_PORT) {
    throw new ConfigurationError("Missing Email transporter configuration");
  }

  const transporter = createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: true,
    auth: { user: EMAIL_ACCOUNT, pass: EMAIL_PASSWORD },
  });

  const email = {
    from,
    to: EMAIL_ACCOUNT,
    subject,
    text: message,
    html: message,
  };

  return await transporter.sendMail(email);
};
