"use client";

import Link from "next/link";
import {
  House,
  CalendarDays,
  FileText,
  Pill,
  FlaskConical,
  Users,
  MessageSquare,
  CreditCard,
  User,
  Settings,
  Headset,
  ChevronRight,
  X,
  type LucideIcon,
} from "lucide-react";
import { MedoraLogo } from "@/components/ui/MedoraLogo";
import { useComingSoon } from "./ComingSoon";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  icon: LucideIcon;
  href?: string;
  active?: boolean;
  badge?: number;
};

const NAV: NavItem[] = [
  { label: "Home", icon: House, href: "/patient/dashboard", active: true },
  { label: "Appointments", icon: CalendarDays },
  { label: "Medical Records", icon: FileText },
  { label: "Prescriptions", icon: Pill },
  { label: "Lab Results", icon: FlaskConical },
  { label: "My Doctors", icon: Users },
  { label: "Messages", icon: MessageSquare, badge: 2 },
  { label: "Billing & Payments", icon: CreditCard },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

export function PatientSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] flex-col border-r border-line bg-white lg:flex">
        <SidebarBody onNavigate={onClose} />
      </aside>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={onClose}
          className={cn(
            "absolute inset-0 bg-navy/40 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 flex w-[280px] flex-col bg-white shadow-pop transition-transform duration-200",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="absolute right-3 top-4 z-10 grid h-8 w-8 place-items-center rounded-full text-ink-secondary hover:bg-surface-subtle"
          >
            <X size={18} />
          </button>
          <SidebarBody onNavigate={onClose} />
        </div>
      </div>
    </>
  );
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  const comingSoon = useComingSoon();

  return (
    <>
      <div className="px-5 pb-5 pt-6">
        <Link href="/patient/dashboard" aria-label="Medora Patient Dashboard" onClick={onNavigate}>
          <MedoraLogo variant="primary" height={26} />
        </Link>
      </div>

      <nav aria-label="Patient navigation" className="flex-1 overflow-y-auto px-3 pb-4">
        <ul className="space-y-0.5">
          {NAV.map((item) => {
            const Icon = item.icon;
            const base = cn(
              "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13.5px] transition-colors",
              item.active
                ? "bg-[#E6FAF7] font-semibold text-[#0A9189]"
                : "text-[#5B6B7C] hover:bg-surface-subtle hover:text-navy",
            );
            const inner = (
              <>
                {item.active && (
                  <span className="absolute -left-3 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-[#0A9189]" />
                )}
                <Icon size={18} className={item.active ? "text-[#0A9189]" : "text-[#6B7C8F]"} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge ? (
                  <span className="grid h-[18px] min-w-[18px] place-items-center rounded-full bg-[#E5484D] px-1 text-[10px] font-semibold text-white">
                    {item.badge}
                  </span>
                ) : null}
              </>
            );

            return (
              <li key={item.label}>
                {item.href ? (
                  <Link href={item.href} aria-current="page" onClick={onNavigate} className={base}>
                    {inner}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => comingSoon(item.label)}
                    title="Coming soon"
                    className={base}
                  >
                    {inner}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-3 pb-4">
        <button
          type="button"
          onClick={() => comingSoon("Contact Support")}
          className="flex w-full items-center gap-3 rounded-2xl bg-[#E9FBF8] p-3 text-left transition hover:bg-[#DDF7F2]"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#0A9189]">
            <Headset size={18} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[12.5px] font-semibold text-navy">Need Help?</span>
            <span className="block text-[11.5px] text-[#5B6B7C]">Contact Support</span>
          </span>
          <ChevronRight size={16} className="text-[#5B6B7C]" />
        </button>
      </div>
    </>
  );
}
