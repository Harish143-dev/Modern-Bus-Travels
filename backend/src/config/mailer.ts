import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { InquiryInterface } from "../types/inquiries";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

export const sendMail = async (data: InquiryInterface): Promise<void> => {
  const { name, email, phone, message, packageName, from, to, date } = data;

  // 🧠 Build HTML conditionally (no false/undefined in output)
  let html = `
    <h3>New Travel Inquiry</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone || "Not provided"}</p>
  `;

  if (packageName) {
    html += `<p><b>Package:</b> ${packageName}</p>`;
  }

  if (date) {
    html += `<p><b>Date:</b> ${date}</p>`;
  }

  if (from) {
    html += `<p><b>From:</b> ${from}</p>`;
  }

  if (to) {
    html += `<p><b>To:</b> ${to}</p>`;
  }

  html += `<p><b>Message:</b> ${message}</p>`;

  const mailOptions = {
    from: `"BSK Travels" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.ADMIN_EMAIL, // or multiple emails separated by commas
    subject: `New Inquiry from ${name}`,
    html,
  };

  await transporter.sendMail(mailOptions);
};
