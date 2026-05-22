import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Kelas Privat 1-on-1 — EduKazia",
  description: "Kelas Privat 1-on-1 untuk Bahasa Inggris, Arab, Mandarin, dan Matematika. Tutor fokus 100% ke siswa, jadwal fleksibel, reschedule gratis. Live via Zoom.",
  alternates: {
    canonical: "https://edukazia.com/kursus/privat",
  },
  openGraph: {
    title: "Kelas Privat 1-on-1 — EduKazia",
    description: "Kelas Privat 1-on-1 untuk Bahasa Inggris, Arab, Mandarin, dan Matematika. Tutor fokus 100% ke siswa, jadwal fleksibel, reschedule gratis. Live via Zoom.",
    url: "https://edukazia.com/kursus/privat",
    type: "website",
    locale: "id_ID",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
