"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 50, damping: 25, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 50, damping: 25, mass: 0.6 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      x.set(e.clientX - 400);
      y.set(e.clientY - 400);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[800px] w-[800px] rounded-full blur-[120px]"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)",
      }}
    />
  );
}
