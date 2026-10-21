/**
 * Typed demo data for the Patient Dashboard.
 * Frontend-only phase — no backend. Replace these with real API responses later.
 */

export type StatTone = "teal" | "blue" | "amber" | "violet";
export type VitalTone = "rose" | "blue" | "teal" | "violet";
export type AppointmentStatus = "Upcoming" | "Completed" | "Cancelled";

export type StatIcon = "calendar" | "file" | "pill" | "flask";
export type QuickIcon = "calendar-plus" | "pill" | "flask" | "folder";
export type RecordIcon = "stethoscope" | "flask" | "xray" | "derm";

export const patient = {
  id: "demo-patient",
  firstName: "Ahmed",
  lastName: "Mohamed",
  fullName: "Ahmed Mohamed",
  role: "Patient",
  avatar: null as string | null,
};

export const today = "Mon, Oct 20, 2026";

export const dashboardStats: {
  key: string;
  label: string;
  value: number;
  icon: StatIcon;
  tone: StatTone;
}[] = [
  { key: "appointments", label: "Upcoming Appointments", value: 2, icon: "calendar", tone: "teal" },
  { key: "records", label: "Medical Records", value: 5, icon: "file", tone: "blue" },
  { key: "prescriptions", label: "Active Prescriptions", value: 3, icon: "pill", tone: "amber" },
  { key: "labs", label: "Lab Results", value: 4, icon: "flask", tone: "violet" },
];

export const nextAppointment = {
  doctor: "Dr. Sarah Ahmed",
  specialty: "Cardiology",
  date: "Mon, Oct 20, 2026",
  time: "10:00 AM",
  location: "Medora Medical Center",
  address: "123 Health Street, Cairo, Egypt",
};

export const recentAppointments: {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: AppointmentStatus;
}[] = [
  { id: "a1", doctor: "Dr. Sarah Ahmed", specialty: "Cardiology", date: "Mon, Oct 20, 2026", time: "10:00 AM", status: "Upcoming" },
  { id: "a2", doctor: "Dr. Youssef Ali", specialty: "General Medicine", date: "Thu, Oct 23, 2026", time: "11:30 AM", status: "Upcoming" },
  { id: "a3", doctor: "Dr. Mona Khaled", specialty: "Dermatology", date: "Mon, Nov 2, 2026", time: "09:00 AM", status: "Completed" },
];

export const vitals: {
  key: string;
  label: string;
  value: string;
  unit: string;
  icon: "heart" | "weight" | "droplet" | "activity";
  tone: VitalTone;
  trend: number[];
}[] = [
  { key: "bp", label: "Blood Pressure", value: "120/80", unit: "", icon: "heart", tone: "rose", trend: [42, 38, 44, 36, 40, 34] },
  { key: "weight", label: "Weight", value: "72", unit: "kg", icon: "weight", tone: "blue", trend: [30, 34, 31, 36, 33, 38] },
  { key: "oxygen", label: "Oxygen Level", value: "98", unit: "%", icon: "droplet", tone: "teal", trend: [36, 40, 37, 42, 39, 44] },
  { key: "hr", label: "Heart Rate", value: "78", unit: "bpm", icon: "activity", tone: "violet", trend: [28, 40, 30, 44, 32, 38] },
];

export const quickActions: { key: string; label: string; icon: QuickIcon }[] = [
  { key: "book", label: "Book Appointment", icon: "calendar-plus" },
  { key: "prescriptions", label: "View Prescriptions", icon: "pill" },
  { key: "labs", label: "View Lab Results", icon: "flask" },
  { key: "records", label: "Access Medical Records", icon: "folder" },
];

export const medicalRecords: {
  id: string;
  title: string;
  doctor: string;
  date: string;
  icon: RecordIcon;
}[] = [
  { id: "r1", title: "General Consultation", doctor: "Dr. Youssef Ali", date: "Oct 12, 2026", icon: "stethoscope" },
  { id: "r2", title: "Lab Test – Complete Blood Count", doctor: "Medora Laboratory", date: "Oct 5, 2026", icon: "flask" },
  { id: "r3", title: "Chest X-Ray", doctor: "Medora Imaging", date: "Sep 30, 2026", icon: "xray" },
  { id: "r4", title: "Dermatology Consultation", doctor: "Dr. Mona Khaled", date: "Sep 10, 2026", icon: "derm" },
];
