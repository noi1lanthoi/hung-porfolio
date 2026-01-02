"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Zap,
  Accessibility,
  Code2,
  CheckCircle,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const techStack = [
  { icon: Code2, name: "React" },
  { icon: Code2, name: "Next.js" },
  { icon: Code2, name: "TypeScript" },
  { icon: Code2, name: "TailwindCSS" },
  { icon: Code2, name: "Zustand" },
];

const features = [
  {
    icon: Monitor,
    title: "Responsive Design",
    description:
      "Creating seamless experiences across all devices, ensuring your content looks great on mobile, tablet, and desktop.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Optimizing for speed and efficiency. Fast load times and smooth interactions are non-negotiable.",
    color: "purple",
  },
  {
    icon: Accessibility,
    title: "Accessible UI",
    description:
      "Building inclusive digital products that follow WCAG standards, usable by everyone regardless of ability.",
    color: "green",
  },
];

export default function HomePage() {
  return (
    <div className="grow flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <motion.div
        className="w-full max-w-7xl px-4 md:px-8 py-12 md:py-20 lg:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1"
            variants={containerVariants}
          >
            <div className="flex flex-col gap-4 text-left">
              {/* Available Badge */}
              <motion.div
                className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                variants={itemVariants}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for hire
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
                variants={itemVariants}
              >
                Hi, I&apos;m Minh Hưng. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                  Frontend Developer
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Frontend Developer with 5+ years of experience building scalable
                web applications using React, Next.js, and TypeScript.
                Passionate about clean code, performance optimization, and
                modern UI/UX.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              variants={itemVariants}
            >
              <Link href="/projects">
                <motion.button
                  className="group flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white dark:text-[#111618] h-12 px-8 text-base font-bold transition-all shadow-[0_0_20px_rgba(19,182,236,0.3)] hover:shadow-[0_0_25px_rgba(19,182,236,0.5)]"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View My Work</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="flex items-center justify-center rounded-lg h-12 px-8 border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-white bg-transparent hover:bg-primary/5 transition-all text-base font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Contact Me</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="flex flex-col gap-3 pt-4"
              variants={itemVariants}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                Tech Stack
              </p>
              <div className="flex gap-6 text-slate-400 dark:text-slate-500">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default"
                    whileHover={{ y: -2 }}
                  >
                    <tech.icon className="size-5" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Anchor - Code Editor Preview */}
          <motion.div
            className="relative order-1 lg:order-2 w-full aspect-square lg:aspect-auto lg:h-full min-h-[400px] flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px] opacity-50"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface-dark border border-slate-800 shadow-2xl group">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#111618] border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500"></div>
                  <div className="size-3 rounded-full bg-yellow-500"></div>
                  <div className="size-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-[10px] font-mono text-slate-500 bg-[#0c1214] px-3 py-1 rounded-md border border-slate-800/50">
                  minhhung.portfolio
                </div>
              </div>

              {/* Code Content */}
              <div className="w-full h-full bg-gradient-to-br from-surface-dark to-background-dark p-6">
                <pre className="text-xs md:text-sm font-mono text-slate-400 leading-relaxed overflow-hidden">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-white">=</span> {"{"}
                    {"\n  "}
                    <span className="text-green-400">name</span>:{" "}
                    <span className="text-amber-300">
                      &quot;Trần Minh Hưng&quot;
                    </span>
                    ,{"\n  "}
                    <span className="text-green-400">experience</span>:{" "}
                    <span className="text-amber-300">&quot;5+ years&quot;</span>
                    ,{"\n  "}
                    <span className="text-green-400">skills</span>: [
                    <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-amber-300">
                      &quot;TypeScript&quot;
                    </span>
                    ],
                    {"\n  "}
                    <span className="text-green-400">location</span>:{" "}
                    <span className="text-amber-300">
                      &quot;Da Nang, Vietnam&quot;
                    </span>
                    ,{"\n  "}
                    <span className="text-green-400">available</span>:{" "}
                    <span className="text-blue-400">true</span>
                    {"\n"}
                    {"}"};
                  </code>
                </pre>
              </div>

              {/* Floating Card */}
              <motion.div
                className="absolute bottom-6 left-4 sm:left-6 right-6 sm:right-auto bg-surface-dark/90 backdrop-blur-sm p-4 rounded-xl border border-slate-700 shadow-lg max-w-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex gap-3 mb-2">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Latest Commit</div>
                    <div className="text-sm font-bold text-white">
                      feat(portfolio): update content
                    </div>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 1, duration: 1.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="w-full bg-surface-dark border-y border-slate-800 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex flex-col gap-3 p-6 rounded-xl bg-background-dark hover:bg-[#152329] transition-colors border border-slate-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className={`size-10 rounded-lg flex items-center justify-center mb-2 ${
                    feature.color === "blue"
                      ? "bg-blue-500/10 text-blue-400"
                      : feature.color === "purple"
                      ? "bg-purple-500/10 text-purple-400"
                      : "bg-green-500/10 text-green-400"
                  }`}
                >
                  <feature.icon className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
