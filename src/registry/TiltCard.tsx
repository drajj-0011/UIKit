import { useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function TiltCard() {
  const [saved, setSaved] = useState(false);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(y, { stiffness: 180, damping: 20 });

  return (
    <div style={{ perspective: 700 }}>
      <motion.button
        type="button"
        onPointerMove={(event) => {
          if (reduceMotion) return;
          const rect = event.currentTarget.getBoundingClientRect();
          x.set(-((event.clientY - rect.top) / rect.height - 0.5) * 16);
          y.set(((event.clientX - rect.left) / rect.width - 0.5) * 16);
        }}
        onPointerLeave={() => { x.set(0); y.set(0); }}
        onClick={() => setSaved((value) => !value)}
        style={{ rotateX, rotateY }}
        className="relative h-40 w-60 overflow-hidden rounded-xl border border-white/15 bg-[#181e14] p-5 text-left shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#baff39]"
      >
        <span aria-hidden="true" className="absolute -right-5 -top-10 h-36 w-36 rounded-full border-[18px] border-[#baff39]/60 shadow-[0_0_50px_rgba(186,255,57,.2)]" />
        <span aria-hidden="true" className="absolute -right-1 -top-5 h-28 w-28 rounded-full border border-white/30" />
        <span className="relative flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#baff39]">STUDIO / 01</span>
        <span className="relative mt-12 flex items-end justify-between text-sm font-semibold text-white">
          {saved ? "Added to collection" : "A new perspective"}<ArrowUpRight size={16} />
        </span>
      </motion.button>
    </div>
  );
}