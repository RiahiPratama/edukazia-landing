/* eslint-disable */
// @ts-nocheck
"use client";

import { useState, useEffect, useRef, createContext, useContext, Fragment } from "react";
import { AudioLines, BookOpen, ChevronDown, Flame, Globe, GraduationCap, MessageCircle, Mic, Puzzle, Sprout, Zap } from "lucide-react";

const TX = createContext();
const useT = () => useContext(TX);
// Star/premium palette — purple + gold
const L = {bg:"#FDFCFA",bgW:"#FFF8F0",bgC:"#F0EDFF",bgStar:"#FFFBEB",card:"#FFFFFF",cb:"rgba(0,0,0,0.05)",cs:"0 2px 20px rgba(0,0,0,0.04)",ch:"0 12px 40px rgba(92,79,229,0.1)",tx:"#1A1535",sub:"#5E5878",mu:"#9D97B5",p:"#5C4FE5",pS:"#EEEDFC",g:"#10B981",gS:"#ECFDF5",gold:"#E6B800",goldS:"#FFF9E0",goldT:"#1A1535",pk:"#EC4899",pkS:"#FDF2F8",bl:"#3B82F6",blS:"#EFF6FF",or:"#F59E0B",orS:"#FFFBEB",coral:"#EF4444",nav:"rgba(253,252,250,0.92)",navB:"rgba(0,0,0,0.05)",footer:"#1A1535",cta:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",m:"light"};
const D = {bg:"#08080E",bgW:"#0A0A12",bgC:"#0B0A14",bgStar:"#0E0C08",card:"rgba(255,255,255,0.03)",cb:"rgba(255,255,255,0.07)",cs:"0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",ch:"0 16px 48px rgba(92,79,229,0.12), 0 0 0 1px rgba(255,255,255,0.08)",tx:"#F5F4FF",sub:"#A8A4BE",mu:"#5D596F",p:"#8B7FF5",pS:"rgba(139,127,245,0.1)",g:"#4ADE9A",gS:"rgba(74,222,154,0.08)",gold:"#F0C830",goldS:"rgba(240,200,48,0.08)",goldT:"#08080E",pk:"#F78DC2",pkS:"rgba(247,141,194,0.08)",bl:"#70AEFF",blS:"rgba(112,174,255,0.08)",or:"#FFB84D",orS:"rgba(255,184,77,0.08)",coral:"#FF8A8A",nav:"rgba(8,8,14,0.85)",navB:"rgba(255,255,255,0.06)",footer:"#050508",cta:"linear-gradient(135deg,#5C4FE5,#8B7FF5)",m:"dark"};
const fh="'Sora',sans-serif",fb="'Plus Jakarta Sans',sans-serif";
const WA="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+tertarik+program+English+Superstar";

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
function Star({size=16,color="#E6B800",style={}}){return <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;}
// Modern SVG Icons
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
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes twinkle{0%,100%{opacity:0.3}50%{opacity:1}}
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

// ═══════ NAV ═══════
function Nav({isDark,toggle}){
  const t=useT();const[sc,setSc]=useState(false);const[openDD,setOpenDD]=useState(null);const[mob,setMob]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>50);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  const dropdowns=[
    {label:"Untuk Siapa",items:[{text:"Anak (7–13 thn)",href:"/untuk-anak"},{text:"Remaja SMP–SMA (13–18 thn)",href:"/untuk-remaja"},{text:"Mama Yang Mau Belajar",href:"/untuk-orang-tua"},{text:"Kelas Privat 1-on-1",href:"/kursus/privat"}]},
    {label:"Pelajaran",items:[{text:"Bahasa Inggris",href:"/kursus/bahasa-inggris"},{text:"English Superstar ⭐",href:"/kursus/bahasa-inggris/superstar"},{text:"Bahasa Arab",href:"/kursus/bahasa-arab"},{text:"Mandarin",href:"/kursus/bahasa-mandarin"},{text:"Matematika",href:"/kursus/matematika"}]},
  ];
  return <>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc?t.nav:"rgba(26,21,53,0.7)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${sc?t.navB:"rgba(255,255,255,0.04)"}`,transition:"all 0.35s"}}>
      <W s={{display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
        <EdukaziaLogo variant={t.m==='dark'||!sc?'white':'default'} size="md" href="/"/>{sc&&<span className="hide-mobile" style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.p,background:t.pS,padding:"4px 12px",borderRadius:100,marginLeft:8}}>Bimbel dari Maluku Utara yang punya LMS Keren!</span>}
        <div className="desktop-menu" style={{display:"flex",alignItems:"center",gap:4}}>
          {dropdowns.map((dd,di)=><div key={di} style={{position:"relative"}} onMouseEnter={()=>setOpenDD(di)} onMouseLeave={()=>setOpenDD(null)}><button style={{fontFamily:fb,fontSize:13,fontWeight:600,color:sc?t.sub:"rgba(255,255,255,0.7)",background:"none",border:"none",cursor:"pointer",padding:"8px 12px",borderRadius:8,display:"flex",alignItems:"center",gap:5}}>{dd.label}<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>{openDD===di&&<div style={{position:"absolute",top:"100%",left:0,background:t.card,borderRadius:14,border:`1px solid ${t.cb}`,boxShadow:"0 12px 40px rgba(0,0,0,0.15)",padding:6,minWidth:220,zIndex:100}}>{dd.items.map((item,ii)=><a key={ii} href={item.href} style={{display:"block",padding:"10px 16px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:13,fontWeight:600,color:t.tx}} onMouseEnter={e=>e.currentTarget.style.background=t.pS} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{item.text}</a>)}</div>}</div>)}
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:sc?t.pS:"rgba(255,255,255,0.08)",border:`1px solid ${sc?t.cb:"rgba(255,255,255,0.08)"}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:8}}>{isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:t.cta,borderRadius:12,padding:"10px 22px",textDecoration:"none",marginLeft:8}}>Login ke Portal</a>
        </div>
        <div className="mobile-menu-btn" style={{display:"none",alignItems:"center",gap:8}}>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:11,color:"#fff",background:t.cta,borderRadius:10,padding:"8px 14px",textDecoration:"none"}}>Login ke Portal</a>
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.08)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>{isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <button onClick={()=>setMob(m=>!m)} style={{width:36,height:36,borderRadius:10,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.08)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">{mob?<><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>:<><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}</svg></button>
        </div>
      </W>
    </nav>
    {mob&&<div style={{position:"fixed",top:68,left:0,right:0,bottom:0,background:t.card,zIndex:999,padding:24,overflowY:"auto"}} onClick={()=>setMob(false)}>{dropdowns.map((dd,di)=><div key={di} style={{marginBottom:20}}><div style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,marginBottom:8}}>{dd.label}</div>{dd.items.map((item,ii)=><a key={ii} href={item.href} onClick={()=>setMob(false)} style={{display:"block",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:14,fontWeight:500,color:t.sub,borderBottom:`1px solid ${t.cb}`}}>{item.text}</a>)}</div>)}</div>}
  </>;
}

// ═══════ 1. HERO — Split layout with journey roadmap visual ═══════
function Hero(){
  const t=useT();
  const[activeStep,setActiveStep]=useState(0);
  const steps=["Phonemic\nAwareness","Phonics","Spoken\nEnglish"];
  useEffect(()=>{const i=setInterval(()=>setActiveStep(p=>(p+1)%3),2500);return()=>clearInterval(i);},[]);

  return <section className="superstar-hero" style={{background:"linear-gradient(160deg,#1A1535 0%,#2D2560 30%,#1A1535 60%,#2A1C0E 100%)",paddingTop:160,paddingBottom:80,position:"relative",overflow:"hidden"}}>
    {[{top:"12%",left:"5%",s:8,d:2},{top:"20%",right:"8%",s:6,d:3},{top:"55%",left:"12%",s:5,d:1.5},{top:"70%",right:"18%",s:7,d:2.5},{top:"85%",left:"6%",s:4,d:3.5}].map((st,i)=>
      <div key={i} style={{position:"absolute",top:st.top,left:st.left,right:st.right,animation:`twinkle ${st.d+2}s ease-in-out infinite`,animationDelay:`${st.d}s`}}><Star size={st.s} color="#E6B800" style={{opacity:0.3}}/></div>
    )}
    <div style={{position:"absolute",top:"10%",left:"10%",width:300,height:300,borderRadius:"50%",background:"#5C4FE5",opacity:0.05,filter:"blur(100px)"}}/>
    <div style={{position:"absolute",bottom:"5%",right:"10%",width:250,height:250,borderRadius:"50%",background:"#E6B800",opacity:0.04,filter:"blur(80px)"}}/>

    <W>
      <div className="hero-flex" style={{display:"flex",alignItems:"center",gap:52}}>
        {/* Left — Copy */}
        <div style={{flex:"1 1 480px"}}>
          <Rv>
            <div style={{fontFamily:fb,fontSize:13,fontWeight:700,color:"#E6B800",background:"rgba(230,184,0,0.08)",padding:"6px 20px",borderRadius:100,display:"inline-flex",alignItems:"center",gap:8,marginBottom:24,border:"1px solid rgba(230,184,0,0.15)"}}>
              <Star size={12} color="#E6B800"/> Program Unggulan EduKazia
            </div>
          </Rv>
          <Rv delay={0.08}>
            <h1 style={{fontFamily:fh,fontSize:46,fontWeight:800,color:"#fff",lineHeight:1.1,letterSpacing:-1.2,margin:"0 0 16px"}}>
              Anak Les Bertahun-tahun,<br/><span style={{background:"linear-gradient(90deg,#E6B800,#FFD700,#E6B800)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Masih Takut Ngomong?</span>
            </h1>
          </Rv>
          <Rv delay={0.12}>
            <p style={{fontFamily:fh,fontSize:18,fontWeight:600,color:"rgba(255,255,255,0.55)",lineHeight:1.5,marginBottom:16}}>English Superstar bangun fondasi yang benar — bukan langsung grammar drill.</p>
            <p style={{fontFamily:fb,fontSize:14,color:"rgba(255,255,255,0.35)",lineHeight:1.7,margin:"0 0 24px",maxWidth:440}}>Program 3 tahap khusus anak & remaja: bunyi huruf → baca lancar → speaking percaya diri. Bukan hafalan vocab, tapi pemahaman yang melekat.</p>
          </Rv>
          <Rv delay={0.14}>
            <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:28}}>
              {["Standar CEFR","Phonics System","Anak 6–17 thn"].map(b=>
                <div key={b} style={{fontFamily:fb,fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"5px 12px",borderRadius:100,display:"inline-flex",alignItems:"center",gap:5}}>
                  <span style={{color:"#E6B800",fontSize:10}}>✓</span> {b}
                </div>
              )}
            </div>
          </Rv>
          <Rv delay={0.16}>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:15,color:"#1A1535",background:"#E6B800",borderRadius:14,padding:"16px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(230,184,0,0.25)"}}><WAIcon size={18} color="#1A1535"/> Daftar English Superstar</a>
              <a href="#journey" style={{fontFamily:fh,fontWeight:600,fontSize:13,color:"rgba(255,255,255,0.5)",borderRadius:14,padding:"16px 22px",textDecoration:"none",border:"1px solid rgba(255,255,255,0.1)"}}>Lihat Program ↓</a>
            </div>
          </Rv>
        </div>

        {/* Right — Journey roadmap visual */}
        <div className="hero-right" style={{flex:"0 0 380px",position:"relative"}}>
          <Rv delay={0.15}>
            <div style={{background:"rgba(255,255,255,0.03)",borderRadius:24,border:"1px solid rgba(255,255,255,0.06)",padding:"28px 24px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-20,right:-20,width:80,height:80,borderRadius:"50%",background:"#E6B800",opacity:0.04}}/>

              {/* Title */}
              <div style={{fontFamily:fb,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:1,marginBottom:20,textAlign:"center"}}>Roadmap English Superstar</div>

              {/* 3-Phase visual */}
              <div style={{display:"flex",gap:8,marginBottom:20}}>
                {steps.map((s,i)=><div key={i} style={{
                  flex:1,padding:"16px 8px",borderRadius:14,textAlign:"center",
                  background:activeStep===i?i<2?"rgba(92,79,229,0.15)":"rgba(230,184,0,0.12)":"rgba(255,255,255,0.02)",
                  border:`1.5px solid ${activeStep===i?i<2?"rgba(92,79,229,0.3)":"rgba(230,184,0,0.25)":"rgba(255,255,255,0.04)"}`,
                  transition:"all 0.5s",
                }}>
                  <div style={{width:32,height:32,borderRadius:8,background:activeStep===i?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:6,margin:"0 auto 6px",transition:"all 0.4s"}}>
                    {i===0&&<AudioLines size={18} color={activeStep===i?"#fff":"rgba(255,255,255,0.3)"}/>}
                    {i===1&&<BookOpen size={18} color={activeStep===i?"#fff":"rgba(255,255,255,0.3)"}/>}
                    {i===2&&<Mic size={18} color={activeStep===i?"#fff":"rgba(255,255,255,0.3)"}/>}
                  </div>
                  <div style={{fontFamily:fh,fontSize:10,fontWeight:700,color:activeStep===i?"#fff":"rgba(255,255,255,0.3)",whiteSpace:"pre-line",lineHeight:1.2,transition:"color 0.4s"}}>{s}</div>
                </div>)}
              </div>

              {/* Arrow flow */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:4,marginBottom:20}}>
                {[0,1,2].map(i=><Fragment key={i}>
                  <div key={`c${i}`} style={{width:20,height:20,borderRadius:6,background:i<=activeStep?i<2?"rgba(92,79,229,0.2)":"rgba(230,184,0,0.15)":"rgba(255,255,255,0.03)",border:`1px solid ${i<=activeStep?i<2?"rgba(92,79,229,0.3)":"rgba(230,184,0,0.2)":"rgba(255,255,255,0.04)"}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.5s"}}>
                    <div style={{width:6,height:6,borderRadius:2,background:i<=activeStep?i<2?"#8B7FF5":"#E6B800":"rgba(255,255,255,0.06)",transition:"all 0.5s"}}/>
                  </div>
                  {i<2&&<div key={`a${i}`} style={{fontSize:8,color:i<activeStep?"#8B7FF5":"rgba(255,255,255,0.1)",transition:"color 0.5s"}}>→</div>}
                </Fragment>)}
              </div>

              {/* Speaking levels preview */}
              <div style={{background:"rgba(230,184,0,0.05)",borderRadius:14,padding:"14px",border:"1px solid rgba(230,184,0,0.08)"}}>
                <div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:"rgba(230,184,0,0.5)",textTransform:"uppercase",letterSpacing:0.5,marginBottom:8,textAlign:"center"}}>7 Level Speaking</div>
                <div style={{display:"flex",gap:4,flexWrap:"wrap",justifyContent:"center"}}>
                  {["Pre-Starter","Starter","Junior","Mover","Flyer","Time2Talk","Explorer"].map((lv,i)=>{
                    const colors=["#9CA3AF","#10B981","#3B82F6","#8B7FF5","#F59E0B","#EC4899","#E6B800"];
                    return <div key={lv} style={{fontFamily:fb,fontSize:8,fontWeight:600,color:colors[i],background:`${colors[i]}10`,padding:"3px 8px",borderRadius:4,border:`1px solid ${colors[i]}15`}}>{lv}</div>;
                  })}
                </div>
              </div>
            </div>
          </Rv>

          {/* Floating badge */}
          <div style={{position:"absolute",bottom:-6,left:-24,background:"rgba(26,21,53,0.95)",borderRadius:12,padding:"10px 16px",border:"1px solid rgba(230,184,0,0.12)",boxShadow:"0 8px 20px rgba(0,0,0,0.3)",animation:"float 5s ease-in-out infinite",zIndex:2}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <Star size={16} color="#E6B800"/>
              <div><div style={{fontFamily:fh,fontSize:11,fontWeight:800,color:"#E6B800"}}>Terstruktur</div><div style={{fontFamily:fb,fontSize:8,color:"rgba(255,255,255,0.35)"}}>Bukan les asal-asalan</div></div>
            </div>
          </div>
        </div>
      </div>
    </W>
  </section>;
}

// ═══════ KIDS TESTIMONIAL BUBBLES ═══════
function KidsBubbles(){
  const t=useT();
  const bubbles=[
    {text:"Kak gurunya seru banget!! 🤩",c:"#DCFCE7",tc:"#166534",rot:-2,x:"3%",y:10,gender:"girl"},
    {text:"I can read now! ❤️",c:"#E0E7FF",tc:"#3730A3",rot:1,x:"42%",y:0,gender:"boy"},
    {text:"Aku suka belajar English 🌟",c:"#FCE7F3",tc:"#9D174D",rot:-1,x:"68%",y:14,gender:"girl"},
    {text:"The teacher is SO FUN!!! 😄",c:"#FEF9C3",tc:"#854D0E",rot:2,x:"2%",y:80,gender:"boy"},
    {text:"Bisa ngomong Inggris sekarang! 💪",c:"#F0EDFF",tc:"#5C4FE5",rot:-1.5,x:"34%",y:72,gender:"girl"},
    {text:"10+ wonderful ⭐👍😊",c:"#DCFCE7",tc:"#166534",rot:1,x:"68%",y:78,gender:"boy"},
    {text:"I LOVE MY LESSONS! 💕",c:"#FCE7F3",tc:"#9D174D",rot:-0.5,x:"18%",y:148,gender:"girl"},
    {text:"Super cool and funny! 😂",c:"#E0E7FF",tc:"#3730A3",rot:1.5,x:"54%",y:144,gender:"boy"},
  ];
  const photoColors = ["#EC4899","#3B82F6","#F59E0B","#10B981","#8B7FF5","#EC4899","#F59E0B","#3B82F6"];

  return <section className="kids-bubbles-section" style={{background:t.bg,padding:"40px 0",overflow:"hidden"}}><W>
    <Rv><div className="superstar-section-header" style={{textAlign:"center",marginBottom:24}}>
      <h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:0}}>Anak-Anak Ini Sudah Merasakannya</h2>
      <p style={{fontFamily:fb,fontSize:14,color:t.sub,marginTop:8,lineHeight:1.6}}>Suara polos dari anak yang sudah belajar bersama kami.</p>
    </div></Rv>

    {/* DESKTOP — Floating absolute positioning */}
    <Rv delay={0.1}>
      <div className="bubbles-desktop" style={{position:"relative",height:220,maxWidth:900,margin:"0 auto"}}>
        {bubbles.map((b,i)=>{
          const photoLeft = i%2===0;
          return <div key={i} style={{
            position:"absolute",left:b.x,top:b.y,
            display:"flex",alignItems:"center",gap:6,
            flexDirection:photoLeft?"row":"row-reverse",
            transform:`rotate(${b.rot}deg)`,
            animation:`float ${4+i*0.5}s ease-in-out infinite`,
            animationDelay:`${i*0.3}s`,
          }}>
            <div style={{width:28,height:28,borderRadius:"50%",background:`${photoColors[i]}20`,border:`2px solid ${photoColors[i]}40`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden"}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill={photoColors[i]} opacity="0.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></svg>
            </div>
            <div style={{
              background:t.m==="dark"?`${b.tc}15`:b.c,
              borderRadius:photoLeft?"16px 16px 16px 6px":"16px 16px 6px 16px",
              padding:"8px 16px",
              boxShadow:"0 2px 12px rgba(0,0,0,0.04)",
              whiteSpace:"nowrap",
            }}>
              <span style={{fontFamily:fb,fontSize:13,fontWeight:700,color:b.tc,lineHeight:1}}>{b.text}</span>
            </div>
          </div>;
        })}
      </div>
    </Rv>

    {/* MOBILE — Chat-style alternating left/right stack */}
    <div className="bubbles-mobile" style={{maxWidth:480,margin:"0 auto",display:"flex",flexDirection:"column",gap:18,padding:"0 8px"}}>
      {bubbles.map((b,i)=>{
        const isLeft = i%2===0;
        return <Rv key={i} delay={0.05*i}>
          <div style={{display:"flex",justifyContent:isLeft?"flex-start":"flex-end",width:"100%"}}>
            <div style={{display:"flex",alignItems:"center",gap:8,flexDirection:isLeft?"row":"row-reverse",maxWidth:"85%"}}>
              <div style={{width:32,height:32,borderRadius:"50%",background:`${photoColors[i]}20`,border:`2px solid ${photoColors[i]}40`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={photoColors[i]} opacity="0.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></svg>
              </div>
              <div style={{
                background:t.m==="dark"?`${b.tc}15`:b.c,
                borderRadius:isLeft?"18px 18px 18px 6px":"18px 18px 6px 18px",
                padding:"10px 18px",
                boxShadow:"0 2px 12px rgba(0,0,0,0.04)",
                transform:`rotate(${b.rot*0.5}deg)`,
              }}>
                <span style={{fontFamily:fb,fontSize:13,fontWeight:700,color:b.tc,lineHeight:1.4,whiteSpace:"nowrap"}}>{b.text}</span>
              </div>
            </div>
          </div>
        </Rv>;
      })}
    </div>
  </W></section>;
}

// ═══════ SPEAKING ROADMAP — Interactive expandable level cards ═══════
function SpeakingRoadmap(){
  const t=useT();
  const[expandedLv,setExpandedLv]=useState(null);

  const levels = [
    {name:"Pre-Starter",iconComp:"seedling",c:"#9CA3AF",tag:null,
     short:"Langkah pertama. Pelan-pelan.",
     desc:"Untuk yang baru pertama kali belajar Inggris. Tutor pakai gestur, gambar, dan lagu — anak paham tanpa perlu translate. Tidak bisa apa-apa? Mulai di sini.",
     skills:["Mengenal kata-kata pertama lewat gambar & lagu","Memahami instruksi sederhana dari tutor","Mulai berani coba ucapkan kata dasar"],
    },
    {name:"Starter",iconComp:"sprout",c:"#10B981",tag:null,
     short:"Mulai berani coba.",
     desc:"Anak sudah kenal kata-kata dasar dan mulai berani coba. Bisa salam, perkenalan, dan ngomong kalimat pendek. Membaca kata sederhana mulai lancar.",
     skills:["Salam & perkenalan diri dalam Inggris","Kalimat pendek: I like..., I have..., I can...","Membaca kata sederhana, memahami pertanyaan dasar"],
    },
    {name:"Junior",iconComp:"puzzle",c:"#3B82F6",tag:"Tematik",
     short:"Belajar lewat topik seru.",
     desc:"Level tematik — anak belajar lewat topik seru yang berganti-ganti. Vocabulary naik cepat karena konteksnya real, bukan hafalan daftar kata.",
     skills:["Vocabulary naik lewat tema: animals, food, hobbies, travel","Kalimat lebih panjang dan bervariasi","Mulai bisa cerita pendek tentang kegiatan sehari-hari"],
    },
    {name:"Mover",iconComp:"zap",c:"#8B7FF5",tag:null,
     short:"Percakapan makin natural.",
     desc:"Anak mulai bisa cerita, mendeskripsikan, dan membandingkan. Percakapan lebih panjang dan natural. Vocabulary makin kaya lewat topik lintas pelajaran.",
     skills:["Mendeskripsikan orang, tempat, benda dengan detail","Membandingkan: bigger, better, more interesting","Bercerita tentang pengalaman di masa lalu"],
    },
    {name:"Flyer",iconComp:"flame",c:"#F59E0B",tag:null,
     short:"Sudah 'bisa Inggris beneran.'",
     desc:"Grammar makin solid, opini mulai keluar. Anak bisa baca teks lebih panjang dan paham. Sudah mulai terasa kayak 'bisa Inggris beneran.'",
     skills:["Menyampaikan opini: I think..., I believe...","Membaca dan memahami teks panjang","Grammar lebih kompleks: conditionals, relative clauses"],
    },
    {name:"Time2Talk",iconComp:"message",c:"#EC4899",tag:"Speaking Intensive",
     short:"Waktunya ngobrol beneran.",
     desc:"40 topik percakapan — dari seni, olahraga, film, sampai budaya. Anak tidak cuma jawab pertanyaan, tapi mulai menyampaikan pendapat sendiri. Waktunya ngobrol beneran.",
     skills:["Diskusi topik: sports, art, music, customs, movies","Menyampaikan dan mempertahankan pendapat","Vocabulary 3000+ kata, kalimat kompleks natural"],
    },
    {name:"Explorer",iconComp:"globe",c:"#E6B800",tag:"SUPERSTAR",
     short:"Level tertinggi. Berpikir dalam Inggris.",
     desc:"Level tertinggi. Diskusi soal isu global — ekologi, teknologi, sejarah. Anak belajar berpikir dalam Bahasa Inggris, bukan translate dari Indonesia. Superstar level.",
     skills:["Diskusi isu global: ecology, technology, history","Debat & public speaking","Berpikir langsung dalam Bahasa Inggris — no translation"],
    },
  ];

  return <div style={{maxWidth:720,margin:"0 auto"}}>
    {levels.map((lv,i)=>{
      const expanded = expandedLv===i;
      const isLast = i===levels.length-1;
      return <div key={i} style={{position:"relative",marginBottom:expanded?16:0}}>
        {/* Connector line */}
        {!isLast && <div style={{position:"absolute",top:expanded?60:48,left:22,width:2,height:expanded?"calc(100% - 36px)":"calc(100% - 24px)",background:`linear-gradient(180deg,${lv.c}30,${levels[i+1].c}30)`,zIndex:0}}/>}

        {/* Level card */}
        <div onClick={()=>setExpandedLv(expanded?null:i)} style={{
          position:"relative",zIndex:1,
          display:"flex",gap:14,alignItems:"flex-start",cursor:"pointer",
          background:expanded?lv.c:t.card,
          borderRadius:expanded?18:14,
          padding:expanded?"20px":"14px 16px",
          border:expanded?`2px solid ${lv.c}`:`1.5px solid ${t.cb}`,
          boxShadow:expanded?`0 12px 36px ${lv.c}25`:t.cs,
          transition:"all 0.4s cubic-bezier(0.22,1,0.36,1)",
          transform:expanded?"scale(1.02)":"scale(1)",
          marginBottom:expanded?0:6,
        }}>
          {/* Number circle */}
          <div style={{
            width:expanded?44:36,height:expanded?44:36,borderRadius:expanded?14:10,flexShrink:0,
            background:expanded?"rgba(255,255,255,0.2)":`${lv.c}12`,
            border:expanded?`2px solid rgba(255,255,255,0.3)`:`2px solid ${lv.c}25`,
            display:"flex",alignItems:"center",justifyContent:"center",
            transition:"all 0.4s",
          }}>
            <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {lv.iconComp==="seedling"&&<Sprout size={expanded?22:18} color={expanded?"#fff":lv.c}/>}
                    {lv.iconComp==="sprout"&&<Sprout size={expanded?22:18} color={expanded?"#fff":lv.c}/>}
                    {lv.iconComp==="puzzle"&&<Puzzle size={expanded?22:18} color={expanded?"#fff":lv.c}/>}
                    {lv.iconComp==="zap"&&<Zap size={expanded?22:18} color={expanded?"#fff":lv.c}/>}
                    {lv.iconComp==="flame"&&<Flame size={expanded?22:18} color={expanded?"#fff":lv.c}/>}
                    {lv.iconComp==="message"&&<MessageCircle size={expanded?22:18} color={expanded?"#fff":lv.c}/>}
                    {lv.iconComp==="globe"&&<Globe size={expanded?22:18} color={expanded?"#fff":lv.c}/>}
                  </span>
          </div>

          <div style={{flex:1,minWidth:0}}>
            {/* Header row */}
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:expanded?6:0,flexWrap:"wrap"}}>
              <div style={{fontFamily:fh,fontSize:9,fontWeight:800,color:expanded?"rgba(255,255,255,0.4)":lv.c,background:expanded?"rgba(255,255,255,0.1)":`${lv.c}10`,padding:"2px 8px",borderRadius:4,letterSpacing:0.3}}>Level {i+1}</div>
              <span style={{fontFamily:fh,fontSize:expanded?16:14,fontWeight:700,color:expanded?"#fff":t.tx,transition:"all 0.3s"}}>{lv.name}</span>
              {lv.tag && <span style={{fontFamily:fb,fontSize:8,fontWeight:700,color:"#fff",background:expanded?"rgba(255,255,255,0.2)":lv.c,padding:"2px 8px",borderRadius:4}}>{lv.tag}</span>}
            </div>

            {/* Short desc (always visible) or expanded content */}
            {!expanded && <div style={{fontFamily:fb,fontSize:12,color:t.mu,marginTop:2}}>{lv.short}</div>}

            {expanded && <div style={{animation:"countUp 0.3s ease"}}>
              <p style={{fontFamily:fb,fontSize:13,color:"rgba(255,255,255,0.75)",lineHeight:1.6,margin:"0 0 14px"}}>{lv.desc}</p>
              <div style={{background:"rgba(255,255,255,0.1)",borderRadius:12,padding:"14px 16px",border:"1px solid rgba(255,255,255,0.1)"}}>
                <div style={{fontFamily:fh,fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:0.5,marginBottom:8}}>Yang Anak Kuasai</div>
                {lv.skills.map((sk,si)=>
                  <div key={si} style={{display:"flex",gap:6,marginBottom:si<lv.skills.length-1?6:0,alignItems:"flex-start"}}>
                    <Star size={8} color="rgba(255,255,255,0.4)" style={{flexShrink:0,marginTop:4}}/>
                    <span style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.7)",lineHeight:1.4}}>{sk}</span>
                  </div>
                )}
              </div>
            </div>}
          </div>

          {/* Expand indicator */}
          <div style={{flexShrink:0,width:24,height:24,borderRadius:8,background:expanded?"rgba(255,255,255,0.15)":`${lv.c}08`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s",transform:expanded?"rotate(90deg)":"none",marginTop:expanded?4:0}}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l4 3-4 3" stroke={expanded?"#fff":lv.c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>;
    })}
  </div>;
}

// ═══════ 2. JOURNEY — 3-phase roadmap + 7 speaking levels ═══════
function Journey(){
  const t=useT();
  const[activePhase,setActivePhase]=useState(0);

  const phases = [
    {
      id:"1",label:"Fondasi Awal",name:"Phonemic Awareness",badge:null,badgeC:null,c:t.p,cHex:"#5C4FE5",cBg:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",
      target:"SD Kelas 1–5 yang spelling-nya masih berantakan",
      desc:"Anak belajar minimal 2 bunyi dari setiap huruf. Digabung dengan thematic learning — ada speaking dan grammar basic. Fondasi paling dasar sebelum masuk phonics.",
      items:["Mengenal bunyi-bunyi setiap huruf (phonemes)","Minimal 2 bunyi per huruf — bukan cuma 1","Thematic: speaking + grammar basic terintegrasi","Spelling mulai terbentuk dari pemahaman bunyi"],
      note:"Tersedia di semua tipe kelas. Untuk hasil terbaik, Privat direkomendasikan karena koreksi bunyi butuh perhatian individual.",
      story:{name:"Aqil, 8 thn · SD Kelas 2",before:"Spelling berantakan",after:"Mulai kenal bunyi, spelling membaik"},
      icon:"soundwave",
    },
    {
      id:"2",label:"Fondasi Lanjutan",name:"Phonics",badge:"Standar Sekolah Internasional",badgeC:"#3B82F6",c:t.bl,cHex:"#3B82F6",cBg:"linear-gradient(135deg,#3B82F6,#60A5FA)",
      target:"Anak yang sudah lewat Phonemic Awareness, atau remaja yang perlu perbaiki pronunciation",
      desc:"Full phonics — dari blending, decoding, sampai membaca lancar. Ini metode yang dipakai di Sekolah Internasional & National Plus di Indonesia, juga di sekolah-sekolah di Inggris, Australia, dan Singapura. Tapi TIDAK ADA di Kurikulum Nasional. Anak sekolah biasa tidak pernah dapat ini.",
      items:["Blending — menggabungkan bunyi jadi kata","Decoding — membaca kata baru tanpa harus diajari","Pronunciation bersih dari fondasi bunyi yang benar","Membaca kalimat dan cerita pendek dengan lancar"],
      note:"Di sekolah nasional, anak langsung belajar grammar tanpa fondasi phonics. Itulah kenapa pronunciation anak Indonesia sering salah dari awal. Phonics memperbaiki itu.",
      story:{name:"Nabila, 15 thn · SMP",before:"Pronunciation salah bertahun-tahun",after:"Pronunciation lebih bersih, siap speaking"},
      icon:"book",
    },
    {
      id:"3",label:"Percakapan",name:"Spoken English",badge:"CEFR-BASED",badgeC:"#E6B800",c:t.gold,cHex:"#E6B800",cBg:"linear-gradient(135deg,#B8960A,#E6B800)",
      target:"Anak & remaja yang sudah lulus Phonics",
      desc:"Setelah fondasi phonics kuat, anak naik ke speaking. 7 level terstruktur — dari tidak bisa apa-apa sampai bisa diskusi soal isu global.",
      items:null,
      note:"Bisa dimulai HANYA setelah lulus level Phonics. Tes Level tentukan masuk di level speaking yang mana.",
      story:{name:"Dani, 12 thn · SD Kelas 6",before:"Bisa baca tapi diam kalau ditanya",after:"Mulai berani jawab & tanya balik"},
      icon:"mic",
    },
  ];

  const ph = phases[activePhase];

  return <section id="journey" style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div className="superstar-section-header" style={{textAlign:"center",marginBottom:52}}>
      <h2 style={{fontFamily:fh,fontSize:38,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Perjalanan Jadi Superstar</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Fondasi dulu, baru speaking. Tidak lompat-lompat.</p>
    </div></Rv>

    {/* Phase selector — stepped journey, ascending left to right */}
    <Rv delay={0.08}>
      <div style={{position:"relative",maxWidth:900,margin:"0 auto 36px"}}>
        {/* Connecting line behind cards */}
        <svg className="hide-mobile" style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}} viewBox="0 0 900 280" preserveAspectRatio="none">
          <path d="M145 230 Q220 200 380 160 Q540 120 750 60" stroke={`${t.m==="dark"?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)"}`} strokeWidth="2" fill="none" strokeDasharray="6 4"/>
          {/* Progress fill */}
          <path d={activePhase>=1?"M145 230 Q220 200 380 160"+(activePhase>=2?" Q540 120 750 60":""):"M145 230 Q180 215 220 205"} stroke={phases[activePhase].cHex} strokeWidth="2.5" fill="none" opacity="0.4"/>
        </svg>

        <div className="journey-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,position:"relative",zIndex:1}}>
          {phases.map((phx,i)=>{
            const active = activePhase===i;
            const stepOffsets = [80,36,0]; // descending margin-top = ascending visual
            const defaultBgs = [
              "linear-gradient(135deg,#7B6FF0,#9B8FFF)",
              "linear-gradient(135deg,#3B82F6,#60A5FA)",
              "linear-gradient(135deg,#E6B800,#FFD700)",
            ];
            const activeBgs = [
              "linear-gradient(135deg,#F97316,#FB923C)",
              "linear-gradient(135deg,#10B981,#4ADE9A)",
              "linear-gradient(135deg,#8B5CF6,#A78BFA)",
            ];
            const activeTextC = "#fff";

            return <div key={i} className="journey-card-offset" style={{marginTop:stepOffsets[i]}}> 
              {/* Step number badge */}
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,paddingLeft:4}}>
                <div style={{width:22,height:22,borderRadius:"50%",background:active?activeBgs[i]:defaultBgs[i],display:"flex",alignItems:"center",justifyContent:"center",fontFamily:fh,fontSize:10,fontWeight:800,color:"#fff",boxShadow:`0 2px 8px ${phx.cHex}30`}}>{i+1}</div>
                <div style={{fontFamily:fb,fontSize:9,fontWeight:700,color:active?phx.cHex:t.mu,textTransform:"uppercase",letterSpacing:0.5}}>{phx.label}</div>
                {i<2 && <div className="hide-mobile" style={{flex:1,height:1,background:t.cb,marginLeft:4}}/>}
                {i<2 && <div className="hide-mobile" style={{fontFamily:fb,fontSize:8,color:t.mu}}>→</div>}
              </div>

              {/* Card */}
              <div onClick={()=>setActivePhase(i)} style={{
                borderRadius:20,padding:"22px 20px",cursor:"pointer",position:"relative",overflow:"hidden",
                background:active?activeBgs[i]:defaultBgs[i],
                border:"2px solid transparent",
                boxShadow:active?"0 16px 48px rgba(0,0,0,0.2)":"0 6px 20px rgba(0,0,0,0.1)",
                transition:"all 0.5s cubic-bezier(0.22,1,0.36,1)",
                transform:active?"scale(1.04) translateY(-6px)":"scale(1)",
              }}>
                <div style={{position:"absolute",top:-25,right:-25,width:70,height:70,borderRadius:"50%",background:"rgba(255,255,255,0.1)"}}/>
                <div style={{position:"absolute",bottom:-12,left:-12,width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}/>

                <div style={{position:"relative"}}>
                  <div style={{width:40,height:40,borderRadius:12,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}>
                    {phx.icon==="soundwave"&&<AudioLines size={22} color={active?activeTextC:"#fff"}/>}
                    {phx.icon==="book"&&<BookOpen size={22} color={active?activeTextC:"#fff"}/>}
                    {phx.icon==="mic"&&<Mic size={22} color={active?activeTextC:"#fff"}/>}
                  </div>
                  <div style={{fontFamily:fh,fontSize:16,fontWeight:800,color:active?activeTextC:"#fff",transition:"color 0.3s",marginBottom:6,lineHeight:1.2}}>{phx.name}</div>
                  {phx.badge && <div style={{fontFamily:fb,fontSize:11,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.2)",padding:"5px 12px",borderRadius:6,display:"inline-block",letterSpacing:0.3,backdropFilter:"blur(4px)"}}>{phx.badge}</div>}
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:10}}>
                    <span style={{fontFamily:fb,fontSize:12,fontWeight:600,color:"rgba(255,255,255,0.65)"}}>{active?"Sedang dilihat ✦":"Klik untuk lihat"}</span>
                    <div style={{width:20,height:20,borderRadius:6,background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                      {active?<svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.5 1.5 3.5-3.5" stroke={activeTextC} strokeWidth="1.5" strokeLinecap="round"/></svg>
                      :<svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2.5 1.5L5.5 4L2.5 6.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                    </div>
                  </div>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </Rv>

    {/* Phase detail */}
    <Rv delay={0.12}>
      <div key={activePhase} style={{animation:"countUp 0.4s ease"}}>
        {/* Phase content card */}
        <div style={{background:t.card,borderRadius:24,border:`2px solid ${ph.c}20`,boxShadow:t.cs,overflow:"hidden",marginBottom:activePhase===2?0:24}}>
          <div style={{padding:"28px 32px"}}>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,flexWrap:"wrap"}}>
              <h3 style={{fontFamily:fh,fontSize:24,fontWeight:800,color:t.tx,margin:0}}>{ph.name}</h3>
              {ph.badge && <span style={{fontFamily:fb,fontSize:9,fontWeight:700,color:"#fff",background:ph.badgeC,padding:"3px 10px",borderRadius:4}}>{ph.badge}</span>}
            </div>
            <div style={{fontFamily:fb,fontSize:12,color:t.mu,marginBottom:12}}>Target: {ph.target}</div>
            <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.7,marginBottom:20,maxWidth:600}}>{ph.desc}</p>

            {/* Items per phase */}
            {ph.items && <div style={{marginBottom:16}}>
              {ph.items.map((item,i)=>
                <div key={i} style={{display:"flex",gap:8,marginBottom:8,alignItems:"flex-start"}}>
                  <Star size={10} color={ph.c} style={{flexShrink:0,marginTop:4}}/>
                  <span style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.5}}>{item}</span>
                </div>
              )}
            </div>}

            {/* Note */}
            <div style={{padding:"14px 16px",background:`${ph.c}06`,borderRadius:12,border:`1px solid ${ph.c}10`}}>
              <div style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.6}}>💡 {ph.note}</div>
            </div>

            {/* Mini story inline — HIDDEN: fake testimonial, TODO re-enable with real data */}
            {false && ph.story && <div style={{marginTop:16,display:"flex",gap:10,alignItems:"center",padding:"12px 16px",background:`${ph.c}04`,borderRadius:12,border:`1px solid ${ph.c}08`}}>
              <div style={{width:36,height:36,borderRadius:10,background:`${ph.c}12`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>⭐</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.tx,marginBottom:2}}>{ph.story.name}</div>
                <div style={{display:"flex",gap:4,alignItems:"center"}}>
                  <span style={{fontFamily:fb,fontSize:10,color:t.coral}}>{ph.story.before}</span>
                  <span style={{fontSize:10,color:t.mu}}>→</span>
                  <span style={{fontFamily:fb,fontSize:10,fontWeight:600,color:ph.c}}>{ph.story.after}</span>
                </div>
              </div>
            </div>}
          </div>
        </div>

        {/* Speaking levels — interactive roadmap (only for Speaking phase) */}
        {activePhase===2 && <div style={{marginTop:24}}>
          <div style={{fontFamily:fh,fontSize:18,fontWeight:800,color:t.tx,marginBottom:16,textAlign:"center"}}>7 Level Speaking — Roadmap Lengkap</div>
          <SpeakingRoadmap/>
        </div>}
      </div>
    </Rv>
  </W></section>;
}

// ═══════ 3. HOW TES LEVEL WORKS — Entry point determination ═══════
function TesLevelEntry(){
  const t=useT();
  return <section style={{background:t.bgStar,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:48}}>
      <h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Tes Level Tentukan Mulai dari Mana</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,maxWidth:500,marginLeft:"auto",marginRight:"auto",lineHeight:1.7}}>Setiap anak beda. Tes Level memastikan anak tidak salah masuk.</p>
    </div></Rv>

    <Rv delay={0.1}>
      <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {[
          {title:"SD Kelas 1–5",sub:"Spelling masih berantakan",arrow:"→ Fondasi Awal: Phonemic Awareness",detail:"Fondasi bunyi huruf dulu (Privat only), lalu naik ke Phonics.",c:t.p,icon:<GraduationCap size={20} color={t.p}/>},
          {title:"Remaja SMP–SMA",sub:"Spelling/sound belum oke",arrow:"→ Fondasi Lanjutan: Phonics",detail:"Langsung phonics. Perbaiki pronunciation & reading.",c:t.bl,icon:<GraduationCap size={20} color={t.bl}/>},
          {title:"Reading & Phonics sudah oke",sub:"Siap speaking",arrow:"→ Percakapan: Spoken English",detail:"Langsung masuk speaking. Tes Level tentukan di Pre-Starter, Starter, atau level mana.",c:t.gold,icon:<Mic size={20} color={t.gold}/>},
        ].map((path,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}>
          <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:20,overflow:"hidden",border:`1.5px solid ${h?path.c+"30":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateY(-3px)":"none",height:"100%",display:"flex",flexDirection:"column"}}>
            <div style={{height:4,background:path.c,opacity:0.5}}/>
            <div style={{padding:"24px 22px",flex:1,display:"flex",flexDirection:"column"}}>
              <div style={{fontSize:28,marginBottom:12}}>{path.icon}</div>
              <h3 style={{fontFamily:fh,fontSize:16,fontWeight:700,color:t.tx,margin:"0 0 4px"}}>{path.title}</h3>
              <div style={{fontFamily:fb,fontSize:12,color:t.mu,marginBottom:12}}>{path.sub}</div>
              <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:path.c,marginBottom:8}}>{path.arrow}</div>
              <p style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.6,margin:0}}>{path.detail}</p>
            </div>
          </div>
        </Rv>;})}
      </div>
    </Rv>

    <Rv delay={0.2}><div style={{textAlign:"center",marginTop:32}}>
      <a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+Tes+Level+English+Superstar+untuk+anak.+Nama%3A+...+Usia%3A+...+Kelas%3A+...`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:t.goldT,background:t.gold,borderRadius:14,padding:"14px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#1A1535"/> Daftar Tes Level</a>
      <p style={{fontFamily:fb,fontSize:12,color:t.mu,marginTop:10}}>30 menit via Zoom · Spelling + Sound + Reading assessment</p>
    </div></Rv>
  </W></section>;
}

// ═══════ 4. STORIES ═══════
function Stories(){
  const t=useT();
  const[ac,setAc]=useState(0);
  const stories=[
    {name:"Mama Aisyah",child:"Aqil, 8 thn · SD Kelas 2",track:"Fondasi Awal — Phonemic Awareness",before:"Spelling berantakan, tidak mengenal bunyi huruf",after:"Mulai kenal bunyi, spelling membaik",detail:"Aqil SD kelas 2, spelling-nya masih campur aduk. Tes Level tunjukkan dia belum kenal bunyi huruf yang benar. Masuk Phonemic Awareness (Privat). Tutor fokus ke bunyi-bunyi setiap huruf, minimal 2 bunyi per huruf, digabung thematic. Spelling Aqil jauh lebih rapi dan dia mulai bisa baca kata baru sendiri.",gender:"boy",c:t.p},
    {name:"Papa Ahmad",child:"Nabila, 15 thn · SMP Kelas 9",track:"Fondasi Lanjutan — Phonics",before:"Pronunciation salah dari dulu, belum pernah dikoreksi",after:"Pronunciation lebih bersih, siap naik ke Speaking",detail:"Nabila belajar Inggris bertahun-tahun tapi pronunciation-nya belum pernah dikoreksi. Tes Level langsung arahkan ke Phonics (skip Phonemic Awareness karena sudah remaja). Tutor fokus blending, decoding, dan pronunciation. Sekarang fondasinya kuat dan siap masuk Speaking.",gender:"girl",c:t.bl},
    {name:"Mama Fitri",child:"Dani, 12 thn · SD Kelas 6",track:"Speaking — Starter",before:"Baca sudah lancar tapi tidak berani ngomong",after:"Mulai berani jawab dan tanya dalam Inggris",detail:"Dani fondasinya sudah oke — reading dan phonics lulus. Langsung masuk Speaking track level Starter. Tutor fokus daily conversation: greeting, asking, responding. Dani sekarang tidak freeze lagi kalau ada yang tanya Inggris. Target berikutnya: naik ke Junior.",gender:"boy",c:t.gold},
  ];
  const s = stories[ac];

  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div className="superstar-section-header" style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Cerita Para Superstar</h2>
    </div></Rv>
    <Rv delay={0.1}>
      <div style={{maxWidth:740,margin:"0 auto"}}>
        <div style={{display:"flex",gap:6,marginBottom:20,justifyContent:"center",flexWrap:"wrap"}}>
          {stories.map((st,i)=><button key={i} onClick={()=>setAc(i)} style={{fontFamily:fb,fontSize:12,fontWeight:ac===i?700:500,color:ac===i?"#fff":t.sub,background:ac===i?st.c:"transparent",border:`1px solid ${ac===i?st.c:t.cb}`,borderRadius:100,padding:"8px 18px",cursor:"pointer",transition:"all 0.25s"}}>{st.child.split("·")[0].trim()} — {st.track}</button>)}
        </div>
        <div style={{background:t.card,borderRadius:22,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
          <div style={{background:s.c,padding:"14px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}><AvatarFace gender={s.gender} color="#fff" size={36}/><div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:"#fff"}}>{s.name} — {s.child}</div><div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.65)"}}>{s.track}</div></div></div>
            <Star size={16} color="rgba(255,255,255,0.3)"/>
          </div>
          <div style={{padding:"24px 28px"}}>
            <div style={{display:"flex",gap:10,marginBottom:16}}>
              <div style={{flex:1,background:`${t.coral}06`,borderRadius:10,padding:"12px",border:`1px solid ${t.coral}08`,textAlign:"center"}}><div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:t.coral,textTransform:"uppercase",marginBottom:2}}>Sebelum</div><div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:t.coral,lineHeight:1.3}}>{s.before}</div></div>
              <div style={{display:"flex",alignItems:"center",color:t.mu,fontSize:14}}>→</div>
              <div style={{flex:1,background:`${s.c}08`,borderRadius:10,padding:"12px",border:`1px solid ${s.c}10`,textAlign:"center"}}><div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:s.c,textTransform:"uppercase",marginBottom:2}}>Sesudah</div><div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:s.c,lineHeight:1.3}}>{s.after}</div></div>
            </div>
            <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.75,margin:0}}>{s.detail}</p>
          </div>
        </div>
      </div>
    </Rv>
    <Rv delay={0.15}><div style={{textAlign:"center",marginTop:28}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:t.goldT,background:t.gold,borderRadius:14,padding:"14px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#1A1535"/> Daftar English Superstar</a></div></Rv>
  </W></section>;
}

// ═══════ CLASS TYPES — Available for each phase ═══════
function ClassTypes(){
  const t=useT();
  const classes=[
    {name:"Reguler",ratio:"1 : 8",desc:"Belajar bareng teman. Seru, kompetitif, biaya terjangkau.",c:t.m==="dark"?"#8B7FF5":"#5C4FE5",
     avail:["✓","✓","✓"],tags:["Biaya ringan","Interaksi sosial"]},
    {name:"Semi Privat",ratio:"1 : 4",desc:"Kelompok kecil — tutor lebih kenal karakter anak. Balance terbaik.",c:"#F59E0B",
     avail:["✓","✓","✓"],tags:["Perhatian lebih","Kelompok nyaman"]},
    {name:"Privat",ratio:"1 : 1",desc:"Perhatian 100%. Jadwal fleksibel, reschedule gratis. Koreksi individual paling intensif.",c:"#EC4899",rec:true,
     avail:["✓","✓","✓"],tags:["Perhatian penuh","Reschedule gratis","Koreksi individual"]},
  ];
  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div className="superstar-section-header" style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Pilih Tipe Kelas</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Semua program tersedia di semua tipe kelas. Pilih sesuai kebutuhan dan budget.</p>
    </div></Rv>
    <div style={{display:"flex",flexDirection:"column",gap:12,maxWidth:800,margin:"0 auto"}}>
      {classes.map((c,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:18,overflow:"hidden",border:c.rec?`2px solid ${c.c}35`:`1.5px solid ${h?c.c+"25":t.cb}`,boxShadow:c.rec?`0 6px 30px ${c.c}10`:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateX(4px)":"none",display:"flex"}} className="story-flex">
          <div style={{width:c.rec?110:90,flexShrink:0,background:c.rec?`linear-gradient(180deg,${c.c},${c.c}BB)`:`linear-gradient(180deg,${c.c}20,${c.c}08)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 12px"}}>
            {c.rec&&<div style={{fontFamily:fb,fontSize:7,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.2)",padding:"2px 8px",borderRadius:100,marginBottom:8,textTransform:"uppercase",letterSpacing:0.5}}>Rekomendasi</div>}
            <div style={{fontFamily:fh,fontSize:26,fontWeight:800,color:c.rec?"#fff":c.c,lineHeight:1}}>{c.ratio}</div>
            <div style={{fontFamily:fb,fontSize:7,color:c.rec?"rgba(255,255,255,0.5)":t.mu,marginTop:3}}>tutor : siswa</div>
          </div>
          <div style={{flex:1,padding:"18px 22px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h3 style={{fontFamily:fh,fontSize:c.rec?19:16,fontWeight:800,color:t.tx,margin:"0 0 4px"}}>{c.name}</h3>
            <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:"0 0 10px"}}>{c.desc}</p>
            {/* Availability per phase */}
            <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
              {["Phonemic Aw.","Phonics","Speaking"].map((phase,pi)=>
                <div key={pi} style={{fontFamily:fb,fontSize:9,fontWeight:600,color:c.avail[pi]==="✓"?t.g:t.mu,background:c.avail[pi]==="✓"?`${t.g}08`:`${t.mu}08`,padding:"3px 8px",borderRadius:5,border:`1px solid ${c.avail[pi]==="✓"?t.g+"15":t.mu+"10"}`,display:"flex",alignItems:"center",gap:3}}>
                  <span style={{fontSize:8}}>{c.avail[pi]==="✓"?"✓":"✗"}</span> {phase}
                </div>
              )}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:5}}>{c.tags.map(tg=><span key={tg} style={{fontFamily:fb,fontSize:10,fontWeight:600,color:c.c,background:`${c.c}08`,padding:"3px 10px",borderRadius:6,border:`1px solid ${c.c}10`}}>{tg}</span>)}</div>
          </div>
        </div>
      </Rv>;})}
    </div>
  </W></section>;
}

// ═══════ 5. TES LEVEL + FAQ ═══════
function TesLevelAndFAQ(){
  const t=useT();const[op,setOp]=useState(null);
  const faqs=[
    ["Berapa lama program Phonemic Awareness?","Sekitar 4 bulan, khusus kelas Privat. Untuk anak SD kelas 1–5 yang spelling-nya masih berantakan."],
    ["Berapa lama program Phonics?","Sekitar 8 bulan. Untuk anak yang sudah lewat Phonemic Awareness, atau remaja yang perlu perbaiki pronunciation."],
    ["Anak saya SD kelas 2, spelling masih berantakan. Mulai dari mana?","Fondasi Awal: Phonemic Awareness. Anak belajar bunyi-bunyi huruf dulu + thematic. Privat only."],
    ["Anak remaja SMP tapi pronunciation-nya salah dari dulu?","Langsung ke Fondasi Lanjutan: Phonics. Remaja tidak harus melalui Phonemic Awareness."],
    ["Kapan anak bisa mulai Speaking?","Setelah lulus Phonics. Tes Level tentukan anak masuk di level speaking mana."],
    ["Pre-Starter itu untuk siapa?","Untuk anak yang progress belajarnya lebih lambat. Butuh waktu lebih — tidak dipaksa."],
    ["Ada berapa level speaking?","7 level: Pre-Starter → Starter → Junior → Mover → Flyer → Time2Talk → Explorer."],
    ["Bedanya dengan les Inggris biasa?","Les biasa langsung grammar/vocab. Superstar punya roadmap: bunyi huruf → baca → speaking 7 level. Terstruktur."],
    ["Bagaimana sistem pembayarannya?","Per paket — ringan. Detail harga via WhatsApp."],
  ];
  return <section id="tes-level" style={{background:t.bgC,padding:"80px 0"}}><W>
    <div className="story-flex" style={{display:"flex",gap:40}}>
      <div style={{flex:"1 1 360px"}}>
        <Rv><h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:"0 0 14px",letterSpacing:-0.5}}>Mulai dari Tes Level</h2>
        <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.7,marginBottom:28}}>Tes Level menentukan anak mulai dari Phonics atau langsung Speaking — dan di level CEFR mana.</p></Rv>
        <Rv delay={0.05}><div style={{display:"flex",flexDirection:"column",gap:10}}>
          {[{n:"1",title:"Chat WhatsApp",desc:"Bilang nama, usia, dan pengalaman Inggris anak."},{n:"2",title:"Tes Level Online",desc:"30 menit via Zoom. Reading + speaking assessment."},{n:"3",title:"Terima Laporan",desc:"Phonics atau Speaking? Level berapa? Roadmap personal."},{n:"4",title:"Mulai Jadi Superstar",desc:"Pilih kelas, mulai belajar sesuai level & track."}].map((s,i)=>
            <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0}}><div style={{width:34,height:34,borderRadius:10,background:`${t.p}12`,border:`1.5px solid ${t.p}20`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:fh,fontSize:13,fontWeight:800,color:t.p}}>{s.n}</div>{i<3&&<div style={{width:2,height:20,background:t.cb}}/>}</div>
              <div style={{paddingBottom:i<3?8:0}}><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.tx,margin:"0 0 2px"}}>Step {s.n}: {s.title}</div><div style={{fontFamily:fb,fontSize:12,color:t.mu}}>{s.desc}</div></div>
            </div>
          )}
        </div></Rv>
        <Rv delay={0.1}><div style={{marginTop:24}}><a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+Tes+Level+English+Superstar+untuk+anak.+Nama%3A+...+Usia%3A+...`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.goldT,background:t.gold,borderRadius:12,padding:"13px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={14} color="#1A1535"/> Daftar Tes Level</a></div></Rv>
      </div>
      <div style={{flex:"1 1 380px"}}>
        <Rv><h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:t.tx,margin:"0 0 18px"}}>Pertanyaan tentang English Superstar</h3></Rv>
        <Rv delay={0.05}><div>{faqs.map(([q,a],i)=>{
          const isOpen = op===i;
          return <div key={i} style={{background:t.card,borderRadius:14,marginBottom:10,border:`1px solid ${isOpen?t.p+"35":t.cb}`,overflow:"hidden",transition:"border 0.3s ease, box-shadow 0.3s ease",boxShadow:isOpen?`0 4px 16px ${t.p}10`:"none"}}>
            <button onClick={()=>setOp(isOpen?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,padding:"16px 18px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>
              <span style={{fontFamily:fh,fontSize:13,fontWeight:isOpen?700:600,color:isOpen?t.tx:t.sub,flex:1,transition:"color 0.3s ease, font-weight 0.3s ease"}}>{q}</span>
              <span style={{display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:8,background:isOpen?`${t.p}15`:"transparent",color:t.p,transition:"transform 0.35s cubic-bezier(0.4,0,0.2,1), background 0.3s ease",transform:isOpen?"rotate(180deg)":"none",flexShrink:0}}>
                <ChevronDown size={16}/>
              </span>
            </button>
            <div style={{maxHeight:isOpen?300:0,opacity:isOpen?1:0,transition:"max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",overflow:"hidden"}}>
              <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.7,padding:"0 18px 16px",margin:0}}>{a}</p>
            </div>
          </div>;
        })}</div></Rv>
        <Rv delay={0.1}><div style={{marginTop:12}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:12,color:"#fff",background:"#25D366",borderRadius:10,padding:"10px 20px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14}/> Chat WhatsApp</a></div></Rv>
      </div>
    </div>
  </W></section>;
}

// ═══════ 6. CTA FINAL ═══════
function CTAFinal(){
  const t=useT();
  return <section style={{background:t.bg,padding:"80px 0"}}><W><Rv>
    <div style={{background:"linear-gradient(135deg,#1A1535,#2D2560,#2A1C0E)",borderRadius:28,overflow:"hidden",position:"relative"}}>
      {[{top:"10%",left:"5%",s:10},{top:"25%",right:"8%",s:7},{bottom:"15%",left:"12%",s:6},{bottom:"30%",right:"15%",s:8}].map((st,i)=>
        <div key={i} style={{position:"absolute",...st,animation:`twinkle ${3+i}s ease-in-out infinite`}}><Star size={st.s} color="#E6B800" style={{opacity:0.2}}/></div>
      )}
      <div style={{padding:"56px 48px",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{display:"flex",justifyContent:"center",gap:4,marginBottom:12}}>
          <Star size={18} color="#E6B800"/><Star size={24} color="#E6B800"/><Star size={18} color="#E6B800"/>
        </div>
        <h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:"#fff",margin:"0 0 12px",lineHeight:1.2}}>Jadikan Anak Anda<br/><span style={{color:"#E6B800"}}>English Superstar</span>.</h2>
        <p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.4)",lineHeight:1.7,marginBottom:28,maxWidth:440,marginLeft:"auto",marginRight:"auto"}}>Tes Level tentukan entry point: Phonemic Awareness, Phonics, atau langsung Speaking.</p>
        <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:16,color:"#1A1535",background:"#E6B800",borderRadius:14,padding:"16px 40px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(230,184,0,0.25)"}}><WAIcon size={18} color="#1A1535"/> Daftar English Superstar</a>
        <p style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.25)",marginTop:12}}>Tanpa kontrak · Kurikulum terstruktur · CEFR-based</p>
      </div>
    </div>
  </Rv></W></section>;
}

// ═══════ FOOTER ═══════
function Footer(){const t=useT();return <footer style={{background:t.footer,padding:"40px 0 20px"}}><W><div style={{display:"flex",gap:36,flexWrap:"wrap",marginBottom:28}}><div style={{flex:"1 1 200px"}}><div style={{marginBottom:12}}><EdukaziaLogo variant="white" size="sm" href="/"/></div><p style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,maxWidth:200}}>Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia.</p></div>{[{t:"Program",i:["English Superstar","Bahasa Inggris","Bahasa Arab","Mandarin","Matematika"]},{t:"Kelas",i:["Privat 1-on-1","Semi Privat","Reguler"]},{t:"Lainnya",i:["FAQ","Portal Orang Tua","Kebijakan Privasi"]}].map(col=><div key={col.t} style={{flex:"1 1 100px"}}><h4 style={{fontFamily:fh,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.45)",marginBottom:12,textTransform:"uppercase",letterSpacing:0.5}}>{col.t}</h4>{col.i.map(item=><div key={item} style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:8}}>{item}</div>)}</div>)}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:14,textAlign:"center"}}><p style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.15)"}}>© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia.</p></div></W></footer>;}
function WAFloat(){return <a href={WA} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:20,right:20,width:52,height:52,borderRadius:14,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",animation:"waPulse 2s ease-in-out infinite",zIndex:999}}><WAIcon size={24}/></a>;}

export default function EnglishSuperstar(){
  const[isDark,setIsDark]=useState(false);const t=isDark?D:L;
  return <TX.Provider value={t}><div className="superstar-page" style={{background:t.bg,minHeight:"100vh",transition:"background 0.3s"}}>
    <style>{animations}</style>
    <style>{`body{background:${t.bg};transition:background 0.3s}`}</style>
    <Nav isDark={isDark} toggle={()=>setIsDark(d=>!d)}/>
    <Hero/>
    <Journey/>
    <KidsBubbles/>
    <ClassTypes/>
    <TesLevelAndFAQ/>
    <CTAFinal/>
    <Footer/>
    <WAFloat/>
  </div></TX.Provider>;
}
