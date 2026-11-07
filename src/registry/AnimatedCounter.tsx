import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Plus } from "lucide-react";

export default function AnimatedCounter() {
  const count = useMotionValue(1280);
  const spring = useSpring(count, { stiffness: 80, damping: 20 });
  const rounded = useTransform(spring, (value) => Math.round(value).toLocaleString());

  return (
    <div className="w-60 rounded-lg border border-white/10 bg-[#171b16] p-4">
      <div className="flex items-center justify-between text-xs text-[#949e8d]"><span>Community members</span><span className="text-[#baff39]">+12.4%</span></div>
      <div className="mt-3 flex items-end justify-between"><motion.span className="text-3xl font-semibold tracking-tight text-white">{rounded}</motion.span><button type="button" onClick={() => count.set(count.get() + 25)} aria-label="Add 25 community members" className="flex h-8 w-8 items-center justify-center rounded-md bg-[#baff39]/10 text-[#baff39] outline-none hover:bg-[#baff39]/20 focus-visible:ring-2 focus-visible:ring-[#baff39]"><Plus size={16} /></button></div>
    </div>
  );
}