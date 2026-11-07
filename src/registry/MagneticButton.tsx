import { useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function MagneticButton() {
  const [pressed, setPressed] = useState(false);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 18 });
  const springY = useSpring(y, { stiffness: 300, damping: 18 });

  return (
    <motion.button
      type="button"
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.2);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.2);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      onClick={() => setPressed((value) => !value)}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className="group inline-flex min-h-12 items-center gap-5 rounded-md bg-[#baff39] px-5 text-sm font-semibold text-[#0b1004] shadow-[0_0_32px_rgba(164,255,42,0.24)] outline-none transition-colors hover:bg-[#d1ff80] focus-visible:ring-2 focus-visible:ring-white"
    >
      {pressed ? "Nice click!" : "Explore the future"}
      <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.button>
  );
}