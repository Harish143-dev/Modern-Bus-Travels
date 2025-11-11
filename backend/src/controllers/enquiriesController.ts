import { Request, Response } from "express";
import { sendMail } from "../config/mailer";
import { InquiryInterface } from "../types/inquiries";

export const sendInquiry = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, phone, message, packageName, from, to, date } =
      req.body as InquiryInterface;

    if (!name || !email || !message) {
      res.status(400).json({ error: "Please fill all required fields" });
      return;
    }

    let mailData: Partial<InquiryInterface> = {
      name,
      email,
      phone,
      message,
      date,
    };

    // If user is sending a package inquiry (has a date)
    if (packageName) {
      mailData.packageName = packageName;
      mailData.date = date;
    }
    // If user is sending a custom inquiry (has from/to)
    else if (from && to) {
      mailData.from = from;
      mailData.to = to;
    }
    await sendMail(mailData as InquiryInterface);

    res
      .status(200)
      .json({ success: true, message: "Inquiry sent successfully" });
  } catch (error) {
    console.error("Error sending inquiry:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error sending inquiry" });
  }
};
