/* eslint-disable */
// @ts-nocheck
"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { GraduationCap, Lock, CalendarClock, Globe, MessageSquare, ClipboardList, BarChart3, Rocket, Target, Sparkles, Plus } from "lucide-react";

const TX = createContext();
const useT = () => useContext(TX);
// Warm nurturing palette — green accent, different from anak (purple) & remaja (blue)
const L = {bg:"#FDFCF8",bgW:"#FFF8EE",bgC:"#EDFDF5",card:"#FFFFFF",cb:"rgba(0,0,0,0.05)",cs:"0 2px 20px rgba(0,0,0,0.04)",ch:"0 12px 40px rgba(16,185,129,0.1)",tx:"#1A1535",sub:"#5E5878",mu:"#9D97B5",p:"#10B981",pS:"#ECFDF5",bl:"#3B82F6",blS:"#EFF6FF",gold:"#E6B800",goldS:"#FFF9E0",goldT:"#1A1535",pk:"#EC4899",pkS:"#FDF2F8",or:"#F59E0B",orS:"#FFFBEB",v:"#5C4FE5",vS:"#EEEDFC",coral:"#EF4444",nav:"rgba(253,252,248,0.92)",navB:"rgba(0,0,0,0.06)",footer:"#1A1535",hero:"linear-gradient(160deg,#EDFDF5 0%,#FFF8EE 40%,#F0EDFF 100%)",cta:"linear-gradient(135deg,#10B981,#059669)",m:"light"};
const D = {bg:"#080E0B",bgW:"#0A0E08",bgC:"#0B1410",card:"rgba(255,255,255,0.03)",cb:"rgba(255,255,255,0.07)",cs:"0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",ch:"0 16px 48px rgba(16,185,129,0.12), 0 0 0 1px rgba(255,255,255,0.08)",tx:"#F3F4F6",sub:"#9CA3AF",mu:"#4B5563",p:"#4ADE9A",pS:"rgba(74,222,154,0.1)",bl:"#70AEFF",blS:"rgba(112,174,255,0.08)",gold:"#F0C830",goldS:"rgba(240,200,48,0.08)",goldT:"#080E0B",pk:"#F78DC2",pkS:"rgba(247,141,194,0.08)",or:"#FFB84D",orS:"rgba(255,184,77,0.08)",v:"#8B7FF5",vS:"rgba(139,127,245,0.1)",coral:"#FF8A8A",nav:"rgba(8,14,11,0.85)",navB:"rgba(255,255,255,0.06)",footer:"#050805",hero:"linear-gradient(160deg,#080E0B 0%,#0A0E08 40%,#0B0A14 100%)",cta:"linear-gradient(135deg,#10B981,#059669)",m:"dark"};
const fh="'Sora',sans-serif",fb="'Plus Jakarta Sans',sans-serif";
const WA_TES="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+Mama+yang+ingin+ikut+Tes+Level.+Nama%3A+...+Usia%3A+...+Pelajaran%3A+...";
const WA="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+Mama+yang+ingin+ikut+kursus.+Bisa+konsultasi+dulu%3F";

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

function useVis(th=0.1){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){s(true);o.disconnect();}},{threshold:th});o.observe(e);return()=>o.disconnect();},[th]);return[r,v];}
function W({children,s={}}){return <div style={{maxWidth:1120,margin:"0 auto",padding:"0 24px",...s}}>{children}</div>;}
function Rv({children,delay=0}){const[ref,v]=useVis();return <div ref={ref} style={{opacity:v?1:0,transform:v?"none":"translateY(20px)",transition:`all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`}}>{children}</div>;}
function AvatarFace({gender="girl",color,size=56}){return <svg width={size} height={size} viewBox="0 0 56 56"><circle cx="28" cy="28" r="26" fill={color} opacity="0.12"/><circle cx="28" cy="24" r="14" fill="#FFD6A5"/><path d="M14 20c0-10 28-10 28 0v2c-4-6-24-6-28 0v-2z" fill={color} opacity="0.7"/><circle cx="16" cy="26" r="3" fill={color} opacity="0.4"/><circle cx="40" cy="26" r="3" fill={color} opacity="0.4"/><circle cx="23" cy="23" r="1.5" fill="#1A1535"/><circle cx="33" cy="23" r="1.5" fill="#1A1535"/><path d="M24 28q4 3 8 0" stroke="#1A1535" strokeWidth="1.2" fill="none" strokeLinecap="round"/><rect x="18" y="38" width="20" height="14" rx="6" fill={color} opacity="0.3"/></svg>;}

const animations = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Nunito:wght@900&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}body{overflow-x:hidden;-webkit-font-smoothing:antialiased}
::selection{background:#10B98140}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes waPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,0.3)}70%{box-shadow:0 0 0 14px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}
@keyframes countUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@keyframes bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-5px)}60%{transform:translateY(-2px)}}
@media(max-width:768px){
  h1{font-size:28px!important;line-height:1.2!important}h2{font-size:24px!important}
  section{padding-top:56px!important;padding-bottom:56px!important}
  .desktop-menu{display:none!important}.mobile-menu-btn{display:flex!important}
  .hide-mobile{display:none!important}.grid-2{grid-template-columns:1fr!important}
  .grid-3{grid-template-columns:1fr!important}
  .hero-flex{flex-direction:column!important;text-align:center!important;gap:20px!important}.hero-flex>div:first-child{flex:0 1 auto!important;width:100%!important}
  .hero-right{display:block!important;flex:0 0 auto!important;width:100%!important;max-width:340px!important;margin:0 auto!important;position:relative!important;overflow:visible!important}.hero-right>div{width:100%!important;max-width:100%!important}.story-flex{flex-direction:column!important}
}
@media(min-width:769px){.mobile-menu-btn{display:none!important}}
`;

// ═══════ NAV (same as production) ═══════
function Nav({isDark,toggle}){
  const t=useT();const[sc,setSc]=useState(false);const[openDD,setOpenDD]=useState(null);const[mob,setMob]=useState(false);
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
        <div className="desktop-menu" style={{display:"flex",alignItems:"center",gap:4}}>
          {dropdowns.map((dd,di)=>(
            <div key={di} style={{position:"relative"}} onMouseEnter={()=>setOpenDD(di)} onMouseLeave={()=>setOpenDD(null)}>
              <button style={{fontFamily:fb,fontSize:13,fontWeight:600,color:t.sub,background:"none",border:"none",cursor:"pointer",padding:"8px 12px",borderRadius:8,display:"flex",alignItems:"center",gap:5,transition:"color 0.2s"}}>
                {dd.label} <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {openDD===di && (
                <div style={{position:"absolute",top:"100%",left:0,background:t.card,borderRadius:14,border:`1px solid ${t.cb}`,boxShadow:"0 12px 40px rgba(0,0,0,0.1)",padding:6,minWidth:220,zIndex:100}}>
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
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",borderRadius:12,padding:"10px 22px",textDecoration:"none",boxShadow:"0 4px 16px rgba(92,79,229,0.2)",marginLeft:8}}>Login ke Portal</a>
        </div>
        <div className="mobile-menu-btn" style={{display:"none",alignItems:"center",gap:8}}>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:11,color:"#fff",background:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",borderRadius:10,padding:"8px 14px",textDecoration:"none",whiteSpace:"nowrap"}}>Login ke Portal</a>
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

// ═══════ 1. HERO — Warm, empowering, schedule card on right ═══════
function Hero(){
  const t=useT();
  const[si,setSi]=useState(0);
  const outs=[{text:"percaya diri ngomong Inggris",c:t.v},{text:"bisa baca Al-Quran dengan benar",c:t.p},{text:"kenal dasar Mandarin",c:t.or}];
  useEffect(()=>{const i=setInterval(()=>setSi(p=>(p+1)%outs.length),3000);return()=>clearInterval(i);},[]);

  return <section style={{background:t.hero,paddingTop:130,paddingBottom:80,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:"20%",right:"10%",width:250,height:250,borderRadius:"50%",background:t.p,opacity:0.04,filter:"blur(80px)"}}/>
    <div style={{position:"absolute",bottom:"10%",left:"15%",width:200,height:200,borderRadius:"50%",background:t.or,opacity:0.04,filter:"blur(60px)"}}/>
    <W>
      <div className="hero-flex" style={{display:"flex",alignItems:"center",gap:52}}>
        <div style={{flex:"1 1 480px"}}>
          <Rv><div style={{fontFamily:fb,fontSize:13,fontWeight:700,color:t.p,background:t.pS,padding:"6px 18px",borderRadius:100,display:"inline-flex",alignItems:"center",gap:6,marginBottom:24,border:`1px solid ${t.p}20`}}>Untuk Mama / Ibu · 25–50 Tahun</div></Rv>
          <Rv delay={0.08}>
            <h1 style={{fontFamily:fh,fontSize:44,fontWeight:800,color:t.tx,lineHeight:1.12,letterSpacing:-1.2,margin:"0 0 8px"}}>Mama Bisa <span style={{color:t.p}}>Bantu Anak</span> Belajar.<br/>Sambil Upgrade Diri.</h1>
            <div style={{fontFamily:fh,fontSize:18,fontWeight:600,color:t.mu,lineHeight:1.4,marginBottom:16}}>Nggak ada kata terlambat.</div>
          </Rv>
          <Rv delay={0.12}>
            <div style={{fontFamily:fh,fontSize:17,fontWeight:600,color:t.sub,lineHeight:1.5,marginBottom:20,minHeight:26}}>
              Mama mulai <span key={si} style={{color:outs[si].c,fontWeight:700,animation:"countUp 0.4s ease"}}>{outs[si].text}</span>
            </div>
          </Rv>
          <Rv delay={0.16}>
            <p style={{fontFamily:fb,fontSize:15,color:t.sub,lineHeight:1.75,margin:"0 0 28px",maxWidth:440}}>
              Nggak ada kata terlambat. Jadwal fleksibel — pagi saat anak sekolah, malam setelah anak tidur. Tutor yang sabar, nggak perlu malu, belajar dari nol juga bisa.
            </p>
          </Rv>
          <Rv delay={0.2}>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:"#fff",background:t.cta,borderRadius:12,padding:"14px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:`0 4px 20px ${t.p}25`}}><WAIcon size={16}/> Daftar Kelas untuk Mama</a>
              <a href="#tes-level" style={{fontFamily:fh,fontWeight:600,fontSize:13,color:t.p,borderRadius:12,padding:"14px 22px",textDecoration:"none",border:`1px solid ${t.p}25`}}>Lihat Tes Level</a>
            </div>
          </Rv>
        </div>

        {/* Right — Schedule card: "Jadwal Mama" */}
        <div className="hero-right" style={{flex:"0 0 340px",position:"relative"}}>
          <Rv delay={0.15}>
            <div style={{background:t.card,borderRadius:24,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
              <div style={{background:t.cta,padding:"18px 24px",position:"relative"}}>
                <div style={{position:"absolute",top:-15,right:-15,width:60,height:60,borderRadius:"50%",background:"rgba(255,255,255,0.08)"}}/>
                <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>Kelas Mama Hari Ini</div>
                <div style={{fontFamily:fh,fontSize:16,fontWeight:800,color:"#fff"}}>Bahasa Inggris — Speaking</div>
              </div>
              <div style={{padding:"20px"}}>
                {/* Single class detail */}
                <div style={{background:t.pS,borderRadius:14,padding:"16px",border:`1px solid ${t.p}15`,marginBottom:14}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                    <div style={{width:8,height:8,borderRadius:"50%",background:t.p,boxShadow:`0 0 8px ${t.p}40`,animation:"pulse 1.5s infinite"}}/>
                    <span style={{fontFamily:fb,fontSize:10,fontWeight:700,color:t.p}}>SEDANG BERLANGSUNG</span>
                    <span style={{fontFamily:fb,fontSize:9,color:t.mu,marginLeft:"auto"}}>09:00 — 09:45 WIT</span>
                  </div>
                  <div style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,marginBottom:4}}>Daily Conversation: At the Market</div>
                  <div style={{fontFamily:fb,fontSize:11,color:t.sub,marginBottom:10}}>👩‍🏫 Ms. Sarah · Kelas Privat</div>
                  <div style={{display:"flex",gap:5}}>
                    {["Speaking","Vocabulary","Listening"].map(tag=><span key={tag} style={{fontFamily:fb,fontSize:9,fontWeight:600,color:t.p,background:`${t.p}10`,padding:"3px 8px",borderRadius:5}}>{tag}</span>)}
                  </div>
                </div>

                {/* Before / After — double value visual */}
                <div style={{display:"flex",gap:10,marginBottom:14}}>
                  <div style={{flex:1,background:`${t.coral}06`,borderRadius:10,padding:"12px",border:`1px solid ${t.coral}10`,textAlign:"center"}}>
                    <div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:t.coral,textTransform:"uppercase",letterSpacing:0.4,marginBottom:3}}>Dulu</div>
                    <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.coral,lineHeight:1.3}}>Anak tanya PR,<br/>Mama bingung</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",color:t.mu,fontSize:14}}>→</div>
                  <div style={{flex:1,background:t.pS,borderRadius:10,padding:"12px",border:`1px solid ${t.p}10`,textAlign:"center"}}>
                    <div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:t.p,textTransform:"uppercase",letterSpacing:0.4,marginBottom:3}}>Sekarang</div>
                    <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.p,lineHeight:1.3}}>Mama bisa jawab<br/>& ngajari anak</div>
                  </div>
                </div>

                {/* Flexibility note */}
                <div style={{padding:"12px 14px",background:t.goldS,borderRadius:10,border:`1px solid ${t.gold}15`}}>
                  <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.goldT}}>Mama pilih sendiri jam-nya</div>
                  <div style={{fontFamily:fb,fontSize:10,color:t.mu,marginTop:2}}>Pagi saat anak sekolah · Siang setelah beres-beres · Malam setelah anak tidur</div>
                </div>
              </div>
            </div>
          </Rv>
          <div style={{position:"absolute",bottom:-10,left:-24,background:t.card,borderRadius:12,padding:"10px 16px",border:`1px solid ${t.cb}`,boxShadow:t.cs,animation:"float 5s ease-in-out infinite",zIndex:2}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <div style={{width:28,height:28,borderRadius:8,background:`${t.p}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Target size={16} color={t.p} strokeWidth={2.2}/></div>
              <div><div style={{fontFamily:fh,fontSize:11,fontWeight:800,color:t.p}}>Mama belajar</div><div style={{fontFamily:fb,fontSize:9,color:t.mu}}>Anak ikut terbantu</div></div>
            </div>
          </div>
        </div>
      </div>
    </W>
  </section>;
}

// ═══════ 2. PAIN POINTS — Mama-specific, warm ═══════
function PainAndSolution(){
  const t=useT();
  const items=[
    {pain:"Anak tanya PR, Mama cuma bisa bilang 'tanya guru aja'?",solution:"Mama belajar — anak terbantu di rumah.",Icon:GraduationCap,c:t.v},
    {pain:"Malu belajar di usia segini?",solution:"Kelas Privat: cuma Mama dan tutor. Nggak ada yang tahu.",Icon:Lock,c:t.pk},
    {pain:"Sibuk dari pagi sampai malam?",solution:"Mama pilih jam sendiri. Pagi, siang, atau malam.",Icon:CalendarClock,c:t.or},
    {pain:"Di daerah, mau les kemana?",solution:"Via Zoom dari rumah. Tutor berpengalaman, akses dari mana saja.",Icon:Globe,c:t.p},
  ];
  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5,lineHeight:1.2}}>Mama Pernah<br/>Merasakan Ini?</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,maxWidth:420,marginLeft:"auto",marginRight:"auto",lineHeight:1.7}}>Tenang, Mama nggak sendirian.</p></div></Rv>
    <div className="grid-2" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>
      {items.map((it,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:18,overflow:"hidden",border:`1.5px solid ${h?it.c+"30":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateY(-3px)":"none"}}>
          <div style={{height:3,background:it.c,opacity:0.5}}/>
          <div style={{padding:"22px 22px 18px",display:"flex",gap:14,alignItems:"flex-start"}}>
            <div style={{width:44,height:44,borderRadius:12,background:`${it.c}10`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:`1px solid ${it.c}12`,transition:"transform 0.3s",transform:h?"scale(1.08) rotate(3deg)":"none"}}><it.Icon size={22} color={it.c} strokeWidth={2}/></div>
            <div><h3 style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,margin:"0 0 6px",lineHeight:1.3}}>{it.pain}</h3><p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:0}}>{it.solution}</p></div>
          </div>
        </div>
      </Rv>;})}
    </div>
  </W></section>;
}

// ═══════ 3. STORIES — Mama testimonials ═══════
function Stories(){
  const t=useT();
  const stories=[
    {name:"Mama Julaiha",age:"35 thn",loc:"Ternate",subject:"Bahasa Inggris",before:"Malu ngomong, takut salah grammar",after:"Mulai berani jawab 'How are you?' tanpa grogi",detail:"Julaiha belum pernah les Inggris seumur hidup. Tes Level tunjukkan dia ada di Beginner murni. Tutor mulai dari greeting & daily phrases. Setelah paket pertama, dia bilang 'Saya akhirnya nggak panik kalau ada bule tanya jalan.'",c:t.v},
    {name:"Mama Rahmi",age:"42 thn",loc:"Sofifi",subject:"Bahasa Arab",before:"Baca Quran terbata-bata, malu sama anak",after:"Bacaan lebih lancar, bisa ngajari anak di rumah",detail:"Rahmi mau bisa baca Quran dengan benar — dan bisa ngajari anak-anaknya di rumah tanpa salah tajwid. Tutor fokus ke makhraj + tajwid praktis. Sekarang dia ngaji bareng anak setiap habis Maghrib.",c:t.p},
    {name:"Mama Rinna",age:"38 thn",loc:"Tidore",subject:"Mandarin",before:"Nol besar, nggak tahu Pinyin sama sekali",after:"Bisa salam & perkenalan diri dalam Mandarin",detail:"Rinna penasaran sama Mandarin setelah lihat peluang bisnis dengan partner China. Mulai dari nol — Pinyin, nada, karakter sederhana. Belum fasih, tapi fondasinya sudah terbentuk dan dia makin semangat lanjut.",c:t.or},
  ];
  const[ac,setAc]=useState(0);const s=stories[ac];

  return <section style={{background:t.bgW,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Mama-Mama Ini Sudah Mulai.</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Cerita nyata, progress nyata.</p></div></Rv>
    <Rv delay={0.1}>
      <div style={{maxWidth:720,margin:"0 auto"}}>
        <div style={{display:"flex",gap:6,marginBottom:20,justifyContent:"center",flexWrap:"wrap"}}>
          {stories.map((st,i)=><button key={i} onClick={()=>setAc(i)} style={{fontFamily:fb,fontSize:12,fontWeight:ac===i?700:500,color:ac===i?"#fff":t.sub,background:ac===i?st.c:"transparent",border:`1px solid ${ac===i?st.c:t.cb}`,borderRadius:100,padding:"8px 18px",cursor:"pointer",transition:"all 0.25s"}}>{st.name} · {st.subject}</button>)}
        </div>
        <div style={{background:t.card,borderRadius:22,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
          <div style={{background:s.c,padding:"14px 28px",display:"flex",alignItems:"center",gap:10}}>
            <AvatarFace color="#fff" size={36}/>
            <div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:"#fff"}}>{s.name} · {s.age}</div><div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.65)"}}>{s.loc} · {s.subject}</div></div>
          </div>
          <div style={{padding:"24px 28px"}}>
            <div style={{display:"flex",gap:10,marginBottom:18}}>
              <div style={{flex:1,background:`${t.coral}06`,borderRadius:10,padding:"12px",border:`1px solid ${t.coral}10`,textAlign:"center"}}><div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:t.coral,textTransform:"uppercase",letterSpacing:0.4,marginBottom:3}}>Sebelum</div><div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.coral,lineHeight:1.3}}>{s.before}</div></div>
              <div style={{display:"flex",alignItems:"center",color:t.mu,fontSize:14}}>→</div>
              <div style={{flex:1,background:t.pS,borderRadius:10,padding:"12px",border:`1px solid ${t.p}10`,textAlign:"center"}}><div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:t.p,textTransform:"uppercase",letterSpacing:0.4,marginBottom:3}}>Sesudah</div><div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.p,lineHeight:1.3}}>{s.after}</div></div>
            </div>
            <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.75,margin:0}}>{s.detail}</p>
          </div>
        </div>
      </div>
    </Rv>
    <Rv delay={0.15}><div style={{textAlign:"center",marginTop:28}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:t.cta,borderRadius:12,padding:"12px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14}/> Daftar Kelas untuk Mama</a></div></Rv>
  </W></section>;
}

// ═══════ 4. COURSES + CLASS TYPES ═══════
function CoursesAndClasses(){
  const t=useT();
  const courses=[
    {name:"Bahasa Inggris",letter:"EN",tag:"Speaking · Pronunciation · Daily Conversation",desc:"Bisa bantu anak PR, percaya diri ngomong, nggak grogi kalau ketemu bule.",c:t.v},
    {name:"Bahasa Arab",letter:"AR",tag:"Tajwid · Makhraj · Baca Al-Quran",desc:"Baca Quran dengan benar, paham doa harian, bisa ngajari anak ngaji di rumah.",c:t.p},
    {name:"Mandarin 中文",letter:"中",tag:"Pinyin · Karakter Dasar · Percakapan",desc:"Challenge diri sendiri. Bahasa Mandarin makin dibutuhkan — mulai dari nol juga bisa.",c:t.or},
  ];

  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div style={{marginBottom:36}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Mau Belajar Apa, Ma?</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:8,lineHeight:1.7}}>Kurikulum berbasis level — Mama mulai dari titik yang pas, nggak dipaksa ikut yang terlalu susah.</p></div></Rv>

    {/* Courses — compact horizontal: left border + letter badge + content */}
    <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:48}}>
      {courses.map((c,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.04*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:`${c.c}06`,borderLeft:`4px solid ${c.c}`,borderRadius:"4px 14px 14px 4px",padding:"14px 14px",boxShadow:h?`0 6px 20px ${c.c}18`:`0 1px 3px ${c.c}08`,transition:"all 0.3s",transform:h?"translateY(-2px)":"none",display:"flex",gap:12,alignItems:"flex-start"}}>
          <div style={{width:42,height:42,borderRadius:10,background:`linear-gradient(135deg,${c.c},${c.c}CC)`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#fff",fontFamily:fh,fontWeight:800,fontSize:c.letter.length>1?13:18,boxShadow:`0 2px 8px ${c.c}30`,letterSpacing:c.letter.length>1?-0.3:0}}>{c.letter}</div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,marginBottom:3}}>
              <h3 style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,margin:0,lineHeight:1.2}}>{c.name}</h3>
              <a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+Mama+yang+mau+belajar+${encodeURIComponent(c.name)}`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:10,color:c.c,background:`${c.c}10`,borderRadius:6,padding:"5px 10px",textDecoration:"none",whiteSpace:"nowrap",border:`1px solid ${c.c}25`,flexShrink:0}}>Daftar →</a>
            </div>
            <div style={{fontFamily:fb,fontSize:10,color:c.c,fontWeight:600,marginBottom:4,letterSpacing:0.1}}>{c.tag}</div>
            <p style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.45,margin:0}}>{c.desc}</p>
          </div>
        </div>
      </Rv>;})}
    </div>

    {/* Class Type — Privat only for Mama */}
    <Rv><div style={{marginBottom:28}}><h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Kelas Privat untuk Mama</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:8,lineHeight:1.7}}>1 tutor, 1 Mama. Belajar sesuai tempo Mama, tanpa tekanan.</p></div></Rv>

    <Rv delay={0.06}>
      <div style={{background:t.card,borderRadius:22,overflow:"hidden",border:`2px solid ${t.p}35`,boxShadow:`0 8px 36px ${t.p}10`}}>
        <div style={{display:"flex"}} className="story-flex">
          <div style={{width:140,flexShrink:0,background:`linear-gradient(180deg,${t.p},${t.p}BB)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"28px 16px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-15,right:-15,width:50,height:50,borderRadius:"50%",background:"rgba(255,255,255,0.12)"}}/>
            <div style={{fontFamily:fh,fontSize:36,fontWeight:800,color:"#fff",lineHeight:1}}>1 : 1</div>
            <div style={{fontFamily:fb,fontSize:8,color:"rgba(255,255,255,0.5)",marginTop:4}}>tutor : Mama</div>
          </div>
          <div style={{flex:1,padding:"28px 32px"}}>
            <h3 style={{fontFamily:fh,fontSize:22,fontWeight:800,color:t.tx,margin:"0 0 8px"}}>Kenapa Privat?</h3>
            <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.65,margin:"0 0 16px",maxWidth:480}}>Mama punya kesibukan yang nggak bisa diprediksi. Privat memberi Mama kebebasan penuh — jadwal sesuai Mama, materi sesuai level Mama, dan tutor yang fokus 100% ke Mama.</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:18}}>
              {["Jadwal sesuai kesibukan Mama","Kurikulum terstruktur sesuai level","Reschedule gratis kalau ada keperluan","Tempo belajar sesuai Mama","Nggak perlu malu — cuma Mama & tutor"].map(tg=><span key={tg} style={{fontFamily:fb,fontSize:10,fontWeight:600,color:t.p,background:`${t.p}08`,padding:"4px 12px",borderRadius:6,border:`1px solid ${t.p}12`}}>{tg}</span>)}
            </div>
            <a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+Mama+tertarik+kelas+Privat`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:t.p,borderRadius:10,padding:"13px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6,boxShadow:`0 4px 16px ${t.p}25`}}><WAIcon size={14}/> Daftar Kelas Privat</a>
          </div>
        </div>
      </div>
    </Rv>
  </W></section>;
}

// ═══════ 5. TES LEVEL + FAQ (side by side) ═══════
function TesLevelAndFAQ(){
  const t=useT();const[op,setOp]=useState(null);
  const faqs=[["Saya belum pernah belajar bahasa sama sekali. Bisa?","Bisa banget. Banyak Mama yang mulai dari nol. Tutor sabar dan nggak menghakimi. Makanya dimulai dari Tes Level — supaya tutor tahu dari mana harus mulai."],["Jadwalnya gimana kalau saya sibuk urus rumah?","Fleksibel. Mama pilih sendiri — pagi, siang, atau malam. Untuk Privat, jadwal 100% custom. Reguler & Semi Privat ada slot pilihan."],["Malu kalau belajar sama orang yang lebih muda?","Di kelas Privat, cuma Mama dan tutor. Nggak ada orang lain. Mama bisa belajar dengan nyaman tanpa khawatir."],["Bisa bantu saya ngajari anak di rumah?","Bisa. Mama belajar bahasa Inggris atau Arab — otomatis bisa bantu anak PR dan belajar bareng di rumah."],["Kurikulum-nya gimana?","Berbasis level. Mama belajar sesuai kemampuannya, naik level kalau siap. Pembayaran per paket supaya ringan."],["Pembayarannya gimana?","Per paket — ringan di kantong. Detail harga konsultasi via WhatsApp."]];

  return <section id="tes-level" style={{background:t.bgC,padding:"80px 0"}}><W>
    <div className="story-flex" style={{display:"flex",gap:40}}>
      <div style={{flex:"1 1 360px"}}>
        <Rv><h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:"0 0 14px",letterSpacing:-0.5}}>Mulai dari Tes Level</h2>
        <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.7,marginBottom:28}}>Supaya tutor tahu level Mama sekarang — dan belajar nggak salah arah.</p></Rv>
        <Rv delay={0.05}><div style={{display:"flex",flexDirection:"column",gap:10}}>
          {[{n:"1",Icon:MessageSquare,title:"Chat WhatsApp",desc:"Bilang Mama mau belajar apa."},{n:"2",Icon:ClipboardList,title:"Tes Level Online",desc:"30 menit via Zoom. Santai, nggak ada benar-salah."},{n:"3",Icon:BarChart3,title:"Terima Laporan",desc:"Level Mama, rekomendasi kelas & jadwal."},{n:"4",Icon:Rocket,title:"Mulai Belajar",desc:"Pilih kelas, mulai sesuai level Mama."}].map((s,i)=>
            <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{width:34,height:34,borderRadius:10,background:t.pS,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><s.Icon size={16} color={t.p} strokeWidth={2.2}/></div>
              <div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.tx,margin:"0 0 2px"}}>Step {s.n}: {s.title}</div><div style={{fontFamily:fb,fontSize:12,color:t.mu}}>{s.desc}</div></div>
            </div>
          )}
        </div></Rv>
        <Rv delay={0.1}><div style={{marginTop:24}}>
          <a href={WA_TES} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:t.cta,borderRadius:12,padding:"13px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14}/> Daftar Tes Level</a>
          <span style={{fontFamily:fb,fontSize:11,color:t.mu,marginLeft:12}}>30 mnt via Zoom</span>
        </div></Rv>
      </div>
      <div style={{flex:"1 1 380px"}}>
        <Rv><h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:t.tx,margin:"0 0 18px"}}>Pertanyaan Mama</h3></Rv>
        <Rv delay={0.05}><div>
          {faqs.map(([q,a],i)=><div key={i} style={{background:t.card,borderRadius:12,marginBottom:8,border:`1px solid ${op===i?t.p+"25":t.cb}`,overflow:"hidden",transition:"border 0.2s"}}>
            <button onClick={()=>setOp(op===i?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 16px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>
              <span style={{fontFamily:fh,fontSize:13,fontWeight:600,color:op===i?t.tx:t.sub,flex:1}}>{q}</span>
              <span style={{color:t.p,transition:"transform 0.3s",transform:op===i?"rotate(45deg)":"none",display:"inline-flex",alignItems:"center",justifyContent:"center"}}><Plus size={18} strokeWidth={2.2}/></span>
            </button>
            <div style={{maxHeight:op===i?160:0,transition:"max-height 0.3s ease",overflow:"hidden"}}><p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.7,padding:"0 16px 14px"}}>{a}</p></div>
          </div>)}
        </div></Rv>
        <Rv delay={0.1}><div style={{marginTop:12}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:12,color:"#fff",background:"#25D366",borderRadius:10,padding:"10px 20px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14}/> Chat WhatsApp</a></div></Rv>
      </div>
    </div>
  </W></section>;
}

// ═══════ 6. CTA FINAL ═══════
function CTAFinal(){
  const t=useT();
  return <section style={{background:t.bg,padding:"80px 0"}}><W><Rv>
    <div style={{background:t.cta,borderRadius:28,overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:-30,right:-30,width:150,height:150,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}/>
      <div style={{padding:"52px 44px",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{marginBottom:14,animation:"bounce 2s ease infinite",display:"inline-flex",width:64,height:64,borderRadius:18,background:"rgba(255,255,255,0.12)",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,0.15)"}}><Sparkles size={32} color="#fff" strokeWidth={2}/></div>
        <h2 style={{fontFamily:fh,fontSize:30,fontWeight:800,color:"#fff",margin:"0 0 10px",lineHeight:1.2}}>Mama Belajar,<br/>Anak Ikut Terinspirasi.</h2>
        <p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.6)",lineHeight:1.7,marginBottom:28,maxWidth:440,marginLeft:"auto",marginRight:"auto"}}>Konsultasi gratis, tanpa komitmen. Mama nggak harus sempurna — cukup mulai.</p>
        <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:15,color:t.goldT,background:"#E6B800",borderRadius:14,padding:"16px 36px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 20px rgba(230,184,0,0.25)"}}><WAIcon size={16} color="#1A1535"/> Daftar Kelas untuk Mama</a>
        <p style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.35)",marginTop:12}}>Nggak ada kata terlambat · Tanpa kontrak</p>
      </div>
    </div>
  </Rv></W></section>;
}

// ═══════ FOOTER ═══════
function Footer(){const t=useT();return <footer style={{background:t.footer,padding:"40px 0 20px"}}><W><div style={{display:"flex",gap:36,flexWrap:"wrap",marginBottom:28}}><div style={{flex:"1 1 200px"}}><div style={{marginBottom:12}}><EdukaziaLogo variant="white" size="sm" href="/"/></div><p style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,maxWidth:200}}>Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia.</p></div>{[{t:"Pelajaran",i:["Bahasa Inggris","Bahasa Arab","Mandarin","Matematika"]},{t:"Kelas",i:["Privat 1-on-1","Semi Privat","Reguler"]},{t:"Lainnya",i:["FAQ","Portal Orang Tua","Kebijakan Privasi"]}].map(col=><div key={col.t} style={{flex:"1 1 100px"}}><h4 style={{fontFamily:fh,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.45)",marginBottom:12,textTransform:"uppercase",letterSpacing:0.5}}>{col.t}</h4>{col.i.map(item=><div key={item} style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:8}}>{item}</div>)}</div>)}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:14,textAlign:"center"}}><p style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.15)"}}>© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia.</p></div></W></footer>;}
function WAFloat(){return <a href={WA} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:20,right:20,width:52,height:52,borderRadius:14,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",animation:"waPulse 2s ease-in-out infinite",zIndex:999}}><WAIcon size={24}/></a>;}

export default function UntukOrangTua(){
  const[isDark,setIsDark]=useState(false);const t=isDark?D:L;
  return <TX.Provider value={t}><div style={{background:t.bg,minHeight:"100vh",transition:"background 0.3s"}}>
    <style>{animations}</style>
    <style>{`body{background:${t.bg};transition:background 0.3s}`}</style>
    <Nav isDark={isDark} toggle={()=>setIsDark(d=>!d)}/>
    <Hero/>
    <PainAndSolution/>
    {/* TODO: Re-enable when admin dashboard supports testimoni input
    <Stories/>
    */}
    <CoursesAndClasses/>
    <TesLevelAndFAQ/>
    <CTAFinal/>
    <Footer/>
    <WAFloat/>
  </div></TX.Provider>;
}
