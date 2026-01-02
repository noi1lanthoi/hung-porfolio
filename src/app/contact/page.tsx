"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Send,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// EmailJS Configuration - Replace these with your actual values
// Get them from https://dashboard.emailjs.com/admin
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    setFormStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Contact from Portfolio",
          message: formData.message,
          to_name: "Minh Hưng",
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-40 py-10 lg:py-20 flex justify-center w-full">
      <motion.div
        className="w-full max-w-6xl flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading Section */}
        <motion.div
          className="flex flex-col gap-4 max-w-2xl"
          variants={itemVariants}
        >
          <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
            Let&apos;s build something{" "}
            <span className="text-primary">together.</span>
          </h1>
          <p className="text-text-muted dark:text-text-muted-dark text-lg font-normal leading-relaxed">
            I&apos;m currently open for freelance projects or full-time
            opportunities. <br className="hidden sm:block" />
            Drop a message below or connect with me on social media.
          </p>
        </motion.div>

        {/* Content Split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Form */}
          <motion.div
            className="flex-1 lg:max-w-[600px]"
            variants={itemVariants}
          >
            <form
              ref={formRef}
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.label
                  className="flex flex-col flex-1 group"
                  whileHover={{ scale: 1.01 }}
                >
                  <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">
                    Name <span className="text-red-500">*</span>
                  </p>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input w-full rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-primary border border-border-dark bg-surface-dark focus:border-primary h-14 placeholder:text-text-muted-dark/50 px-4 text-base transition-all duration-200"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </motion.label>
                <motion.label
                  className="flex flex-col flex-1 group"
                  whileHover={{ scale: 1.01 }}
                >
                  <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">
                    Email <span className="text-red-500">*</span>
                  </p>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input w-full rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-primary border border-border-dark bg-surface-dark focus:border-primary h-14 placeholder:text-text-muted-dark/50 px-4 text-base transition-all duration-200"
                    placeholder="your@email.com"
                    type="email"
                    required
                  />
                </motion.label>
              </div>

              <motion.label
                className="flex flex-col w-full group"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">
                  Subject
                </p>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input w-full rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-primary border border-border-dark bg-surface-dark focus:border-primary h-14 placeholder:text-text-muted-dark/50 px-4 text-base transition-all duration-200"
                  placeholder="Project Inquiry"
                  type="text"
                />
              </motion.label>

              <motion.label
                className="flex flex-col w-full group"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">
                  Message <span className="text-red-500">*</span>
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea w-full rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-primary border border-border-dark bg-surface-dark focus:border-primary min-h-[180px] placeholder:text-text-muted-dark/50 p-4 text-base resize-y transition-all duration-200"
                  placeholder="Tell me about your project needs, timeline, and goals..."
                  required
                ></textarea>
              </motion.label>

              <div className="pt-2 flex flex-col gap-3">
                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="group relative flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-8 bg-primary text-[#111618] text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={
                    formStatus !== "loading"
                      ? {
                          y: -2,
                          boxShadow: "0 0 20px rgba(19, 182, 236, 0.3)",
                        }
                      : {}
                  }
                  whileTap={formStatus !== "loading" ? { scale: 0.98 } : {}}
                >
                  {formStatus === "loading" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm"
                  >
                    <CheckCircle className="size-4" />
                    <span>
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <AlertCircle className="size-4" />
                    <span>
                      Failed to send message. Please try again or email me
                      directly.
                    </span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right Column: Contact Info & Socials */}
          <motion.div
            className="flex flex-col gap-10 lg:w-[360px] lg:pt-8"
            variants={containerVariants}
          >
            <motion.div
              className="rounded-xl bg-surface-dark/50 border border-border-dark p-6 sm:p-8 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-6">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-text-muted dark:text-text-muted-dark">
                      Email Me
                    </p>
                    <a
                      className="text-base font-medium text-slate-900 dark:text-white hover:text-primary transition-colors"
                      href="mailto:hungtranpro2@gmail.com"
                    >
                      hungtranpro2@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-text-muted dark:text-text-muted-dark">
                      Phone
                    </p>
                    <a
                      className="text-base font-medium text-slate-900 dark:text-white hover:text-primary transition-colors"
                      href="tel:+84338893894"
                    >
                      +84 338 893 894
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-text-muted dark:text-text-muted-dark">
                      Location
                    </p>
                    <p className="text-base font-medium text-slate-900 dark:text-white">
                      Da Nang, Vietnam
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-1 text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full w-fit">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      Open to work
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-48 w-full overflow-hidden rounded-xl border border-border-dark group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent z-10"></div>
              <Image
                alt="Aerial view of Da Nang City"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEp5Lg_WYUzOrJwfJEEPMYhl7sOCal0_W4C9fwlgbyo1MnOEytfH-Lxbg32Nlhs5W-GbD1nmUlDGpJ-Sw6gp13BIZgPSDslg6sqGZAZuBXl8DcpjTPTQ7-XsWpS5IA_8OSndugM57Rc1lspkxGWqcFhDxBfxNQ_RYxqRPg87cvc13RSX3Dpdp8sfKfsDE4ptqkNArSxLAY0uN9F2nWI7LrNgL9ixwAxo_koD18F0LoA3vBZs_L-PY7rghwUn93O_Dv0IB9Jd9ldOs"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 grayscale hover:grayscale-0"
              />
              <motion.div
                className="absolute bottom-4 left-4 z-20 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <MapPin className="size-5 text-primary" />
                <span className="text-white font-medium text-sm">
                  Based in Da Nang, Vietnam
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
