import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Kursus Mandarin Online — EduKazia",
  description: "Kursus Mandarin live via Zoom mulai dari Pinyin step by step. Belajar karakter & nada dengan tutor berpengalaman, kurikulum berbasis level untuk semua usia.",
  alternates: {
    canonical: "https://edukazia.com/kursus/bahasa-mandarin",
  },
  openGraph: {
    title: "Kursus Mandarin Online — EduKazia",
    description: "Kursus Mandarin live via Zoom mulai dari Pinyin step by step. Belajar karakter & nada dengan tutor berpengalaman, kurikulum berbasis level untuk semua usia.",
    url: "https://edukazia.com/kursus/bahasa-mandarin",
    type: "website",
    locale: "id_ID",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
