import { useId, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";

const tabs = ["Overview", "Activity", "Settings"];

export default function AnimatedTabs() {
  const [active, setActive] = useState(0);
  const id = useId();

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (active + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setActive(next);
    (event.currentTarget.children[next] as HTMLButtonElement).focus();
  }

  return (
    <div className="w-64 max-w-full">
      <div role="tablist" aria-label="Project sections" onKeyDown={onKeyDown} className="flex rounded-lg border border-white/10 bg-[#171b16] p-1">
        {tabs.map((tab, index) => (
          <button key={tab} type="button" role="tab" aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} className="relative flex-1 rounded-md px-2 py-2 text-[11px] font-medium outline-none focus-visible:ring-2 focus-visible:ring-[#baff39]">
            {active === index && <motion.span layoutId={`${id}-active`} className="absolute inset-0 rounded-md bg-[#baff39]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
            <span className={`relative ${active === index ? "text-[#11170b]" : "text-[#a0a99a]"}`}>{tab}</span>
          </button>
        ))}
      </div>
      <p role="tabpanel" className="mt-4 text-center text-xs text-[#a0a99a]">{["Your workspace at a glance.", "See what is happening now.", "Make it work your way."][active]}</p>
    </div>
  );
}