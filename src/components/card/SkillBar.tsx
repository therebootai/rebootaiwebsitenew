"use client";
import { useEffect, useState } from "react";

interface SkillBarProps {
  label: string;
  value: number; // percentage
  play: boolean;
}

function useCountUp(target: number, play: boolean, duration = 1000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!play) return;
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    let raf = 0;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setValue(Number((p * target).toFixed(1)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, play, duration]);

  return value;
}

export default function SkillBar({ label, value, play }: SkillBarProps) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const shownValue = useCountUp(value, play && !prefersReduced);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs xl:text-sm">
        <span className="text-custom-black font-medium">{label}</span>
        <span className="text-custom-black font-semibold tabular-nums">
          {shownValue}%
        </span>
      </div>
      <div className="relative h-2 rounded-full">
        {/* dotted line */}
        <div className="absolute inset-0 pointer-events-none" />
        {/* background */}
        <div className="absolute inset-0 rounded-full bg-sky-200/30" />
        {/* animated bar */}
        <div
          className="relative h-2 rounded-full bg-gradient-to-r from-custom-mediumblue to-custom-lightblue shadow-[inset_0_0_1px_rgba(255,255,255,0.6)]"
          style={{
            width: play ? `${value}%` : "0%",
            transition: prefersReduced ? undefined : "width 1200ms ease-out",
          }}
        />
      </div>
    </div>
  );
}
