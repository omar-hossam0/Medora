"use client";

import {
  ChevronRight,
  ChevronDown,
  Heart,
  Weight,
  Droplets,
  Activity,
  CalendarPlus,
  Pill,
  FlaskConical,
  FolderOpen,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  recentAppointments,
  vitals,
  quickActions,
  type VitalTone,
  type QuickIcon,
} from "@/lib/mock/patient";
import { Avatar, StatusBadge, Sparkline } from "./ui";
import { useComingSoon } from "./ComingSoon";
import { cn } from "@/lib/cn";

/* ---------------- Recent Appointments ---------------- */
export function RecentAppointmentsCard() {
  const comingSoon = useComingSoon();
  return (
    <div className="rounded-2xl border border-line bg-white p-5 lg:col-span-12 xl:col-span-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[13.5px] font-semibold text-[#0F2D4A]">Recent Appointments</h3>
        <button
          type="button"
          onClick={() => comingSoon("All appointments")}
          className="text-[11.5px] font-semibold text-[#0A9189] hover:underline"
        >
          View All
        </button>
      </div>
      <ul className="mt-2 divide-y divide-line">
        {recentAppointments.map((a) => (
          <li key={a.id} className="flex items-center gap-3 py-3">
            <Avatar name={a.doctor} size={38} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold text-[#0F2D4A]">{a.doctor}</p>
              <p className="text-[10.5px] text-ink-muted">{a.specialty}</p>
            </div>
            <div className="hidden text-right sm:block">
              <p className="text-[11px] text-[#5B6B7C]">{a.date}</p>
              <p className="text-[10.5px] text-ink-muted">{a.time}</p>
            </div>
            <StatusBadge status={a.status} />
            <ChevronRight size={14} className="shrink-0 text-ink-muted" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Health Summary ---------------- */
const VITAL_ICONS: Record<string, LucideIcon> = {
  heart: Heart,
  weight: Weight,
  droplet: Droplets,
  activity: Activity,
};
const VITAL_TONES: Record<VitalTone, { bg: string; fg: string; line: string }> = {
  rose: { bg: "bg-[#FDECEF]", fg: "text-[#E5484D]", line: "#E5484D" },
  blue: { bg: "bg-[#EFF4FF]", fg: "text-[#3B6EF6]", line: "#3B6EF6" },
  teal: { bg: "bg-[#E6FAF7]", fg: "text-[#0A9189]", line: "#0A9189" },
  violet: { bg: "bg-[#F3EEFF]", fg: "text-[#8B5CF6]", line: "#8B5CF6" },
};

export function HealthSummaryCard() {
  const comingSoon = useComingSoon();
  return (
    <div className="rounded-2xl border border-line bg-white p-5 lg:col-span-6 xl:col-span-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[13.5px] font-semibold text-[#0F2D4A]">Your Health Summary</h3>
        <button
          type="button"
          onClick={() => comingSoon("Health range filter")}
          className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-[10.5px] text-[#5B6B7C] transition hover:bg-surface-subtle"
        >
          Last 6 Months <ChevronDown size={12} />
        </button>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {vitals.map((v) => {
          const Icon = VITAL_ICONS[v.icon];
          const tone = VITAL_TONES[v.tone];
          return (
            <div key={v.key} className="rounded-xl border border-line/70 p-3">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full",
                    tone.bg,
                    tone.fg,
                  )}
                >
                  <Icon size={15} />
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-bold leading-none text-[#0F2D4A]">
                    {v.value}
                    {v.unit && (
                      <span className="ml-0.5 text-[10px] font-medium text-ink-muted">
                        {v.unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-[10px] text-[#5B6B7C]">{v.label}</p>
                </div>
              </div>
              <div className="mt-2">
                <Sparkline points={v.trend} color={tone.line} width={130} height={24} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Quick Actions ---------------- */
const QUICK_ICONS: Record<QuickIcon, LucideIcon> = {
  "calendar-plus": CalendarPlus,
  pill: Pill,
  flask: FlaskConical,
  folder: FolderOpen,
};

export function QuickActionsCard() {
  const comingSoon = useComingSoon();
  return (
    <div className="rounded-2xl border border-line bg-white p-5 lg:col-span-6 xl:col-span-3">
      <h3 className="text-[13.5px] font-semibold text-[#0F2D4A]">Quick Actions</h3>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {quickActions.map((q) => {
          const Icon = QUICK_ICONS[q.icon];
          return (
            <button
              key={q.key}
              type="button"
              onClick={() => comingSoon(q.label)}
              className="group flex items-center gap-1.5 rounded-xl border border-line/70 p-2 text-left transition hover:border-primary/30 hover:bg-surface-subtle"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#E6FAF7] text-[#0A9189]">
                <Icon size={14} />
              </span>
              <span className="min-w-0 flex-1 text-[10px] font-medium leading-tight text-[#0F2D4A]">
                {q.label}
              </span>
              <ChevronRight size={11} className="shrink-0 text-ink-muted" />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => comingSoon("Find a Doctor")}
        className="mt-2 flex w-full items-center gap-2.5 rounded-xl bg-[#E9FBF8] p-3 text-left transition hover:bg-[#DDF7F2]"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#0A9189]">
          <Users size={16} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11.5px] font-semibold text-[#0F2D4A]">Find a Doctor</span>
          <span className="mt-0.5 block text-[10px] leading-snug text-[#5B6B7C]">
            Explore our specialists and find the right doctor for your needs.
          </span>
        </span>
        <ChevronRight size={14} className="shrink-0 text-[#5B6B7C]" />
      </button>
    </div>
  );
}
