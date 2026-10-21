"use client";

import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { ASSETS } from "@/lib/constants";
import { patient, nextAppointment, today } from "@/lib/mock/patient";
import { Avatar } from "./ui";
import { useComingSoon } from "./ComingSoon";

export function DashboardGreeting() {
  const comingSoon = useComingSoon();

  return (
    <section>
      {/* Greeting */}
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-[21px] font-bold tracking-[-0.01em] text-[#0F2D4A] sm:text-[24px]">
            Good morning, {patient.firstName} <span aria-hidden>👋</span>
          </h1>
          <p className="mt-0.5 text-[13px] text-[#5B6B7C]">
            Take charge of your health journey with Medora.
          </p>
        </div>
        <span className="text-[12px] text-ink-muted">{today}</span>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_336px]">
        {/* Hero */}
        <div className="relative min-h-[210px] overflow-hidden rounded-2xl bg-[#EAFBF8]">
          {/* Clinic image fills the card; the curved mint shape reveals it on the right */}
          <div className="absolute inset-0 hidden sm:block">
            <Image
              src={ASSETS.loginBg}
              alt="Medora clinic reception"
              fill
              sizes="(max-width: 1280px) 90vw, 760px"
              className="object-cover object-center"
            />
          </div>

          {/* Curved mint divider — organic boundary between text and image */}
          <svg
            aria-hidden
            className="absolute inset-0 hidden h-full w-full sm:block"
            viewBox="0 0 1000 340"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="heroMintGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#EAFBF8" />
                <stop offset="0.55" stopColor="#DDF6F1" />
                <stop offset="1" stopColor="#D3F3ED" />
              </linearGradient>
            </defs>
            {/* soft translucent band following the curve */}
            <path
              d="M450,0 C505,65 550,125 548,190 C546,250 500,300 468,340"
              stroke="#F4FDFB"
              strokeWidth="44"
              strokeOpacity="0.28"
              fill="none"
            />
            <path
              d="M450,0 C505,65 550,125 548,190 C546,250 500,300 468,340"
              stroke="#F6FEFC"
              strokeWidth="16"
              strokeOpacity="0.6"
              fill="none"
            />
            {/* main mint shape with the curved right edge */}
            <path
              d="M0,0 H450 C505,65 550,125 548,190 C546,250 500,300 468,340 H0 Z"
              fill="url(#heroMintGrad)"
            />
          </svg>

          {/* Content */}
          <div className="relative z-10 max-w-full p-6 sm:max-w-[46%] sm:p-7">
            <h2 className="text-[24px] font-bold leading-[1.12] text-[#0F2D4A] sm:text-[28px]">
              Your Health,
              <br />
              <span className="text-[#0A9189]">Our Priority</span>
            </h2>
            <p className="mt-2.5 max-w-[300px] text-[12.5px] leading-relaxed text-[#4E6172]">
              Book appointments, view records, get prescriptions, and more — all in one place.
            </p>
            <button
              type="button"
              onClick={() => comingSoon("Appointment booking")}
              className="mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-[#0A9189] px-5 text-[12.5px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(10,145,137,0.6)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A9189]"
            >
              Book New Appointment
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Next Appointment */}
        <div className="rounded-2xl border border-line bg-white p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[13.5px] font-semibold text-[#0F2D4A]">Your Next Appointment</h3>
            <button
              type="button"
              onClick={() => comingSoon("All appointments")}
              className="text-[11.5px] font-semibold text-[#0A9189] hover:underline"
            >
              View All
            </button>
          </div>

          <div className="mt-3.5 flex items-center gap-3">
            <Avatar name={nextAppointment.doctor} size={44} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-[#0F2D4A]">
                {nextAppointment.doctor}
              </p>
              <p className="text-[11.5px] text-ink-muted">{nextAppointment.specialty}</p>
            </div>
            <ChevronRight size={16} className="text-ink-muted" />
          </div>

          <div className="mt-3.5 space-y-2 border-t border-line pt-3.5">
            <InfoRow icon={Calendar} text={nextAppointment.date} />
            <InfoRow icon={Clock} text={nextAppointment.time} />
            <InfoRow
              icon={MapPin}
              text={
                <>
                  <span className="font-medium text-[#0F2D4A]">{nextAppointment.location}</span>
                  <br />
                  {nextAppointment.address}
                </>
              }
            />
          </div>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => comingSoon("Reschedule")}
              className="h-9 flex-1 rounded-full border border-line text-[12px] font-semibold text-[#0F2D4A] transition hover:bg-surface-subtle"
            >
              Reschedule
            </button>
            <button
              type="button"
              onClick={() => comingSoon("Appointment details")}
              className="h-9 flex-1 rounded-full bg-[#0A9189] text-[12px] font-semibold text-white transition hover:brightness-110"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2 text-[11.5px] leading-snug text-[#5B6B7C]">
      <Icon size={14} className="mt-0.5 shrink-0 text-[#0A9189]" />
      <span>{text}</span>
    </div>
  );
}
