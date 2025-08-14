"use client";

import { useState, useEffect, useRef } from "react";
import { FaUser, FaEnvelopeOpenText } from "react-icons/fa";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      team: (form.elements.namedItem("team") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      // Example POST request to your email backend or service like EmailJS / Nodemailer
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="relative mx-auto w-full md:max-w-6xl py-10 md:py-16 px-4 md:px-8 lg:px-2 bg-transparent">
      {/* Glowing Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-400 blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-pink-400 blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10 rounded min-h-[700px]">
        <div
          ref={headerRef}
          className="relative rounded-3xl bg-zinc-900/20 backdrop-blur-lg shadow-2xl p-6 md:p-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, rgba(192,132,252,0.12), rgba(236,72,153,0.06), rgba(135,206,235,0))`,
          }}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 drop-shadow-md mb-10 text-center">
            Contact Us
          </h2>

          {/* Contact Form */}
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder=" "
                className="peer w-full rounded-lg bg-transparent py-4 pl-12 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-12 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Your Name
              </label>
              <FaUser className="absolute left-4 top-4 text-white/70 pointer-events-none" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder=" "
                className="peer w-full rounded-lg bg-transparent py-4 pl-12 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-12 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Your Email
              </label>
              <FaEnvelopeOpenText className="absolute left-4 top-4 text-white/70 pointer-events-none" />
            </div>

            {/* Team Name */}
            <div className="relative">
              <input
                type="text"
                name="team"
                placeholder=" "
                className="peer w-full rounded-lg bg-transparent py-4 pl-4 pr-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
              <label
                htmlFor="team"
                className="absolute left-4 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Team Name
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={5}
                placeholder=" "
                className="peer w-full rounded-lg bg-transparent py-4 px-4 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
                required
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white select-none"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r  via-pink-700 text-white font-bold py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
