"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Github, Code, Wrench, Award } from "lucide-react";

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

const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "TailwindCSS",
  "Zustand",
  "Tanstack Query",
  "Radix UI / Shadcn",
];

const tools = [
  "Git",
  "GitHub Actions",
  "Vercel",
  "Docker",
  "Supabase",
  "PostgreSQL",
  "Figma",
  "Framer Motion",
];

const experiences = [
  {
    title: "Freelance Frontend Developer",
    year: "2025 — Present",
    company: "Self-employed",
    desc: "Building modern web apps using Next.js 15 App Router with server components. Developing reusable UI components with Radix UI/Shadcn, implementing state management with Zustand and Tanstack Query, and creating real-time features with Socket.io.",
  },
  {
    title: "Frontend Developer",
    year: "2022 — 2025",
    company: "EnjoyWorks (Kollabo SaaS)",
    desc: "Developed Kollabo platform for managing seasonal workers and workforce data. Integrated 50+ RESTful API endpoints for 1,000+ workers. Collaborated on versions 2.0 and 2.5 releases, meeting all deadlines.",
  },
  {
    title: "Team Lead - Frontend Developer",
    year: "2022",
    company: "Smart Kiosk Management",
    desc: "Led a team of 3 members to develop a civil affairs management software for Jinan province, Korea. Designed system architecture, conducted code reviews, and coordinated cross-functional collaboration.",
  },
  {
    title: "Frontend Intern",
    year: "2020",
    company: "Agliti.io",
    desc: "Training on Git, HTML, CSS, SASS, JavaScript, TypeScript, and NodeJS. Used tools like VSCode, Postman, and Figma for development workflow.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center py-10 px-4 md:px-10 lg:px-20 w-full">
      <motion.div
        className="w-full max-w-[1200px] flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary text-sm font-bold uppercase tracking-wider">
                About Me
              </span>
            </div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]"
              variants={itemVariants}
            >
              Passionate Frontend{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Developer
              </span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-text-muted dark:text-text-muted-dark leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Frontend Developer with 5+ years of experience building scalable
              web applications using React, Next.js, and TypeScript. Specialized
              in enterprise platforms with complex data management. Passionate
              about clean code, performance optimization, and modern UI/UX
              practices.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              variants={itemVariants}
            >
              <motion.button
                className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-[#111618] text-base font-bold"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="size-5" />
                <span>Download Resume</span>
              </motion.button>

              <div className="flex items-center gap-3 px-4">
                <motion.a
                  className="flex items-center justify-center size-10 rounded-full bg-slate-200 dark:bg-surface-dark text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                  href="https://github.com/hungtranpro2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="size-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 group">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-border-dark">
                <Image
                  src="/avatar.jpg"
                  alt="Developer Portrait"
                  fill
                  className="object-contain  grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-background-dark border border-border-dark p-4 rounded-lg shadow-xl flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
                  <Award className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-lg font-bold text-white">5+ Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Technical Arsenal */}
        <motion.section className="flex flex-col gap-8" variants={itemVariants}>
          <div className="flex flex-col gap-2">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-4">
              Technical Arsenal
            </h2>
            <p className="text-text-muted dark:text-text-muted-dark pl-5 text-sm">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Stack */}
            <motion.div
              className="bg-card-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-border-light dark:border-border-dark"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Code className="size-5 text-primary" />
                Core Stack
              </h3>
              <div className="flex gap-3 flex-wrap">
                {coreStack.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-100 dark:bg-border-dark px-4 hover:bg-primary/20 dark:hover:bg-primary/20 transition-colors border border-transparent hover:border-primary/50 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-sm font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="bg-card-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-border-light dark:border-border-dark"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Wrench className="size-5 text-primary" />
                Tools &amp; Infrastructure
              </h3>
              <div className="flex gap-3 flex-wrap">
                {tools.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-slate-100 dark:bg-border-dark px-4 hover:bg-primary/20 dark:hover:bg-primary/20 transition-colors border border-transparent hover:border-primary/50 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-sm font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          className="flex flex-col gap-8 pb-10"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-4">
              Experience Journey
            </h2>
            <p className="text-text-muted dark:text-text-muted-dark pl-5 text-sm">
              A timeline of my professional career.
            </p>
          </div>

          <div className="relative flex flex-col gap-6 ml-4 pl-8 border-l border-border-light dark:border-border-dark">
            {experiences.map((job, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <motion.div
                  className={`absolute -left-[41px] top-1.5 size-5 rounded-full border-4 border-white dark:border-background-dark ${
                    idx === 0
                      ? "bg-primary"
                      : "bg-border-dark group-hover:bg-primary"
                  } transition-colors`}
                  whileHover={{ scale: 1.2 }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 items-stretch">
                  <div className="flex flex-col">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {job.title}
                    </h4>
                    <span className="text-primary font-medium text-sm">
                      {job.year}
                    </span>
                    <span className="text-text-muted dark:text-text-muted-dark text-sm mt-1">
                      {job.company}
                    </span>
                  </div>
                  <motion.div
                    className="bg-card-light dark:bg-surface-dark rounded-lg p-5 border border-border-light dark:border-border-dark shadow-sm min-h-[100px] flex items-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                      {job.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
