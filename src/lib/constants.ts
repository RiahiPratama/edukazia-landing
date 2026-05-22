// EduKazia — Shared Constants
// Edit di sini untuk update di seluruh landing page

export const ADMIN_PHONE = "6281384253679"; // Without leading 0, with country code 62

export const WHATSAPP_LINKS = {
  // Untuk tombol "Daftar Sekarang"
  daftar: `https://wa.me/${ADMIN_PHONE}?text=Halo%20EduKazia%2C%20saya%20mau%20daftar%20kelas%20%F0%9F%99%8F`,
  
  // Untuk tombol "Tanya Admin" / kontak
  tanya: `https://wa.me/${ADMIN_PHONE}?text=Halo%20EduKazia%2C%20saya%20mau%20tanya-tanya%20dulu`,
  
  // Untuk tombol di pages spesifik (akan customize per page)
  tesLevel: `https://wa.me/${ADMIN_PHONE}?text=Halo%20EduKazia%2C%20saya%20mau%20ikut%20Tes%20Level`,
} as const;

export const PORTAL_URL = "https://app.edukazia.com";

export const ADMIN_EMAIL = "admin@edukazia.com";

export const COMPANY = {
  name: "EduKazia",
  tagline: "Belajar Live. Progress Nyata.",
  domain: "edukazia.com",
} as const;
