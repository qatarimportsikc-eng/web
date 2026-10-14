"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** "up" | "left" | "right" | "fade" */
  direction?: "up" | "left" | "right" | "fade";
}

const offsets: Record<NonNullable<RevealProps["direction"]>, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
  fade: { x: 0, y: 0 },
};

/** Scroll-triggered reveal animation that respects prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const reduce = useReducedMotion();
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
