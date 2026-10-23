"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  Building2,
  CalendarDays,
  CalendarClock,
  FileText,
  BarChart3,
  ScrollText,
  Settings,
  Headset,
  ChevronRight,
  X,
  type LucideIcon,
} from "lucide-react";
import { MedoraLogo } from "@/components/ui/MedoraLogo";
import { sidebarRailStyle } from "@/components/transitions/sidebar";
import { useComingSoon } from "./ComingSoon";
import { cn } from "@/lib/cn";

type NavItem = { label: string; icon: LucideIcon; href?: string; active?: boolean };

const NAV: NavItem[] = [
  { label: "Overview", icon: LayoutDashboard, href: "/admin/dashboard", active: true },
  { label: "Users", icon: Users },
  { label: "Doctors & Staff", icon: Stethoscope },
  { label: "Departments", icon: Building2 },
  { label: "Appointments", icon: CalendarDays },
  { label: "Schedules", icon: CalendarClock },
  { label: "AI Reports", icon: FileText },
  { label: "Analytics", icon: BarChart3 },
  { label: "Audit Logs", icon: ScrollText },
  { label: "System Settings", icon: Settings },
];

export function AdminSidebar({
  open,
  onClose,
  collapsed,
}: {
  open: boolean;
  onClose: () => void;
  collapsed: boolean;
}) {
  return (
    <>
      {/* Desktop rail (animated width) */}
      <aside
        style={sidebarRailStyle()}
        className="fixed inset-y-0 left-0 z-40 hidden p-3 lg:block"
      >
        <div className="flex h-full flex-col rounded-2xl border border-line bg-white shadow-soft">
          <SidebarBody collapsed={collapsed} onNavigate={onClose} />
        </div>
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
            "absolute inset-y-0 left-0 flex w-[248px] flex-col bg-white shadow-pop transition-transform duration-200",
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
          <SidebarBody collapsed={false} onNavigate={onClose} />
        </div>
      </div>
    </>
  );
}

function SidebarBody({
  collapsed,
  onNavigate,
}: {
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  const comingSoon = useComingSoon();

  return (
    <>
      <div
        className={cn(
          "flex items-center overflow-hidden pb-4 pt-5",
          collapsed ? "justify-center px-0" : "px-4",
        )}
      >
        <Link
          href="/admin/dashboard"
          aria-label="Medora Administration"
          onClick={onNavigate}
          className="block"
        >
          {collapsed ? (
            <MedoraLogo variant="mark" height={22} />
          ) : (
            <MedoraLogo variant="primary" height={22} />
          )}
        </Link>
      </div>

      <nav
        aria-label="Admin navigation"
        className={cn("flex-1 pb-3", collapsed ? "px-2" : "px-2.5")}
      >
        <ul className="space-y-0.5">
          {NAV.map((item) => (
            <NavRow
              key={item.label}
              item={item}
              collapsed={collapsed}
              onNavigate={onNavigate}
              onComingSoon={comingSoon}
            />
          ))}
        </ul>
      </nav>

      <div className={cn("pb-3", collapsed ? "px-2" : "px-2.5")}>
        <button
          type="button"
          onClick={() => comingSoon("Contact Support")}
          title={collapsed ? "Contact Support" : undefined}
          aria-label={collapsed ? "Contact Support" : undefined}
          className={cn(
            "flex items-center rounded-xl bg-[#E9FBF8] transition hover:bg-[#DDF7F2]",
            collapsed ? "mx-auto h-10 w-10 justify-center p-0" : "w-full gap-2.5 p-2.5",
          )}
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#0A9189]">
            <Headset size={15} />
          </span>
          {!collapsed && (
            <>
              <span className="min-w-0 flex-1">
                <span className="block text-[11.5px] font-semibold text-navy">Need Help?</span>
                <span className="block text-[10.5px] text-[#5B6B7C]">Contact Support</span>
              </span>
              <ChevronRight size={14} className="text-[#5B6B7C]" />
            </>
          )}
        </button>
      </div>
    </>
  );
}

function NavRow({
  item,
  collapsed,
  onNavigate,
  onComingSoon,
}: {
  item: NavItem;
  collapsed: boolean;
  onNavigate?: () => void;
  onComingSoon: (label: string) => void;
}) {
  const Icon = item.icon;
  const cls = cn(
    "relative flex items-center overflow-hidden rounded-xl transition-colors",
    collapsed ? "mx-auto h-9 w-9 justify-center gap-0 px-0" : "h-9 w-full gap-2.5 px-2.5",
    item.active
      ? "bg-[#E6FAF7] font-semibold text-[#0A9189]"
      : "text-[#5B6B7C] hover:bg-surface-subtle hover:text-navy",
  );

  const inner = (
    <>
      <Icon
        size={16}
        className={cn("shrink-0", item.active ? "text-[#0A9189]" : "text-[#7A8B9C]")}
      />
      <span
        className={cn(
          "min-w-0 truncate whitespace-nowrap text-[12.5px] transition-opacity duration-150",
          collapsed ? "opacity-0" : "opacity-100",
        )}
      >
        {item.label}
      </span>
    </>
  );

  return (
    <li className="group relative">
      {/* active indicator (outside the item's clip so it sits at the rail edge) */}
      {item.active && !collapsed && (
        <span className="absolute -left-2.5 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-[#0A9189]" />
      )}

      {item.href ? (
        <Link
          href={item.href}
          aria-current="page"
          aria-label={collapsed ? item.label : undefined}
          onClick={onNavigate}
          className={cls}
        >
          {inner}
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => onComingSoon(item.label)}
          title={collapsed ? undefined : "Coming soon"}
          aria-label={collapsed ? item.label : undefined}
          className={cls}
        >
          {inner}
        </button>
      )}

      {/* tooltip on hover / keyboard focus while collapsed */}
      {collapsed && (
        <span
          aria-hidden
          className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#0F2D4A] px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-pop transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          {item.label}
        </span>
      )}
    </li>
  );
}
