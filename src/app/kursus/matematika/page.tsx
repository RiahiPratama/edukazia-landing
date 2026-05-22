/* eslint-disable */
// @ts-nocheck
"use client";

import { useState, useEffect, useRef, createContext, useContext, Fragment } from "react";
import { BarChart3, BookOpen, Calculator, Check, ClipboardCheck, GraduationCap, Lightbulb, MessageSquare, Package, Puzzle, Sigma, Users, Zap } from "lucide-react";

const TX = createContext();
const useT = () => useContext(TX);
const L = {bg:"#FDFCFA",bgW:"#FFF0F6",bgC:"#FDF2F8",card:"#FFFFFF",cb:"rgba(0,0,0,0.05)",cs:"0 2px 20px rgba(0,0,0,0.04)",ch:"0 12px 40px rgba(236,72,153,0.1)",tx:"#1A1535",sub:"#5E5878",mu:"#9D97B5",p:"#EC4899",pS:"#FDF2F8",g:"#10B981",gS:"#ECFDF5",gold:"#E6B800",goldS:"#FFF9E0",goldT:"#1A1535",bl:"#3B82F6",blS:"#EFF6FF",or:"#F59E0B",orS:"#FFFBEB",v:"#5C4FE5",vS:"#EEEDFC",coral:"#EF4444",nav:"rgba(253,252,250,0.92)",navB:"rgba(0,0,0,0.05)",footer:"#1A1535",cta:"linear-gradient(135deg,#EC4899,#DB2777)",m:"light"};
const D = {bg:"#0E080C",bgW:"#12080E",bgC:"#140A10",card:"rgba(255,255,255,0.03)",cb:"rgba(255,255,255,0.07)",cs:"0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",ch:"0 16px 48px rgba(236,72,153,0.12), 0 0 0 1px rgba(255,255,255,0.08)",tx:"#F5F4FF",sub:"#A8A4BE",mu:"#5D596F",p:"#F78DC2",pS:"rgba(247,141,194,0.1)",g:"#4ADE9A",gS:"rgba(74,222,154,0.08)",gold:"#F0C830",goldS:"rgba(240,200,48,0.08)",goldT:"#0E080C",bl:"#70AEFF",blS:"rgba(112,174,255,0.08)",or:"#FFB84D",orS:"rgba(255,184,77,0.08)",v:"#8B7FF5",vS:"rgba(139,127,245,0.1)",coral:"#FF8A8A",nav:"rgba(14,8,12,0.85)",navB:"rgba(255,255,255,0.06)",footer:"#080406",cta:"linear-gradient(135deg,#EC4899,#DB2777)",m:"dark"};
const fh="'Sora',sans-serif",fb="'Plus Jakarta Sans',sans-serif";
const WA="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+tertarik+kursus+Matematika+Metode+Singapura";

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
::selection{background:#EC489940}
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
  /* Audience selector — mobile stacked horizontal compact (~75px tall) */
  .audience-grid{grid-template-columns:1fr!important;gap:8px!important;max-width:none!important}
  .audience-tab{flex-direction:row!important;text-align:left!important;padding:12px 14px!important;align-items:center!important;gap:14px!important}
  .audience-tab .audience-icon{width:44px!important;height:44px!important;border-radius:12px!important}
  .audience-tab .audience-text{flex:1!important;min-width:0!important}
  .audience-tab .audience-check{position:static!important;top:auto!important;right:auto!important;flex-shrink:0!important;order:99!important;width:26px!important;height:26px!important}
  /* ClassTypes — LOCK horizontal di mobile, smaller badge */
  .classtype-card-row{flex-direction:row!important}
  .classtype-ratio-panel{width:76px!important;padding:12px 8px!important}
  .classtype-card-row[style*="2px solid"] .classtype-ratio-panel{width:84px!important}
  .classtype-ratio-num{font-size:22px!important}
  .classtype-content{padding:12px 14px!important}
  .classtype-content h3{font-size:15px!important;margin-bottom:3px!important}
  .classtype-content p{font-size:12px!important;line-height:1.45!important;margin-bottom:8px!important}
}
@media(min-width:769px){.mobile-menu-btn{display:none!important}}
`;

// ═══════ NAV ═══════
function Nav({isDark,toggle}){
  const t=useT();const[sc,setSc]=useState(false);const[openDD,setOpenDD]=useState(null);const[mob,setMob]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>50);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  const dropdowns=[
    {label:"Untuk Siapa",items:[{text:"Anak (7–13 thn)",href:"/untuk-anak"},{text:"Remaja SMP–SMA (13–18 thn)",href:"/untuk-remaja"},{text:"Mama Yang Mau Belajar",href:"/untuk-orang-tua"},{text:"Kelas Privat 1-on-1",href:"/kursus/privat"}]},
    {label:"Pelajaran",items:[{text:"Bahasa Inggris",href:"/kursus/bahasa-inggris"},{text:"Bahasa Arab",href:"/kursus/bahasa-arab"},{text:"Mandarin",href:"/kursus/bahasa-mandarin"},{text:"Matematika",href:"/kursus/matematika"}]},
  ];
  return <>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc?t.nav:"rgba(14,8,12,0.6)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${sc?t.navB:"rgba(255,255,255,0.04)"}`,transition:"all 0.35s"}}>
      <W s={{display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
        <EdukaziaLogo variant={t.m==='dark'||!sc?'white':'default'} size="md" href="/"/>{sc&&<span className="hide-mobile" style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.p,background:t.pS,padding:"4px 12px",borderRadius:100,marginLeft:8,whiteSpace:"nowrap"}}>Bimbel dari Maluku Utara yang punya LMS Keren!</span>}
        <div className="desktop-menu" style={{display:"flex",alignItems:"center",gap:4}}>
          {dropdowns.map((dd,di)=><div key={di} style={{position:"relative"}} onMouseEnter={()=>setOpenDD(di)} onMouseLeave={()=>setOpenDD(null)}><button style={{fontFamily:fb,fontSize:13,fontWeight:600,color:sc?t.sub:"rgba(255,255,255,0.7)",background:"none",border:"none",cursor:"pointer",padding:"8px 12px",borderRadius:8,display:"flex",alignItems:"center",gap:5}}>{dd.label}<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>{openDD===di&&<div style={{position:"absolute",top:"100%",left:0,background:t.card,borderRadius:14,border:`1px solid ${t.cb}`,boxShadow:"0 12px 40px rgba(0,0,0,0.15)",padding:6,minWidth:220,zIndex:100}}>{dd.items.map((item,ii)=><a key={ii} href={item.href} style={{display:"block",padding:"10px 16px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:13,fontWeight:600,color:t.tx}} onMouseEnter={e=>e.currentTarget.style.background=t.pS} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{item.text}</a>)}</div>}</div>)}
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:sc?"rgba(92,79,229,0.08)":"rgba(255,255,255,0.1)",border:`1.5px solid ${sc?"rgba(92,79,229,0.28)":"rgba(255,255,255,0.2)"}`,boxShadow:sc?"0 1px 3px rgba(0,0,0,0.08)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:8}}>{isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",borderRadius:12,padding:"10px 22px",textDecoration:"none",marginLeft:8}}>Login ke Portal</a>
        </div>
        <div className="mobile-menu-btn" style={{display:"none",alignItems:"center",gap:8}}>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:11,color:"#fff",background:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",borderRadius:10,padding:"8px 14px",textDecoration:"none",whiteSpace:"nowrap"}}>Login ke Portal</a>
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:sc?"rgba(92,79,229,0.08)":"rgba(255,255,255,0.1)",border:sc?"1.5px solid rgba(92,79,229,0.28)":"1.5px solid rgba(255,255,255,0.2)",boxShadow:sc?"0 1px 3px rgba(0,0,0,0.08)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>{isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <button onClick={()=>setMob(m=>!m)} style={{width:36,height:36,borderRadius:10,background:sc?"rgba(92,79,229,0.08)":"rgba(255,255,255,0.1)",border:sc?"1.5px solid rgba(92,79,229,0.28)":"1.5px solid rgba(255,255,255,0.2)",boxShadow:sc?"0 1px 3px rgba(0,0,0,0.08)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round">{mob?<><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>:<><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}</svg></button>
        </div>
      </W>
    </nav>
    {mob&&<div style={{position:"fixed",top:68,left:0,right:0,bottom:0,background:t.card,zIndex:999,padding:24,overflowY:"auto"}} onClick={()=>setMob(false)}>{dropdowns.map((dd,di)=><div key={di} style={{marginBottom:20}}><div style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,marginBottom:8}}>{dd.label}</div>{dd.items.map((item,ii)=><a key={ii} href={item.href} onClick={()=>setMob(false)} style={{display:"block",padding:"10px 14px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:14,fontWeight:500,color:t.sub,borderBottom:`1px solid ${t.cb}`}}>{item.text}</a>)}</div>)}</div>}
  </>;
}

// ═══════ 1. HERO — Dark, Singapore Math visual ═══════
function Hero(){
  const t=useT();
  const steps=["Concrete","Pictorial","Abstract"];
  const labels=["Pegang & Rasakan","Gambar & Visualkan","Rumus & Konsep"];
  const[si,setSi]=useState(0);
  useEffect(()=>{const i=setInterval(()=>setSi(p=>(p+1)%steps.length),2500);return()=>clearInterval(i);},[]);

  return <section style={{background:"linear-gradient(160deg,#1A0E18 0%,#2A1428 40%,#1A0E18 100%)",paddingTop:130,paddingBottom:80,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:"15%",left:"8%",width:280,height:280,borderRadius:"50%",background:"#EC4899",opacity:0.04,filter:"blur(100px)"}}/>
    <div style={{position:"absolute",bottom:"10%",right:"12%",width:220,height:220,borderRadius:"50%",background:"#F78DC2",opacity:0.03,filter:"blur(80px)"}}/>
    <W>
      <div className="hero-flex" style={{display:"flex",alignItems:"center",gap:52}}>
        <div style={{flex:"1 1 500px"}}>
          <Rv><div style={{fontFamily:fb,fontSize:13,fontWeight:700,color:"#F78DC2",background:"rgba(247,141,194,0.08)",padding:"6px 18px",borderRadius:100,display:"inline-flex",alignItems:"center",gap:8,marginBottom:24,border:"1px solid rgba(247,141,194,0.15)"}}>
            <span style={{fontSize:14}}>🇸🇬</span> Metode Singapura
          </div></Rv>
          <Rv delay={0.08}>
            <h1 style={{fontFamily:fh,fontSize:46,fontWeight:800,color:"#fff",lineHeight:1.1,letterSpacing:-1.5,margin:"0 0 10px"}}>
              Paham <span style={{color:"#F78DC2"}}>Kenapa</span>,<br/>Bukan Cuma Hafal Caranya.
            </h1>
            <div style={{fontFamily:fh,fontSize:18,fontWeight:600,color:"rgba(255,255,255,0.4)",marginBottom:20}}>Matematika dengan Metode Singapura — ranking #1 dunia.</div>
          </Rv>
          <Rv delay={0.12}>
            <p style={{fontFamily:fb,fontSize:16,color:"rgba(255,255,255,0.35)",lineHeight:1.75,margin:"0 0 28px",maxWidth:440}}>
              Dari benda nyata → gambar → baru rumus. Anak paham konsep, bukan sekedar hafal langkah. Metode yang dipakai Singapura, Korea, dan sekolah-sekolah terbaik di dunia.
            </p>
          </Rv>
          <Rv delay={0.16}>
            <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:15,color:"#1A0E18",background:"#F78DC2",borderRadius:14,padding:"16px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(247,141,194,0.25)"}}><WAIcon size={18} color="#1A0E18"/> Daftar Kursus Matematika</a>
          </Rv>
        </div>

        {/* Right — CPA Method visual */}
        <div className="hero-right" style={{flex:"0 0 360px",position:"relative"}}>
          <Rv delay={0.15}>
            <div style={{background:"rgba(255,255,255,0.03)",borderRadius:24,border:"1px solid rgba(255,255,255,0.06)",padding:"36px 32px",textAlign:"center"}}>
              <div style={{fontFamily:fb,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:1,marginBottom:20}}>Metode CPA Singapura</div>

              {/* 3-step CPA */}
              <div style={{display:"flex",gap:8,marginBottom:20}}>
                {steps.map((s,i)=><div key={i} style={{flex:1,background:si===i?"rgba(247,141,194,0.12)":"rgba(255,255,255,0.03)",borderRadius:12,padding:"14px 8px",border:`1px solid ${si===i?"rgba(247,141,194,0.2)":"rgba(255,255,255,0.04)"}`,transition:"all 0.4s"}}>
                  <div style={{fontSize:24,marginBottom:6}}>{["🧱","📐","💡"][i]}</div>
                  <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:si===i?"#F78DC2":"rgba(255,255,255,0.35)",transition:"color 0.4s"}}>{s}</div>
                  <div style={{fontFamily:fb,fontSize:8,color:"rgba(255,255,255,0.25)",marginTop:2}}>{labels[i]}</div>
                </div>)}
              </div>

              {/* Arrow flow */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:16}}>
                {[0,1,2].map(i=><Fragment key={i}>
                  <div key={`d${i}`} style={{width:24,height:24,borderRadius:6,background:si>=i?"rgba(247,141,194,0.15)":"rgba(255,255,255,0.03)",border:`1px solid ${si>=i?"rgba(247,141,194,0.2)":"rgba(255,255,255,0.04)"}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.4s"}}>
                    <div style={{width:8,height:8,borderRadius:2,background:si>=i?"#F78DC2":"rgba(255,255,255,0.1)",transition:"all 0.4s"}}/>
                  </div>
                  {i<2&&<div key={`a${i}`} style={{color:si>i?"#F78DC2":"rgba(255,255,255,0.15)",fontSize:10,transition:"color 0.4s"}}>→</div>}
                </Fragment>)}
              </div>

              <div key={si} style={{fontFamily:fb,fontSize:13,color:"rgba(255,255,255,0.5)",animation:"countUp 0.4s ease"}}>
                {si===0&&"Anak pegang, hitung, rasakan benda nyata"}
                {si===1&&"Gambar bar model & diagram untuk visualisasi"}
                {si===2&&"Baru masuk rumus — karena sudah paham konsepnya"}
              </div>
            </div>
          </Rv>
          <div style={{position:"absolute",bottom:-8,left:-20,background:"rgba(26,14,24,0.95)",borderRadius:12,padding:"10px 16px",border:"1px solid rgba(247,141,194,0.12)",boxShadow:"0 8px 20px rgba(0,0,0,0.3)",animation:"float 5s ease-in-out infinite",zIndex:2}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:14}}>🏆</span>
              <div><div style={{fontFamily:fh,fontSize:11,fontWeight:800,color:"#F78DC2"}}>#1 Dunia</div><div style={{fontFamily:fb,fontSize:8,color:"rgba(255,255,255,0.35)"}}>TIMSS & PISA ranking</div></div>
            </div>
          </div>
        </div>
      </div>
    </W>
  </section>;
}

// ═══════ 2. WHY SINGAPORE MATH ═══════
function WhySingapore(){
  const t=useT();
  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Kenapa Metode Singapura?</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,maxWidth:500,marginLeft:"auto",marginRight:"auto",lineHeight:1.7}}>Bukan metode baru yang eksperimental — ini metode yang sudah terbukti bikin Singapura jadi #1 Matematika dunia.</p>
    </div></Rv>
    <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
      {[
        {icon:<Package size={28} color={t.p}/>,title:"Concrete → Pictorial → Abstract",desc:"Anak pegang benda dulu, gambar, baru rumus. Bukan langsung rumus yang bikin bingung.",border:t.p},
        {icon:<BarChart3 size={22} color={t.p}/>,title:"Bar Modeling",desc:"Soal cerita yang biasanya bikin pusing, jadi mudah dipahami lewat diagram batang visual.",border:t.bl},
        {icon:<Puzzle size={28} color={t.bl}/>,title:"Number Bonds",desc:"Anak paham hubungan antar angka — 7 itu 3+4, itu 5+2, itu 6+1. Fondasi logika yang kuat.",border:t.or},
        {icon:"lightbulb",title:"Paham 'Kenapa', Bukan Cuma 'Caranya'",desc:"Guru di sekolah ajarkan caranya. Metode Singapura ajarkan kenapa cara itu bekerja.",border:t.g},
      ].map((item,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:18,overflow:"hidden",border:`1.5px solid ${h?item.border+"30":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateY(-3px)":"none"}}>
          <div style={{height:3,background:item.border,opacity:0.5}}/>
          <div style={{padding:"22px 24px",display:"flex",gap:14,alignItems:"flex-start"}}>
            <div style={{display:"flex",flexShrink:0}}>{item.icon}</div>
            <div><h3 style={{fontFamily:fh,fontSize:15,fontWeight:700,color:t.tx,margin:"0 0 6px"}}>{item.title}</h3><p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:0}}>{item.desc}</p></div>
          </div>
        </div>
      </Rv>;})}
    </div>
  </W></section>;
}

// ═══════ 3. AUDIENCE TABS — 2 only (Anak + Remaja) ═══════
function AudienceSection(){
  const t=useT();
  const[tab,setTab]=useState(0);
  const audiences = [
    {
      label:"Anak SD",ageRange:"7–13 thn",sub:"Fondasi logika & konsep",Icon:Calculator,c:t.p,
      headline:"Fondasi Logika yang Benar, Bukan Hafalan Rumus",
      desc:"Di SD, anak belajar cara mengerjakan soal. Metode Singapura mengajarkan anak memahami KENAPA — sehingga ketika soal berubah bentuk, anak tetap bisa.",
      pains:["Anak bisa ngerjain soal yang sama, tapi kalau soalnya diubah dikit — bingung","Hafal perkalian tapi tidak paham konsep perkalian itu apa","Soal cerita = momok yang paling ditakuti"],
      outcomes:["Anak paham konsep — kalau soal berubah bentuk, tetap bisa jawab","Bar modeling bikin soal cerita jadi mudah divisualisasi","Fondasi kuat untuk Matematika SMP nanti"],
      story:{name:"Mama Fitri",child:"Amel, 10 thn · Ternate",before:"Hafal cara, tapi kalau soal dibalik — blank",after:"Mulai paham pola dan bisa jawab variasi soal",detail:"Tes Level tunjukkan Amel hafal cara hitung tapi tidak paham konsep. Tutor mulai dari bar model — visualisasi soal cerita. Setelah paket pertama, Amel bilang 'Oh ternyata gitu toh!' — akhirnya dia paham kenapa, bukan cuma caranya.",gender:"girl"},
      waText:"Halo+EduKazia%2C+saya+ingin+daftarkan+anak+untuk+kursus+Matematika+Metode+Singapura.+Nama%3A+...+Usia%3A+...",
    },
    {
      label:"Remaja SMP–SMA",ageRange:"13–18 thn",sub:"Bridging visual → abstrak",Icon:Sigma,c:t.bl,
      headline:"Aljabar & Geometri Tidak Harus Bikin Pusing",
      desc:"Materi SMP–SMA jauh lebih abstrak dari SD. Metode Singapura membantu remaja bridging dari visual ke abstrak secara bertahap — tidak lompat langsung ke rumus.",
      pains:["Materi SMP tiba-tiba abstrak, anak kehilangan kepercayaan diri","Aljabar terasa kayak bahasa asing yang tidak masuk akal","Guru di sekolah terlalu cepat, anak ketinggalan"],
      outcomes:["Bridging visual → abstrak secara bertahap, tidak dipaksa lompat","Aljabar, geometri, statistik jadi masuk akal lewat visualisasi","Tempo belajar sesuai anak — tidak ketinggalan, tidak bosen"],
      story:{name:"Papa Ahmad",child:"Rizky, 14 thn · Tidore",before:"Kaget Matematika SMP, nilai turun drastis",after:"Paham pola aljabar, nilai UTS naik dari 52 ke 68",detail:"Fondasi aritmetika Rizky kuat tapi belum siap dengan abstraksi aljabar. Tutor pakai Metode Singapura — bridging dari bar model ke persamaan. Pelan-pelan Rizky mulai 'lihat' pola. Belum sempurna, tapi tren naik dan dia tidak takut lagi buka buku Matematika.",gender:"boy"},
      waText:"Halo+EduKazia%2C+saya+ingin+daftarkan+anak+remaja+untuk+kursus+Matematika.+Nama%3A+...+Kelas%3A+...",
    },
  ];
  const a = audiences[tab];

  return <section style={{background:t.bgW,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:38,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Matematika untuk Siapa?</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Khusus untuk anak dan remaja. Kurikulum terstruktur sesuai level.</p>
    </div></Rv>

    {/* Tab selector — premium tile with math-themed icons */}
    <Rv delay={0.05}>
      <div className="audience-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:44,maxWidth:680,marginLeft:"auto",marginRight:"auto"}}>
        {audiences.map((au,i)=>{
          const active = tab===i;
          return <button key={i} onClick={()=>setTab(i)} className="audience-tab" style={{
            background: active ? `linear-gradient(135deg, ${au.c}0E 0%, ${au.c}1F 100%)` : t.card,
            border: active ? `2px solid ${au.c}` : `1.5px solid ${t.cb}`,
            borderRadius: 18,
            padding: "22px 16px",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
            transform: active ? "translateY(-3px)" : "none",
            boxShadow: active ? `0 14px 36px ${au.c}28, 0 0 0 1px ${au.c}10` : t.cs,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            textAlign: "center",
            outline: "none",
            overflow: "hidden",
          }}>
            {/* Decorative gradient orb */}
            {active && <div style={{position:"absolute",top:-20,right:-20,width:80,height:80,borderRadius:"50%",background:`radial-gradient(circle,${au.c}25 0%,transparent 70%)`,pointerEvents:"none"}}/>}

            {/* Subtle grid paper pattern background (math identity) */}
            <svg className="audience-grid-bg" style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:active?0.08:0.04,transition:"opacity 0.4s",pointerEvents:"none"}}>
              <defs><pattern id={`mathGrid${i}`} width="16" height="16" patternUnits="userSpaceOnUse"><path d="M 16 0 L 0 0 0 16" fill="none" stroke={au.c} strokeWidth="0.5"/></pattern></defs>
              <rect width="100%" height="100%" fill={`url(#mathGrid${i})`}/>
            </svg>

            {/* Math icon container */}
            <div className="audience-icon" style={{
              width: 52, height: 52, borderRadius: 14,
              background: active ? `linear-gradient(135deg, ${au.c}, ${au.c}DD)` : `${au.c}12`,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
              boxShadow: active ? `0 6px 20px ${au.c}45` : "none",
              transform: active ? "scale(1.05)" : "scale(1)",
              flexShrink: 0,
              zIndex: 1,
            }}>
              <au.Icon size={26} color={active?"#fff":au.c} strokeWidth={2.2}/>
            </div>

            {/* Text block */}
            <div className="audience-text" style={{zIndex:1}}>
              <div style={{fontFamily:fh,fontSize:11,fontWeight:700,color:au.c,marginBottom:3,letterSpacing:0.5,textTransform:"uppercase"}}>{au.ageRange}</div>
              <div style={{fontFamily:fh,fontSize:15,fontWeight:800,color:active?au.c:t.tx,marginBottom:4,letterSpacing:-0.3,lineHeight:1.2}}>{au.label}</div>
              <div style={{fontFamily:fb,fontSize:11,color:t.mu,lineHeight:1.4}}>{au.sub}</div>
            </div>

            {/* Active checkmark */}
            {active && <div className="audience-check" style={{position:"absolute",top:12,right:12,width:24,height:24,borderRadius:"50%",background:au.c,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 3px 10px ${au.c}55`,zIndex:2}}>
              <Check size={13} color="#fff" strokeWidth={3}/>
            </div>}
          </button>;
        })}
      </div>
    </Rv>

    {/* Content */}
    <div key={tab} style={{animation:"countUp 0.4s ease"}}>
      <div style={{maxWidth:800,margin:"0 auto 40px",textAlign:"center"}}>
        <h3 style={{fontFamily:fh,fontSize:28,fontWeight:800,color:t.tx,margin:"0 0 12px",lineHeight:1.2}}>{a.headline}</h3>
        <p style={{fontFamily:fb,fontSize:15,color:t.sub,lineHeight:1.7,maxWidth:560,margin:"0 auto"}}>{a.desc}</p>
      </div>
      <div className="story-flex" style={{display:"flex",gap:20,marginBottom:32}}>
        <div style={{flex:1,background:`${t.coral}04`,borderRadius:20,padding:"28px",border:`1px solid ${t.coral}10`}}>
          <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.coral,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Metode Biasa</div>
          {a.pains.map((p,i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<a.pains.length-1?12:0,alignItems:"flex-start"}}><div style={{width:20,height:20,borderRadius:6,background:`${t.coral}10`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,marginTop:1}}>✗</div><span style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.6}}>{p}</span></div>)}
        </div>
        <div style={{flex:1,background:t.pS,borderRadius:20,padding:"28px",border:`1px solid ${a.c}12`}}>
          <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:a.c,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Metode Singapura di EduKazia</div>
          {a.outcomes.map((o,i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<a.outcomes.length-1?12:0,alignItems:"flex-start"}}><div style={{width:20,height:20,borderRadius:6,background:`${a.c}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,marginTop:1,color:a.c}}>✓</div><span style={{fontFamily:fb,fontSize:14,color:t.tx,lineHeight:1.6,fontWeight:500}}>{o}</span></div>)}
        </div>
      </div>
      <div style={{textAlign:"center",marginBottom:36}}>
        <a href={`https://wa.me/6281384253679?text=${a.waText}`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:t.goldT,background:t.gold,borderRadius:14,padding:"14px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#1A1535"/> Daftar Kursus Matematika</a>
      </div>
      {/* HIDDEN: fake testimonial story — TODO re-enable with real data */}
      {false && (
        <div style={{maxWidth:700,margin:"0 auto",background:t.card,borderRadius:22,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
        <div style={{background:a.c,padding:"14px 28px",display:"flex",alignItems:"center",gap:10}}>
          <AvatarFace gender={a.story.gender} color="#fff" size={36}/>
          <div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:"#fff"}}>{a.story.name} — {a.story.child}</div><div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.65)"}}>Matematika Metode Singapura</div></div>
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

// ═══════ 4. CLASS TYPES ═══════
function ClassTypes(){const t=useT();const classes=[{name:"Reguler",ratio:"1 : 8",desc:"Belajar Matematika bareng teman. Problem solving jadi seru.",c:t.v,tags:["Biaya ringan","Diskusi bareng","Seru"]},{name:"Semi Privat",ratio:"1 : 4",desc:"Kelompok kecil — tutor lebih kenal cara berpikir anak.",c:t.or,tags:["Perhatian lebih","Kelompok nyaman"]},{name:"Privat",ratio:"1 : 1",desc:"Perhatian 100%. Tutor tahu persis di mana anak stuck dan bagaimana cara menjelaskannya.",c:t.p,rec:true,tags:["Perhatian penuh","Tahu titik stuck anak","Reschedule gratis"]}];return <section style={{background:t.bg,padding:"80px 0"}}><W><Rv><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Pilih Tipe Kelas</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Kurikulum Metode Singapura untuk semua tipe.</p></div></Rv><div style={{display:"flex",flexDirection:"column",gap:12,maxWidth:800,margin:"0 auto"}}>{classes.map((c,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}><div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:18,overflow:"hidden",border:c.rec?`2px solid ${c.c}35`:`1.5px solid ${h?c.c+"25":t.cb}`,boxShadow:c.rec?`0 6px 30px ${c.c}10`:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateX(4px)":"none",display:"flex"}} className="classtype-card-row"><div className="classtype-ratio-panel" style={{width:c.rec?110:90,flexShrink:0,background:c.rec?`linear-gradient(180deg,${c.c},${c.c}BB)`:`linear-gradient(180deg,${c.c}20,${c.c}08)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 12px"}}>{c.rec&&<div style={{fontFamily:fb,fontSize:7,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.2)",padding:"2px 8px",borderRadius:100,marginBottom:8,textTransform:"uppercase",letterSpacing:0.5}}>Rekomendasi</div>}<div className="classtype-ratio-num" style={{fontFamily:fh,fontSize:26,fontWeight:800,color:c.rec?"#fff":c.c,lineHeight:1}}>{c.ratio}</div><div style={{fontFamily:fb,fontSize:7,color:c.rec?"rgba(255,255,255,0.5)":t.mu,marginTop:3}}>tutor : siswa</div></div><div className="classtype-content" style={{flex:1,padding:"18px 22px",display:"flex",flexDirection:"column",justifyContent:"center",minWidth:0}}><h3 style={{fontFamily:fh,fontSize:c.rec?19:16,fontWeight:800,color:t.tx,margin:"0 0 4px"}}>{c.name}</h3><p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.5,margin:"0 0 10px"}}>{c.desc}</p><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{c.tags.map(tg=><span key={tg} style={{fontFamily:fb,fontSize:10,fontWeight:600,color:c.c,background:`${c.c}08`,padding:"3px 10px",borderRadius:6,border:`1px solid ${c.c}10`}}>{tg}</span>)}</div></div></div></Rv>})}</div></W></section>;}

// ═══════ 5. TES LEVEL + FAQ ═══════
function TesLevelAndFAQ(){const t=useT();const[op,setOp]=useState(null);const faqs=[["Apa bedanya dengan les Matematika biasa?","Les biasa ajarkan cara ngerjain soal. Metode Singapura ajarkan anak PAHAM konsepnya — dari benda nyata, ke gambar, baru ke rumus (CPA)."],["Anak saya sudah SMP, bisa pakai Metode Singapura?","Bisa. Metode Singapura bukan cuma untuk SD. Bridging visual → abstrak sangat membantu remaja yang struggle dengan aljabar dan geometri."],["Kurikulumnya bagaimana?","Terstruktur berbasis level dari Tes Level. Anak belajar sesuai kemampuannya, bukan sesuai kelas sekolah."],["Jadwalnya bagaimana?","Privat 100% fleksibel. Reguler & Semi Privat ada slot pilihan."],["Ada rekaman kelas?","Semua sesi direkam."],["Pembayarannya bagaimana?","Per paket — ringan. Detail harga via WhatsApp."]];return <section id="tes-level" style={{background:t.bgW,padding:"80px 0"}}><W><div className="story-flex" style={{display:"flex",gap:40}}><div style={{flex:"1 1 360px"}}><Rv><h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:"0 0 14px",letterSpacing:-0.5}}>Mulai dari Tes Level</h2><p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.7,marginBottom:28}}>Supaya tutor tahu fondasi anak di mana — dan tahu dari mana harus bridging.</p></Rv><Rv delay={0.05}><div style={{display:"flex",flexDirection:"column",gap:10}}>{[{n:"1",icon:<MessageSquare size={22} color={t.p}/>,title:"Chat WhatsApp",desc:"Bilang usia anak dan kelas sekolah."},{n:"2",icon:<ClipboardCheck size={22} color={t.p}/>,title:"Tes Level Online",desc:"30 menit via Zoom. Soal diagnostik, bukan ujian."},{n:"3",icon:<BarChart3 size={22} color={t.p}/>,title:"Terima Laporan",desc:"Fondasi mana yang kuat, mana yang perlu diperkuat."},{n:"4",icon:<Zap size={22} color={t.p}/>,title:"Mulai Belajar",desc:"Metode Singapura sesuai level anak."}].map((s,i)=><div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}><div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0}}><div style={{width:34,height:34,borderRadius:10,background:t.pS,display:"flex",alignItems:"center",justifyContent:"center"}}>{ s.icon==="gradcap"?<GraduationCap size={16} color="currentColor"/>:s.icon==="lightbulb"?<Lightbulb size={16} color="currentColor"/>:<Users size={16} color="currentColor"/>}</div>{i<3&&<div style={{width:2,height:20,background:t.cb}}/>}</div><div style={{paddingBottom:i<3?8:0}}><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.tx,margin:"0 0 2px"}}>Step {s.n}: {s.title}</div><div style={{fontFamily:fb,fontSize:12,color:t.mu}}>{s.desc}</div></div></div>)}</div></Rv><Rv delay={0.1}><div style={{marginTop:24}}><a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+Tes+Level+Matematika+untuk+anak`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.goldT,background:t.gold,borderRadius:12,padding:"13px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={14} color="#1A1535"/> Daftar Tes Level</a></div></Rv></div><div style={{flex:"1 1 380px"}}><Rv><h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:t.tx,margin:"0 0 18px"}}>Pertanyaan tentang Matematika</h3></Rv><Rv delay={0.05}><div>{faqs.map(([q,a],i)=><div key={i} style={{background:t.card,borderRadius:12,marginBottom:8,border:`1px solid ${op===i?t.p+"25":t.cb}`,overflow:"hidden",transition:"border 0.2s"}}><button onClick={()=>setOp(op===i?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 16px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}><span style={{fontFamily:fh,fontSize:13,fontWeight:600,color:op===i?t.tx:t.sub,flex:1}}>{q}</span><span style={{fontSize:16,color:t.p,transition:"transform 0.3s",transform:op===i?"rotate(45deg)":"none",fontWeight:300}}>+</span></button><div style={{maxHeight:op===i?160:0,transition:"max-height 0.3s ease",overflow:"hidden"}}><p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.7,padding:"0 16px 14px"}}>{a}</p></div></div>)}</div></Rv><Rv delay={0.1}><div style={{marginTop:12}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:12,color:"#fff",background:"#25D366",borderRadius:10,padding:"10px 20px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14}/> Chat WhatsApp</a></div></Rv></div></div></W></section>;}

// ═══════ 6. OTHER SUBJECTS ═══════
function OtherSubjects(){const t=useT();return <section style={{background:t.bg,padding:"64px 0"}}><W><Rv><h3 style={{fontFamily:fh,fontSize:24,fontWeight:800,color:t.tx,margin:"0 0 24px"}}>Pelajaran Lainnya di EduKazia</h3></Rv><div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>{[{name:"Bahasa Inggris",desc:"Speaking, conversation, pronunciation.",href:"/kursus/bahasa-inggris",c:t.bl},{name:"Bahasa Arab",desc:"Tajwid, makhraj, muhadatsah.",href:"/kursus/bahasa-arab",c:t.g},{name:"Mandarin 中文",desc:"Pinyin, karakter, percakapan.",href:"/kursus/bahasa-mandarin",c:t.or}].map((s,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.04*(i+1)}><div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:14,padding:"20px",border:`1.5px solid ${h?s.c+"25":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.3s",display:"flex",gap:12,alignItems:"flex-start"}}><div style={{width:4,height:28,borderRadius:2,background:s.c,flexShrink:0,marginTop:3}}/><div><h4 style={{fontFamily:fh,fontSize:15,fontWeight:700,color:t.tx,margin:"0 0 4px"}}>{s.name}</h4><p style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.5,margin:"0 0 10px"}}>{s.desc}</p><a href={s.href} style={{fontFamily:fh,fontWeight:700,fontSize:11,color:s.c,textDecoration:"none"}}>Lihat →</a></div></div></Rv>})}</div></W></section>;}

// ═══════ 7. CTA FINAL ═══════
function CTAFinal(){const t=useT();return <section style={{background:t.bgW,padding:"80px 0"}}><W><Rv><div style={{background:"linear-gradient(135deg,#1A0E18,#2A1428)",borderRadius:28,overflow:"hidden",position:"relative"}}><div style={{position:"absolute",top:-30,right:-30,width:150,height:150,borderRadius:"50%",background:"#EC4899",opacity:0.06,filter:"blur(50px)"}}/><div style={{padding:"56px 48px",textAlign:"center",position:"relative",zIndex:1}}><div style={{marginBottom:10,display:"flex"}}><Lightbulb size={32} color="#F78DC2"/></div><h2 style={{fontFamily:fh,fontSize:30,fontWeight:800,color:"#fff",margin:"0 0 12px",lineHeight:1.2}}>Matematika Tidak Harus<br/>Menakutkan.</h2><p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.4)",lineHeight:1.7,marginBottom:28,maxWidth:440,marginLeft:"auto",marginRight:"auto"}}>Metode Singapura mengubah "tidak bisa" menjadi "Oh, ternyata begini caranya!" Chat langsung.</p><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:16,color:"#1A0E18",background:"#F78DC2",borderRadius:14,padding:"16px 40px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(247,141,194,0.25)"}}><WAIcon size={18} color="#1A0E18"/> Daftar Kursus Matematika</a><p style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.25)",marginTop:12}}>Tanpa kontrak · Metode Singapura</p></div></div></Rv></W></section>;}

// ═══════ FOOTER ═══════
function Footer(){const t=useT();return <footer style={{background:t.footer,padding:"40px 0 20px"}}><W><div style={{display:"flex",gap:36,flexWrap:"wrap",marginBottom:28}}><div style={{flex:"1 1 200px"}}><div style={{marginBottom:12}}><EdukaziaLogo variant="white" size="sm" href="/"/></div><p style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,maxWidth:200}}>Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia.</p></div>{[{t:"Pelajaran",i:["Bahasa Inggris","Bahasa Arab","Mandarin","Matematika"]},{t:"Kelas",i:["Privat 1-on-1","Semi Privat","Reguler"]},{t:"Lainnya",i:["FAQ","Portal Orang Tua","Kebijakan Privasi"]}].map(col=><div key={col.t} style={{flex:"1 1 100px"}}><h4 style={{fontFamily:fh,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.45)",marginBottom:12,textTransform:"uppercase",letterSpacing:0.5}}>{col.t}</h4>{col.i.map(item=><div key={item} style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:8}}>{item}</div>)}</div>)}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:14,textAlign:"center"}}><p style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.15)"}}>© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia.</p></div></W></footer>;}
function WAFloat(){return <a href={WA} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:20,right:20,width:52,height:52,borderRadius:14,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",animation:"waPulse 2s ease-in-out infinite",zIndex:999}}><WAIcon size={24}/></a>;}

export default function KursusMatematika(){
  const[isDark,setIsDark]=useState(false);const t=isDark?D:L;
  return <TX.Provider value={t}><div style={{background:t.bg,minHeight:"100vh",transition:"background 0.3s"}}>
    <style>{animations}</style>
    <style>{`body{background:${t.bg};transition:background 0.3s}`}</style>
    <Nav isDark={isDark} toggle={()=>setIsDark(d=>!d)}/>
    <Hero/>
    <WhySingapore/>
    <AudienceSection/>
    <ClassTypes/>
    <TesLevelAndFAQ/>
    <OtherSubjects/>
    <CTAFinal/>
    <Footer/>
    <WAFloat/>
  </div></TX.Provider>;
}
