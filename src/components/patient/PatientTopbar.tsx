"use client";

import { useState } from "react";
import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import { patient } from "@/lib/mock/patient";
import { Avatar } from "./ui";
import { cn } from "@/lib/cn";

export function PatientTopbar({ onMenu }: { onMenu: () => void }) {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-line bg-white px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onMenu}
        aria-label="Open menu"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink-secondary hover:bg-surface-subtle lg:hidden"
      >
        <Menu size={20} />
      </button>

      {/* Search */}
      <div className="relative w-full max-w-[520px]">
        <Search
          size={17}
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search doctors, specialities, or services..."
          aria-label="Search"
          className="h-11 w-full rounded-full border border-line bg-surface-subtle/70 pl-11 pr-4 text-[13.5px] text-navy outline-none transition placeholder:text-ink-muted focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
        />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative grid h-10 w-10 place-items-center rounded-full text-ink-secondary transition hover:bg-surface-subtle"
        >
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#E5484D] ring-2 ring-white" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            className="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-2 transition hover:bg-surface-subtle"
          >
            <Avatar name={patient.fullName} size={36} />
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-[13px] font-semibold text-navy">
                {patient.fullName}
              </span>
              <span className="block text-[11px] text-ink-muted">{patient.role}</span>
            </span>
            <ChevronDown
              size={16}
              className={cn("text-ink-muted transition-transform", menuOpen && "rotate-180")}
            />
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} aria-hidden />
              <div
                role="menu"
                className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-pop"
              >
                {["Profile", "Settings", "Sign out"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    role="menuitem"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full px-4 py-2 text-left text-[13px] text-ink-secondary transition hover:bg-surface-subtle"
                    title="Coming soon"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
