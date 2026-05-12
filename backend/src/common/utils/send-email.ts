import nodemailer from "nodemailer";


type SendEmailOptions = {
  to: string;
  subject: string;
  html: string;
};


const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
console.log("EMAIL:", process.env.SMTP_EMAIL);
console.log("USER:", process.env.SMTP_USER);
console.log("PASSWORD:", process.env.SMTP_PASSWORD);


const sendEmail = async ({
  to,
  subject,
  html,
}: SendEmailOptions) => {
  await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to,
    subject,
    html,
  });
};

export default sendEmail;