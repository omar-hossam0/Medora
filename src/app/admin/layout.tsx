"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import { AdminComingSoonProvider } from "@/components/admin/ComingSoon";
import { RouteGuard } from "@/components/auth/RouteGuard";
import {
  sidebarLayoutVars,
  sidebarContentStyle,
} from "@/components/transitions/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <RouteGuard allow={["admin"]}>
      <AdminComingSoonProvider>
        <div
          style={sidebarLayoutVars(collapsed)}
          className="min-h-screen bg-[#F3F8F8] text-[#0F2D4A]"
        >
          <AdminSidebar
            open={open}
            onClose={() => setOpen(false)}
            collapsed={collapsed}
          />
          <div
            className="lg:pl-[var(--admin-sidebar-w)]"
            style={sidebarContentStyle()}
          >
            <div className="p-3">
              <AdminTopbar
                onMenu={() => setOpen(true)}
                collapsed={collapsed}
                onToggleCollapse={() => setCollapsed((v) => !v)}
              />
              <main className="mt-3">{children}</main>
            </div>
          </div>
        </div>
      </AdminComingSoonProvider>
    </RouteGuard>
  );
}
