"use client";

import {
  CalendarDays,
  FileText,
  Pill,
  FlaskConical,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { dashboardStats, type StatIcon, type StatTone } from "@/lib/mock/patient";
import { useComingSoon } from "./ComingSoon";
import { cn } from "@/lib/cn";

const ICONS: Record<StatIcon, LucideIcon> = {
  calendar: CalendarDays,
  file: FileText,
  pill: Pill,
  flask: FlaskConical,
};

const TONES: Record<StatTone, { bg: string; fg: string }> = {
  teal: { bg: "bg-[#E6FAF7]", fg: "text-[#0A9189]" },
  blue: { bg: "bg-[#EFF4FF]", fg: "text-[#3B6EF6]" },
  amber: { bg: "bg-[#FFF6E5]", fg: "text-[#E09A1B]" },
  violet: { bg: "bg-[#F3EEFF]", fg: "text-[#8B5CF6]" },
};

export function DashboardStats() {
  const comingSoon = useComingSoon();

  return (
    <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">
      {dashboardStats.map((stat) => {
        const Icon = ICONS[stat.icon];
        const tone = TONES[stat.tone];
        return (
          <button
            key={stat.key}
            type="button"
            onClick={() => comingSoon(stat.label)}
            className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-4 text-left transition hover:border-primary/30 hover:shadow-soft"
          >
            <span
              className={cn(
                "grid h-11 w-11 shrink-0 place-items-center rounded-xl",
                tone.bg,
                tone.fg,
              )}
            >
              <Icon size={20} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[20px] font-bold leading-none text-[#0F2D4A]">
                {stat.value}
              </span>
              <span className="mt-1 block text-[11px] leading-tight text-[#5B6B7C]">
                {stat.label}
              </span>
            </span>
            <ChevronRight
              size={15}
              className="shrink-0 text-ink-muted transition group-hover:translate-x-0.5"
            />
          </button>
        );
      })}
    </section>
  );
}
