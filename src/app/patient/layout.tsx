"use client";

import { useState } from "react";
import { PatientSidebar } from "@/components/patient/PatientSidebar";
import { PatientTopbar } from "@/components/patient/PatientTopbar";
import { ComingSoonProvider } from "@/components/patient/ComingSoon";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ComingSoonProvider>
      <div className="min-h-screen bg-[#F7FBFB] text-[#0F2D4A]">
        <PatientSidebar open={open} onClose={() => setOpen(false)} />
        <div className="lg:pl-[264px]">
          <PatientTopbar onMenu={() => setOpen(true)} />
          <main className="px-4 py-5 sm:px-6 lg:px-8 lg:py-6">{children}</main>
        </div>
      </div>
    </ComingSoonProvider>
  );
}
