/* eslint-disable */
// @ts-nocheck
"use client";

import { useState, useEffect, useRef, Fragment, createContext, useContext } from "react";
import { AlertCircle, BarChart3, Book, ClipboardCheck, GraduationCap, MessageSquare, Phone, Search, TrendingUp, Video, Zap } from "lucide-react";

const TX = createContext();
const useT = () => useContext(TX);
const L = {
  bg:"#FDFCFA",bgW:"#FFF8F0",bgC:"#F0EDFF",bgM:"#EDFDF5",bgP:"#FFF0F6",
  card:"#FFFFFF",cb:"rgba(0,0,0,0.05)",cs:"0 2px 20px rgba(0,0,0,0.04)",ch:"0 12px 40px rgba(92,79,229,0.1)",
  tx:"#1A1535",sub:"#5E5878",mu:"#9D97B5",
  p:"#5C4FE5",pS:"#EEEDFC",g:"#10B981",gS:"#ECFDF5",
  gold:"#E6B800",goldS:"#FFF9E0",goldT:"#1A1535",
  pk:"#EC4899",pkS:"#FDF2F8",or:"#F59E0B",orS:"#FFFBEB",
  bl:"#3B82F6",blS:"#EFF6FF",coral:"#FF6B6B",
  nav:"rgba(253,252,250,0.92)",navB:"rgba(0,0,0,0.05)",
  footer:"#1A1535",
  hero:"linear-gradient(160deg,#F0EDFF 0%,#FFF8F0 40%,#EDFDF5 100%)",
  cta:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",m:"light",
};
const D = {
  bg:"#08080E",bgW:"#0A0A12",bgC:"#0B0A14",bgM:"#080E0B",bgP:"#0E0A12",
  card:"rgba(255,255,255,0.03)",cb:"rgba(255,255,255,0.07)",cs:"0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",ch:"0 16px 48px rgba(92,79,229,0.12), 0 0 0 1px rgba(255,255,255,0.08)",
  tx:"#F5F4FF",sub:"#A8A4BE",mu:"#5D596F",
  p:"#8B7FF5",pS:"rgba(139,127,245,0.1)",g:"#4ADE9A",gS:"rgba(74,222,154,0.08)",
  gold:"#F0C830",goldS:"rgba(240,200,48,0.08)",goldT:"#08080E",
  pk:"#F78DC2",pkS:"rgba(247,141,194,0.08)",or:"#FFB84D",orS:"rgba(255,184,77,0.08)",
  bl:"#70AEFF",blS:"rgba(112,174,255,0.08)",coral:"#FF8A8A",
  nav:"rgba(8,8,14,0.8)",navB:"rgba(255,255,255,0.06)",
  footer:"#050508",
  hero:"linear-gradient(160deg,#0C0B18 0%,#08080E 40%,#080E0B 100%)",
  cta:"linear-gradient(135deg,#5C4FE5,#8B7FF5)",m:"dark",
};
const fh="'Sora',sans-serif",fb="'Plus Jakarta Sans',sans-serif";
const WA_TES="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+daftarkan+anak+saya+untuk+Tes+Level.+Nama+anak%3A+...+Usia%3A+...";
const WA_GENERAL="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+konsultasi+kursus+untuk+anak+saya";

function WAIcon({size=16,color="#fff"}){return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;}
// ═══════ EDUKAZIA LOGO COMPONENT ═══════
function EdukaziaLogo({variant,size,href}){
  variant=variant||'default';
  size=size||'md';
  href=href===undefined?'/':href;
  const sv={sm:{w:36,h:29,fs:21,gap:8},md:{w:44,h:36,fs:26,gap:10},lg:{w:56,h:46,fs:32,gap:12}}[size];
  const vr={
    default:{b1:'#E6B800',b2:'#5C4FE5',b3:'#8070F0',edu:'#5C4FE5',kazia:'#E6B800'},
    white:{b1:'#E6B800',b2:'rgba(255,255,255,0.90)',b3:'rgba(255,255,255,0.45)',edu:'rgba(255,255,255,0.92)',kazia:'#E6B800'},
  }[variant]||{b1:'#E6B800',b2:'#5C4FE5',b3:'#8070F0',edu:'#5C4FE5',kazia:'#E6B800'};
  const mark=<svg width={sv.w} height={sv.h} viewBox="0 0 88 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{flexShrink:0}}><rect x="0" y="0" width="84" height="18" rx="9" fill={vr.b1}/><rect x="0" y="27" width="59" height="18" rx="9" fill={vr.b2}/><rect x="0" y="54" width="34" height="18" rx="9" fill={vr.b3}/></svg>;
  const wm=<span style={{fontFamily:"'Nunito',sans-serif",fontWeight:900,fontSize:sv.fs,letterSpacing:'-0.04em',lineHeight:1,userSelect:'none'}}><span style={{color:vr.edu}}>edu</span><span style={{color:vr.kazia}}>kazia</span></span>;
  const inner=<span style={{display:'inline-flex',alignItems:'center',gap:sv.gap}}>{mark}{wm}</span>;
  if(href===null)return inner;
  return <a href={href} style={{display:'inline-flex',alignItems:'center',textDecoration:'none'}} aria-label="EduKazia — Halaman Utama">{inner}</a>;
}


// ═══════ SVG ICON COMPONENTS (Lucide-style) ═══════

function useVis(th=0.1){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){s(true);o.disconnect();}},{threshold:th});o.observe(e);return()=>o.disconnect();},[th]);return[r,v];}
function W({children,s={}}){return <div style={{maxWidth:1120,margin:"0 auto",padding:"0 24px",...s}}>{children}</div>;}
function Rv({children,delay=0}){const[ref,v]=useVis();return <div ref={ref} style={{opacity:v?1:0,transform:v?"none":"translateY(30px)",transition:`all 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`}}>{children}</div>;}
function SH({label,title,sub,color}){const t=useT();return <div style={{textAlign:"center",marginBottom:52}}><div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:color||t.p,letterSpacing:1.5,textTransform:"uppercase",marginBottom:12}}>{label}</div><h2 style={{fontFamily:fh,fontSize:40,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.8,lineHeight:1.15}}>{title}</h2>{sub&&<p style={{fontFamily:fb,fontSize:16,color:t.sub,marginTop:14,maxWidth:560,marginLeft:"auto",marginRight:"auto",lineHeight:1.7}}>{sub}</p>}</div>;}

function AvatarFace({gender="girl",color,size=56}){
  return <svg width={size} height={size} viewBox="0 0 56 56">
    <circle cx="28" cy="28" r="26" fill={color} opacity="0.12"/>
    <circle cx="28" cy="24" r="14" fill="#FFD6A5"/>
    {gender==="girl"?<><path d="M14 20c0-10 28-10 28 0v2c-4-6-24-6-28 0v-2z" fill={color} opacity="0.7"/><circle cx="16" cy="26" r="3" fill={color} opacity="0.4"/><circle cx="40" cy="26" r="3" fill={color} opacity="0.4"/></>:<path d="M14 18c0-8 28-8 28 0v4c-2-8-26-8-28 0v-4z" fill={color} opacity="0.6"/>}
    <circle cx="23" cy="23" r="1.5" fill="#1A1535"/><circle cx="33" cy="23" r="1.5" fill="#1A1535"/>
    <path d="M24 28q4 3 8 0" stroke="#1A1535" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <rect x="18" y="38" width="20" height="14" rx="6" fill={color} opacity="0.3"/>
  </svg>;
}

// ═══════ SVG Illustrations for Courses (Vedantu-style) ═══════
function EnglishIllust({size=72}){return <svg width={size} height={size} viewBox="0 0 72 72"><circle cx="36" cy="36" r="32" fill="#5C4FE5" opacity="0.08"/><rect x="18" y="22" width="36" height="28" rx="6" fill="#5C4FE5" opacity="0.15"/><text x="36" y="41" textAnchor="middle" fontFamily="Sora,sans-serif" fontWeight="800" fontSize="18" fill="#5C4FE5">Aa</text><circle cx="54" cy="18" r="8" fill="#E6B800" opacity="0.2"/><text x="54" y="22" textAnchor="middle" fontFamily="Sora" fontWeight="700" fontSize="9" fill="#E6B800">EN</text></svg>;}
function ArabIllust({size=72}){return <svg width={size} height={size} viewBox="0 0 72 72"><circle cx="36" cy="36" r="32" fill="#10B981" opacity="0.08"/><rect x="20" y="20" width="32" height="32" rx="8" fill="#10B981" opacity="0.12"/><text x="36" y="42" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="22" fill="#10B981">ع</text><path d="M16 14l4 6-4 6" stroke="#10B981" opacity="0.3" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>;}
function MandarinIllust({size=72}){return <svg width={size} height={size} viewBox="0 0 72 72"><circle cx="36" cy="36" r="32" fill="#F59E0B" opacity="0.08"/><rect x="18" y="18" width="36" height="36" rx="10" fill="#F59E0B" opacity="0.12"/><text x="36" y="43" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="24" fill="#F59E0B">中</text><circle cx="56" cy="16" r="6" fill="#FF6B6B" opacity="0.2"/></svg>;}
function MathIllust({size=72}){return <svg width={size} height={size} viewBox="0 0 72 72"><circle cx="36" cy="36" r="32" fill="#EC4899" opacity="0.08"/><rect x="20" y="20" width="32" height="32" rx="8" fill="#EC4899" opacity="0.12"/><text x="28" y="34" fontFamily="Sora" fontWeight="800" fontSize="11" fill="#EC4899">+</text><text x="44" y="34" fontFamily="Sora" fontWeight="800" fontSize="11" fill="#EC4899">−</text><text x="28" y="48" fontFamily="Sora" fontWeight="800" fontSize="11" fill="#EC4899">×</text><text x="44" y="48" fontFamily="Sora" fontWeight="800" fontSize="11" fill="#EC4899">=</text></svg>;}

// Decorative kid reading SVG for courses section
function KidReadingSVG(){
  const t=useT();
  return <svg width="240" height="280" viewBox="0 0 240 280" fill="none">
    {/* Background circle */}
    <circle cx="130" cy="150" r="110" fill={t.goldS}/>
    {/* Body */}
    <rect x="90" y="160" width="80" height="90" rx="20" fill="#fff"/>
    {/* Head */}
    <circle cx="130" cy="130" r="40" fill="#FFD6A5"/>
    {/* Hair */}
    <path d="M90 120c0-30 80-30 80 0v8c-10-20-70-20-80 0v-8z" fill="#4A3728" opacity="0.8"/>
    {/* Pigtails */}
    <circle cx="88" cy="118" r="8" fill="#4A3728" opacity="0.6"/>
    <circle cx="172" cy="118" r="8" fill="#4A3728" opacity="0.6"/>
    {/* Glasses */}
    <circle cx="118" cy="128" r="10" stroke="#1A1535" strokeWidth="2" fill="none"/>
    <circle cx="142" cy="128" r="10" stroke="#1A1535" strokeWidth="2" fill="none"/>
    <path d="M128 128h4" stroke="#1A1535" strokeWidth="2"/>
    {/* Eyes */}
    <circle cx="118" cy="128" r="3" fill="#1A1535"/>
    <circle cx="142" cy="128" r="3" fill="#1A1535"/>
    {/* Smile */}
    <path d="M120 140q10 8 20 0" stroke="#1A1535" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Book */}
    <rect x="100" y="175" width="50" height="40" rx="4" fill={t.or} transform="rotate(-10 125 195)"/>
    <rect x="108" y="178" width="50" height="40" rx="4" fill={t.gold} transform="rotate(5 133 198)"/>
    {/* Floating icons */}
    <rect x="185" y="80" width="36" height="36" rx="10" fill={t.p} opacity="0.9"/>
    <text x="203" y="103" textAnchor="middle" fontFamily="Sora" fontWeight="800" fontSize="13" fill="#fff">EN</text>
    <rect x="10" y="180" width="32" height="32" rx="8" fill={t.g} opacity="0.9"/>
    <text x="26" y="201" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="16" fill="#fff">ع</text>
    <rect x="190" y="200" width="34" height="34" rx="9" fill={t.pk} opacity="0.9"/>
    <text x="207" y="222" textAnchor="middle" fontFamily="Sora" fontWeight="800" fontSize="14" fill="#fff">π</text>
    {/* Sparkles */}
    <path d="M170 60l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill={t.gold}/>
    <path d="M40 140l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill={t.p} opacity="0.5"/>
    {/* Rocket */}
    <g transform="translate(55,55) rotate(-30)">
      <path d="M0 0c2-8 6-14 10-18 4 4 8 10 10 18h-20z" fill={t.coral} opacity="0.8"/>
      <circle cx="10" cy="6" r="3" fill="#fff" opacity="0.6"/>
      <path d="M2 0l-3 5M18 0l3 5" stroke={t.coral} strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
    </g>
  </svg>;
}

const animations = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Nunito:wght@900&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}body{overflow-x:hidden;-webkit-font-smoothing:antialiased}
::selection{background:#5C4FE540}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes floatSlow{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-8px) rotate(2deg)}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}60%{transform:translateY(-3px)}}
@keyframes waPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,0.3)}70%{box-shadow:0 0 0 14px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}
@keyframes countUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes glow{0%,100%{box-shadow:0 0 20px rgba(92,79,229,0.15)}50%{box-shadow:0 0 40px rgba(92,79,229,0.25)}}
@media(max-width:768px){
  h1{font-size:28px!important;line-height:1.2!important}
  h2{font-size:24px!important}
  section{padding-top:56px!important;padding-bottom:56px!important}
  .desktop-menu{display:none!important}
  .mobile-menu-btn{display:flex!important}
  .hide-mobile{display:none!important}
  .grid-2{grid-template-columns:1fr!important}
  .grid-3{grid-template-columns:1fr!important}
  .grid-4{grid-template-columns:repeat(2,1fr)!important}
  .hero-flex{flex-direction:column!important;text-align:center!important;gap:20px!important}.hero-flex>div:first-child{flex:0 1 auto!important;width:100%!important}
  .hero-right{display:block!important;flex:0 0 auto!important;width:100%!important;max-width:340px!important;margin:0 auto!important;position:relative!important;overflow:visible!important}.hero-right>div{width:100%!important;max-width:100%!important}
  .story-flex{flex-direction:column!important}
  .courses-layout{grid-template-columns:1fr!important;grid-template-rows:auto!important}
  .courses-illust{display:none!important}
  .privat-layout{flex-direction:column!important}
}
@media(min-width:769px){.mobile-menu-btn{display:none!important}}
`;

// ═══════ NAVBAR ═══════
function Nav({isDark,toggle}){
  const t=useT();const[sc,setSc]=useState(false);
  const[openDD,setOpenDD]=useState(null);
  const[mob,setMob]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>50);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);

  const dropdowns=[
    {label:"Untuk Siapa",items:[
      {text:"Anak (7–13 thn)",href:"/untuk-anak"},
      {text:"Remaja SMP–SMA (13–18 thn)",href:"/untuk-remaja"},
      {text:"Mama Yang Mau Belajar",href:"/untuk-orang-tua"},
      {text:"Kelas Privat 1-on-1",href:"/kursus/privat"},
    ]},
    {label:"Pelajaran",items:[
      {text:"Bahasa Inggris",href:"/kursus/bahasa-inggris"},
      {text:"Bahasa Arab",href:"/kursus/bahasa-arab"},
      {text:"Mandarin",href:"/kursus/bahasa-mandarin"},
      {text:"Matematika",href:"/kursus/matematika"},
    ]},
  ];

  return <>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc?t.nav:"transparent",backdropFilter:sc?"blur(20px)":"none",borderBottom:sc?`1px solid ${t.navB}`:"none",transition:"all 0.35s"}}>
      <W s={{display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
        <EdukaziaLogo variant={t.m==='dark'?'white':'default'} size="md" href="/"/>
          {sc && <span className="hide-mobile" style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.p,background:t.pS,padding:"4px 12px",borderRadius:100,marginLeft:8,whiteSpace:"nowrap"}}>Bimbel dari Maluku Utara yang punya LMS Keren!</span>}

        {/* Desktop menu */}
        <div className="desktop-menu" style={{display:"flex",alignItems:"center",gap:4}}>
          {dropdowns.map((dd,di)=>(
            <div key={di} style={{position:"relative"}} onMouseEnter={()=>setOpenDD(di)} onMouseLeave={()=>setOpenDD(null)}>
              <button style={{fontFamily:fb,fontSize:13,fontWeight:600,color:t.sub,background:"none",border:"none",cursor:"pointer",padding:"8px 12px",borderRadius:8,display:"flex",alignItems:"center",gap:5,transition:"color 0.2s"}}>
                {dd.label} <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {openDD===di && (
                <div style={{position:"absolute",top:"100%",left:0,background:t.card,borderRadius:14,border:`1px solid ${t.cb}`,boxShadow:"0 12px 40px rgba(0,0,0,0.1)",padding:6,minWidth:200,zIndex:100}}>
                  {dd.items.map((item,ii)=>(
                    <a key={ii} href={item.href} style={{display:"block",padding:"10px 16px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:13,fontWeight:600,color:t.tx,transition:"background 0.15s"}} onMouseEnter={e=>e.currentTarget.style.background=t.pS} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                      {item.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:t.pS,border:`1.5px solid ${t.m==="dark"?"rgba(255,255,255,0.18)":"rgba(92,79,229,0.28)"}`, boxShadow:t.m==="dark"?"0 2px 8px rgba(0,0,0,0.3)":"0 1px 3px rgba(0,0,0,0.08)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:8}} title={isDark?"Mode Terang":"Mode Gelap"}>
            {isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            :<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
          </button>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:t.cta,borderRadius:12,padding:"10px 22px",textDecoration:"none",boxShadow:"0 4px 16px rgba(92,79,229,0.2)",marginLeft:8}}>Login ke Portal</a>
        </div>

        {/* Mobile: login + toggle + hamburger */}
        <div className="mobile-menu-btn" style={{display:"none",alignItems:"center",gap:8}}>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:11,color:"#fff",background:t.cta,borderRadius:10,padding:"8px 14px",textDecoration:"none",whiteSpace:"nowrap"}}>Login ke Portal</a>
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:t.pS,border:`1.5px solid ${t.m==="dark"?"rgba(255,255,255,0.18)":"rgba(92,79,229,0.28)"}`, boxShadow:t.m==="dark"?"0 2px 8px rgba(0,0,0,0.3)":"0 1px 3px rgba(0,0,0,0.08)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
            {isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            :<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
          </button>
          <button onClick={()=>setMob(m=>!m)} style={{width:36,height:36,borderRadius:10,background:t.pS,border:`1.5px solid ${t.m==="dark"?"rgba(255,255,255,0.18)":"rgba(92,79,229,0.28)"}`, boxShadow:t.m==="dark"?"0 2px 8px rgba(0,0,0,0.3)":"0 1px 3px rgba(0,0,0,0.08)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.tx} strokeWidth="2" strokeLinecap="round">
              {mob ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></> : <><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}
            </svg>
          </button>
        </div>
      </W>
    </nav>

    {/* Mobile drawer */}
    {mob && <div style={{position:"fixed",top:68,left:0,right:0,bottom:0,background:t.card,zIndex:999,padding:24,overflowY:"auto"}} onClick={()=>setMob(false)}>
      <div style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.p,background:t.pS,padding:"6px 14px",borderRadius:100,display:"inline-block",marginBottom:20}}>Bimbel dari Maluku Utara yang punya LMS Keren!</div>
      {dropdowns.map((dd,di)=>(
        <div key={di} style={{marginBottom:20}}>
          <div style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,marginBottom:8}}>{dd.label}</div>
          {dd.items.map((item,ii)=>(
            <a key={ii} href={item.href} onClick={()=>setMob(false)} style={{display:"block",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:14,fontWeight:500,color:t.sub,borderBottom:`1px solid ${t.cb}`}}>
              {item.text}
            </a>
          ))}
        </div>
      ))}
    </div>}
  </>;
}

// ═══════ HERO — Honest, outcome = starting point, not mastery ═══════
function Hero(){
  const t=useT();
  const[subIdx,setSubIdx]=useState(0);
  const outcomes = [
    {subject:"Bahasa Inggris",outcome:"mulai berani ngomong Inggris",color:t.p},
    {subject:"Bahasa Arab",outcome:"mulai pengucapan Makhraj yang benar",color:t.g},
    {subject:"Mandarin 中文",outcome:"kenal Pinyin & karakter pertamanya",color:t.or},
    {subject:"Matematika",outcome:"mulai paham logika, bukan hafalan",color:t.pk},
  ];
  useEffect(()=>{const i=setInterval(()=>setSubIdx(p=>(p+1)%outcomes.length),3000);return()=>clearInterval(i);},[]);
  const cur = outcomes[subIdx];

  return <section style={{background:t.hero,paddingTop:120,paddingBottom:80,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:80,right:"5%",width:200,height:200,borderRadius:"50%",background:t.p,opacity:0.03,filter:"blur(60px)"}}/>
    <div style={{position:"absolute",bottom:0,left:"10%",width:300,height:300,borderRadius:"50%",background:t.gold,opacity:0.04,filter:"blur(80px)"}}/>
    <W>
      <div className="hero-flex" style={{display:"flex",alignItems:"center",gap:56}}>
        <div style={{flex:"1 1 520px"}}>
          <Rv>
            <div style={{fontFamily:fb,fontSize:13,fontWeight:700,color:t.gold,background:t.goldS,padding:"6px 16px",borderRadius:100,display:"inline-flex",alignItems:"center",gap:6,marginBottom:20,border:`1px solid ${t.gold}20`}}>
              Untuk Anak Usia 7–13 Tahun
            </div>
          </Rv>
          <Rv delay={0.1}>
            <h1 style={{fontFamily:fh,fontSize:46,fontWeight:800,color:t.tx,lineHeight:1.12,letterSpacing:-1.2,margin:"0 0 8px"}}>
              Fondasi yang Benar,<br/>Dimulai dari Sini.
            </h1>
            <div style={{fontFamily:fh,fontSize:28,fontWeight:700,lineHeight:1.3,marginBottom:20,minHeight:40}}>
              <span style={{color:t.mu}}>Anak Anda </span>
              <span key={subIdx} style={{color:cur.color,display:"inline",animation:"countUp 0.5s ease"}}>{cur.outcome}</span>
            </div>
          </Rv>
          <Rv delay={0.2}>
            <p style={{fontFamily:fb,fontSize:17,color:t.sub,lineHeight:1.75,margin:"0 0 32px",maxWidth:480}}>
              Kurikulum EduKazia dirancang berdasarkan level anak — bukan asal belajar. Dimulai dari Tes Level, supaya setiap pertemuan tepat sasaran dan progress-nya terukur.
            </p>
          </Rv>
          <Rv delay={0.3}>
            <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
              <a href={WA_GENERAL} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:15,color:t.goldT,background:t.gold,borderRadius:14,padding:"16px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(230,184,0,0.3)"}}>
                <WAIcon size={18} color="#1A1535"/> Daftarkan Anak Sekarang
              </a>
              <a href="#tes-level" style={{fontFamily:fh,fontWeight:600,fontSize:14,color:t.p,background:"transparent",borderRadius:14,padding:"16px 24px",textDecoration:"none",border:`1px solid ${t.p}30`}}>
                Lihat Tes Level
              </a>
            </div>
            <p style={{fontFamily:fb,fontSize:12,color:t.mu,marginTop:12}}>Tim kami bantu pilihkan kursus yang paling sesuai</p>
          </Rv>
        </div>

        {/* Right — Before/After result card */}
        <div className="hero-right" style={{flex:"0 0 400px",position:"relative"}}>
          <Rv delay={0.2}>
            <div style={{background:t.card,borderRadius:24,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
              <div style={{background:t.cta,padding:"18px 24px",position:"relative"}}>
                <div style={{position:"absolute",top:-20,right:-20,width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}/>
                <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>Progress Nyata Siswa</div>
                <div style={{fontFamily:fh,fontSize:18,fontWeight:800,color:"#fff"}}>Bahasa Inggris — Level Starter</div>
              </div>
              <div style={{padding:"24px"}}>
                <div style={{display:"flex",gap:12,marginBottom:20}}>
                  <div style={{flex:1,background:`${t.coral}08`,borderRadius:14,padding:"14px",border:`1px solid ${t.coral}15`,textAlign:"center"}}>
                    <div style={{fontFamily:fb,fontSize:10,fontWeight:600,color:t.coral,textTransform:"uppercase",letterSpacing:0.5,marginBottom:4}}>Sebelum</div>
                    <div style={{fontFamily:fh,fontSize:18,fontWeight:800,color:t.coral}}>Diam</div>
                    <div style={{fontFamily:fb,fontSize:10,color:t.mu,marginTop:2}}>Tidak mau coba ngomong</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center"}}><span style={{fontSize:18,color:t.mu}}>→</span></div>
                  <div style={{flex:1,background:t.gS,borderRadius:14,padding:"14px",border:`1px solid ${t.g}15`,textAlign:"center"}}>
                    <div style={{fontFamily:fb,fontSize:10,fontWeight:600,color:t.g,textTransform:"uppercase",letterSpacing:0.5,marginBottom:4}}>Sesudah</div>
                    <div style={{fontFamily:fh,fontSize:18,fontWeight:800,color:t.g}}>Mulai Berani</div>
                    <div style={{fontFamily:fb,fontSize:10,color:t.mu,marginTop:2}}>Bisa jawab tutor</div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:`${t.p}06`,borderRadius:12,border:`1px solid ${t.p}10`}}>
                  <AvatarFace gender="boy" color={t.p} size={36}/>
                  <div>
                    <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.tx}}>Contoh Progress · Bahasa Inggris</div>
                    <div style={{fontFamily:fb,fontSize:11,color:t.mu}}>Ilustrasi · Kelas Reguler</div>
                  </div>
                </div>
              </div>
            </div>
          </Rv>
          <div style={{position:"absolute",bottom:-16,left:-24,background:t.card,borderRadius:14,padding:"12px 18px",border:`1px solid ${t.cb}`,boxShadow:t.cs,animation:"floatSlow 6s ease-in-out infinite",zIndex:2}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:32,height:32,borderRadius:8,background:t.gS,display:"flex",alignItems:"center",justifyContent:"center"}}><TrendingUp size={16} color={t.g}/></div>
              <div>
                <div style={{fontFamily:fh,fontSize:14,fontWeight:800,color:t.g}}>LIVE</div>
                <div style={{fontFamily:fb,fontSize:9,color:t.mu}}>Progress real-time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </W>
  </section>;
}

// ═══════ RESULTS MARQUEE ═══════
function ResultsStrip(){
  const t=useT();const bg=t.m==="dark"?"#0F0E1A":"#1A1535";
  const Item=({size,children})=><span style={{fontFamily:fh,fontWeight:800,fontSize:size,color:"#fff",whiteSpace:"nowrap",padding:"0 22px"}}>{children}</span>;
  const strip=()=><><Item size={16}>Live via Zoom · bukan rekaman</Item><Item size={20}>4 mata pelajaran</Item><Item size={14}>Tutor manusia bersertifikat</Item><Item size={18}>Portal Orang Tua real-time</Item><Item size={15}>Rekaman tersedia di portal</Item><Item size={17}>Kurikulum berbasis level</Item><Item size={14}>Reschedule fleksibel</Item></>;
  return <section style={{background:bg,overflow:"hidden",position:"relative"}}>
    <div style={{position:"absolute",top:0,left:0,width:60,height:"100%",background:`linear-gradient(90deg,${bg},transparent)`,zIndex:2}}/>
    <div style={{position:"absolute",top:0,right:0,width:60,height:"100%",background:`linear-gradient(270deg,${bg},transparent)`,zIndex:2}}/>
    <div style={{display:"flex",alignItems:"center",animation:"marquee 30s linear infinite",width:"max-content",padding:"14px 0"}}>{strip()}{strip()}</div>
  </section>;
}

// ═══════ STORY SECTION — Honest, realistic outcomes ═══════
function StorySection(){
  const t=useT();
  const stories = [
    {name:"Mama Aisyah",loc:"Ternate",child:"Aqil, 9 thn",subject:"Bahasa Inggris",
      problem:"Aqil malu banget kalau disuruh ngomong Inggris. Nilai tulis bagus, tapi kalau speaking — diam seribu bahasa.",
      turning:"Tes Level menunjukkan Aqil paham grammar dasar, tapi tidak pernah latihan ngomong. Tutor fokuskan ke conversation sederhana dan role-play yang seru.",
      result:"Setelah menyelesaikan paket pertama, Aqil mulai berani jawab pertanyaan tutor tanpa disuruh. Belum fasih, tapi fondasi speaking-nya sudah terbentuk — dan yang penting, dia tidak lagi takut untuk mencoba.",
      resultLabel:"Dari diam → mulai berani nyoba",
      gender:"girl",c:t.p},
    {name:"Mama Siti",loc:"Sofifi",child:"Zahra, 8 thn",subject:"Bahasa Arab",
      problem:"Zahra sekolah di madrasah, tapi bacaan Quran masih terbata-bata. Di rumah kami tidak bisa ngajarin tajwid yang benar.",
      turning:"Tes Level menunjukkan Zahra sudah kenal huruf hijaiyah, tapi belum paham makhraj. Tutor fokuskan ke tajwid praktis dengan metode talaqqi.",
      result:"Setelah paket pertama, bacaan Zahra jauh lebih lancar dari sebelumnya. Masih perlu latihan rutin, tapi sekarang dia punya dasar tajwid yang benar — tinggal terus diasah.",
      resultLabel:"Bacaan lebih lancar & tajwid benar",
      gender:"girl",c:t.g},
    {name:"Papa Rahim",loc:"Tidore",child:"Farhan, 11 thn",subject:"Matematika",
      problem:"Farhan selalu bilang 'aku benci Matematika.' Nilainya jeblok terus, dan semakin malas belajar.",
      turning:"Tes Level menunjukkan Farhan stuck di konsep perkalian dan pembagian. Tutor pakai Metode Singapura — dari visual ke abstrak, step by step.",
      result:"Setelah paket pertama, Farhan mulai paham kenapa rumus itu bekerja, bukan cuma menghafal. Nilainya naik dari 45 ke 62 — belum sempurna, tapi tren-nya naik. Yang paling penting: dia tidak benci Matematika lagi.",
      resultLabel:"Nilai 45 → 62, tidak lagi membenci Matematika",
      gender:"boy",c:t.pk},
  ];
  const[active,setActive]=useState(0);
  const story = stories[active];

  return <section id="hasil" style={{background:t.bg,padding:"88px 0"}}><W>
    <Rv><SH label="HASIL NYATA" title={<>Progress Nyata,<br/>Bukan Janji Manis.</>} sub="Kurikulum EduKazia berbasis level. Setiap anak mulai dari titik yang tepat — dan progress-nya terukur setiap paket."/></Rv>
    <Rv delay={0.1}>
      <div style={{display:"flex",justifyContent:"center",gap:8,marginBottom:40,flexWrap:"wrap"}}>
        {stories.map((s,i)=>(
          <button key={i} onClick={()=>setActive(i)} style={{fontFamily:fb,fontSize:13,fontWeight:active===i?700:500,color:active===i?"#fff":t.sub,background:active===i?s.c:"transparent",border:`1px solid ${active===i?s.c:t.cb}`,borderRadius:100,padding:"10px 22px",cursor:"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",gap:8}}>
            <AvatarFace gender={s.gender} color={active===i?"#fff":s.c} size={24}/>{s.child} — {s.subject}
          </button>
        ))}
      </div>
    </Rv>
    <Rv delay={0.15}>
      <div style={{maxWidth:800,margin:"0 auto",background:t.card,borderRadius:28,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
        <div style={{background:story.c,padding:"16px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <AvatarFace gender={story.gender} color="#fff" size={40}/>
            <div><div style={{fontFamily:fh,fontSize:14,fontWeight:700,color:"#fff"}}>{story.name} · {story.loc}</div><div style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.7)"}}>{story.child} · {story.subject}</div></div>
          </div>
          <div style={{background:"rgba(255,255,255,0.2)",borderRadius:10,padding:"6px 14px",fontFamily:fh,fontSize:12,fontWeight:700,color:"#fff"}}>{story.resultLabel}</div>
        </div>
        <div style={{padding:"28px 32px"}}>
          {[
            {icon:<AlertCircle size={15} color={t.coral}/>,label:"Masalahnya",c:t.coral,text:story.problem},
            {icon:<Search size={15} color={t.p}/>,label:"Tes Level Menemukan Akarnya",c:t.p,text:story.turning},
            {icon:<TrendingUp size={15} color={t.g}/>,label:"Hasilnya (jujur)",c:t.g,text:story.result},
          ].map((step,i)=>
            <div key={i} style={{display:"flex",gap:14,marginBottom:i<2?24:0}}>
              <div style={{width:30,height:30,borderRadius:10,background:`${step.c}12`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{step.icon}</div>
              <div>
                <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:step.c,textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>{step.label}</div>
                <p style={{fontFamily:fb,fontSize:14,color:i===2?t.tx:t.sub,lineHeight:1.75,margin:0,fontWeight:i===2?500:400}}>{step.text}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Rv>
    <Rv delay={0.2}>
      <div style={{textAlign:"center",marginTop:36}}>
        <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginBottom:16}}>Anak Anda bisa jadi cerita sukses berikutnya.</p>
        <a href={WA_GENERAL} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:t.goldT,background:t.gold,borderRadius:14,padding:"14px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#1A1535"/> Daftarkan Anak Sekarang</a>
      </div>
    </Rv>
  </W></section>;
}

// ═══════ COURSES — Vedantu-style: playful, asymmetric, with illustration ═══════
function CoursesSection(){
  const t=useT();
  const courses = [
    {illust:<EnglishIllust/>,name:"Bahasa Inggris",age:"Usia 7–13",tagline:"Bangun keberanian ngomong sejak dini",desc:"Speaking, pronunciation, vocabulary dasar. Tutor fokuskan ke conversation supaya anak terbiasa — bukan sekedar grammar.",c:t.p,bg:t.pS},
    {illust:<ArabIllust/>,name:"Bahasa Arab",age:"Usia 7–13",tagline:"Baca Quran dengan tajwid yang benar",desc:"Huruf hijaiyah, makhraj, tajwid praktis, dan muhadatsah dasar. Metode talaqqi — anak paham, bukan sekedar hafal.",c:t.g,bg:t.gS},
    {illust:<MathIllust/>,name:"Matematika",age:"Usia 7–13",tagline:"Logika dulu, rumus belakangan",desc:"Metode Singapura — visual → abstrak. Anak paham kenapa rumus bekerja, bukan cuma menghafal. Teruji di 70+ negara.",c:t.pk,bg:t.pkS},
    {illust:<MandarinIllust/>,name:"Mandarin 中文",age:"Usia 7–13",tagline:"Langkah pertama menuju bahasa masa depan",desc:"Pinyin, nada, karakter dasar, dan percakapan seru. Step by step — dirancang khusus untuk anak Indonesia.",c:t.or,bg:t.orS},
  ];

  return <section id="kursus" style={{background:t.bg,padding:"88px 0"}}><W>
    <Rv>
      <div style={{marginBottom:52}}>
        <h2 style={{fontFamily:fh,fontSize:42,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.8,lineHeight:1.15}}>
          Kursus untuk <span style={{color:t.p,position:"relative",display:"inline-block"}}>Anak<svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none" style={{position:"absolute",bottom:-4,left:0}}><path d="M0 4 Q25 0 50 4 Q75 8 100 4" stroke={t.gold} strokeWidth="3" fill="none" strokeLinecap="round"/></svg></span>
        </h2>
      </div>
    </Rv>

    {/* Vedantu-style: 2x2 grid LEFT + illustration RIGHT */}
    <div className="courses-layout" style={{display:"grid",gridTemplateColumns:"1fr 1fr 280px",gridTemplateRows:"auto auto",gap:16,alignItems:"start"}}>
      {courses.map((c,i)=>{
        const[hov,setHov]=useState(false);
        const gridPos = {gridColumn:i<2?(i===0?"1":"2"):(i===2?"1":"2"),gridRow:i<2?"1":"2"};
        return <Rv key={i} delay={0.08*(i+1)}>
          <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{...gridPos,background:c.bg,borderRadius:20,padding:"24px 26px",border:`1px solid ${hov?c.c+"30":"transparent"}`,boxShadow:hov?t.ch:"none",transition:"all 0.35s",transform:hov?"translateY(-3px)":"none",cursor:"pointer"}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:16}}>
              <div style={{flexShrink:0,transition:"transform 0.3s",transform:hov?"scale(1.08)":"none"}}>{c.illust}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:fb,fontSize:11,fontWeight:700,color:c.c,marginBottom:2}}>{c.age}</div>
                <h3 style={{fontFamily:fh,fontSize:17,fontWeight:800,color:t.tx,margin:"0 0 4px"}}>{c.name}</h3>
                <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:"0 0 14px"}}>{c.tagline}</p>
                <a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+daftarkan+anak+untuk+kursus+${encodeURIComponent(c.name)}`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:12,color:"#fff",background:t.tx,borderRadius:10,padding:"10px 22px",textDecoration:"none",display:"inline-block"}}>
                  Daftar →
                </a>
              </div>
            </div>
          </div>
        </Rv>;
      })}
      {/* Illustration column — spans 2 rows */}
      <div className="courses-illust" style={{gridColumn:"3",gridRow:"1 / 3",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
        <div style={{animation:"floatSlow 6s ease-in-out infinite"}}><KidReadingSVG/></div>
      </div>
    </div>

    {/* Bridge banner → /untuk-remaja */}
    <Rv delay={0.3}>
      <div style={{marginTop:32,background:t.card,borderRadius:16,padding:"20px 28px",border:`1px solid ${t.cb}`,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:40,height:40,borderRadius:12,background:t.blS,display:"flex",alignItems:"center",justifyContent:"center"}}><GraduationCap size={20} color={t.bl}/></div>
          <div>
            <div style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx}}>Anak Anda sudah remaja (13–18 tahun)?</div>
            <div style={{fontFamily:fb,fontSize:12,color:t.sub}}>Kami punya program khusus SMP–SMA dengan pendekatan yang berbeda.</div>
          </div>
        </div>
        <a href="/untuk-remaja" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.bl,background:t.blS,borderRadius:10,padding:"10px 22px",textDecoration:"none",border:`1px solid ${t.bl}20`,whiteSpace:"nowrap"}}>Lihat Kursus Remaja →</a>
      </div>
    </Rv>
  </W></section>;
}

// ═══════ CLASS TYPES — Each with unique visual identity ═══════
// Mini SVG illustrations for class vibe
function GroupVibe({c}){return <svg width="80" height="48" viewBox="0 0 80 48"><circle cx="20" cy="20" r="12" fill={c} opacity="0.3"/><circle cx="40" cy="16" r="12" fill={c} opacity="0.4"/><circle cx="60" cy="20" r="12" fill={c} opacity="0.3"/><circle cx="30" cy="32" r="10" fill={c} opacity="0.2"/><circle cx="50" cy="32" r="10" fill={c} opacity="0.2"/><path d="M10 44h60" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.15"/></svg>;}
function SmallGroupVibe({c}){return <svg width="80" height="48" viewBox="0 0 80 48"><circle cx="24" cy="18" r="13" fill={c} opacity="0.35"/><circle cx="56" cy="18" r="13" fill={c} opacity="0.35"/><circle cx="24" cy="36" r="10" fill={c} opacity="0.2"/><circle cx="56" cy="36" r="10" fill={c} opacity="0.2"/><path d="M40 8v32" stroke={c} strokeWidth="1" strokeDasharray="3 3" opacity="0.2"/></svg>;}
function OneOnOneVibe({c}){return <svg width="80" height="48" viewBox="0 0 80 48"><circle cx="40" cy="24" r="20" fill={c} opacity="0.12"/><circle cx="40" cy="24" r="14" fill={c} opacity="0.2"/><circle cx="40" cy="24" r="8" fill={c} opacity="0.4"/><circle cx="40" cy="24" r="3" fill={c}/></svg>;}

function ClassTypes(){
  const t=useT();
  const types = [
    {
      name:"Reguler",max:"Maks. 8 siswa",c:t.p,
      ratio:"1 : 8",ratioLabel:"tutor : siswa",
      vibe:<GroupVibe c={t.p}/>,
      headline:"Seru Bareng Teman",
      suasana:"Rame, kompetitif, penuh interaksi",
      desc:"Anak belajar bareng teman sebaya. Ada teman diskusi, ada tantangan bareng — motivasi naik karena tidak sendiri. Suasana kelas yang hidup bikin anak tidak bosan.",
      benefits:["Biaya paling terjangkau","Kompetisi sehat antar teman","Belajar jadi seru & tidak membosankan","Anak belajar kolaborasi"],
      bestFor:"Mama yang cari kualitas dengan biaya ringan",
      gradient:`linear-gradient(135deg,${t.p}30,${t.p}12)`,
    },
    {
      name:"Semi Privat",max:"Maks. 4 siswa",c:t.gold,
      ratio:"1 : 4",ratioLabel:"tutor : siswa",
      vibe:<SmallGroupVibe c={t.gold}/>,
      headline:"Fokus tapi Tetap Rame",
      suasana:"Nyaman, personal, tapi ada teman",
      desc:"Kelompok kecil — tutor bisa lebih kenal karakter masing-masing anak. Anak tetap punya teman, tapi suasana lebih tenang dan fokus.",
      benefits:["Tutor lebih kenal karakter anak","Kelompok kecil, suasana nyaman","Balance terbaik harga & kualitas","Anak tetap dapat interaksi sosial"],
      bestFor:"Mama yang mau lebih personal tanpa budget Privat",
      gradient:`linear-gradient(135deg,${t.gold}30,${t.gold}12)`,
    },
    {
      name:"Privat",max:"1-on-1 dengan tutor",c:t.pk,
      ratio:"1 : 1",ratioLabel:"tutor : anak",
      vibe:<OneOnOneVibe c={t.pk}/>,
      headline:"100% untuk Anak Anda",
      suasana:"Eksklusif, custom, fleksibel",
      desc:"Seluruh perhatian tutor hanya untuk anak Anda. Kurikulum terstruktur sesuai level dari Tes Level, jadwal fleksibel, dan reschedule gratis. Pilihan terbaik untuk hasil paling optimal.",
      benefits:["Perhatian 100% untuk anak Anda","Jadwal fleksibel + reschedule gratis","Progress paling optimal","Tempo belajar sesuai karakter anak"],
      bestFor:"Mama yang ingin anak mendapat hasil paling optimal",
      recommended:true,
      gradient:`linear-gradient(135deg,${t.pk},${t.pk}CC)`,
    },
  ];

  // Decision factors for comparison strip
  const factors = [
    {label:"Kurikulum",vals:["Berbasis Level","Berbasis Level","Berbasis Level"]},
    {label:"Jadwal",vals:["Fix","Fix","Fleksibel"]},
    {label:"Reschedule",vals:["—","—","Gratis"]},
    {label:"Rekaman Belajar",vals:["Tersedia","Tersedia","Tersedia"]},
    {label:"Portal Anak",vals:["Tersedia","Tersedia","Tersedia"]},
  ];

  return <section style={{background:t.bgW,padding:"88px 0"}}><W>
    <Rv><SH label="TIPE KELAS" title={<>Pilih Sesuai Kebutuhan<br/>& Budget Mama</>} sub="Semua kelas live via Zoom. Kurikulum berbasis level. Rekaman tersedia untuk semua tipe. Pembayaran per paket — ringan di kantong."/></Rv>

    {/* Decision comparison strip */}
    <Rv delay={0.05}>
      <div className="hide-mobile" style={{background:t.card,borderRadius:18,padding:"20px 0",border:`1px solid ${t.cb}`,marginBottom:24,overflow:"hidden"}}>
        <div style={{display:"grid",gridTemplateColumns:"120px 1fr 1fr 1fr",gap:0}}>
          {/* Header row */}
          <div style={{padding:"0 20px"}}/>
          {types.map((tp,i)=><div key={i} style={{textAlign:"center",padding:"0 12px"}}>
            <div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:tp.c}}>{tp.name}</div>
            <div style={{fontFamily:fb,fontSize:10,color:t.mu}}>{tp.max}</div>
          </div>)}
          {/* Divider */}
          <div style={{gridColumn:"1 / -1",height:1,background:t.cb,margin:"12px 20px"}}/>
          {/* Factor rows */}
          {factors.map((f,fi)=><Fragment key={`row${fi}`}>
            <div style={{padding:"8px 20px",fontFamily:fb,fontSize:12,fontWeight:600,color:t.mu}}>{f.label}</div>
            {f.vals.map((v,vi)=>{
              const tp=types[vi];
              const isHighlight = v==="Fleksibel"||v==="Gratis";
              const isCheck = v==="Tersedia"||v==="Berbasis Level";
              return <div key={`v${fi}${vi}`} style={{textAlign:"center",padding:"8px 12px"}}>
                {isCheck ? <span style={{fontFamily:fb,fontSize:12,color:t.g,fontWeight:600}}>✓ {v}</span>
                : <span style={{fontFamily:fb,fontSize:12,fontWeight:isHighlight?700:400,color:isHighlight?tp.c:v==="—"?t.mu:t.sub}}>{v}</span>}
              </div>;
            })}
          </Fragment>)}
        </div>
      </div>
    </Rv>

    {/* 3 cards side by side */}
    <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,alignItems:"stretch"}}>
      {types.map((c,i)=>{
        const[hov,setHov]=useState(false);
        return <Rv key={i} delay={0.08*(i+1)}>
          <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
            background:t.card,borderRadius:24,overflow:"hidden",
            border:c.recommended?`2px solid ${c.c}40`:`1.5px solid ${hov?c.c+"40":c.c+"18"}`,
            boxShadow:c.recommended?`0 12px 48px ${c.c}12`:hov?t.ch:`${t.cs}, inset 0 3px 0 ${c.c}30`,
            transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
            transform:hov?"translateY(-6px)":"none",
            position:"relative",display:"flex",flexDirection:"column",
          }}>
            {/* Colored header with vibe + ratio badge */}
            <div style={{background:c.recommended?c.gradient:c.gradient,padding:"24px 24px 20px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-15,right:-15,width:60,height:60,borderRadius:"50%",background:c.c,opacity:c.recommended?0.15:0.15}}/>
              <div style={{position:"absolute",bottom:-10,left:"40%",width:40,height:40,borderRadius:"50%",background:c.c,opacity:c.recommended?0.1:0.1}}/>
              
              {c.recommended && <div style={{fontFamily:fb,fontSize:10,fontWeight:700,color:"#fff",background:c.c,padding:"4px 14px",borderRadius:100,display:"inline-block",marginBottom:12,letterSpacing:0.5}}>REKOMENDASI KAMI</div>}
              
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:c.recommended?"#fff":t.tx,margin:"0 0 2px"}}>{c.name}</h3>
                  <div style={{fontFamily:fb,fontSize:12,fontWeight:600,color:c.recommended?"rgba(255,255,255,0.8)":c.c}}>{c.max}</div>
                </div>
                {/* Ratio badge */}
                <div style={{textAlign:"center",background:c.recommended?"rgba(255,255,255,0.15)":`${c.c}10`,borderRadius:14,padding:"10px 16px",border:c.recommended?"1px solid rgba(255,255,255,0.1)":`1px solid ${c.c}15`}}>
                  <div style={{fontFamily:fh,fontSize:22,fontWeight:800,color:c.recommended?"#fff":c.c,lineHeight:1}}>{c.ratio}</div>
                  <div style={{fontFamily:fb,fontSize:9,color:c.recommended?"rgba(255,255,255,0.6)":t.mu,marginTop:2}}>{c.ratioLabel}</div>
                </div>
              </div>
              
              {/* Vibe illustration below */}
              <div style={{marginTop:12,opacity:hov?1:0.8,transition:"opacity 0.3s",display:"flex",justifyContent:"center"}}>{c.vibe}</div>
            </div>

            {/* Body */}
            <div style={{padding:"22px 24px",flex:1,display:"flex",flexDirection:"column"}}>
              <div style={{fontFamily:fh,fontSize:14,fontWeight:700,color:c.c,marginBottom:4}}>{c.headline}</div>
              <div style={{fontFamily:fb,fontSize:11,fontWeight:500,color:t.mu,marginBottom:12,fontStyle:"italic"}}>Suasana: {c.suasana}</div>
              <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.65,margin:"0 0 16px"}}>{c.desc}</p>
              
              {c.benefits.map(b=><div key={b} style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:7}}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{flexShrink:0,marginTop:1}}><circle cx="7" cy="7" r="7" fill={c.c} opacity="0.15"/><path d="M4 7l2 2 4-4" stroke={c.c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.4}}>{b}</span>
              </div>)}

              <div style={{marginTop:"auto",paddingTop:16}}>
                <div style={{padding:"10px 14px",background:`${c.c}06`,borderRadius:10,border:`1px solid ${c.c}10`,marginBottom:14}}>
                  <span style={{fontFamily:fb,fontSize:11,color:t.mu}}>Cocok untuk: </span>
                  <span style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.tx}}>{c.bestFor}</span>
                </div>
                <a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+tertarik+kelas+${encodeURIComponent(c.name)}+untuk+anak+saya`} target="_blank" rel="noreferrer" style={{
                  fontFamily:fh,fontWeight:700,fontSize:13,
                  color:c.recommended?"#fff":c.c,
                  background:c.recommended?c.c:`${c.c}10`,
                  borderRadius:12,padding:"13px 0",textDecoration:"none",
                  display:"block",textAlign:"center",
                  border:c.recommended?"none":`1px solid ${c.c}25`,
                  boxShadow:c.recommended?`0 4px 16px ${c.c}25`:"none",
                  transition:"all 0.2s",
                }}>
                  Hubungi Kami →
                </a>
              </div>
            </div>
          </div>
        </Rv>;
      })}
    </div>
  </W></section>;
}

// ═══════ TES LEVEL SECTION ═══════
function TesLevel(){
  const t=useT();
  const steps = [
    {n:"1",icon:<MessageSquare size={22} color={t.p}/>,title:"Chat WhatsApp",desc:"Kirim nama, usia anak, dan pelajaran yang diminati."},
    {n:"2",icon:<ClipboardCheck size={22} color={t.p}/>,title:"Tes Level Online",desc:"30 menit via Zoom bersama tutor. Santai, tanpa tekanan."},
    {n:"3",icon:<BarChart3 size={22} color={t.p}/>,title:"Terima Laporan",desc:"Level anak, kekuatan, area yang perlu ditingkatkan, rekomendasi kelas."},
    {n:"4",icon:<Zap size={22} color={t.p}/>,title:"Mulai Belajar",desc:"Pilih tipe kelas, jadwal disepakati, langsung mulai belajar sesuai level anak."},
  ];
  return <section id="tes-level" style={{background:t.bgC,padding:"88px 0"}}><W>
    <Rv><SH label="LANGKAH PERTAMA" title={<>Tes Level Anak.<br/>Supaya Setiap Sesi Tepat Sasaran.</>} sub="Setiap anak beda titik start-nya. Tes Level memastikan tutor tahu persis kekuatan dan kelemahan anak."/></Rv>
    <div className="grid-4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
      {steps.map((s,i)=>{
        const[hov,setHov]=useState(false);
        return <Rv key={i} delay={0.08*(i+1)}>
          <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{background:t.card,borderRadius:20,padding:"24px 20px",border:`1px solid ${hov?t.p+"30":t.cb}`,boxShadow:hov?t.ch:t.cs,transition:"all 0.35s",transform:hov?"translateY(-4px)":"none",textAlign:"center",position:"relative"}}>
            {i<3 && <div className="hide-mobile" style={{position:"absolute",right:-12,top:"50%",fontSize:14,color:t.mu,transform:"translateY(-50%)",zIndex:2}}>→</div>}
            <div style={{width:44,height:44,borderRadius:14,background:t.pS,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"}}>{s.icon}</div>
            <div style={{fontFamily:fh,fontSize:10,fontWeight:700,color:t.p,marginBottom:4}}>STEP {s.n}</div>
            <h3 style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,margin:"0 0 6px"}}>{s.title}</h3>
            <p style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.5,margin:0}}>{s.desc}</p>
          </div>
        </Rv>;
      })}
    </div>
    <Rv delay={0.3}>
      <div style={{marginTop:36,background:t.card,borderRadius:24,border:`1px solid ${t.cb}`,padding:"28px 32px",display:"flex",gap:28,flexWrap:"wrap",alignItems:"center"}} className="story-flex">
        <div style={{flex:"1 1 300px"}}>
          <div style={{fontFamily:fh,fontSize:17,fontWeight:800,color:t.tx,marginBottom:10}}>Yang Mama Dapat dari Tes Level:</div>
          {["Laporan level anak (Beginner / Elementary / Pre-Intermediate)","Analisis kekuatan & area yang perlu ditingkatkan","Rekomendasi tipe kelas & jadwal yang cocok","Roadmap belajar personal sesuai level anak"].map((item,i)=>
            <div key={i} style={{display:"flex",alignItems:"flex-start",gap:8,marginBottom:8}}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{flexShrink:0,marginTop:2}}><circle cx="8" cy="8" r="8" fill={t.g} opacity="0.15"/><path d="M5 8l2 2 4-4" stroke={t.g} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.5}}>{item}</span>
            </div>
          )}
        </div>
        <div style={{flex:"0 0 240px",textAlign:"center"}}>
          <div style={{background:t.goldS,borderRadius:20,padding:"24px",border:`1px solid ${t.gold}20`}}>
            <div style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.mu,marginBottom:8}}>Investasi Tes Level</div>
            <div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.gold,marginBottom:14}}>Hubungi kami untuk info biaya</div>
            <a href={WA_TES} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.goldT,background:t.gold,borderRadius:12,padding:"12px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8}}><WAIcon size={14} color="#1A1535"/> Daftar Tes Level</a>
            <p style={{fontFamily:fb,fontSize:10,color:t.mu,marginTop:8}}>30 menit via Zoom</p>
          </div>
        </div>
      </div>
    </Rv>
  </W></section>;
}

// ═══════ MONITORING ═══════
function Monitoring(){
  const t=useT();
  return <section style={{background:t.bg,padding:"88px 0"}}><W>
    <Rv><SH label="MONITORING" title={<>Mama Tetap In Control.<br/>Dari Mana Saja.</>} sub="Bukan 'les online terus ditinggal.' Portal orang tua memastikan Mama tahu semuanya."/></Rv>
    <Rv delay={0.1}>
      <div className="story-flex" style={{display:"flex",gap:24,flexWrap:"wrap"}}>
        <div style={{flex:"1 1 340px",background:t.cta,borderRadius:24,padding:"36px 32px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}/>
          <div style={{marginBottom:14,display:"flex"}}><Phone size={32} color="rgba(255,255,255,0.9)"/></div>
          <h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:"#fff",margin:"0 0 10px"}}>Portal Orang Tua</h3>
          <p style={{fontFamily:fb,fontSize:14,color:"rgba(255,255,255,0.7)",lineHeight:1.7,marginBottom:16}}>Login di app.edukazia.com — data real-time, kapan saja.</p>
          {["Jadwal kelas + status LIVE","Progress sesi (misal 6/8)","Laporan tutor + foto aktivitas","Rekaman kelas untuk review"].map((f,i)=>
            <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
              <div style={{width:5,height:5,borderRadius:"50%",background:"#E6B800",flexShrink:0}}/>
              <span style={{fontFamily:fb,fontSize:13,color:"rgba(255,255,255,0.8)"}}>{f}</span>
            </div>
          )}
        </div>
        <div style={{flex:"1 1 300px",display:"flex",flexDirection:"column",gap:14}}>
          {[{icon:<MessageSquare size={18} color={t.g}/>,title:"Notifikasi WhatsApp Otomatis",desc:"Jadwal, laporan baru, sisa sesi — masuk ke WA Mama tanpa perlu buka portal.",bg:t.gS,c:t.g},
            {icon:<Video size={18} color={t.bl}/>,title:"Rekaman Setiap Kelas",desc:"Anak bisa tonton ulang. Mama bisa cek sendiri jalannya kelas.",bg:t.blS,c:t.bl},
            {icon:<Book size={18} color={t.or}/>,title:"Portal Siswa",desc:"Anak akses materi: bacaan interaktif, kosakata native speaker, latihan CEFR.",bg:t.orS,c:t.or},
          ].map((f,i)=>
            <div key={i} style={{background:t.card,borderRadius:18,padding:"20px 22px",border:`1px solid ${t.cb}`,boxShadow:t.cs,display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{width:38,height:38,borderRadius:12,background:f.bg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{f.icon}</div>
              <div><h4 style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.tx,margin:"0 0 3px"}}>{f.title}</h4><p style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.5,margin:0}}>{f.desc}</p></div>
            </div>
          )}
        </div>
      </div>
    </Rv>
  </W></section>;
}

// ═══════ FAQ ═══════
function FAQSection(){
  const t=useT();const[op,setOp]=useState(null);
  const faqs=[
    ["Tes Level itu apa?","Tes online 30 menit via Zoom bersama tutor. Tujuannya supaya kami tahu level anak sekarang — kekuatan, kelemahan, dan dari mana harus mulai."],
    ["Tes Level berbayar?","Iya. Tes Level memastikan proses belajar tepat sasaran — tidak membuang waktu di materi yang salah. Hubungi kami untuk info biaya."],
    ["Anak saya umur berapa bisa ikut?","Minimal 7 tahun. Di bawah itu kami sarankan tunggu — kelas online butuh fokus yang cukup."],
    ["Bagaimana kurikulumnya?","Kurikulum EduKazia berbasis level, bukan sekedar paket sesi. Anak belajar sesuai kemampuannya, naik level kalau sudah siap. Pembayaran per paket supaya lebih ringan buat orang tua."],
    ["Bisa reschedule?","Kelas Privat — bisa, tanpa biaya tambahan. Reguler & Semi Privat — jadwal sudah fix."],
    ["Bagaimana cara memantau progress?","Portal Orang Tua di app.edukazia.com. Jadwal, laporan, foto aktivitas, rekaman — semua real-time."],
    ["Bagaimana sistem pembayarannya?","Pembayaran per paket — supaya lebih ringan. Detail harga bisa konsultasi via WhatsApp."],
  ];
  return <section id="faq" style={{background:t.bgW,padding:"88px 0"}}><W>
    <div style={{display:"flex",gap:48,flexWrap:"wrap"}}>
      <div style={{flex:"1 1 280px",position:"sticky",top:100,alignSelf:"flex-start"}}><Rv>
        <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.p,letterSpacing:1.5,textTransform:"uppercase",marginBottom:12}}>FAQ</div>
        <h2 style={{fontFamily:fh,fontSize:34,fontWeight:800,color:t.tx,margin:"0 0 16px",letterSpacing:-0.5,lineHeight:1.2}}>Pertanyaan<br/>Mama & Papa</h2>
        <p style={{fontFamily:fb,fontSize:15,color:t.sub,lineHeight:1.7,marginBottom:28}}>Belum ketemu jawaban? Langsung tanya.</p>
        <a href={WA_GENERAL} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:"#fff",background:"#25D366",borderRadius:14,padding:"14px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8}}><WAIcon/> Chat WhatsApp</a>
      </Rv></div>
      <div style={{flex:"1 1 420px"}}><Rv delay={0.1}>
        {faqs.map(([q,a],i)=><div key={i} style={{background:t.card,borderRadius:14,marginBottom:10,border:`1px solid ${op===i?t.p+"30":t.cb}`,overflow:"hidden",transition:"border 0.2s"}}>
          <button onClick={()=>setOp(op===i?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>
            <span style={{fontFamily:fh,fontSize:14,fontWeight:600,color:op===i?t.tx:t.sub,flex:1}}>{q}</span>
            <div style={{width:28,height:28,borderRadius:8,background:op===i?t.pS:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"}}><span style={{fontSize:18,color:t.p,transition:"transform 0.3s",transform:op===i?"rotate(45deg)":"none",fontWeight:300}}>+</span></div>
          </button>
          <div style={{maxHeight:op===i?160:0,transition:"max-height 0.35s ease",overflow:"hidden"}}><p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.75,padding:"0 20px 18px"}}>{a}</p></div>
        </div>)}
      </Rv></div>
    </div>
  </W></section>;
}

// ═══════ CTA FINAL ═══════
function CTAFinal(){
  const t=useT();
  return <section style={{background:t.bg,padding:"88px 0"}}><W><Rv>
    <div style={{background:t.cta,borderRadius:32,overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:-40,right:-40,width:180,height:180,borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}/>
      <div style={{position:"absolute",bottom:-60,left:-30,width:220,height:220,borderRadius:"50%",background:"rgba(255,255,255,0.03)"}}/>
      <div style={{padding:"56px 48px",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{marginBottom:12,animation:"bounce 2s ease infinite",display:"flex",justifyContent:"center"}}><Zap size={36} color="rgba(255,255,255,0.85)"/></div>
        <h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:"#fff",margin:"0 0 12px",lineHeight:1.2}}>Siap Mulai Perjalanan<br/>Belajar Anak?</h2>
        <p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.7)",lineHeight:1.7,marginBottom:32,maxWidth:480,marginLeft:"auto",marginRight:"auto"}}>
          Tim kami bantu pilihkan kursus, tipe kelas, dan jadwal yang pas untuk anak Anda. Chat sekarang — tanpa komitmen.
        </p>
        <a href={WA_GENERAL} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:16,color:"#1A1535",background:"#E6B800",borderRadius:16,padding:"18px 40px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(230,184,0,0.3)"}}>
          <WAIcon size={18} color="#1A1535"/> Daftarkan Anak Sekarang
        </a>
        <p style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.4)",marginTop:14}}>Tanpa komitmen · Tanpa kontrak · Tanpa biaya tersembunyi</p>
        <div style={{display:"flex",justifyContent:"center",gap:32,marginTop:28,paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.08)"}}>
          {[{n:"✓",l:"Tutor Terseleksi"},{n:"✓",l:"Kurikulum Level"},{n:"✓",l:"LMS Modern"}].map(s=>
            <div key={s.l}><div style={{fontFamily:fh,fontWeight:800,fontSize:18,color:"#E6B800"}}>{s.n}</div><div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.4)"}}>{s.l}</div></div>
          )}
        </div>
      </div>
    </div>
  </Rv></W></section>;
}

// ═══════ FOOTER ═══════
function Footer(){const t=useT();return <footer style={{background:t.footer,padding:"48px 0 24px"}}><W>
  <div style={{display:"flex",gap:40,flexWrap:"wrap",marginBottom:36}}>
    <div style={{flex:"1 1 240px"}}><div style={{marginBottom:14}}><EdukaziaLogo variant="white" size="sm" href="/"/></div><p style={{fontFamily:fb,fontSize:13,color:"rgba(255,255,255,0.4)",lineHeight:1.6,maxWidth:230}}>Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia.</p></div>
    {[{t:"Kursus",i:["Bahasa Inggris","Bahasa Arab","Mandarin","Matematika"]},{t:"Kelas",i:["Privat 1-on-1","Semi Privat","Reguler"]},{t:"Lainnya",i:["FAQ","Portal Orang Tua","Kebijakan Privasi"]}].map(col=><div key={col.t} style={{flex:"1 1 120px"}}><h4 style={{fontFamily:fh,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",marginBottom:14,textTransform:"uppercase",letterSpacing:0.5}}>{col.t}</h4>{col.i.map(item=><div key={item} style={{fontFamily:fb,fontSize:13,color:"rgba(255,255,255,0.35)",marginBottom:10}}>{item}</div>)}</div>)}
  </div>
  <div style={{borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:18,textAlign:"center"}}><p style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.2)"}}>© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia.</p></div>
</W></footer>;}

function WAFloat(){return <a href={WA_GENERAL} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:22,right:22,width:56,height:56,borderRadius:16,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",textDecoration:"none",animation:"waPulse 2s ease-in-out infinite",zIndex:999}}><WAIcon size={26}/></a>;}

// ═══════ MAIN ═══════
export default function UntukAnak(){
  const[isDark,setIsDark]=useState(false);const t=isDark?D:L;
  return <TX.Provider value={t}><div style={{background:t.bg,minHeight:"100vh",transition:"background 0.4s"}}>
    <style>{animations}</style>
    <style>{`body{background:${t.bg};transition:background 0.4s}`}</style>
    <Nav isDark={isDark} toggle={()=>setIsDark(d=>!d)}/>
    <Hero/>
    <ResultsStrip/>
    {/* TODO: Re-enable when admin dashboard supports testimoni input
    <StorySection/>
    */}
    <CoursesSection/>
    <ClassTypes/>
    <TesLevel/>
    <Monitoring/>
    <FAQSection/>
    <CTAFinal/>
    <Footer/>
    <WAFloat/>
  </div></TX.Provider>;
}
