"use client";

import Link from "next/link";
import { useLiveClock } from "./LiveClock";

const LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const { time } = useLiveClock("America/Los_Angeles");

  return (
    <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3 font-mono text-xs text-gray-400">
      <a href="/" className="flex items-center gap-2 pl-6">
        Loafy.dev
      </a>
      <div className="flex items-center gap-6 pr-6">
        {LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-gray-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
