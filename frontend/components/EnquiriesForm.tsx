// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "sonner";

// const EnquiriesForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     from:"",
//     to:""
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/enquiry", // 👉 your backend API
//         formData
//       );

//       if (res.data.success) {
//         toast.success("Enquiry sent successfully!");
//         setFormData({ name: "", email: "", phone: "", message: "", from:"", to:"" });
//       } else {
//         toast.error(res.data.msg || "Something went wrong!");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to send enquiry. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <form>
//       <div className="text-center mb-5">
//         <h1 className="text-2xl font-bold">Plan Your Journey</h1>
//         <p className="text-sm text-muted-foreground">
//           Fill out the form below and we'll get back to you with a quote for
//           your trip.
//         </p>
//       </div>

//       <div>
//         <div className="flex items-center justify-baseline gap-5 mb-2">
//           <div className="flex flex-col items-baseline w-full">
//             <label htmlFor="name" className="text-muted-foreground">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="border w-full px-2 py-1 rounded-md "
//               placeholder="Enter your Name"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col items-baseline w-full">
//             <label htmlFor="email" className="text-muted-foreground">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="border w-full px-2 py-1 rounded-md "
//               placeholder="Enter your Email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-baseline gap-5 mb-2">
//           <div className="flex flex-col items-baseline w-full">
//             <label htmlFor="phone" className="text-muted-foreground">
//               Phone
//             </label>
//             <input
//               type="text"
//               id="phone"
//               className="border w-full px-2 py-1 rounded-md "
//               placeholder="Enter your Phone Number"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col items-baseline w-full">
//             <label htmlFor="date" className="text-muted-foreground">
//               Preffered Travel Date
//             </label>
//             <input
//               type="date"
//               id="date"
//               className="border w-full px-2 py-1 rounded-md"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-baseline gap-5 mb-2">
//           <div className="flex flex-col items-baseline w-full">
//             <label htmlFor="from" className="text-muted-foreground">
//               From
//             </label>
//             <input
//               type="text"
//               id="from"
//               className="border w-full px-2 py-1 rounded-md "
//               placeholder="Around to Ramanthapuram"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col items-baseline w-full">
//             <label htmlFor="to" className="text-muted-foreground">
//               To
//             </label>
//             <input
//               type="text"
//               id="to"
//               className="border w-full px-2 py-1 rounded-md "
//               placeholder="Enter your Destination"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-baseline gap-5 mb-2">
//           <div className="flex flex-col items-baseline w-full">
//             <label htmlFor="message" className="text-muted-foreground">
//               Meesage
//             </label>
//             <textarea
//               id="message"
//               className="w-full border h-30 p-2"
//               placeholder="Tell us about your travel plan."
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default EnquiriesForm;
