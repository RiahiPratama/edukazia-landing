/* eslint-disable */
// @ts-nocheck
"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { BarChart3, Calendar, ClipboardCheck, GraduationCap, MessageSquare, RefreshCw, Users, Zap } from "lucide-react";

const TX = createContext();
const useT = () => useContext(TX);
// Premium palette — deep purple + gold accents
const L = {bg:"#FDFCFA",bgW:"#FFF8F0",bgC:"#F0EDFF",card:"#FFFFFF",cb:"rgba(0,0,0,0.05)",cs:"0 2px 20px rgba(0,0,0,0.04)",ch:"0 12px 40px rgba(92,79,229,0.12)",tx:"#1A1535",sub:"#5E5878",mu:"#9D97B5",p:"#5C4FE5",pS:"#EEEDFC",g:"#10B981",gS:"#ECFDF5",gold:"#E6B800",goldS:"#FFF9E0",goldT:"#1A1535",pk:"#EC4899",pkS:"#FDF2F8",or:"#F59E0B",orS:"#FFFBEB",bl:"#3B82F6",blS:"#EFF6FF",coral:"#EF4444",nav:"rgba(253,252,250,0.92)",navB:"rgba(0,0,0,0.05)",footer:"#1A1535",cta:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",m:"light"};
const D = {bg:"#08080E",bgW:"#0A0A12",bgC:"#0B0A14",card:"rgba(255,255,255,0.03)",cb:"rgba(255,255,255,0.07)",cs:"0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",ch:"0 16px 48px rgba(92,79,229,0.15), 0 0 0 1px rgba(255,255,255,0.08)",tx:"#F5F4FF",sub:"#A8A4BE",mu:"#5D596F",p:"#8B7FF5",pS:"rgba(139,127,245,0.1)",g:"#4ADE9A",gS:"rgba(74,222,154,0.08)",gold:"#F0C830",goldS:"rgba(240,200,48,0.08)",goldT:"#08080E",pk:"#F78DC2",pkS:"rgba(247,141,194,0.08)",or:"#FFB84D",orS:"rgba(255,184,77,0.08)",bl:"#70AEFF",blS:"rgba(112,174,255,0.08)",coral:"#FF8A8A",nav:"rgba(8,8,14,0.85)",navB:"rgba(255,255,255,0.06)",footer:"#050508",cta:"linear-gradient(135deg,#5C4FE5,#8B7FF5)",m:"dark"};
const fh="'Sora',sans-serif",fb="'Plus Jakarta Sans',sans-serif";
const WA="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+tertarik+kelas+Privat";

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
function Rv({children,delay=0}){const[ref,v]=useVis();return <div ref={ref} style={{opacity:v?1:0,transform:v?"none":"translateY(20px)",transition:`all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`}}>{children}</div>;}
function AvatarFace({gender="girl",color,size=56}){return <svg width={size} height={size} viewBox="0 0 56 56"><circle cx="28" cy="28" r="26" fill={color} opacity="0.12"/><circle cx="28" cy="24" r="14" fill="#FFD6A5"/>{gender==="girl"?<><path d="M14 20c0-10 28-10 28 0v2c-4-6-24-6-28 0v-2z" fill={color} opacity="0.7"/><circle cx="16" cy="26" r="3" fill={color} opacity="0.4"/><circle cx="40" cy="26" r="3" fill={color} opacity="0.4"/></>:<path d="M14 18c0-8 28-8 28 0v4c-2-8-26-8-28 0v-4z" fill={color} opacity="0.6"/>}<circle cx="23" cy="23" r="1.5" fill="#1A1535"/><circle cx="33" cy="23" r="1.5" fill="#1A1535"/><path d="M24 28q4 3 8 0" stroke="#1A1535" strokeWidth="1.2" fill="none" strokeLinecap="round"/><rect x="18" y="38" width="20" height="14" rx="6" fill={color} opacity="0.3"/></svg>;}

const animations = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Nunito:wght@900&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}body{overflow-x:hidden;-webkit-font-smoothing:antialiased}
::selection{background:#5C4FE540}
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
  .hero-flex{flex-direction:column!important;text-align:center!important}
  .hero-right{display:none!important}.story-flex{flex-direction:column!important}
}
@media(min-width:769px){.mobile-menu-btn{display:none!important}}
`;

// ═══════ NAV (same as production) ═══════
function Nav({isDark,toggle}){
  const t=useT();const[sc,setSc]=useState(false);const[openDD,setOpenDD]=useState(null);const[mob,setMob]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>50);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  const dropdowns=[
    {label:"Untuk Siapa",items:[{text:"Anak (7–13 thn)",href:"/untuk-anak"},{text:"Remaja SMP–SMA (13–18 thn)",href:"/untuk-remaja"},{text:"Mama Yang Mau Belajar",href:"/untuk-orang-tua"},{text:"Kelas Privat 1-on-1",href:"/kursus/privat"}]},
    {label:"Pelajaran",items:[{text:"Bahasa Inggris",href:"/kursus/bahasa-inggris"},{text:"Bahasa Arab",href:"/kursus/bahasa-arab"},{text:"Mandarin",href:"/kursus/bahasa-mandarin"},{text:"Matematika",href:"/kursus/matematika"}]},
  ];
  return <>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc?t.nav:"rgba(26,21,53,0.6)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${sc?t.navB:"rgba(255,255,255,0.04)"}`,transition:"all 0.35s"}}>
      <W s={{display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
        <EdukaziaLogo variant={t.m==='dark'||!sc?'white':'default'} size="md" href="/"/>{sc&&<span className="hide-mobile" style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.p,background:t.pS,padding:"4px 12px",borderRadius:100,marginLeft:8,whiteSpace:"nowrap"}}>Bimbel dari Maluku Utara yang punya LMS Keren!</span>}
        <div className="desktop-menu" style={{display:"flex",alignItems:"center",gap:4}}>
          {dropdowns.map((dd,di)=><div key={di} style={{position:"relative"}} onMouseEnter={()=>setOpenDD(di)} onMouseLeave={()=>setOpenDD(null)}><button style={{fontFamily:fb,fontSize:13,fontWeight:600,color:sc?t.sub:"rgba(255,255,255,0.7)",background:"none",border:"none",cursor:"pointer",padding:"8px 12px",borderRadius:8,display:"flex",alignItems:"center",gap:5}}>{dd.label}<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>{openDD===di&&<div style={{position:"absolute",top:"100%",left:0,background:t.card,borderRadius:14,border:`1px solid ${t.cb}`,boxShadow:"0 12px 40px rgba(0,0,0,0.15)",padding:6,minWidth:220,zIndex:100}}>{dd.items.map((item,ii)=><a key={ii} href={item.href} style={{display:"block",padding:"10px 16px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:13,fontWeight:600,color:t.tx}} onMouseEnter={e=>e.currentTarget.style.background=t.pS} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{item.text}</a>)}</div>}</div>)}
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:sc?t.pS:"rgba(255,255,255,0.08)",border:`1px solid ${sc?t.cb:"rgba(255,255,255,0.08)"}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:8}}>{isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:t.cta,borderRadius:12,padding:"10px 22px",textDecoration:"none",boxShadow:"0 4px 16px rgba(92,79,229,0.2)",marginLeft:8}}>Login ke Portal</a>
        </div>
        <div className="mobile-menu-btn" style={{display:"none",alignItems:"center",gap:8}}>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:11,color:"#fff",background:t.cta,borderRadius:10,padding:"8px 14px",textDecoration:"none",whiteSpace:"nowrap"}}>Login ke Portal</a>
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.08)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>{isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <button onClick={()=>setMob(m=>!m)} style={{width:36,height:36,borderRadius:10,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.08)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">{mob?<><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>:<><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}</svg></button>
        </div>
      </W>
    </nav>
    {mob&&<div style={{position:"fixed",top:68,left:0,right:0,bottom:0,background:t.card,zIndex:999,padding:24,overflowY:"auto"}} onClick={()=>setMob(false)}>
      <div style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.p,background:t.pS,padding:"6px 14px",borderRadius:100,display:"inline-block",marginBottom:20}}>Bimbel dari Maluku Utara yang punya LMS Keren!</div>
      {dropdowns.map((dd,di)=><div key={di} style={{marginBottom:20}}><div style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,marginBottom:8}}>{dd.label}</div>{dd.items.map((item,ii)=><a key={ii} href={item.href} onClick={()=>setMob(false)} style={{display:"block",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:14,fontWeight:500,color:t.sub,borderBottom:`1px solid ${t.cb}`}}>{item.text}</a>)}</div>)}
    </div>}
  </>;
}

// ═══════ 1. HERO — Premium dark, centered, 1:1 focus ═══════
function Hero(){
  const t=useT();
  return <section style={{background:"linear-gradient(160deg,#1A1535 0%,#2D2560 40%,#1A1535 100%)",paddingTop:140,paddingBottom:88,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:"15%",left:"10%",width:300,height:300,borderRadius:"50%",background:"#5C4FE5",opacity:0.05,filter:"blur(100px)"}}/>
    <div style={{position:"absolute",bottom:"10%",right:"10%",width:250,height:250,borderRadius:"50%",background:"#E6B800",opacity:0.04,filter:"blur(80px)"}}/>
    <W>
      <div className="hero-flex" style={{display:"flex",alignItems:"center",gap:52}}>
        {/* Left — Copy */}
        <div style={{flex:"1 1 480px"}}>
          <Rv>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(230,184,0,0.08)",borderRadius:100,padding:"6px 20px",marginBottom:24,border:"1px solid rgba(230,184,0,0.15)"}}>
              <div style={{fontFamily:fh,fontSize:24,fontWeight:800,color:"#E6B800",lineHeight:1}}>1:1</div>
              <div style={{width:1,height:18,background:"rgba(255,255,255,0.1)"}}/>
              <span style={{fontFamily:fb,fontSize:13,fontWeight:700,color:"#E6B800"}}>Kelas Privat</span>
            </div>
          </Rv>
          <Rv delay={0.08}>
            <h1 style={{fontFamily:fh,fontSize:46,fontWeight:800,color:"#fff",lineHeight:1.1,letterSpacing:-1.5,margin:"0 0 14px"}}>
              Satu Tutor.<br/>Satu Siswa.<br/><span style={{color:"#E6B800"}}>Satu Fokus.</span>
            </h1>
          </Rv>
          <Rv delay={0.12}>
            <p style={{fontFamily:fb,fontSize:16,color:"rgba(255,255,255,0.4)",lineHeight:1.75,margin:"0 0 32px",maxWidth:420}}>
              Kurikulum terstruktur sesuai level. Jadwal sesuai kesibukan. Reschedule gratis. Tutor yang fokus 100% ke Anda — bukan ke 11 siswa lain.
            </p>
          </Rv>
          <Rv delay={0.16}>
            <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:15,color:"#1A1535",background:"#E6B800",borderRadius:14,padding:"16px 36px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(230,184,0,0.25)"}}><WAIcon size={18} color="#1A1535"/> Daftar Kelas Privat</a>
          </Rv>
          <Rv delay={0.2}>
            <div style={{display:"flex",gap:16,marginTop:36,flexWrap:"wrap"}}>
              {[{icon:<Calendar size={14} color={t.p}/>,text:"Jadwal Fleksibel"},{icon:<RefreshCw size={14} color={t.p}/>,text:"Reschedule Gratis"},{icon:<BarChart3 size={14} color={t.p}/>,text:"Kurikulum Berbasis Level"}].map(f=>
                <div key={f.text} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",background:"rgba(255,255,255,0.04)",borderRadius:8,border:"1px solid rgba(255,255,255,0.06)"}}>
                  <span style={{fontSize:12}}>{f.icon}</span>
                  <span style={{fontFamily:fb,fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.5)"}}>{f.text}</span>
                </div>
              )}
            </div>
          </Rv>
        </div>

        {/* Right — Contrast visual: Kelas Biasa vs Privat */}
        <div className="hero-right" style={{flex:"0 0 380px",position:"relative"}}>
          <Rv delay={0.15}>
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              {/* Kelas Biasa */}
              <div style={{background:"rgba(255,255,255,0.03)",borderRadius:20,padding:"24px 28px",border:"1px solid rgba(255,255,255,0.06)",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"rgba(255,255,255,0.06)"}}/>
                <div style={{fontFamily:fb,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:0.8,marginBottom:14}}>Kelas Biasa</div>
                <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
                  {/* 1 tutor */}
                  <div style={{textAlign:"center"}}>
                    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="rgba(255,255,255,0.06)"/><circle cx="16" cy="13" r="5" fill="rgba(255,255,255,0.15)"/><path d="M8 26c0-5 16-5 16 0" fill="rgba(255,255,255,0.1)"/></svg>
                    <div style={{fontFamily:fb,fontSize:8,color:"rgba(255,255,255,0.25)",marginTop:2}}>1 Guru</div>
                  </div>
                  <div style={{fontFamily:fb,fontSize:14,color:"rgba(255,255,255,0.15)"}}>→</div>
                  {/* 8 siswa kecil-kecil */}
                  <div style={{flex:1,display:"flex",flexWrap:"wrap",gap:3,justifyContent:"center"}}>
                    {Array(12).fill(0).map((_,i)=>
                      <div key={i} style={{width:24,height:24,borderRadius:6,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:6,height:6,borderRadius:"50%",background:"rgba(255,255,255,0.12)"}}/>
                      </div>
                    )}
                  </div>
                </div>
                <div style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.25)",lineHeight:1.5}}>Perhatian terbagi 12 siswa. Tempo sama untuk semua. Anak Anda = salah satu dari banyak.</div>
              </div>

              {/* Kelas Privat */}
              <div style={{background:"rgba(230,184,0,0.06)",borderRadius:20,padding:"24px 28px",border:"1px solid rgba(230,184,0,0.15)",position:"relative",overflow:"hidden",boxShadow:"0 8px 32px rgba(230,184,0,0.08)"}}>
                <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"#E6B800",opacity:0.5}}/>
                <div style={{fontFamily:fb,fontSize:10,fontWeight:700,color:"#E6B800",textTransform:"uppercase",letterSpacing:0.8,marginBottom:14}}>Kelas Privat EduKazia</div>
                <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
                  {/* 1 tutor */}
                  <div style={{textAlign:"center"}}>
                    <svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="22" r="20" fill="rgba(230,184,0,0.1)"/><circle cx="22" cy="18" r="7" fill="rgba(230,184,0,0.25)"/><path d="M10 38c0-7 24-7 24 0" fill="rgba(230,184,0,0.15)"/></svg>
                    <div style={{fontFamily:fb,fontSize:8,color:"#E6B800",marginTop:2}}>1 Tutor</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16M16 6l6 6-6 6" stroke="#E6B800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/></svg>
                  </div>
                  {/* 1 siswa — besar, terang, fokus */}
                  <div style={{textAlign:"center"}}>
                    <div style={{width:56,height:56,borderRadius:16,background:"rgba(230,184,0,0.12)",border:"2px solid rgba(230,184,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 20px rgba(230,184,0,0.1)",animation:"pulse 2s ease infinite"}}>
                      <div style={{width:20,height:20,borderRadius:"50%",background:"#E6B800",boxShadow:"0 0 12px rgba(230,184,0,0.4)"}}/>
                    </div>
                    <div style={{fontFamily:fb,fontSize:8,color:"#E6B800",marginTop:4}}>Anak Anda</div>
                  </div>
                </div>
                <div style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>Perhatian <span style={{color:"#E6B800",fontWeight:700}}>100%</span>. Tempo sesuai anak. Tutor kenal karakter & cara belajarnya.</div>
              </div>
            </div>
          </Rv>

          {/* Floating badge */}
          <div style={{position:"absolute",top:-10,right:-16,background:"rgba(26,21,53,0.95)",borderRadius:12,padding:"10px 16px",border:"1px solid rgba(230,184,0,0.15)",boxShadow:"0 8px 20px rgba(0,0,0,0.3)",animation:"float 5s ease-in-out infinite",zIndex:2}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:14}}>⚡</span>
              <div><div style={{fontFamily:fh,fontSize:11,fontWeight:800,color:"#E6B800"}}>Fokus Penuh</div><div style={{fontFamily:fb,fontSize:8,color:"rgba(255,255,255,0.35)"}}>Bukan 1 dari 12</div></div>
            </div>
          </div>
        </div>
      </div>
    </W>
  </section>;
}

// ═══════ 2. AUDIENCE SELECTOR — "Privat untuk Siapa?" ═══════
function AudienceSection(){
  const t=useT();
  const[tab,setTab]=useState(0);

  const audiences = [
    {
      label:"Anak 7–13 thn",icon:<GraduationCap size={20} color={t.pk}/>,c:t.pk,
      headline:"Anak Belajar Sesuai Temponya",
      desc:"Anak yang pemalu jadi berani coba. Anak yang cepat paham tidak harus nunggu teman. Tutor kenal karakter anak dan tahu cara mendekatinya.",
      pains:["Anak malu atau tidak berani ngomong di kelompok","Butuh perhatian ekstra yang tidak didapat di sekolah","Di daerah tidak ada guru yang cocok untuk anak"],
      outcomes:["Anak mulai berani karena tidak takut salah — cuma ada tutor","Tempo belajar sesuai anak: yang lambat tidak dipaksa, yang cepat tidak ditahan","Progress terukur — Mama pantau lewat portal"],
      story:{name:"Mama Aisyah",child:"Aqil, 9 thn",subject:"Bahasa Inggris",before:"Diam di kelas, malu ngomong",after:"Mulai berani jawab tutor",detail:"Tes Level tunjukkan grammar oke tapi speaking nol. Di kelas Privat, tutor fokus conversation 1-on-1. Tidak ada teman yang menertawakan. Aqil mulai berani coba.",gender:"boy"},
      waText:"Halo+EduKazia%2C+saya+ingin+kelas+Privat+untuk+anak+saya.+Usia%3A+...+Pelajaran%3A+...",
    },
    {
      label:"Remaja 13–18 thn",icon:<GraduationCap size={20} color={t.bl}/>,c:t.bl,
      headline:"Perhatian Penuh di Usia yang Paling Menentukan",
      desc:"SMP–SMA itu masa kritis. Di kelas Privat, tutor jadi mentor yang paham cara belajar anak — bukan sekedar guru yang ngasih materi lalu pergi.",
      pains:["Jadwal sekolah & ekskul padat, les offline bentrok","Mau bisa bahasa asing tapi tidak tahu mulai dari mana","Materi sekolah terlalu cepat, butuh penjelasan ulang yang sabar"],
      outcomes:["Jadwal 100% fleksibel — sesuai jadwal sekolah & ekskul","Materi difokuskan ke gap spesifik anak dari Tes Level","Tutor jadi mentor yang paham karakter & cara belajar anak"],
      story:{name:"Mama Yanti",child:"Nabila, 15 thn",subject:"Bahasa Inggris",before:"Grogi presentasi, diam di kelas",after:"Mulai berani angkat tangan",detail:"Speaking-nya nol latihan. Di Privat, tutor ajak conversation & mini public speaking tiap sesi. Tidak ada tekanan dari teman. Nabila pelan-pelan berani.",gender:"girl"},
      waText:"Halo+EduKazia%2C+saya+ingin+kelas+Privat+untuk+anak+remaja+saya.+Usia%3A+...+Kelas%3A+...",
    },
    {
      label:"Mama / Dewasa",icon:<Users size={20} color={t.g}/>,c:t.g,
      headline:"Belajar Tanpa Malu, Tanpa Tekanan",
      desc:"Cuma Mama dan tutor. Tidak ada yang menilai, tidak ada yang lebih muda yang bikin minder. Tempo belajar sesuai Mama — tidak dipaksa cepat.",
      pains:["Malu belajar di usia segini, takut dinilai","Anak tanya PR tapi Mama cuma bisa bilang 'tanya guru aja'","Sibuk urus rumah tangga, tidak punya waktu tetap"],
      outcomes:["Privat = hanya Mama dan tutor. Sepenuhnya privat","Mama belajar → bonus bisa bantu anak belajar di rumah","Jadwal sesuai Mama: pagi, siang, malam — reschedule tanpa biaya tambahan"],
      story:{name:"Mama Julaiha",child:"35 thn",subject:"Bahasa Inggris",before:"Malu ngomong, takut salah grammar",after:"Mulai berani jawab 'How are you?'",detail:"Belum pernah les Inggris seumur hidup. Di Privat, tidak ada yang menertawakan. Tutor sabar, mulai dari greeting. Sekarang Julaiha tidak panik kalau ada yang tanya bahasa Inggris.",gender:"girl"},
      waText:"Halo+EduKazia%2C+saya+Mama+yang+mau+ikut+kelas+Privat.+Pelajaran%3A+...",
    },
  ];

  const a = audiences[tab];

  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:38,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5,lineHeight:1.15}}>Privat untuk Siapa?</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Satu produk, tiga kebutuhan yang berbeda. Pilih yang sesuai.</p>
    </div></Rv>

    {/* Tab selector — immersive photo cards, all bright */}
    <Rv delay={0.05}>
      <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:44}}>
        {audiences.map((au,i)=>{
          const active = tab===i;
          const photos = [
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=500&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=500&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=400&h=500&fit=crop&crop=faces",
          ];
          const subs = ["Fondasi kuat sejak dini","Arahkan potensi remaja","Upgrade diri, bantu anak"];
          return <div key={i} onClick={()=>setTab(i)} style={{
            height:200,borderRadius:22,overflow:"hidden",
            backgroundImage:`url(${photos[i]})`,backgroundSize:"cover",backgroundPosition:"center",
            position:"relative",cursor:"pointer",
            transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
            transform:active?"scale(1.03)":"scale(1)",
            border:active?`3px solid ${au.c}`:`3px solid transparent`,
            boxShadow:active?`0 16px 48px ${au.c}30`:"0 4px 16px rgba(0,0,0,0.08)",
          }}>
            {/* Gradient overlay — soft bottom gradient for text readability, same for all */}
            <div style={{position:"absolute",inset:0,background:`linear-gradient(180deg,transparent 30%,${au.c}CC 90%,${au.c} 100%)`,transition:"all 0.4s"}}/>

            {/* Active checkmark */}
            {active && <div style={{position:"absolute",top:14,right:14,width:28,height:28,borderRadius:"50%",background:au.c,border:"3px solid rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 0 12px ${au.c}50`}}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>}

            {/* Text at bottom */}
            <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"20px 22px"}}>
              <div style={{fontFamily:fh,fontSize:20,fontWeight:800,color:"#fff",marginBottom:4}}>{au.label}</div>
              <div style={{fontFamily:fb,fontSize:13,color:"rgba(255,255,255,0.85)",lineHeight:1.4}}>{subs[i]}</div>
            </div>
          </div>;
        })}
      </div>
    </Rv>

    {/* Content for selected audience */}
    <div key={tab} style={{animation:"countUp 0.4s ease"}}>
      {/* Headline + description */}
      <div style={{maxWidth:800,margin:"0 auto 40px",textAlign:"center"}}>
        <h3 style={{fontFamily:fh,fontSize:28,fontWeight:800,color:t.tx,margin:"0 0 12px",lineHeight:1.2}}>{a.headline}</h3>
        <p style={{fontFamily:fb,fontSize:15,color:t.sub,lineHeight:1.7,maxWidth:560,margin:"0 auto"}}>{a.desc}</p>
      </div>

      {/* Pain → Outcome side by side */}
      <div className="story-flex" style={{display:"flex",gap:20,marginBottom:36}}>
        <div style={{flex:1,background:`${t.coral}04`,borderRadius:20,padding:"28px",border:`1px solid ${t.coral}10`}}>
          <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.coral,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Tanpa Privat</div>
          {a.pains.map((p,i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<a.pains.length-1?12:0,alignItems:"flex-start"}}>
            <div style={{width:20,height:20,borderRadius:6,background:`${t.coral}10`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,marginTop:1}}>✗</div>
            <span style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.6}}>{p}</span>
          </div>)}
        </div>
        <div style={{flex:1,background:t.pS,borderRadius:20,padding:"28px",border:`1px solid ${a.c}12`}}>
          <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:a.c,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Dengan Privat EduKazia</div>
          {a.outcomes.map((o,i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<a.outcomes.length-1?12:0,alignItems:"flex-start"}}>
            <div style={{width:20,height:20,borderRadius:6,background:`${a.c}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,marginTop:1,color:a.c}}>✓</div>
            <span style={{fontFamily:fb,fontSize:14,color:t.tx,lineHeight:1.6,fontWeight:500}}>{o}</span>
          </div>)}
        </div>
      </div>

      {/* CTA — right after Pain vs Outcome, before testimony */}
      <div style={{textAlign:"center",marginBottom:36}}>
        <a href={`https://wa.me/6281384253679?text=${a.waText}`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:t.goldT,background:t.gold,borderRadius:14,padding:"14px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#1A1535"/> Daftar Kelas Privat</a>
      </div>

      {/* Story card — bonus proof */}
      {/* HIDDEN: fake testimonial story — TODO re-enable with real data */}
      {false && (
        <div style={{maxWidth:700,margin:"0 auto",background:t.card,borderRadius:22,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
        <div style={{background:a.c,padding:"14px 28px",display:"flex",alignItems:"center",gap:10}}>
          <AvatarFace gender={a.story.gender} color="#fff" size={36}/>
          <div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:"#fff"}}>{a.story.name}</div><div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.65)"}}>{a.story.child} · {a.story.subject}</div></div>
        </div>
        <div style={{padding:"22px 28px"}}>
          <div style={{display:"flex",gap:10,marginBottom:16}}>
            <div style={{flex:1,background:`${t.coral}06`,borderRadius:10,padding:"10px",border:`1px solid ${t.coral}08`,textAlign:"center"}}><div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:t.coral,textTransform:"uppercase",marginBottom:2}}>Sebelum</div><div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.coral,lineHeight:1.3}}>{a.story.before}</div></div>
            <div style={{display:"flex",alignItems:"center",color:t.mu,fontSize:14}}>→</div>
            <div style={{flex:1,background:`${a.c}08`,borderRadius:10,padding:"10px",border:`1px solid ${a.c}10`,textAlign:"center"}}><div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:a.c,textTransform:"uppercase",marginBottom:2}}>Sesudah</div><div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:a.c,lineHeight:1.3}}>{a.story.after}</div></div>
          </div>
          <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.75,margin:0}}>{a.story.detail}</p>
        </div>
      </div>
      )}
    </div>
  </W></section>;
}

// ═══════ 3. SUBJECTS — Available in Privat ═══════
function Subjects(){
  const t=useT();
  const subs=[
    {name:"Bahasa Inggris",desc:"Speaking, pronunciation, conversation. Dari nol sampai percaya diri ngomong.",c:t.p},
    {name:"Bahasa Arab",desc:"Tajwid, makhraj, muhadatsah, baca Al-Quran. Paham, bukan sekedar hafal.",c:t.g},
    {name:"Mandarin 中文",desc:"Pinyin, karakter dasar, percakapan. Langkah pertama menuju bahasa masa depan.",c:t.or},
    {name:"Matematika",desc:"Metode Singapura — logika & pemahaman konsep, bukan hafal rumus.",c:t.pk},
  ];
  return <section style={{background:t.bgW,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Mau Belajar Apa?</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Semua pelajaran tersedia di kelas Privat. Kurikulum berbasis level.</p>
    </div></Rv>
    <div className="grid-2" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>
      {subs.map((s,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:16,padding:"22px 24px",border:`1.5px solid ${h?s.c+"30":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.3s",transform:h?"translateY(-3px)":"none",display:"flex",gap:14,alignItems:"flex-start"}}>
          <div style={{width:4,height:32,borderRadius:2,background:s.c,flexShrink:0,marginTop:4}}/>
          <div>
            <h3 style={{fontFamily:fh,fontSize:16,fontWeight:700,color:t.tx,margin:"0 0 4px"}}>{s.name}</h3>
            <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:0}}>{s.desc}</p>
          </div>
        </div>
      </Rv>;})}
    </div>
  </W></section>;
}

// ═══════ 4. HOW IT WORKS — Tes Level + start ═══════
function HowItWorks(){
  const t=useT();
  return <section id="tes-level" style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Mulai dari Tes Level</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,maxWidth:460,marginLeft:"auto",marginRight:"auto",lineHeight:1.7}}>Supaya setiap sesi Privat tepat sasaran — tidak buang waktu di materi yang salah.</p>
    </div></Rv>
    <Rv delay={0.1}>
      <div style={{maxWidth:700,margin:"0 auto",display:"flex",flexDirection:"column",gap:0}}>
        {[
          {n:"1",icon:<MessageSquare size={22} color={t.p}/>,title:"Chat WhatsApp",desc:"Bilang siapa yang mau belajar (anak/remaja/Mama) dan pelajaran apa."},
          {n:"2",icon:<ClipboardCheck size={22} color={t.p}/>,title:"Tes Level Online",desc:"30 menit via Zoom bersama tutor. Santai, tanpa tekanan."},
          {n:"3",icon:<BarChart3 size={22} color={t.p}/>,title:"Terima Laporan & Roadmap",desc:"Level sekarang, kekuatan, kelemahan, dan rencana belajar personal."},
          {n:"4",icon:<Zap size={22} color={t.p}/>,title:"Mulai Kelas Privat",desc:"Jadwal disepakati, mulai belajar sesuai level & roadmap."},
        ].map((s,i)=>
          <div key={i} style={{display:"flex",gap:20,alignItems:"flex-start"}}>
            {/* Timeline */}
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0}}>
              <div style={{width:40,height:40,borderRadius:12,background:t.pS,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{s.icon}</div>
              {i<3&&<div style={{width:2,height:32,background:t.cb}}/>}
            </div>
            {/* Content */}
            <div style={{paddingBottom:i<3?24:0}}>
              <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.p,marginBottom:2}}>Step {s.n}</div>
              <h4 style={{fontFamily:fh,fontSize:16,fontWeight:700,color:t.tx,margin:"0 0 4px"}}>{s.title}</h4>
              <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:0}}>{s.desc}</p>
            </div>
          </div>
        )}
      </div>
    </Rv>
    <Rv delay={0.15}><div style={{textAlign:"center",marginTop:36}}>
      <a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+Tes+Level+untuk+kelas+Privat`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:t.goldT,background:t.gold,borderRadius:14,padding:"14px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#1A1535"/> Daftar Tes Level</a>
      <p style={{fontFamily:fb,fontSize:12,color:t.mu,marginTop:10}}>30 menit via Zoom · Hasil dikirim ke WhatsApp</p>
    </div></Rv>
  </W></section>;
}

// ═══════ 5. FAQ ═══════
function FAQSection(){
  const t=useT();const[op,setOp]=useState(null);
  const faqs=[
    ["Privat bisa untuk siapa aja?","Anak (7–13 thn), remaja SMP–SMA, dan Mama/dewasa. Satu tutor, satu siswa — siapapun yang belajar."],
    ["Bagaimana jadwalnya?","100% fleksibel. Siswa dan tutor sepakati bersama — pagi, siang, atau malam."],
    ["Bisa reschedule?","Bisa, tanpa biaya tambahan. Hubungi admin minimal beberapa jam sebelumnya."],
    ["Bagaimana kurikulumnya?","Terstruktur berbasis level dari Tes Level. Semua siswa belajar kurikulum yang sama — yang berbeda adalah titik mulai dan tempo belajarnya."],
    ["Bagaimana sistem pembayarannya?","Per paket — supaya ringan. Detail harga konsultasi via WhatsApp."],
    ["Ada rekaman kelas?","Ada. Semua sesi direkam dan bisa ditonton ulang kapan saja."],
  ];
  return <section style={{background:t.bgW,padding:"80px 0"}}><W>
    <div style={{maxWidth:700,margin:"0 auto"}}>
      <Rv><div style={{textAlign:"center",marginBottom:36}}>
        <h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:0}}>Pertanyaan tentang Privat</h2>
      </div></Rv>
      <Rv delay={0.05}>{faqs.map(([q,a],i)=><div key={i} style={{background:t.card,borderRadius:14,marginBottom:8,border:`1px solid ${op===i?t.p+"25":t.cb}`,overflow:"hidden",transition:"border 0.2s"}}>
        <button onClick={()=>setOp(op===i?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>
          <span style={{fontFamily:fh,fontSize:14,fontWeight:600,color:op===i?t.tx:t.sub,flex:1}}>{q}</span>
          <span style={{fontSize:18,color:t.p,transition:"transform 0.3s",transform:op===i?"rotate(45deg)":"none",fontWeight:300}}>+</span>
        </button>
        <div style={{maxHeight:op===i?140:0,transition:"max-height 0.3s ease",overflow:"hidden"}}><p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.75,padding:"0 20px 18px"}}>{a}</p></div>
      </div>)}</Rv>
      <Rv delay={0.1}><div style={{textAlign:"center",marginTop:20}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:"#25D366",borderRadius:12,padding:"12px 24px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14}/> Chat WhatsApp</a></div></Rv>
    </div>
  </W></section>;
}

// ═══════ 6. CTA FINAL ═══════
function CTAFinal(){
  const t=useT();
  return <section style={{background:t.bg,padding:"80px 0"}}><W><Rv>
    <div style={{background:"linear-gradient(135deg,#1A1535,#2D2560)",borderRadius:28,overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:-30,right:-30,width:150,height:150,borderRadius:"50%",background:"#E6B800",opacity:0.05,filter:"blur(50px)"}}/>
      <div style={{padding:"56px 48px",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{fontFamily:fh,fontSize:36,fontWeight:800,color:"#E6B800",lineHeight:1,marginBottom:14}}>1 : 1</div>
        <h2 style={{fontFamily:fh,fontSize:30,fontWeight:800,color:"#fff",margin:"0 0 12px",lineHeight:1.2}}>Belajar dengan Fokus Penuh.<br/>Mulai Sekarang.</h2>
        <p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.45)",lineHeight:1.7,marginBottom:28,maxWidth:440,marginLeft:"auto",marginRight:"auto"}}>Chat langsung. Kami bantu tentukan pelajaran, tutor, dan jadwal yang pas.</p>
        <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:16,color:"#1A1535",background:"#E6B800",borderRadius:14,padding:"16px 40px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(230,184,0,0.25)"}}><WAIcon size={18} color="#1A1535"/> Daftar Kelas Privat</a>
        <p style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.25)",marginTop:12}}>Tanpa kontrak · Reschedule untuk Privat</p>
      </div>
    </div>
  </Rv></W></section>;
}

// ═══════ FOOTER ═══════
function Footer(){const t=useT();return <footer style={{background:t.footer,padding:"40px 0 20px"}}><W><div style={{display:"flex",gap:36,flexWrap:"wrap",marginBottom:28}}><div style={{flex:"1 1 200px"}}><div style={{marginBottom:12}}><EdukaziaLogo variant="white" size="sm" href="/"/></div><p style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,maxWidth:200}}>Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia.</p></div>{[{t:"Pelajaran",i:["Bahasa Inggris","Bahasa Arab","Mandarin","Matematika"]},{t:"Kelas",i:["Privat 1-on-1","Semi Privat","Reguler"]},{t:"Lainnya",i:["FAQ","Portal Orang Tua","Kebijakan Privasi"]}].map(col=><div key={col.t} style={{flex:"1 1 100px"}}><h4 style={{fontFamily:fh,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.45)",marginBottom:12,textTransform:"uppercase",letterSpacing:0.5}}>{col.t}</h4>{col.i.map(item=><div key={item} style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:8}}>{item}</div>)}</div>)}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:14,textAlign:"center"}}><p style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.15)"}}>© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia.</p></div></W></footer>;}
function WAFloat(){return <a href={WA} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:20,right:20,width:52,height:52,borderRadius:14,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",animation:"waPulse 2s ease-in-out infinite",zIndex:999}}><WAIcon size={24}/></a>;}

// ═══════ MAIN — 6 sections ═══════
export default function KursusPrivat(){
  const[isDark,setIsDark]=useState(false);const t=isDark?D:L;
  return <TX.Provider value={t}><div style={{background:t.bg,minHeight:"100vh",transition:"background 0.3s"}}>
    <style>{animations}</style>
    <style>{`body{background:${t.bg};transition:background 0.3s}`}</style>
    <Nav isDark={isDark} toggle={()=>setIsDark(d=>!d)}/>
    <Hero/>
    <AudienceSection/>
    <Subjects/>
    <HowItWorks/>
    <FAQSection/>
    <CTAFinal/>
    <Footer/>
    <WAFloat/>
  </div></TX.Provider>;
}
