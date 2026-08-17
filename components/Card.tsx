"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

type CardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  as?: "div" | "a";
};

/**
 * Minimal dark card used across the page — near-black surface, hairline
 * border that brightens on hover, and a faint lift + glow. Restrained on
 * purpose: the loafy.dev reference leans on typography and whitespace,
 * not heavy chrome.
 */
export default function Card({ children, className = "", href }: CardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] ${className}`}
    >
      {/* faint hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_40px_rgba(129,140,248,0.15)] transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

export function CardLinkIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 group-hover:border-indigo-400/40 group-hover:text-indigo-300">
      <FiArrowUpRight size={14} />
    </span>
  );
}
