import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Kursus Bahasa Inggris Online — EduKazia",
  description: "Kursus Bahasa Inggris live via Zoom untuk anak, remaja, dan dewasa. Fokus ke speaking & pronunciation, bukan sekedar grammar. Tutor berpengalaman, kurikulum berbasis level.",
  alternates: {
    canonical: "https://edukazia.com/kursus/bahasa-inggris",
  },
  openGraph: {
    title: "Kursus Bahasa Inggris Online — EduKazia",
    description: "Kursus Bahasa Inggris live via Zoom untuk anak, remaja, dan dewasa. Fokus ke speaking & pronunciation, bukan sekedar grammar. Tutor berpengalaman, kurikulum berbasis level.",
    url: "https://edukazia.com/kursus/bahasa-inggris",
    type: "website",
    locale: "id_ID",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
