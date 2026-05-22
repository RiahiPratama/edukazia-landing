import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "English Superstar — Program Terstruktur EduKazia",
  description: "Program English Superstar: Phonemic Awareness → Phonics → 7 Level Speaking. Kurikulum CEFR-based untuk anak & remaja. Tes Level menentukan entry point.",
  alternates: {
    canonical: "https://edukazia.com/kursus/bahasa-inggris/superstar",
  },
  openGraph: {
    title: "English Superstar — Program Terstruktur EduKazia",
    description: "Program English Superstar: Phonemic Awareness → Phonics → 7 Level Speaking. Kurikulum CEFR-based untuk anak & remaja. Tes Level menentukan entry point.",
    url: "https://edukazia.com/kursus/bahasa-inggris/superstar",
    type: "website",
    locale: "id_ID",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
