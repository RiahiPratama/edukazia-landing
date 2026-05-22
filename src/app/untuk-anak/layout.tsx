import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Untuk Anak 7–13 Tahun — Bimbel Live Maluku Utara | EduKazia",
  description: "Kursus live untuk anak SD usia 7–13 tahun: Bahasa Inggris, Arab, Mandarin, Matematika. Fondasi belajar yang benar dimulai dari Tes Level, dengan tutor terseleksi dan progress yang terukur.",
  keywords: ["bimbel anak SD", "kursus anak online", "bahasa inggris anak", "tutor anak Maluku Utara", "EduKazia"],
  openGraph: {
    title: "Untuk Anak 7–13 Tahun — EduKazia",
    description: "Fondasi belajar yang benar untuk anak SD. Live via Zoom, ada Portal Orang Tua.",
    url: "https://edukazia.com/untuk-anak",
  },
  alternates: {
    canonical: "https://edukazia.com/untuk-anak",
  },
};

export default function UntukAnakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
