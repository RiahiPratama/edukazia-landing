/* eslint-disable */
// @ts-nocheck
"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { BarChart3, ClipboardCheck, Clock, Globe, Map, MessageSquare, Phone, Zap } from "lucide-react";

const TX = createContext();
const useT = () => useContext(TX);
// Cool palette — different from warm /untuk-anak
const L = {bg:"#F8F9FC",bgW:"#F0F4FF",bgC:"#E8EEFF",card:"#FFFFFF",cb:"rgba(0,0,0,0.05)",cs:"0 2px 20px rgba(0,0,0,0.04)",ch:"0 12px 40px rgba(59,130,246,0.1)",tx:"#111827",sub:"#4B5563",mu:"#9CA3AF",p:"#3B82F6",pS:"#EFF6FF",g:"#10B981",gS:"#ECFDF5",gold:"#E6B800",goldS:"#FFF9E0",goldT:"#111827",pk:"#EC4899",pkS:"#FDF2F8",or:"#F59E0B",orS:"#FFFBEB",coral:"#EF4444",nav:"rgba(248,249,252,0.92)",navB:"rgba(0,0,0,0.06)",footer:"#111827",cta:"linear-gradient(135deg,#3B82F6,#6366F1)",m:"light"};
const D = {bg:"#0B0F1A",bgW:"#0E1225",bgC:"#111633",card:"rgba(255,255,255,0.03)",cb:"rgba(255,255,255,0.07)",cs:"0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",ch:"0 16px 48px rgba(59,130,246,0.12), 0 0 0 1px rgba(255,255,255,0.08)",tx:"#F3F4F6",sub:"#9CA3AF",mu:"#4B5563",p:"#60A5FA",pS:"rgba(96,165,250,0.1)",g:"#4ADE9A",gS:"rgba(74,222,154,0.08)",gold:"#F0C830",goldS:"rgba(240,200,48,0.08)",goldT:"#0B0F1A",pk:"#F78DC2",pkS:"rgba(247,141,194,0.08)",or:"#FFB84D",orS:"rgba(255,184,77,0.08)",coral:"#FF8A8A",nav:"rgba(11,15,26,0.85)",navB:"rgba(255,255,255,0.06)",footer:"#070A12",cta:"linear-gradient(135deg,#3B82F6,#6366F1)",m:"dark"};
const fh="'Sora',sans-serif",fb="'Plus Jakarta Sans',sans-serif";
const WA_TES="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+daftarkan+anak+remaja+saya+untuk+Tes+Level.+Nama%3A+...+Usia%3A+...+Kelas%3A+...";
const WA="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+konsultasi+kursus+untuk+anak+remaja+saya";

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
::selection{background:#3B82F640}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes waPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,0.3)}70%{box-shadow:0 0 0 14px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}
@keyframes countUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
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

// ═══════ NAV ═══════
function Nav({isDark,toggle}){
  const t=useT();const[sc,setSc]=useState(false);const[openDD,setOpenDD]=useState(null);const[mob,setMob]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>50);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  const dds=[
    {label:"Untuk Siapa",items:[{text:"Anak (7–13 thn)",href:"/untuk-anak"},{text:"Remaja SMP–SMA (13–18 thn)",href:"/untuk-remaja"},{text:"Mama Yang Mau Belajar",href:"/untuk-orang-tua"},{text:"Kelas Privat 1-on-1",href:"/kursus/privat"}]},
    {label:"Pelajaran",items:[{text:"Bahasa Inggris",href:"/kursus/bahasa-inggris"},{text:"Bahasa Arab",href:"/kursus/bahasa-arab"},{text:"Mandarin",href:"/kursus/bahasa-mandarin"},{text:"Matematika",href:"/kursus/matematika"}]},
  ];
  return <>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc?t.nav:"rgba(11,15,26,0.6)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${sc?t.navB:"rgba(255,255,255,0.04)"}`,transition:"all 0.35s"}}>
      <W s={{display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <EdukaziaLogo variant={t.m==='dark'||!sc?'white':'default'} size="md" href="/"/>{sc&&<span className="hide-mobile" style={{fontFamily:fb,fontSize:10,fontWeight:600,color:t.p,background:t.pS,padding:"3px 10px",borderRadius:100,marginLeft:6}}>Bimbel dari Maluku Utara yang punya LMS Keren!</span>}
        <div className="desktop-menu" style={{display:"flex",alignItems:"center",gap:2}}>
          {dds.map((dd,di)=><div key={di} style={{position:"relative"}} onMouseEnter={()=>setOpenDD(di)} onMouseLeave={()=>setOpenDD(null)}><button style={{fontFamily:fb,fontSize:13,fontWeight:600,color:sc?t.sub:"rgba(255,255,255,0.65)",background:"none",border:"none",cursor:"pointer",padding:"8px 14px",borderRadius:8,display:"flex",alignItems:"center",gap:4}}>{dd.label}<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 3.5L5 6.5L7.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></button>{openDD===di&&<div style={{position:"absolute",top:"100%",left:0,background:t.card,borderRadius:12,border:`1px solid ${t.cb}`,boxShadow:"0 12px 40px rgba(0,0,0,0.12)",padding:5,minWidth:210,zIndex:100}}>{dd.items.map((it,ii)=><a key={ii} href={it.href} style={{display:"block",padding:"9px 14px",borderRadius:8,textDecoration:"none",fontFamily:fb,fontSize:13,fontWeight:600,color:t.tx}} onMouseEnter={e=>e.currentTarget.style.background=t.pS} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{it.text}</a>)}</div>}</div>)}
          <button onClick={toggle} style={{width:34,height:34,borderRadius:9,background:sc?"rgba(92,79,229,0.08)":"rgba(255,255,255,0.1)",border:`1.5px solid ${sc?"rgba(92,79,229,0.28)":"rgba(255,255,255,0.2)"}`,boxShadow:sc?"0 1px 3px rgba(0,0,0,0.08)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:8}}>{isDark?<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:12,color:"#fff",background:t.cta,borderRadius:10,padding:"9px 20px",textDecoration:"none",marginLeft:8}}>Login ke Portal</a>
        </div>
        <div className="mobile-menu-btn" style={{display:"none",alignItems:"center",gap:6}}>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:10,color:"#fff",background:t.cta,borderRadius:8,padding:"7px 12px",textDecoration:"none"}}>Login</a>
          <button onClick={toggle} style={{width:34,height:34,borderRadius:9,background:sc?"rgba(92,79,229,0.08)":"rgba(255,255,255,0.1)",border:sc?"1.5px solid rgba(92,79,229,0.28)":"1.5px solid rgba(255,255,255,0.2)",boxShadow:sc?"0 1px 3px rgba(0,0,0,0.08)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>{isDark?<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <button onClick={()=>setMob(m=>!m)} style={{width:34,height:34,borderRadius:9,background:sc?"rgba(92,79,229,0.08)":"rgba(255,255,255,0.1)",border:sc?"1.5px solid rgba(92,79,229,0.28)":"1.5px solid rgba(255,255,255,0.2)",boxShadow:sc?"0 1px 3px rgba(0,0,0,0.08)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round">{mob?<><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>:<><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}</svg></button>
        </div>
      </W>
    </nav>
    {mob&&<div style={{position:"fixed",top:64,left:0,right:0,bottom:0,background:t.card,zIndex:999,padding:20,overflowY:"auto"}} onClick={()=>setMob(false)}>{dds.map((dd,di)=><div key={di} style={{marginBottom:18}}><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.tx,marginBottom:6}}>{dd.label}</div>{dd.items.map((it,ii)=><a key={ii} href={it.href} style={{display:"block",padding:"10px 12px",borderRadius:8,textDecoration:"none",fontFamily:fb,fontSize:14,fontWeight:500,color:t.sub,borderBottom:`1px solid ${t.cb}`}}>{it.text}</a>)}</div>)}</div>}
  </>;
}

// ═══════ PHONE MOCKUP ═══════
function PhoneMockup(){
  const[cd,setCd]=useState({m:14,s:32});
  useEffect(()=>{const t=setInterval(()=>setCd(p=>p.s>0?{...p,s:p.s-1}:p.m>0?{m:p.m-1,s:59}:{m:14,s:32}),1000);return()=>clearInterval(t);},[]);
  const pad=n=>String(n).padStart(2,'0');

  return <div style={{background:"#111118",borderRadius:28,padding:"10px",boxShadow:"0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)"}}>
    <div style={{width:60,height:5,borderRadius:3,background:"#222",margin:"0 auto 6px"}}/>
    <div style={{background:"#0C0C14",borderRadius:20,overflow:"hidden",padding:"12px 12px 8px"}}>
      {/* Header */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:22,height:22,borderRadius:6,background:"linear-gradient(135deg,#3B82F6,#6366F1)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:fh,fontWeight:800,fontSize:8,color:"#fff"}}>E</div><div><div style={{fontFamily:fh,fontSize:9,fontWeight:700,color:"#fff"}}>Portal Siswa</div><div style={{fontFamily:fb,fontSize:6,color:"rgba(255,255,255,0.35)"}}>Nabila · Elementary</div></div></div>
        <div style={{width:20,height:20,borderRadius:6,background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8}}>👤</div>
      </div>

      {/* Jadwal Hari Ini */}
      <div style={{background:"linear-gradient(135deg,rgba(59,130,246,0.12),rgba(99,102,241,0.08))",borderRadius:12,padding:"10px",marginBottom:7,border:"1px solid rgba(59,130,246,0.12)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
          <span style={{fontFamily:fh,fontSize:7,fontWeight:700,color:"#60A5FA",textTransform:"uppercase",letterSpacing:0.6}}>Jadwal Hari Ini</span>
          <span style={{fontFamily:fb,fontSize:6,color:"rgba(255,255,255,0.25)"}}>Senin, 14 Apr</span>
        </div>

        {/* Next class */}
        <div style={{background:"rgba(0,0,0,0.3)",borderRadius:10,padding:"9px 10px",marginBottom:6,border:"1px solid rgba(96,165,250,0.1)"}}>
          <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:5}}>
            <div style={{width:5,height:5,borderRadius:"50%",background:"#4ADE9A",boxShadow:"0 0 6px #4ADE9A",animation:"pulse 1.5s infinite"}}/>
            <span style={{fontFamily:fb,fontSize:7,fontWeight:700,color:"#4ADE9A"}}>BERIKUTNYA</span>
            <span style={{fontFamily:fb,fontSize:6,color:"rgba(255,255,255,0.3)",marginLeft:"auto"}}>15:30 WIT</span>
          </div>
          <div style={{fontFamily:fh,fontSize:10,fontWeight:700,color:"#fff",marginBottom:3}}>Bahasa Inggris — Speaking</div>
          <div style={{fontFamily:fb,fontSize:7,color:"rgba(255,255,255,0.4)",marginBottom:7}}>👩‍🏫 Ms. Sarah · Semi Privat</div>

          {/* Countdown */}
          <div style={{background:"rgba(96,165,250,0.08)",borderRadius:8,padding:"8px",border:"1px solid rgba(96,165,250,0.08)"}}>
            <div style={{fontFamily:fb,fontSize:6,color:"rgba(255,255,255,0.3)",textAlign:"center",marginBottom:5,textTransform:"uppercase",letterSpacing:0.4}}>Dimulai dalam</div>
            <div style={{display:"flex",justifyContent:"center",gap:4}}>
              {[{v:"00",l:"Jam"},{v:pad(cd.m),l:"Mnt"},{v:pad(cd.s),l:"Dtk"}].map((u,i)=><div key={i} style={{textAlign:"center"}}><div style={{background:"rgba(0,0,0,0.5)",borderRadius:6,padding:"4px 8px",minWidth:28,border:"1px solid rgba(96,165,250,0.1)"}}><div style={{fontFamily:fh,fontSize:13,fontWeight:800,color:"#fff",lineHeight:1}}>{u.v}</div></div><div style={{fontFamily:fb,fontSize:5,color:"rgba(255,255,255,0.25)",marginTop:2}}>{u.l}</div></div>)}
            </div>
            <div style={{textAlign:"center",marginTop:6}}><div style={{display:"inline-flex",alignItems:"center",gap:3,background:"#3B82F6",borderRadius:5,padding:"3px 10px"}}><span style={{fontFamily:fb,fontSize:7,fontWeight:700,color:"#fff"}}>Gabung Zoom →</span></div></div>
          </div>
        </div>

        {/* Done class */}
        <div style={{background:"rgba(255,255,255,0.02)",borderRadius:7,padding:"6px 8px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:14,height:14,borderRadius:4,background:"rgba(74,222,154,0.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:6}}>✓</div><div><div style={{fontFamily:fb,fontSize:7,fontWeight:600,color:"rgba(255,255,255,0.45)"}}>Matematika — Aljabar</div><div style={{fontFamily:fb,fontSize:6,color:"rgba(255,255,255,0.2)"}}>09:00 · Selesai</div></div></div>
          <div style={{display:"flex",gap:2}}>{["📝","🎥"].map(e=><div key={e} style={{width:14,height:14,borderRadius:4,background:"rgba(255,255,255,0.04)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:6}}>{e}</div>)}</div>
        </div>
      </div>

      {/* Materi interaktif */}
      <div style={{background:"rgba(255,255,255,0.025)",borderRadius:10,padding:"8px 9px",marginBottom:7,border:"1px solid rgba(255,255,255,0.03)"}}>
        <div style={{fontFamily:fh,fontSize:7,fontWeight:700,color:"#818CF8",marginBottom:4}}>Materi: Daily Conversation</div>
        <div style={{display:"flex",gap:2,flexWrap:"wrap",marginBottom:4}}>
          {["Can","you","help","me","find","the","library?"].map((w,i)=><span key={i} style={{fontFamily:fb,fontSize:9,fontWeight:600,color:i===4?"#60A5FA":"rgba(255,255,255,0.55)",padding:"1px 4px",borderRadius:3,background:i===4?"rgba(96,165,250,0.12)":"transparent"}}>{w}</span>)}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:3}}><div style={{width:10,height:10,borderRadius:"50%",background:"#60A5FA",display:"flex",alignItems:"center",justifyContent:"center",fontSize:5}}>▶</div><span style={{fontFamily:fb,fontSize:6,color:"#60A5FA"}}>/faɪnd/ — menemukan</span></div>
      </div>

      {/* Progress row */}
      <div style={{display:"flex",gap:5,marginBottom:6}}>
        <div style={{flex:1,background:"rgba(255,255,255,0.025)",borderRadius:8,padding:"6px 8px",border:"1px solid rgba(255,255,255,0.03)"}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}><span style={{fontFamily:fb,fontSize:6,color:"rgba(255,255,255,0.35)"}}>Progress</span><span style={{fontFamily:fh,fontSize:7,fontWeight:800,color:"#4ADE9A"}}>72%</span></div>
          <div style={{height:3,borderRadius:2,background:"rgba(255,255,255,0.05)"}}><div style={{width:"72%",height:"100%",borderRadius:2,background:"linear-gradient(90deg,#4ADE9A,#60A5FA)"}}/></div>
        </div>
        <div style={{flex:1,background:"rgba(255,255,255,0.025)",borderRadius:8,padding:"6px 8px",border:"1px solid rgba(255,255,255,0.03)"}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}><span style={{fontFamily:fb,fontSize:6,color:"rgba(255,255,255,0.35)"}}>Sesi</span><span style={{fontFamily:fh,fontSize:7,fontWeight:800,color:"#FFB84D"}}>5/8</span></div>
          <div style={{display:"flex",gap:1.5}}>{[1,2,3,4,5,6,7,8].map(i=><div key={i} style={{flex:1,height:3,borderRadius:1.5,background:i<=5?"#FFB84D":"rgba(255,255,255,0.05)"}}/>)}</div>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{display:"flex",justifyContent:"space-around",paddingTop:5,borderTop:"1px solid rgba(255,255,255,0.03)"}}>
        {[{i:"🏠",l:"Beranda",a:true},{i:"📅",l:"Jadwal"},{i:"📖",l:"Materi"},{i:"📊",l:"Progress"}].map(n=><div key={n.l} style={{textAlign:"center",opacity:n.a?1:0.3}}><span style={{fontSize:8,display:"block"}}>{n.i}</span><span style={{fontFamily:fb,fontSize:5,fontWeight:600,color:n.a?"#60A5FA":"rgba(255,255,255,0.4)"}}>{n.l}</span></div>)}
      </div>
    </div>
    <div style={{width:30,height:3,borderRadius:2,background:"#333",margin:"6px auto 1px"}}/>
  </div>;
}

// ═══════ 1. HERO — Dark, split, phone mockup right ═══════
function Hero(){
  const t=useT();
  const[si,setSi]=useState(0);
  const outs=[{text:"percaya diri speaking English",c:"#60A5FA"},{text:"paham Makhraj & tajwid yang benar",c:"#4ADE9A"},{text:"kenal dasar Mandarin untuk masa depan",c:"#FFB84D"},{text:"paham logika, bukan sekedar hafal rumus",c:"#F78DC2"}];
  useEffect(()=>{const i=setInterval(()=>setSi(p=>(p+1)%outs.length),3000);return()=>clearInterval(i);},[]);

  return <section style={{background:"linear-gradient(160deg,#0B0F1A 0%,#111827 40%,#0B0F1A 100%)",paddingTop:130,paddingBottom:80,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:"15%",left:"8%",width:280,height:280,borderRadius:"50%",background:"#3B82F6",opacity:0.04,filter:"blur(100px)"}}/>
    <div style={{position:"absolute",bottom:"5%",right:"12%",width:220,height:220,borderRadius:"50%",background:"#6366F1",opacity:0.04,filter:"blur(80px)"}}/>
    <W>
      <div className="hero-flex" style={{display:"flex",alignItems:"center",gap:48}}>
        <div style={{flex:"1 1 480px"}}>
          <Rv><div style={{fontFamily:fb,fontSize:12,fontWeight:700,color:"#60A5FA",background:"rgba(96,165,250,0.08)",padding:"5px 16px",borderRadius:100,display:"inline-flex",alignItems:"center",gap:6,marginBottom:24,border:"1px solid rgba(96,165,250,0.12)"}}>Remaja SMP–SMA · 13–18 Tahun</div></Rv>
          <Rv delay={0.08}>
            <h1 style={{fontFamily:fh,fontSize:44,fontWeight:800,color:"#F3F4F6",lineHeight:1.12,letterSpacing:-1.2,margin:"0 0 10px"}}>Anak Anda Punya<br/><span style={{color:"#60A5FA"}}>Potensi Besar</span>.</h1>
            <div style={{fontFamily:fh,fontSize:22,fontWeight:700,color:"rgba(255,255,255,0.55)",lineHeight:1.3,marginBottom:14}}>Sayang kalau dibiarkan.</div>
          </Rv>
          <Rv delay={0.12}>
            <div style={{fontFamily:fh,fontSize:18,fontWeight:600,color:"rgba(255,255,255,0.4)",lineHeight:1.4,marginBottom:20,minHeight:28}}>
              Anak Anda mulai <span key={si} style={{color:outs[si].c,fontWeight:700,animation:"countUp 0.4s ease"}}>{outs[si].text}</span>
            </div>
          </Rv>
          <Rv delay={0.16}>
            <p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.35)",lineHeight:1.75,margin:"0 0 28px",maxWidth:420}}>Kurikulum berbasis level, live via Zoom, tutor berpengalaman. Di sekolah, 1 guru untuk 30 anak — di EduKazia, anak Anda belajar sesuai kemampuannya. Dari mana saja, termasuk dari daerah.</p>
          </Rv>
          <Rv delay={0.2}>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:"#111827",background:"#E6B800",borderRadius:12,padding:"14px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 20px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#111827"/> Daftarkan Anak Sekarang</a>
              <a href="#tes-level" style={{fontFamily:fh,fontWeight:600,fontSize:13,color:"rgba(255,255,255,0.6)",borderRadius:12,padding:"14px 22px",textDecoration:"none",border:"1px solid rgba(255,255,255,0.1)"}}>Lihat Tes Level</a>
            </div>
          </Rv>
        </div>
        <div className="hero-right" style={{flex:"0 0 310px",position:"relative"}}>
          <Rv delay={0.15}><PhoneMockup/></Rv>
          <div style={{position:"absolute",bottom:16,left:-28,background:"rgba(17,24,39,0.95)",borderRadius:12,padding:"10px 16px",border:"1px solid rgba(255,255,255,0.06)",boxShadow:"0 8px 20px rgba(0,0,0,0.3)",animation:"float 5s ease-in-out infinite",zIndex:2}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:24,height:24,borderRadius:6,background:"rgba(74,222,154,0.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>📈</div><div><div style={{fontFamily:fh,fontSize:12,fontWeight:800,color:"#4ADE9A"}}>92%</div><div style={{fontFamily:fb,fontSize:7,color:"rgba(255,255,255,0.35)"}}>Ortu lihat peningkatan</div></div></div>
          </div>
        </div>
      </div>
    </W>
  </section>;
}

// ═══════ 2. PAIN POINTS + WHY EDUKAZIA (merged) ═══════
function PainAndSolution(){
  const t=useT();
  const items=[
    {pain:"Anak lebih akrab sama HP daripada buku?",solution:"Ubah screen time jadi waktu belajar yang produktif lewat portal interaktif.",icon:<Phone size={20} color={t.pk}/>,c:t.pk},
    {pain:"Les offline bentrok jadwal sekolah?",solution:"Belajar via Zoom — jadwal fleksibel, dari rumah, tidak perlu antar-jemput.",icon:<Clock size={20} color={t.or}/>,c:t.or},
    {pain:"Mau bisa bahasa asing tapi bingung mulai?",solution:"Tes Level tentukan start point yang pas. Kurikulum berbasis level, bukan ikut-ikutan.",icon:<Globe size={20} color={t.p}/>,c:t.p},
    {pain:"Di daerah, pilihan guru terbatas?",solution:"Tutor berpengalaman dari berbagai kota, dihubungkan lewat Zoom.",icon:<Map size={20} color="#6366F1"/>,c:"#6366F1"},
  ];
  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:48}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5,lineHeight:1.2}}>Kenapa Potensi Itu<br/>Belum Terarahkan?</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,maxWidth:460,marginLeft:"auto",marginRight:"auto",lineHeight:1.7}}>Bukan salah Mama. Bukan salah sekolah. Ini soal keterbatasan yang bisa diatasi.</p></div></Rv>
    <div className="grid-2" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>
      {items.map((it,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:18,overflow:"hidden",border:`1.5px solid ${h?it.c+"30":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateY(-3px)":"none"}}>
          <div style={{height:3,background:it.c,opacity:0.5}}/>
          <div style={{padding:"22px 22px 18px"}}>
            <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{width:44,height:44,borderRadius:12,background:`${it.c}10`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,border:`1px solid ${it.c}12`,transition:"transform 0.3s",transform:h?"scale(1.08) rotate(3deg)":"none"}}>{it.icon}</div>
              <div>
                <h3 style={{fontFamily:fh,fontSize:14,fontWeight:700,color:t.tx,margin:"0 0 6px",lineHeight:1.3}}>{it.pain}</h3>
                <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:0}}>{it.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </Rv>;})}
    </div>
  </W></section>;
}

// ═══════ 3. STORIES — Compact tabs (not 3 huge cards) ═══════
function Stories(){
  const t=useT();
  const stories=[
    {name:"Mama Yanti",child:"Nabila, 15 thn",subject:"Bahasa Inggris",before:"Grogi presentasi, diam di kelas",after:"Mulai berani angkat tangan",detail:"Tes Level tunjukkan grammar oke tapi speaking nol latihan. Tutor fokus ke conversation & mini public speaking. Setelah paket pertama, gurunya bilang ada peningkatan nyata — Nabila mulai berani bicara di kelas.",gender:"girl",c:t.p},
    {name:"Papa Ahmad",child:"Rizky, 14 thn",subject:"Matematika",before:"Kaget materi SMP, minder",after:"Paham pola aljabar, tren naik",detail:"Fondasi aritmetika kuat tapi belum siap aljabar. Tutor pakai Metode Singapura — bridging visual ke abstrak. Nilai UTS naik dari 52 ke 68 — belum sempurna tapi tren positif, dan dia tidak takut buka buku lagi.",gender:"boy",c:t.pk},
    {name:"Mama Halimah",child:"Aisyah, 16 thn",subject:"Bahasa Arab",before:"Makhraj kurang, malu di pesantren",after:"Dipuji ustadzah, ikut musabaqah",detail:"Bisa baca tapi makhraj huruf tertentu masih salah. Tutor fokus koreksi spesifik + tajwid intensif. Ustadzah memuji peningkatannya — sekarang Aisyah lebih percaya diri.",gender:"girl",c:t.g},
  ];
  const[ac,setAc]=useState(0);const s=stories[ac];

  return <section style={{background:t.bgW,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Progress Nyata, Bukan Janji.</h2></div></Rv>
    <Rv delay={0.1}>
      <div style={{maxWidth:760,margin:"0 auto"}}>
        {/* Tabs */}
        <div style={{display:"flex",gap:6,marginBottom:20,justifyContent:"center",flexWrap:"wrap"}}>
          {stories.map((st,i)=><button key={i} onClick={()=>setAc(i)} style={{fontFamily:fb,fontSize:12,fontWeight:ac===i?700:500,color:ac===i?"#fff":t.sub,background:ac===i?st.c:"transparent",border:`1px solid ${ac===i?st.c:t.cb}`,borderRadius:100,padding:"8px 18px",cursor:"pointer",transition:"all 0.25s",display:"flex",alignItems:"center",gap:6}}><AvatarFace gender={st.gender} color={ac===i?"#fff":st.c} size={20}/>{st.child}</button>)}
        </div>
        {/* Story card */}
        <div style={{background:t.card,borderRadius:22,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
          <div style={{background:s.c,padding:"14px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
            <div style={{display:"flex",alignItems:"center",gap:10}}><AvatarFace gender={s.gender} color="#fff" size={36}/><div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:"#fff"}}>{s.name}</div><div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.65)"}}>{s.child} · {s.subject}</div></div></div>
          </div>
          <div style={{padding:"24px 28px"}}>
            {/* Before / After inline */}
            <div style={{display:"flex",gap:10,marginBottom:18}}>
              <div style={{flex:1,background:`${t.coral}06`,borderRadius:10,padding:"12px",border:`1px solid ${t.coral}10`,textAlign:"center"}}><div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:t.coral,textTransform:"uppercase",letterSpacing:0.4,marginBottom:3}}>Sebelum</div><div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.coral,lineHeight:1.3}}>{s.before}</div></div>
              <div style={{display:"flex",alignItems:"center",color:t.mu,fontSize:14}}>→</div>
              <div style={{flex:1,background:t.gS,borderRadius:10,padding:"12px",border:`1px solid ${t.g}10`,textAlign:"center"}}><div style={{fontFamily:fb,fontSize:8,fontWeight:700,color:t.g,textTransform:"uppercase",letterSpacing:0.4,marginBottom:3}}>Sesudah</div><div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.g,lineHeight:1.3}}>{s.after}</div></div>
            </div>
            <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.75,margin:0}}>{s.detail}</p>
          </div>
        </div>
      </div>
    </Rv>
    <Rv delay={0.15}><div style={{textAlign:"center",marginTop:28}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.goldT,background:t.gold,borderRadius:12,padding:"12px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14} color="#111827"/> Daftarkan Anak Sekarang</a></div></Rv>
  </W></section>;
}

// ═══════ 4. COURSES + CLASS TYPES (combined) ═══════
function CoursesAndClasses(){
  const t=useT();
  const courses=[
    {name:"Bahasa Inggris",tag:"Conversation · Writing · Pronunciation",c:t.p},
    {name:"Bahasa Arab",tag:"Tajwid · Makhraj · Muhadatsah",c:t.g},
    {name:"Matematika",tag:"Metode Singapura · Logika · Problem Solving",c:t.pk},
    {name:"Mandarin 中文",tag:"Pinyin · Karakter · Persiapan HSK",c:t.or},
  ];
  const classes=[
    {name:"Reguler",ratio:"1 : 8",desc:"Belajar bareng teman. Seru, kompetitif, biaya terjangkau.",c:t.p,tags:["Biaya ringan","Interaksi sosial","Suasana seru"]},
    {name:"Semi Privat",ratio:"1 : 4",desc:"Kelompok kecil — tutor lebih kenal karakter anak. Balance terbaik.",c:t.or,tags:["Perhatian lebih","Kelompok nyaman","Balance harga"]},
    {name:"Privat",ratio:"1 : 1",desc:"Perhatian 100% untuk anak Anda. Kurikulum terstruktur sesuai level, jadwal fleksibel, reschedule gratis.",c:t.pk,rec:true,tags:["Perhatian penuh","Jadwal fleksibel","Reschedule gratis","Tempo sesuai anak"]},
  ];

  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    {/* Courses */}
    <Rv><div style={{marginBottom:36}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Mau Mulai dari Mana?</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:8,lineHeight:1.7}}>Kurikulum berbasis level — setiap anak mulai dari titik yang pas.</p></div></Rv>
    <div style={{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}}>
      {courses.map((c,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.04*(i+1)}><div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{flex:"1 1 240px",background:t.card,borderRadius:14,padding:"18px 20px",border:`1.5px solid ${h?c.c+"30":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.3s",transform:h?"translateY(-3px)":"none",display:"flex",alignItems:"center",gap:14}}>
        <div style={{width:4,height:36,borderRadius:2,background:c.c,flexShrink:0}}/>
        <div><div style={{fontFamily:fh,fontSize:15,fontWeight:700,color:t.tx,margin:"0 0 2px"}}>{c.name}</div><div style={{fontFamily:fb,fontSize:11,color:t.mu}}>{c.tag}</div></div>
      </div></Rv>;})}
    </div>
    {/* Bridge → anak */}
    <Rv delay={0.2}><div style={{background:t.card,borderRadius:12,padding:"14px 20px",border:`1px solid ${t.cb}`,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:56}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:16}}>🎒</span><div><span style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.tx}}>Adiknya 7–13 tahun?</span><span style={{fontFamily:fb,fontSize:11,color:t.sub,marginLeft:6}}>Program anak lebih playful.</span></div></div>
      <a href="/untuk-anak" style={{fontFamily:fh,fontWeight:700,fontSize:11,color:t.pk,background:t.pkS,borderRadius:8,padding:"7px 16px",textDecoration:"none",border:`1px solid ${t.pk}15`}}>Lihat Kursus Anak →</a>
    </div></Rv>

    {/* Class Types */}
    <Rv><div style={{marginBottom:36}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Pilih Gaya Belajar</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:8,lineHeight:1.7}}>Kurikulum berbasis level. Rekaman & portal tersedia untuk semua tipe.</p></div></Rv>
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      {classes.map((c,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:18,overflow:"hidden",border:c.rec?`2px solid ${c.c}35`:`1.5px solid ${h?c.c+"25":t.cb}`,boxShadow:c.rec?`0 6px 30px ${c.c}10`:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateX(4px)":"none",display:"flex"}} className="story-flex">
          {/* Ratio panel */}
          <div style={{width:c.rec?120:100,flexShrink:0,background:c.rec?`linear-gradient(180deg,${c.c},${c.c}BB)`:`linear-gradient(180deg,${c.c}20,${c.c}08)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 12px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-15,right:-15,width:40,height:40,borderRadius:"50%",background:c.c,opacity:c.rec?0.15:0.08}}/>
            {c.rec&&<div style={{fontFamily:fb,fontSize:7,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.2)",padding:"2px 8px",borderRadius:100,marginBottom:8,letterSpacing:0.5,textTransform:"uppercase"}}>Rekomendasi</div>}
            <div style={{fontFamily:fh,fontSize:28,fontWeight:800,color:c.rec?"#fff":c.c,lineHeight:1}}>{c.ratio}</div>
            <div style={{fontFamily:fb,fontSize:7,color:c.rec?"rgba(255,255,255,0.5)":t.mu,marginTop:3}}>tutor : siswa</div>
          </div>
          {/* Content */}
          <div style={{flex:1,padding:"20px 24px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h3 style={{fontFamily:fh,fontSize:c.rec?20:17,fontWeight:800,color:t.tx,margin:"0 0 4px"}}>{c.name}</h3>
            <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:"0 0 10px",maxWidth:420}}>{c.desc}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:5}}>{c.tags.map(tg=><span key={tg} style={{fontFamily:fb,fontSize:10,fontWeight:600,color:c.c,background:`${c.c}08`,padding:"3px 10px",borderRadius:6,border:`1px solid ${c.c}10`}}>{tg}</span>)}</div>
          </div>
          {/* CTA */}
          <div style={{flexShrink:0,display:"flex",alignItems:"center",padding:"0 20px"}} className="hide-mobile">
            <a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+tertarik+kelas+${encodeURIComponent(c.name)}+untuk+anak+remaja+saya`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:12,color:c.rec?"#fff":c.c,background:c.rec?c.c:`${c.c}08`,borderRadius:10,padding:"12px 20px",textDecoration:"none",border:c.rec?"none":`1px solid ${c.c}20`,whiteSpace:"nowrap"}}>Hubungi Kami →</a>
          </div>
        </div>
      </Rv>;})}
    </div>
  </W></section>;
}

// ═══════ 5. TES LEVEL + FAQ (combined) ═══════
function TesLevelAndFAQ(){
  const t=useT();const[op,setOp]=useState(null);
  const faqs=[["Tes Level itu apa?","Tes online 30 menit via Zoom bersama tutor. Supaya kami tahu level anak — kekuatan, kelemahan, dan dari mana mulai."],["Remaja bisa belajar mandiri?","Bisa. Usia 13+ umumnya mandiri. Mama tetap pantau via Portal Orang Tua."],["Jadwal bisa disesuaikan?","Privat — 100% fleksibel. Reguler & Semi Privat — fix, tapi kami bantu carikan slot yang tidak berbenturan dengan jadwal sekolah."],["Bagaimana kurikulumnya?","Berbasis level. Anak belajar sesuai kemampuannya, naik level kalau siap. Pembayaran per paket supaya ringan."],["Bagaimana sistem pembayarannya?","Per paket — supaya ringan. Detail harga konsultasi via WhatsApp."]];

  return <section id="tes-level" style={{background:t.bgW,padding:"80px 0"}}><W>
    <div className="story-flex" style={{display:"flex",gap:40}}>
      {/* Left — Tes Level */}
      <div style={{flex:"1 1 360px"}}>
        <Rv><h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:"0 0 14px",letterSpacing:-0.5}}>Mulai dari Tes Level</h2>
        <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.7,marginBottom:28}}>Remaja SMP dan SMA punya gap yang beda-beda. Tes Level memastikan belajar tidak salah arah.</p></Rv>
        <Rv delay={0.05}><div style={{display:"flex",flexDirection:"column",gap:10}}>
          {[{n:"1",icon:<MessageSquare size={22} color={t.p}/>,title:"Chat WhatsApp",desc:"Kirim nama, usia, kelas, pelajaran."},{n:"2",icon:<ClipboardCheck size={22} color={t.p}/>,title:"Tes Level Online",desc:"30 menit via Zoom. Santai."},{n:"3",icon:<BarChart3 size={22} color={t.p}/>,title:"Terima Laporan",desc:"Level, kekuatan, kelemahan, rekomendasi."},{n:"4",icon:<Zap size={22} color={t.p}/>,title:"Mulai Belajar",desc:"Pilih kelas, mulai sesuai level."}].map((s,i)=>
            <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{width:34,height:34,borderRadius:10,background:t.pS,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{s.icon}</div>
              <div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.tx,margin:"0 0 2px"}}>Step {s.n}: {s.title}</div><div style={{fontFamily:fb,fontSize:12,color:t.mu}}>{s.desc}</div></div>
            </div>
          )}
        </div></Rv>
        <Rv delay={0.1}><div style={{marginTop:24}}>
          <a href={WA_TES} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.goldT,background:t.gold,borderRadius:12,padding:"13px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14} color="#111827"/> Daftar Tes Level</a>
          <span style={{fontFamily:fb,fontSize:11,color:t.mu,marginLeft:12}}>30 mnt via Zoom</span>
        </div></Rv>
      </div>

      {/* Right — FAQ */}
      <div style={{flex:"1 1 380px"}}>
        <Rv><h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:t.tx,margin:"0 0 18px"}}>Pertanyaan Mama & Papa</h3></Rv>
        <Rv delay={0.05}><div>
          {faqs.map(([q,a],i)=><div key={i} style={{background:t.card,borderRadius:12,marginBottom:8,border:`1px solid ${op===i?t.p+"25":t.cb}`,overflow:"hidden",transition:"border 0.2s"}}>
            <button onClick={()=>setOp(op===i?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 16px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}>
              <span style={{fontFamily:fh,fontSize:13,fontWeight:600,color:op===i?t.tx:t.sub,flex:1}}>{q}</span>
              <span style={{fontSize:16,color:t.p,transition:"transform 0.3s",transform:op===i?"rotate(45deg)":"none",fontWeight:300}}>+</span>
            </button>
            <div style={{maxHeight:op===i?140:0,transition:"max-height 0.3s ease",overflow:"hidden"}}><p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.7,padding:"0 16px 14px"}}>{a}</p></div>
          </div>)}
        </div></Rv>
        <Rv delay={0.1}><div style={{marginTop:12}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:12,color:"#fff",background:"#25D366",borderRadius:10,padding:"10px 20px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14}/> Chat WhatsApp</a></div></Rv>
      </div>
    </div>
  </W></section>;
}

// ═══════ 6. CTA FINAL — Dark ═══════
function CTAFinal(){
  const t=useT();
  return <section style={{background:t.bg,padding:"80px 0"}}><W><Rv>
    <div style={{background:"linear-gradient(135deg,#111827,#1E293B)",borderRadius:28,overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:-30,right:-30,width:150,height:150,borderRadius:"50%",background:"#3B82F6",opacity:0.06,filter:"blur(50px)"}}/>
      <div style={{padding:"52px 44px",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{fontSize:32,marginBottom:10,animation:"bounce 2s ease infinite"}}>🚀</div>
        <h2 style={{fontFamily:fh,fontSize:30,fontWeight:800,color:"#F3F4F6",margin:"0 0 10px",lineHeight:1.2}}>Potensi Anak Anda<br/>Tidak Bisa Nunggu.</h2>
        <p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.4)",lineHeight:1.7,marginBottom:28,maxWidth:440,marginLeft:"auto",marginRight:"auto"}}>Tanpa komitmen. Tim kami bantu pilihkan kursus, tipe kelas, dan jadwal yang pas.</p>
        <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:15,color:"#111827",background:"#E6B800",borderRadius:14,padding:"16px 36px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 20px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#111827"/> Daftarkan Anak Sekarang</a>
        <p style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.25)",marginTop:12}}>Tanpa komitmen · Tanpa kontrak</p>
      </div>
    </div>
  </Rv></W></section>;
}

// ═══════ FOOTER ═══════
function Footer(){const t=useT();return <footer style={{background:t.footer,padding:"40px 0 20px"}}><W><div style={{display:"flex",gap:36,flexWrap:"wrap",marginBottom:28}}><div style={{flex:"1 1 200px"}}><div style={{marginBottom:12}}><EdukaziaLogo variant="white" size="sm" href="/"/></div><p style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,maxWidth:200}}>Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia.</p></div>{[{t:"Pelajaran",i:["Bahasa Inggris","Bahasa Arab","Mandarin","Matematika"]},{t:"Kelas",i:["Privat 1-on-1","Semi Privat","Reguler"]},{t:"Lainnya",i:["FAQ","Portal Orang Tua","Kebijakan Privasi"]}].map(col=><div key={col.t} style={{flex:"1 1 100px"}}><h4 style={{fontFamily:fh,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.45)",marginBottom:12,textTransform:"uppercase",letterSpacing:0.5}}>{col.t}</h4>{col.i.map(item=><div key={item} style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:8}}>{item}</div>)}</div>)}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:14,textAlign:"center"}}><p style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.15)"}}>© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia.</p></div></W></footer>;}
function WAFloat(){return <a href={WA} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:20,right:20,width:52,height:52,borderRadius:14,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",animation:"waPulse 2s ease-in-out infinite",zIndex:999}}><WAIcon size={24}/></a>;}

// ═══════ MAIN — 6 sections only ═══════
export default function UntukRemaja(){
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
