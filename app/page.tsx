"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  SiDiscord,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiNodedotjs,
} from "react-icons/si";
import Card, { CardLinkIcon } from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import { NowBuildingWidget, StatusWidget, ClockWidget } from "@/components/Widgets";

const PROJECTS = [
  {
    title: "EcoChain",
    description:
      "A blockchain-based supply chain tracker giving brands and consumers real-time provenance data, from raw material to shelf.",
    href: "#",
  },
  {
    title: "AI-Draw",
    description:
      "A real-time collaborative whiteboard with AI generation — sketch an idea and watch a diffusion model turn it into art, live, with your team.",
    href: "#",
  },
];

const NOTES = [
  {
    title: "Why I Went All-In on Server Components",
    description:
      "How moving data fetching to the edge cut our time-to-interactive in half, and what broke along the way.",
    href: "/blog/why-i-went-all-in-on-server-components",
  },
  {
    title: "Designing for the Hover State",
    description:
      "Most of a UI's personality lives in the states nobody designs first — hover, focus, and the 200ms in between.",
    href: "/blog/designing-for-the-hover-state",
  },
];

const SKILLS = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Node.js", icon: SiNodedotjs },
];

const WIP = [
  {
    title: "HeightPanel",
    description:
      "Redesigning HeightNodes' Game Panel from the ground up.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] px-6 py-6 sm:px-10 lg:px-24">
      <CursorGlow />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col gap-16"
      >
        {/* NAVBAR */}
        <motion.div variants={itemVariants}>
          <Navbar />
        </motion.div>

        {/* HERO */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-8"
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-xl ring-1 ring-white/10">
                <img
                  src="https://cdn.discordapp.com/avatars/926270204193964062/cfd25565c21f184b9a42f01701d013a2.webp?size=512"
                  alt="Alex Rivera"
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="items-center gap-1.5 text-sm font-semibold text-gray-100">
                  Henry Webber{" "}<br/>
                  <span className="font-normal text-gray-500">@loafy.dev</span>
                </p>
              </div>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-50 sm:text-5xl">
              I turn complex ideas into
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                websites that feel obvious.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              I create unique websites that feel modern to today's standards. No more outdated UIs, no more improper styles. I make websites that fit your brand, and are clean to the eye.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/loafydevs"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25"
              >
                <FaGithub size={13} /> See Github
              </a>
              <a
                href="https://discord.com/users/926270204193964062"
                className="flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs font-medium text-indigo-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:shadow-[0_0_20px_rgba(129,140,248,0.25)]"
              >
                <SiDiscord size={13} /> Connect on Discord
              </a>
            </div>
          </div>
        </motion.div>

        {/* ABOUT + STACK GRID */}
        <motion.div
          variants={itemVariants}
          id="stack"
          className="grid grid-cols-1 gap-10"
        >
          <div>
          <SectionHeader label="Tools I Work With" />
            <div className="mt-5 grid grid-cols-3 gap-3">
              {SKILLS.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
                >
                  <Icon size={18} className="text-gray-300" />
                  <span className="text-[11px] text-gray-500">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          variants={itemVariants}
          id="projects"
          className="flex flex-col gap-5"
        >
          <SectionHeader label="Projects" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <Card key={project.title} href={project.href}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-bold text-gray-100">
                    {project.title}
                  </h3>
                  <CardLinkIcon />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* NOTES */}
        <motion.div variants={itemVariants} className="flex flex-col gap-5">
          <SectionHeader label="Notes" />
          <div className="grid grid-cols-1 gap-4">
            {NOTES.map((note) => (
              <Card key={note.title} href={note.href}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-bold text-gray-100">
                    {note.title}
                  </h3>
                  <CardLinkIcon />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {note.description}
                </p>
              </Card>
            ))}
          </div>
          <Link
            href="/blog"
            className="self-start text-xs text-gray-500 transition-colors hover:text-indigo-300"
          >
            View all posts →
          </Link>
        </motion.div>

        {/* WIP */}
        <motion.div variants={itemVariants} className="flex flex-col gap-5">
          <SectionHeader label="WIP / Upcoming" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {WIP.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-indigo-400/60 pl-4"
              >
                <p className="font-mono text-sm font-semibold text-indigo-300">
                  // {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FOOTER */}
        <motion.footer
          variants={itemVariants}
          className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 pb-10 text-xs text-gray-600 sm:flex-row sm:items-center"
        >
          <span>© {new Date().getFullYear()} Alex Rivera &middot; arivera</span>
          <span>Built with ♥ and Next.js</span>
        </motion.footer>
      </motion.div>
    </main>
  );
}
