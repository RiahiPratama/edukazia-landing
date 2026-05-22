import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — EduKazia",
  description: "EduKazia berkomitmen menjaga privasi data Anda dan anak Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi.",
  openGraph: {
    title: "Kebijakan Privasi — EduKazia",
    description: "Cara EduKazia melindungi privasi data Anda dan anak Anda.",
    url: "https://edukazia.com/privasi",
  },
  alternates: {
    canonical: "https://edukazia.com/privasi",
  },
};

export default function PrivasiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
