"use client";

import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BasicEnquiries = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    from: "",
    to: "",
    date: "",
  });
  console.log(process.env.NEXT_PUBLIC_API_URL);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/enquiry`,
        {
          ...formData,
        }
      );

      if (res.data.success) {
        toast.success("Enquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          from: "",
          to: "",
          date: "",
        });
        setOpen(false);
      } else {
        toast.error(res.data.msg || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Enquire Now</Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Plese kindly fill the form</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div className="flex justify-center flex-col items-center gap-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              className="w-full p-2 border rounded-lg"
              onChange={handleChange}
              placeholder="Preffered Date"
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="Enter your Pickup Location"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              name="to"
              value={formData.to}
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
              placeholder="enter your Destination"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={3}
            className="w-full p-3 border rounded-lg"
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Enquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BasicEnquiries;
