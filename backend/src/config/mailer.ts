import axios from "axios";
import dotenv from "dotenv";
import { InquiryInterface } from "../types/inquiries";

dotenv.config();

export const sendMail = async (data: InquiryInterface): Promise<void> => {
  const { name, email, phone, message, packageName, from, to, date } = data;

  // Build HTML content dynamically
  let html = `
    <h3>New Travel Inquiry</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone || "Not provided"}</p>
  `;

  if (packageName) html += `<p><b>Package:</b> ${packageName}</p>`;
  if (date) html += `<p><b>Date:</b> ${date}</p>`;
  if (from) html += `<p><b>From:</b> ${from}</p>`;
  if (to) html += `<p><b>To:</b> ${to}</p>`;
  html += `<p><b>Message:</b> ${message}</p>`;

  const payload = {
    sender: { email: process.env.BREVO_EMAIL, name: "BSK Travels" },
    to: [{ email: process.env.ADMIN_EMAIL }],
    subject: `New Inquiry from ${name}`,
    htmlContent: html,
  };

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      payload,
      {
        headers: {
          "api-key": process.env.BREVO_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`✅ Email sent successfully for inquiry from ${name}`);
  } catch (err: any) {
    console.error(
      "❌ Error sending inquiry via Brevo API:",
      err.response?.data || err.message
    );
  }
};
