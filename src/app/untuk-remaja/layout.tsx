import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Untuk Remaja SMP–SMA (13–18 tahun) | EduKazia",
  description: "Bimbel live untuk siswa SMP & SMA: Bahasa Inggris, Arab, Mandarin, Matematika. Persiapan ujian, percakapan praktis, dan pemahaman konsep yang nyata — bukan sekadar hafalan.",
  keywords: ["bimbel SMP SMA", "kursus remaja online", "persiapan ujian", "tutor SMA Maluku Utara", "EduKazia"],
  openGraph: {
    title: "Untuk Remaja SMP–SMA — EduKazia",
    description: "Kursus live untuk siswa SMP–SMA. Persiapan ujian + skill nyata.",
    url: "https://edukazia.com/untuk-remaja",
  },
  alternates: {
    canonical: "https://edukazia.com/untuk-remaja",
  },
};

export default function UntukRemajaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
