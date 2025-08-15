"use client";

import { useState } from "react";
import { FaUser, FaEnvelopeOpenText } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createMailtoLink = () => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTeam: ${formData.team}\n\nMessage:\n${formData.message}`
    );
    return `mailto:community@geekroom.in?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative mx-auto w-full md:max-w-6xl py-10 md:py-16 px-4 md:px-8 lg:px-2 rounded-md "
    >
      <div className="container mx-auto max-w-3xl relative z-10 rounded min-h-[700px]">
        <div className="relative rounded-3xl bg-zinc-900/40 backdrop-blur-lg shadow-2xl p-6 md:p-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-10 text-center">
            Contact Us
          </h2>

          {/* Contact Form */}
          <form className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full rounded-lg bg-transparent py-4 pl-12 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
              <label className="absolute left-12 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white">
                Your Name
              </label>
              <FaUser className="absolute left-4 top-4 text-white/70" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full rounded-lg bg-transparent py-4 pl-12 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
              <label className="absolute left-12 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white">
                Your Email
              </label>
              <FaEnvelopeOpenText className="absolute left-4 top-4 text-white/70" />
            </div>

            {/* Team Name */}
            <div className="relative">
              <input
                type="text"
                name="team"
                value={formData.team}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full rounded-lg bg-transparent py-4 pl-4 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
              <label className="absolute left-4 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white">
                Team Name
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder=" "
                className="peer w-full rounded-lg bg-transparent py-4 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
                required
              />
              <label className="absolute left-4 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <a
              href={createMailtoLink()}
              className="bg-gradient-to-r from-black via-transparent to-black light:text-white dark:text-white-500 font-bold py-4 text-lg md:text-2xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-center"
            >
              Send Message
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
