import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Kursus Bahasa Arab Online — EduKazia",
  description: "Kursus Bahasa Arab live via Zoom dengan pendekatan modern. Belajar membaca, memahami, dan berbicara — bukan sekedar hafalan. Tutor bersertifikat untuk anak hingga dewasa.",
  alternates: {
    canonical: "https://edukazia.com/kursus/bahasa-arab",
  },
  openGraph: {
    title: "Kursus Bahasa Arab Online — EduKazia",
    description: "Kursus Bahasa Arab live via Zoom dengan pendekatan modern. Belajar membaca, memahami, dan berbicara — bukan sekedar hafalan. Tutor bersertifikat untuk anak hingga dewasa.",
    url: "https://edukazia.com/kursus/bahasa-arab",
    type: "website",
    locale: "id_ID",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
