import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Kursus Matematika Metode Singapura — EduKazia",
  description: "Kursus Matematika dengan Metode Singapura — logika, bukan hafalan. Anak paham konsep, percaya diri menghadapi soal cerita. Live via Zoom, tutor berpengalaman.",
  alternates: {
    canonical: "https://edukazia.com/kursus/matematika",
  },
  openGraph: {
    title: "Kursus Matematika Metode Singapura — EduKazia",
    description: "Kursus Matematika dengan Metode Singapura — logika, bukan hafalan. Anak paham konsep, percaya diri menghadapi soal cerita. Live via Zoom, tutor berpengalaman.",
    url: "https://edukazia.com/kursus/matematika",
    type: "website",
    locale: "id_ID",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
