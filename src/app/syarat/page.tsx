"use client";

import { useState, useEffect, createContext, useContext, ReactNode, CSSProperties } from "react";
import { ADMIN_PHONE, ADMIN_EMAIL, COMPANY } from "@/lib/constants";

// ============ THEME ============
type Theme = {
  bg: string; card: string; cb: string; cs: string; tx: string;
  sub: string; mu: string; p: string; pS: string; nav: string;
  navB: string; footer: string; m: "light" | "dark";
};

const L: Theme = {
  bg: "#FDFCFA", card: "#FFFFFF", cb: "rgba(0,0,0,0.05)",
  cs: "0 2px 20px rgba(0,0,0,0.04)", tx: "#1A1535", sub: "#5E5878",
  mu: "#9D97B5", p: "#5C4FE5", pS: "#EEEDFC",
  nav: "rgba(253,252,250,0.92)", navB: "rgba(0,0,0,0.05)",
  footer: "#1A1535", m: "light",
};

const D: Theme = {
  bg: "#08080E", card: "rgba(255,255,255,0.03)", cb: "rgba(255,255,255,0.07)",
  cs: "0 2px 24px rgba(0,0,0,0.4)", tx: "#F5F4FF", sub: "#A8A4BE",
  mu: "#5D596F", p: "#8B7FF5", pS: "rgba(139,127,245,0.1)",
  nav: "rgba(8,8,14,0.85)", navB: "rgba(255,255,255,0.06)",
  footer: "#050508", m: "dark",
};

const TX = createContext<Theme>(L);
const useT = () => useContext(TX);

const fh = "'Sora', sans-serif";
const fb = "'Plus Jakarta Sans', sans-serif";

// ============ COMPONENTS ============
function W({ children, s = {} }: { children: ReactNode; s?: CSSProperties }) {
  return <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", ...s }}>{children}</div>;
}

function Nav({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  const t = useT();
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: sc ? t.nav : "transparent",
      backdropFilter: sc ? "blur(20px)" : "none",
      borderBottom: `1px solid ${sc ? t.navB : "transparent"}`,
      transition: "all 0.35s",
    }}>
      <W s={{ maxWidth: 1120, display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 12,
            background: "linear-gradient(135deg,#5C4FE5,#7B6FF0)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: fh, fontWeight: 800, fontSize: 17, color: "#fff" }}>E</span>
          </div>
          <span style={{ fontFamily: fh, fontWeight: 800, fontSize: 19, color: t.tx }}>EduKazia</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={toggle} aria-label="Toggle dark mode" style={{
            width: 36, height: 36, borderRadius: 10, background: t.pS,
            border: `1px solid ${t.cb}`, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {isDark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a href="/" style={{
            fontFamily: fh, fontWeight: 700, fontSize: 13, color: "#fff",
            background: "linear-gradient(135deg,#5C4FE5,#7B6FF0)",
            borderRadius: 12, padding: "10px 22px", textDecoration: "none",
          }}>
            Kembali ke Beranda
          </a>
        </div>
      </W>
    </nav>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  const t = useT();
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{
        fontFamily: fh, fontSize: 20, fontWeight: 700, color: t.tx,
        margin: "0 0 14px", paddingBottom: 10, borderBottom: `1.5px solid ${t.cb}`,
      }}>
        {title}
      </h2>
      <div style={{ fontFamily: fb, fontSize: 14, color: t.sub, lineHeight: 1.85 }}>
        {children}
      </div>
    </div>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer style={{ background: t.footer, padding: "32px 0 16px" }}>
      <W s={{ maxWidth: 1120, textAlign: "center" }}>
        <p style={{ fontFamily: fb, fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          © 2026 {COMPANY.name}. Dibuat dengan ❤️ untuk pelajar Indonesia.
        </p>
      </W>
    </footer>
  );
}

// ============ PAGE ============
export default function SyaratPage() {
  const [isDark, setIsDark] = useState(false);
  const t: Theme = isDark ? D : L;

  useEffect(() => {
    document.body.style.background = t.bg;
    document.body.style.transition = "background 0.3s";
    return () => { document.body.style.background = ""; };
  }, [t.bg]);

  return (
    <TX.Provider value={t}>
      <style>{`
        @media(max-width: 640px) {
          .syarat-hero h1 { font-size: 28px !important; }
          .syarat-section h2 { font-size: 17px !important; }
        }
      `}</style>
      <div style={{ background: t.bg, minHeight: "100vh", transition: "background 0.3s" }}>
        <Nav isDark={isDark} toggle={() => setIsDark((d) => !d)} />

        <div style={{ paddingTop: 120, paddingBottom: 60 }} className="syarat-hero">
          <W>
            <div style={{
              fontFamily: fb, fontSize: 12, fontWeight: 600, color: t.p,
              background: t.pS, padding: "4px 14px", borderRadius: 100,
              display: "inline-block", marginBottom: 16,
            }}>
              Terakhir diperbarui: April 2026
            </div>
            <h1 style={{
              fontFamily: fh, fontSize: 36, fontWeight: 800, color: t.tx,
              margin: "0 0 12px", letterSpacing: -0.5,
            }}>
              Syarat & Ketentuan
            </h1>
            <p style={{
              fontFamily: fb, fontSize: 15, color: t.sub, lineHeight: 1.7,
              marginBottom: 48, maxWidth: 560,
            }}>
              Dengan menggunakan layanan EduKazia, Anda menyetujui syarat dan ketentuan berikut.
            </p>

            <div className="syarat-section">
              <Section title="1. Definisi">
                <p>• &quot;EduKazia&quot; merujuk pada platform bimbingan belajar online yang dikelola dan berdomisili di Maluku Utara, Indonesia.</p>
                <p>• &quot;Pengguna&quot; merujuk pada orang tua/wali yang mendaftarkan anak, siswa yang mengikuti kelas, atau individu dewasa yang belajar sendiri.</p>
                <p>• &quot;Tutor&quot; merujuk pada pengajar yang telah diseleksi dan terdaftar di platform EduKazia.</p>
                <p>• &quot;Portal&quot; merujuk pada aplikasi web di app.edukazia.com yang digunakan untuk mengakses jadwal, laporan, rekaman, dan materi.</p>
              </Section>

              <Section title="2. Layanan">
                <p>
                  EduKazia menyediakan layanan bimbingan belajar online live via Zoom untuk mata pelajaran
                  Bahasa Inggris, Bahasa Arab, Mandarin, dan Matematika. Layanan tersedia dalam tiga tipe kelas:
                  Reguler (maks. 8 siswa), Semi Privat (maks. 4 siswa), dan Privat (1-on-1).
                </p>
              </Section>

              <Section title="3. Pendaftaran dan Tes Level">
                <p>• Setiap siswa baru wajib mengikuti Tes Level sebelum memulai kelas reguler.</p>
                <p>• Tes Level berbayar dan dilaksanakan secara online via Zoom.</p>
                <p>• Hasil Tes Level menentukan level dan rekomendasi tipe kelas yang sesuai.</p>
                <p>• Pendaftaran dilakukan melalui WhatsApp dan dikonfirmasi oleh admin EduKazia.</p>
              </Section>

              <Section title="4. Paket dan Pembayaran">
                <p>• Semua kelas dijual dalam paket 8 sesi.</p>
                <p>• Pembayaran dilakukan di muka sebelum paket dimulai.</p>
                <p>• Harga dapat berbeda tergantung tipe kelas dan mata pelajaran.</p>
                <p>• Pembayaran yang sudah diterima tidak dapat dikembalikan (non-refundable), kecuali dalam kondisi khusus yang disetujui oleh manajemen EduKazia.</p>
                <p>• Metode pembayaran akan diinformasikan oleh admin via WhatsApp.</p>
              </Section>

              <Section title="5. Jadwal dan Kehadiran">
                <p>• Jadwal kelas disepakati bersama antara siswa/orang tua dan admin EduKazia.</p>
                <p>• Siswa yang tidak hadir tanpa pemberitahuan dianggap &quot;tidak hadir&quot; dan sesi tetap terhitung.</p>
                <p>• Ketidakhadiran tutor akan diganti dengan sesi pengganti di jadwal yang disepakati.</p>
              </Section>

              <Section title="6. Reschedule dan Pembatalan">
                <p>• Kelas Privat: reschedule gratis dengan pemberitahuan minimal 1 hari (24 jam) sebelum jadwal kelas.</p>
                <p>• Kelas Reguler dan Semi Privat: mengikuti jadwal tetap yang sudah disepakati. Reschedule hanya dimungkinkan dalam kondisi khusus.</p>
                <p>• Pembatalan mendadak (kurang dari 24 jam) pada kelas Privat akan menghitung sesi tersebut sebagai sesi yang sudah terpakai.</p>
              </Section>

              <Section title="7. Rekaman Kelas">
                <p>• Setiap sesi kelas direkam untuk keperluan review belajar siswa.</p>
                <p>• Rekaman tersedia di Portal dan hanya dapat diakses oleh siswa, orang tua/wali terdaftar, dan tutor terkait.</p>
                <p>• Pengguna dilarang menyebarluaskan rekaman kelas ke pihak lain tanpa izin tertulis dari EduKazia.</p>
                <p>• EduKazia berhak menggunakan cuplikan rekaman untuk keperluan evaluasi internal dan peningkatan kualitas.</p>
              </Section>

              <Section title="8. Kode Etik">
                <p>Pengguna dan tutor wajib menjaga perilaku yang baik selama sesi kelas. EduKazia berhak menghentikan layanan tanpa pengembalian dana jika ditemukan:</p>
                <p>• Perilaku tidak pantas selama kelas</p>
                <p>• Pelecehan verbal terhadap tutor atau siswa lain</p>
                <p>• Upaya merekrut tutor EduKazia secara langsung di luar platform</p>
              </Section>

              <Section title="9. Batasan Tanggung Jawab">
                <p>• EduKazia berupaya menyediakan layanan terbaik tetapi tidak menjamin hasil belajar tertentu, karena keberhasilan dipengaruhi oleh banyak faktor termasuk konsistensi belajar siswa.</p>
                <p>• EduKazia tidak bertanggung jawab atas gangguan layanan yang disebabkan oleh faktor di luar kendali (koneksi internet, gangguan Zoom, force majeure).</p>
              </Section>

              <Section title="10. Perubahan Syarat">
                <p>
                  EduKazia dapat mengubah syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan diinformasikan
                  melalui website dan/atau WhatsApp. Penggunaan layanan setelah perubahan dianggap sebagai persetujuan
                  terhadap syarat terbaru.
                </p>
              </Section>

              <Section title="11. Hukum yang Berlaku">
                <p>
                  Syarat dan ketentuan ini tunduk pada hukum Republik Indonesia. Segala perselisihan akan diselesaikan
                  secara musyawarah mufakat terlebih dahulu.
                </p>
              </Section>

              <Section title="12. Kontak">
                <p>Untuk pertanyaan terkait syarat dan ketentuan ini:</p>
                <p style={{ marginTop: 8 }}>• WhatsApp: {ADMIN_PHONE.replace(/^62/, "0")}</p>
                <p>• Email: {ADMIN_EMAIL}</p>
                <p>• Website: {COMPANY.domain}</p>
              </Section>

              <div style={{
                marginTop: 20, padding: "16px 20px", background: t.pS,
                borderRadius: 14, border: `1px solid ${t.p}15`,
              }}>
                <p style={{
                  fontFamily: fb, fontSize: 13, color: t.p, fontWeight: 600, margin: 0,
                }}>
                  Dengan menggunakan layanan EduKazia, Anda menyatakan telah membaca, memahami, dan
                  menyetujui seluruh syarat dan ketentuan di atas.
                </p>
              </div>
            </div>
          </W>
        </div>

        <Footer />
      </div>
    </TX.Provider>
  );
}
