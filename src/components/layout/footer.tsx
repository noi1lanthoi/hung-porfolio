"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-border-dark bg-background-light dark:bg-background-dark py-12 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-900 dark:text-white"
          >
            <Terminal className="size-5 text-primary" />
            <span className="font-bold text-lg">Minh Hưng</span>
          </Link>
          <p className="text-slate-500 text-sm">
            © 2024 Trần Minh Hưng. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center size-10 rounded-full bg-slate-200 dark:bg-surface-dark text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="size-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
