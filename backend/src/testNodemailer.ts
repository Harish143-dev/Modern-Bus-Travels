import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

async function testMail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // send to yourself for test
      subject: "✅ BSK Travels Test Email",
      html: `
        <h3>Test Email from BSK Travels Backend</h3>
        <p>This confirms your Nodemailer + TypeScript setup works correctly 🎉</p>
      `,
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending test email:", error);
  }
}

testMail();
