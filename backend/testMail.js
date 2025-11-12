import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_LOGIN, // your verified sender
    pass: process.env.BREVO_KEY, // your SMTP key (starts with xsmtpsib-)
  },
});

try {
  const info = await transporter.sendMail({
    from: process.env.BREVO_EMAIL,
    to: "harish1435dev@gmail.com",
    subject: "Test Email from Brevo SMTP ✅",
    text: "Hello! Brevo SMTP test message via Nodemailer.",
  });
  console.log("✅ Email sent successfully:", info.messageId);
} catch (err) {
  console.error("❌ SMTP connection failed:", err);
}
