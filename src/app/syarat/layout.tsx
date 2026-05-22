import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — EduKazia",
  description: "Syarat dan ketentuan penggunaan layanan EduKazia, platform bimbingan belajar online live via Zoom untuk pelajar Indonesia.",
  openGraph: {
    title: "Syarat & Ketentuan — EduKazia",
    description: "Ketentuan layanan bimbingan belajar online EduKazia.",
    url: "https://edukazia.com/syarat",
  },
  alternates: {
    canonical: "https://edukazia.com/syarat",
  },
};

export default function SyaratLayout({ children }: { children: React.ReactNode }) {
  return children;
}
