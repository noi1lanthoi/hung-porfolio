"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  ExternalLink,
  BarChart3,
  Wallet,
  Globe,
  Map,
} from "lucide-react";

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

const projects = [
  {
    title: "Kollabo Platform",
    icon: BarChart3,
    desc: "A Kollabo SaaS platform for managing seasonal workers and workforce data. Integrated 50+ RESTful API endpoints, handling data synchronization for 1,000+ workers.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP2BpbL7tA0lge709-3eGVLcgls87LyqgXM-rpjVi2H_j9CqbSNQmkyv_ZfoSjJH81ykzYzyELC5TePNx5lVDSWFpl72QH9froSvwJJsEwJOGGUaEnQFzXtjta8EikOJmYRtVwHCRs_sZp1Han-yo2-zhp2PXKNeofBAWmkJ85WF5cdchkT1Thd9wDxwMuT-kajuVi3yCHl0xW0ku61U9YvJzziR2hFaW3WmrDOX8fLK1wwqwCfvRnPob_qJ1X0UKngE8bhi90jBM",
    tags: ["React", "Next.js", "Redux-Saga", "Tailwind CSS", "Ant Design"],
  },
  {
    title: "Smart Kiosk Management",
    icon: Globe,
    desc: "A software system managing civil affairs in Jinan province, Korea. Led a team of 3 members, designed system architecture and coordinated cross-functional collaboration.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGYHl5wmnqw41x8k8xw3utZf1EHLPfBbImHjuWjC3XCON-isXf5mOdYaq1NckInrsSUIw9kKriWX46XKoAhVVA7sBLi1BinypW-FbjH6BoNBVma0rB-QUDvqotks-lWMQzaCZuQ9Mm1KHkZea4ILD-j84UZ2vl0N-rMbs49rtDfKuohLoPVwUIbuXVjmXuOaHoXOskukAiOOqXC3isfbbHuZR8JW5pvGTEzRJdjie9irU3gYdcHygVN1ldmBBgnFuKeUJeqGPV1iY",
    tags: ["React JS", "Redux", "Saga", "Bootstrap", "WebRTC"],
  },
  {
    title: "Solar Monitoring Dashboard",
    icon: BarChart3,
    desc: "Real-time monitoring dashboard for solar energy systems with data visualization, performance analytics, and alert notifications.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR2qdKdjiiVLH_aPm-j5ipoOvPO-DP-0YwRlmhVnhIIcHN0Xb-wxTHBj_SDZs-MBWlGjTHm1CMzo8Y4R_8VjJSDOZWT2h-uH7OdsHJt-edtI9vA-vsOiKytzch189DA_tv_rK-xkNbzTf2MzNYP753g6A36URniU5U2OFZ1aMsl6n-h0JerYXDyx2cYLhcu-B_yw1zP1ljaCn70YYUvw0h2Uasf5pDcOFXP4JhAwwEpfld-7KSOEEpG76Gi-mNPzUVR1U6Ixs2bk0",
    tags: ["React", "Chart.js", "REST API"],
  },
  {
    title: "K-Art Market",
    icon: Wallet,
    desc: "E-commerce platform for art products with shopping cart, payment integration, and order management system.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNcwAetdhvQNmxvRo9OAAwt5e6nT7vDz5lXQ0Cd-x7qOeaYjkki0XcsUtESVIHCF5Px7CwrCnaThh8jpsy632drO4SAtncQhq2F5Ypb7tPj0PWzP0ZfgRlENKXBX7OJBi1cF1v6dOq1gYZBBH7XpDsRZCvxHZIvjnQbuM3EFRbPOGu9qMf9aGfJyLh7iFlDIy7eBEeO6uvNduKsDhIx6nkJOQgb7Z3fs64axylvKcfCJXaRbiJ1F4WiIWkNadbb0nLDYdzxM56_jQ",
    tags: ["React", "Redux", "E-commerce"],
  },
  {
    title: "Delivery Goods Dealin",
    icon: Map,
    desc: "Delivery platform with real-time tracking, route optimization, and order management for logistics operations.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK-9Z1BDKPn3NShmbMUx9ryTsi4yJr6iedzjkb7Pb-V6Wg4UTAorXppEvjNeWbK5-nGSKQidbJPEmRmrjcsmtnZoJmuVcXrMNg7DNxw1uqF_o6LPphA41OTI5DOqYtR0O11GU9mbjDYadF7aSDIMvSr71c_oGS4PcwXK3EZubed9ILL6CkNJlz-ZNLWomRTa2gJCq6DtxSUwPvtZcefgK-Dp9mknQ0DeL3kcoag5pFo7Mz7ucZt75MvKnlipOzk2xPnUHp7dzsHzk",
    tags: ["React", "Maps API", "Real-time"],
  },
  {
    title: "Modern Portfolio",
    icon: Code,
    desc: "This portfolio website built with Next.js 15 App Router, featuring server components, Framer Motion animations, and responsive design.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-DSFcfSzuQH3vH3eQW_3RkBTfi3whQ_JyzQGqZITsbiAtQCkpc8zDqwjqL8hjcQQ9dB8IHW0BiSmnSwVIEF8AmaN-S7RGM6G37EFDrsDztVFxUq5zMe0c5mca-QJvnAdyVAX4KzqdqFOcyXIX6ju4vjnflpNvDekpacicAuqi1S6Y3s4M_fjkdztIOtlvswSUwXerPb-gbTPw0uOwHmfUJ3dtjABvk5ub9iDMkQl04TPmQPbMEZ2UKbxYkygY2lrLEp26dqNEIDw",
    tags: ["Next.js 15", "TypeScript", "Framer Motion", "TailwindCSS"],
  },
];

const filterButtons = ["All", "React", "Next.js", "Redux", "TypeScript"];

export default function ProjectsPage() {
  return (
    <main className="flex-grow w-full">
      {/* Hero Section */}
      <motion.section
        className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col gap-6 text-center max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Featured <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg text-text-muted dark:text-text-muted-dark leading-relaxed">
            A selection of builds that solve real problems, demonstrating clean
            code and user-centric design. From full-stack applications to
            responsive landing pages.
          </p>
        </motion.div>
      </motion.section>

      {/* Filter Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={itemVariants}
        >
          {filterButtons.map((btn, index) => (
            <motion.button
              key={btn}
              className={`group relative flex h-9 items-center justify-center rounded-lg px-4 transition-all ${
                index === 0
                  ? "bg-primary"
                  : "bg-slate-200 dark:bg-border-dark hover:bg-primary/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`text-sm font-medium ${
                  index === 0
                    ? "text-[#111618] font-bold"
                    : "text-slate-900 dark:text-white group-hover:text-primary"
                }`}
              >
                {btn}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.article
                key={idx}
                className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-black transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="View Code"
                    >
                      <Code className="size-5" />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-black transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Live Demo"
                    >
                      <ExternalLink className="size-5" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5 gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {proj.title}
                    </h3>
                    <Icon className="size-5 text-text-muted dark:text-text-muted-dark" />
                  </div>
                  <p className="text-sm text-text-muted dark:text-text-muted-dark line-clamp-2">
                    {proj.desc}
                  </p>
                  <div className="mt-auto pt-3 flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-border-dark text-slate-900 dark:text-white border border-border-light dark:border-transparent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-slate-200 dark:bg-card-dark py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Like what you see?
          </motion.h2>
          <motion.p
            className="text-text-muted dark:text-text-muted-dark mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I&apos;m currently available for freelance work and full-time
            opportunities.
          </motion.p>
          <Link href="/contact">
            <motion.button
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-[#111618] shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let&apos;s Work Together
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
