import dotenv from "dotenv";

dotenv.config();
import nodemailer from "nodemailer";

type SendEmailOptions = {
  to: string;
  subject: string;
  html: string;
};

const transporter =
  nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",

    port: 2525,

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
});

const sendEmail = async ({
  to,
  subject,
  html,
}: SendEmailOptions) => {

  console.log("send email function");

  await transporter.verify();

  console.log(
    "SMTP connection successful"
  );

  await transporter.sendMail({
    from:
      process.env.SMTP_EMAIL,

    to,

    subject,

    html,
  });
};

export default sendEmail;