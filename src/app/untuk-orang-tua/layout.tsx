import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Untuk Orang Tua: Pantau & Belajar Bareng | EduKazia",
  description: "Portal Orang Tua untuk memantau progress anak secara real-time. Plus kursus untuk orang tua yang mau belajar bahasa sendiri. Live via Zoom, jadwal fleksibel.",
  keywords: ["portal orang tua", "kursus mama belajar", "bimbel keluarga", "pantau anak belajar", "EduKazia"],
  openGraph: {
    title: "Untuk Orang Tua — EduKazia",
    description: "Pantau progress anak + kursus untuk Mama sendiri. Semua di satu platform.",
    url: "https://edukazia.com/untuk-orang-tua",
  },
  alternates: {
    canonical: "https://edukazia.com/untuk-orang-tua",
  },
};

export default function UntukOrangTuaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
