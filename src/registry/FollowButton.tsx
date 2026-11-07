import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

export default function FollowButton() {
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex w-64 items-center gap-3 rounded-lg border border-white/10 bg-[#171b16] p-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#baff39] text-sm font-bold text-[#11170b]">A</span>
      <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-white">Alex Morgan</span><span className="block text-xs text-[#929b8d]">Creative developer</span></span>
      <button type="button" aria-pressed={following} onClick={() => setFollowing((value) => !value)} className={`flex h-8 items-center gap-1 overflow-hidden rounded-md px-2 text-xs font-semibold outline-none focus-visible:ring-2 focus-visible:ring-white ${following ? "bg-white/10 text-white" : "bg-[#baff39] text-[#11170b]"}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={String(following)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center gap-1">{following ? <Check size={13} /> : <Plus size={13} />}{following ? "Following" : "Follow"}</motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}