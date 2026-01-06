"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const ScrollReveal = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // premium easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
