import type { Metadata } from "next";
import { DashboardGreeting } from "@/components/patient/DashboardGreeting";
import { DashboardStats } from "@/components/patient/DashboardStats";
import {
  RecentAppointmentsCard,
  HealthSummaryCard,
  QuickActionsCard,
} from "@/components/patient/DashboardPanels";
import { RecentMedicalRecords } from "@/components/patient/RecentMedicalRecords";

export const metadata: Metadata = {
  title: "Patient Dashboard — Medora",
  description:
    "Your Medora patient overview: upcoming appointments, medical records, prescriptions, lab results and health summary.",
};

export default function PatientDashboardPage() {
  return (
    <div className="space-y-5">
      <DashboardGreeting />
      <DashboardStats />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <RecentAppointmentsCard />
        <HealthSummaryCard />
        <QuickActionsCard />
      </div>
      <RecentMedicalRecords />
    </div>
  );
}
