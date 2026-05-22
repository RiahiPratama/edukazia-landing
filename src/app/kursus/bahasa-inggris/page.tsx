/* eslint-disable */
// @ts-nocheck
"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";

const TX = createContext();
const useT = () => useContext(TX);
const L = {bg:"#FDFCFA",bgW:"#F0F4FF",bgC:"#F0EDFF",card:"#FFFFFF",cb:"rgba(0,0,0,0.05)",cs:"0 2px 20px rgba(0,0,0,0.04)",ch:"0 12px 40px rgba(59,130,246,0.1)",tx:"#1A1535",sub:"#5E5878",mu:"#9D97B5",p:"#3B82F6",pS:"#EFF6FF",g:"#10B981",gS:"#ECFDF5",gold:"#E6B800",goldS:"#FFF9E0",goldT:"#1A1535",pk:"#EC4899",pkS:"#FDF2F8",or:"#F59E0B",orS:"#FFFBEB",v:"#5C4FE5",vS:"#EEEDFC",coral:"#EF4444",nav:"rgba(253,252,250,0.92)",navB:"rgba(0,0,0,0.05)",footer:"#1A1535",cta:"linear-gradient(135deg,#3B82F6,#2563EB)",m:"light"};
const D = {bg:"#08080E",bgW:"#0B0F1A",bgC:"#0B0A14",card:"rgba(255,255,255,0.03)",cb:"rgba(255,255,255,0.07)",cs:"0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",ch:"0 16px 48px rgba(59,130,246,0.12), 0 0 0 1px rgba(255,255,255,0.08)",tx:"#F5F4FF",sub:"#A8A4BE",mu:"#5D596F",p:"#60A5FA",pS:"rgba(96,165,250,0.1)",g:"#4ADE9A",gS:"rgba(74,222,154,0.08)",gold:"#F0C830",goldS:"rgba(240,200,48,0.08)",goldT:"#08080E",pk:"#F78DC2",pkS:"rgba(247,141,194,0.08)",or:"#FFB84D",orS:"rgba(255,184,77,0.08)",v:"#8B7FF5",vS:"rgba(139,127,245,0.1)",coral:"#FF8A8A",nav:"rgba(8,8,14,0.85)",navB:"rgba(255,255,255,0.06)",footer:"#050508",cta:"linear-gradient(135deg,#3B82F6,#2563EB)",m:"dark"};
const fh="'Sora',sans-serif",fb="'Plus Jakarta Sans',sans-serif";
const WA="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+tertarik+kursus+Bahasa+Inggris";

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
    {label:"Pelajaran",items:[{text:"Bahasa Inggris",href:"/kursus/bahasa-inggris"},{text:"Bahasa Arab",href:"/kursus/bahasa-arab"},{text:"Mandarin",href:"/kursus/bahasa-mandarin"},{text:"Matematika",href:"/kursus/matematika"}]},
  ];
  return <>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc?t.nav:"rgba(11,15,26,0.6)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${sc?t.navB:"rgba(255,255,255,0.04)"}`,transition:"all 0.35s"}}>
      <W s={{display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
        <EdukaziaLogo variant={t.m==='dark'||!sc?'white':'default'} size="md" href="/"/>{sc&&<span className="hide-mobile" style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.p,background:t.pS,padding:"4px 12px",borderRadius:100,marginLeft:8,whiteSpace:"nowrap"}}>Bimbel dari Maluku Utara yang punya LMS Keren!</span>}
        <div className="desktop-menu" style={{display:"flex",alignItems:"center",gap:4}}>
          {dropdowns.map((dd,di)=><div key={di} style={{position:"relative"}} onMouseEnter={()=>setOpenDD(di)} onMouseLeave={()=>setOpenDD(null)}><button style={{fontFamily:fb,fontSize:13,fontWeight:600,color:sc?t.sub:"rgba(255,255,255,0.7)",background:"none",border:"none",cursor:"pointer",padding:"8px 12px",borderRadius:8,display:"flex",alignItems:"center",gap:5}}>{dd.label}<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>{openDD===di&&<div style={{position:"absolute",top:"100%",left:0,background:t.card,borderRadius:14,border:`1px solid ${t.cb}`,boxShadow:"0 12px 40px rgba(0,0,0,0.15)",padding:6,minWidth:220,zIndex:100}}>{dd.items.map((item,ii)=><a key={ii} href={item.href} style={{display:"block",padding:"10px 16px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:13,fontWeight:600,color:t.tx}} onMouseEnter={e=>e.currentTarget.style.background=t.pS} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{item.text}</a>)}</div>}</div>)}
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:sc?t.pS:"rgba(255,255,255,0.08)",border:`1px solid ${sc?t.cb:"rgba(255,255,255,0.08)"}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:8}}>{isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",borderRadius:12,padding:"10px 22px",textDecoration:"none",boxShadow:"0 4px 16px rgba(92,79,229,0.2)",marginLeft:8}}>Login ke Portal</a>
        </div>
        <div className="mobile-menu-btn" style={{display:"none",alignItems:"center",gap:8}}>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:11,color:"#fff",background:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",borderRadius:10,padding:"8px 14px",textDecoration:"none",whiteSpace:"nowrap"}}>Login ke Portal</a>
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

// ═══════ 1. HERO — Dark, split, English-specific ═══════
function Hero(){
  const t=useT();
  const words = ["Speak","Listen","Read","Write","Think"];
  const[wi,setWi]=useState(0);
  useEffect(()=>{const i=setInterval(()=>setWi(p=>(p+1)%words.length),2000);return()=>clearInterval(i);},[]);

  return <section style={{background:"linear-gradient(160deg,#0B1120 0%,#162036 40%,#0B1120 100%)",paddingTop:130,paddingBottom:80,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:"15%",left:"8%",width:280,height:280,borderRadius:"50%",background:"#3B82F6",opacity:0.05,filter:"blur(100px)"}}/>
    <div style={{position:"absolute",bottom:"10%",right:"12%",width:220,height:220,borderRadius:"50%",background:"#60A5FA",opacity:0.04,filter:"blur(80px)"}}/>
    <W>
      <div className="hero-flex" style={{display:"flex",alignItems:"center",gap:52}}>
        <div style={{flex:"1 1 500px"}}>
          <Rv><div style={{fontFamily:fb,fontSize:13,fontWeight:700,color:"#60A5FA",background:"rgba(96,165,250,0.08)",padding:"6px 18px",borderRadius:100,display:"inline-flex",alignItems:"center",gap:8,marginBottom:24,border:"1px solid rgba(96,165,250,0.15)"}}>
            <span style={{fontSize:16}}>🇬🇧</span> Bahasa Inggris
          </div></Rv>
          <Rv delay={0.08}>
            <h1 style={{fontFamily:fh,fontSize:46,fontWeight:800,color:"#fff",lineHeight:1.1,letterSpacing:-1.5,margin:"0 0 10px"}}>
              Bahasa Inggris Itu<br/><span style={{color:"#60A5FA"}}>Bukan Sekedar Pelajaran</span>.
            </h1>
            <div style={{fontFamily:fh,fontSize:20,fontWeight:600,color:"rgba(255,255,255,0.45)",marginBottom:20}}>Ini skill yang akan dipakai seumur hidup.</div>
          </Rv>
          <Rv delay={0.12}>
            <p style={{fontFamily:fb,fontSize:16,color:"rgba(255,255,255,0.35)",lineHeight:1.75,margin:"0 0 28px",maxWidth:440}}>
              Kurikulum berbasis level dari Tes Level. Fokus ke speaking & practical English — bukan sekedar grammar di buku. Live via Zoom, tutor berpengalaman.
            </p>
          </Rv>
          <Rv delay={0.16}>
            <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:15,color:"#0B1120",background:"#60A5FA",borderRadius:14,padding:"16px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(96,165,250,0.25)"}}><WAIcon size={18} color="#0B1120"/> Daftar Kursus Bahasa Inggris</a>
          </Rv>
        </div>

        {/* Right — Rotating English words visual */}
        <div className="hero-right" style={{flex:"0 0 360px",position:"relative"}}>
          <Rv delay={0.15}>
            <div style={{background:"rgba(255,255,255,0.03)",borderRadius:24,border:"1px solid rgba(255,255,255,0.06)",padding:"36px 32px",textAlign:"center"}}>
              <div style={{fontFamily:fb,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Di EduKazia, anak Anda belajar</div>
              <div key={wi} style={{fontFamily:fh,fontSize:56,fontWeight:800,color:"#60A5FA",lineHeight:1,marginBottom:8,animation:"countUp 0.4s ease"}}>{words[wi]}</div>
              <div style={{fontFamily:fb,fontSize:14,color:"rgba(255,255,255,0.4)",marginBottom:28}}>in English — with confidence.</div>

              {/* Level badges */}
              <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap"}}>
                {["Beginner","Elementary","Pre-Intermediate","Intermediate","Upper-Intermediate"].map((lv,i)=>
                  <div key={lv} style={{fontFamily:fb,fontSize:9,fontWeight:600,color:i<=2?"#60A5FA":"rgba(255,255,255,0.25)",background:i<=2?"rgba(96,165,250,0.1)":"rgba(255,255,255,0.03)",padding:"4px 10px",borderRadius:6,border:`1px solid ${i<=2?"rgba(96,165,250,0.15)":"rgba(255,255,255,0.04)"}`}}>{lv}</div>
                )}
              </div>
              <div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:12}}>Kurikulum terstruktur · CEFR-based · 5 level</div>
            </div>
          </Rv>
          <div style={{position:"absolute",bottom:-8,left:-20,background:"rgba(11,17,32,0.95)",borderRadius:12,padding:"10px 16px",border:"1px solid rgba(96,165,250,0.12)",boxShadow:"0 8px 20px rgba(0,0,0,0.3)",animation:"float 5s ease-in-out infinite",zIndex:2}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:14}}>🗣️</span>
              <div><div style={{fontFamily:fh,fontSize:11,fontWeight:800,color:"#60A5FA"}}>Speaking First</div><div style={{fontFamily:fb,fontSize:8,color:"rgba(255,255,255,0.35)"}}>Bukan grammar first</div></div>
            </div>
          </div>
        </div>
      </div>
    </W>
  </section>;
}

// ═══════ 2. AUDIENCE TABS — "Bahasa Inggris untuk Siapa?" ═══════
function AudienceSection(){
  const t=useT();
  const[tab,setTab]=useState(0);

  const audiences = [
    {
      label:"Anak 7–13 thn",icon:"🎒",c:t.pk,
      headline:"Pronunciation Bener dari Kecil, Percaya Diri dari Awal",
      desc:"Anak yang belajar Inggris sejak dini punya pronunciation yang jauh lebih bersih. Di EduKazia, anak nggak cuma hafal vocabulary — tapi berani ngomong.",
      pains:["Anak hafal kata tapi nggak berani ngomong","Di sekolah cuma grammar, nggak pernah latihan speaking","Pronunciation anak sudah salah dari awal tapi nggak ada yang koreksi"],
      outcomes:["Anak berani bicara karena terbiasa conversation sejak dini","Pronunciation dilatih dari awal — bukan diperbaiki nanti","Vocabulary dari konteks nyata, bukan sekedar daftar kata"],
      story:{name:"Mama Aisyah",child:"Aqil, 9 thn · Ternate",before:"Hafal 'apple, banana' tapi diam kalau ditanya 'How are you?'",after:"Mulai berani jawab dan tanya balik dalam Inggris",detail:"Tes Level tunjukkan vocabulary Aqil lumayan tapi speaking nol. Tutor fokus ke daily conversation: greeting, asking, responding. Setelah paket pertama, Aqil mulai inisiatif ngomong Inggris ke adiknya di rumah.",gender:"boy"},
      waText:"Halo+EduKazia%2C+saya+ingin+daftarkan+anak+untuk+kursus+Bahasa+Inggris.+Nama%3A+...+Usia%3A+...",
    },
    {
      label:"Remaja 13–18 thn",icon:"🎓",c:"#3B82F6",
      headline:"Speaking Confidence yang Sekolah Nggak Sempat Ajarkan",
      desc:"Di sekolah, Inggris itu grammar di buku dan hafalan vocab. Di EduKazia, remaja belajar ngomong beneran — conversation, pronunciation, dan keberanian presentasi.",
      pains:["Nilai Inggris bagus di kertas tapi nggak bisa ngomong","Grogi presentasi bahasa Inggris di depan kelas","Mau bisa speaking tapi nggak ada tempat latihan"],
      outcomes:["Speaking confidence naik — berani presentasi dan ngobrol","Pronunciation diperbaiki oleh tutor, bukan dibiarkan","Fondasi kuat untuk persiapan beasiswa dan karir"],
      story:{name:"Mama Yanti",child:"Nabila, 15 thn · Ternate",before:"Nilai Inggris 85 tapi grogi kalau disuruh presentasi",after:"Mulai berani angkat tangan di kelas Inggris",detail:"Grammar Nabila sudah oke, tapi speaking-nya nol latihan. Tutor fokus ke conversation, debate ringan, dan mini public speaking setiap sesi. Gurunya bilang ada peningkatan nyata — Nabila nggak grogi lagi.",gender:"girl"},
      waText:"Halo+EduKazia%2C+saya+ingin+daftarkan+anak+remaja+untuk+kursus+Bahasa+Inggris.+Nama%3A+...+Kelas%3A+...",
    },
    {
      label:"Mama / Dewasa",icon:"💪",c:t.g,
      headline:"Bisa Bantu Anak PR, Nggak Grogi Ketemu Bule",
      desc:"Mama belajar Inggris bukan cuma untuk diri sendiri — tapi juga supaya bisa bantu anak di rumah. Nggak perlu malu mulai dari nol.",
      pains:["Anak tanya PR Inggris, Mama cuma bisa bilang 'tanya guru aja'","Grogi kalau ada bule tanya jalan","Malu belajar Inggris di usia segini"],
      outcomes:["Mama bisa bantu anak PR bahasa Inggris di rumah","Percaya diri kalau ada situasi yang butuh Inggris","Belajar dari nol tanpa malu — cuma Mama dan tutor di Privat"],
      story:{name:"Mama Julaiha",child:"35 thn · Ternate",before:"Panik kalau ada yang tanya bahasa Inggris",after:"Mulai berani jawab 'How are you?' tanpa grogi",detail:"Julaiha belum pernah les Inggris seumur hidup. Tutor mulai dari greeting & daily phrases. Tempo pelan, nggak dipaksa. Sekarang Julaiha bilang 'Saya akhirnya nggak panik kalau ada bule tanya jalan.'",gender:"girl"},
      waText:"Halo+EduKazia%2C+saya+Mama+yang+mau+belajar+Bahasa+Inggris.+Bisa+konsultasi+dulu%3F",
    },
  ];

  const a = audiences[tab];

  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:38,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5,lineHeight:1.15}}>Bahasa Inggris untuk Siapa?</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Kebutuhan beda, kurikulum disesuaikan. Pilih yang sesuai.</p>
    </div></Rv>

    {/* Tab selector — Conversation-inspired cards (English = Speaking First) */}
    <Rv delay={0.05}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,marginBottom:44}} className="grid-3">
        {audiences.map((au,i)=>{
          const active = tab===i;
          const phonetics = ["/kɪdz/","/tiːnz/","/mʌm/"];
          const previews = [
            {pain:"How are you? → 😶",outcome:"I'm fine! And you? 😊"},
            {pain:"Grogi presentasi 😰",outcome:"Angkat tangan di kelas 🙋"},
            {pain:"'Tanya guru aja' 😓",outcome:"Mama bantu PR anak ✨"},
          ];
          const pv = previews[i];
          return <div key={i} onClick={()=>setTab(i)} style={{
            borderRadius:24,overflow:"hidden",position:"relative",cursor:"pointer",
            transition:"all 0.5s cubic-bezier(0.22,1,0.36,1)",
            transform:active?"scale(1.02)":"scale(0.98)",
            opacity:active?1:0.85,
            background:active?au.c:t.card,
            border:active?`2px solid ${au.c}`:`2px solid ${t.cb}`,
            boxShadow:active?`0 20px 60px ${au.c}25`:"0 4px 20px rgba(0,0,0,0.06)",
          }}>
            {/* Speech bubble decoration */}
            <svg style={{position:"absolute",top:12,right:14,opacity:active?0.15:0.06,transition:"opacity 0.4s"}} width="40" height="36" viewBox="0 0 40 36">
              <path d="M4 4h32c0 0 0 0 0 0v20c0 0 0 0 0 0H12l-8 8V24H4V4z" rx="4" fill="none" stroke={active?"#fff":au.c} strokeWidth="1.5"/>
              <circle cx="14" cy="15" r="1.5" fill={active?"#fff":au.c} opacity="0.4"/>
              <circle cx="20" cy="15" r="1.5" fill={active?"#fff":au.c} opacity="0.4"/>
              <circle cx="26" cy="15" r="1.5" fill={active?"#fff":au.c} opacity="0.4"/>
            </svg>

            <div style={{position:"relative",padding:"24px 22px 22px"}}>
              {/* Phonetic + label */}
              <div style={{marginBottom:14}}>
                <div style={{fontFamily:"monospace",fontSize:13,color:active?"rgba(255,255,255,0.3)":`${au.c}40`,letterSpacing:1,marginBottom:4}}>{phonetics[i]}</div>
                <h3 style={{fontFamily:fh,fontSize:22,fontWeight:800,color:active?"#fff":t.tx,margin:0,lineHeight:1.2,transition:"color 0.3s"}}>{au.label}</h3>
              </div>

              {/* Before/After as chat bubbles */}
              <div style={{marginBottom:14}}>
                <div style={{display:"flex",gap:8,marginBottom:8,alignItems:"flex-end"}}>
                  <div style={{width:18,height:18,borderRadius:"50%",background:active?"rgba(255,255,255,0.1)":`${t.coral}10`,flexShrink:0}}/>
                  <div style={{background:active?"rgba(255,255,255,0.1)":`${t.coral}06`,borderRadius:"12px 12px 12px 4px",padding:"8px 12px",maxWidth:"80%",border:active?"1px solid rgba(255,255,255,0.08)":`1px solid ${t.coral}08`}}>
                    <div style={{fontFamily:fb,fontSize:11,fontWeight:600,color:active?"rgba(255,255,255,0.6)":t.coral,lineHeight:1.3}}>{pv.pain}</div>
                  </div>
                </div>
                <div style={{display:"flex",gap:8,justifyContent:"flex-end",alignItems:"flex-end"}}>
                  <div style={{background:active?"rgba(255,255,255,0.18)":`${au.c}10`,borderRadius:"12px 12px 4px 12px",padding:"8px 12px",maxWidth:"80%",border:active?"1px solid rgba(255,255,255,0.12)":`1px solid ${au.c}12`}}>
                    <div style={{fontFamily:fb,fontSize:11,fontWeight:700,color:active?"#fff":au.c,lineHeight:1.3}}>{pv.outcome}</div>
                  </div>
                  <div style={{width:18,height:18,borderRadius:"50%",background:active?"rgba(255,255,255,0.15)":`${au.c}12`,flexShrink:0}}/>
                </div>
              </div>

              {/* Action row with mic icon */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontFamily:fb,fontSize:11,fontWeight:600,color:active?"rgba(255,255,255,0.6)":t.mu}}>{active?"Sedang dilihat":"Klik untuk lihat"}</span>
                <div style={{width:24,height:24,borderRadius:8,background:active?"rgba(255,255,255,0.15)":`${au.c}08`,display:"flex",alignItems:"center",justifyContent:"center",border:active?"1px solid rgba(255,255,255,0.1)":`1px solid ${au.c}10`}}>
                  {active
                    ?<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    :<svg width="10" height="10" viewBox="0 0 12 12" fill="none"><rect x="4" y="1" width="4" height="7" rx="2" stroke={au.c} strokeWidth="1.2"/><path d="M2.5 6.5a3.5 3.5 0 007 0M6 10.5v1" stroke={au.c} strokeWidth="1.2" strokeLinecap="round"/></svg>
                  }
                </div>
              </div>
            </div>
          </div>;
        })}
      </div>
    </Rv>

    {/* Content */}
    <div key={tab} style={{animation:"countUp 0.4s ease"}}>
      <div style={{maxWidth:800,margin:"0 auto 40px",textAlign:"center"}}>
        <h3 style={{fontFamily:fh,fontSize:28,fontWeight:800,color:t.tx,margin:"0 0 12px",lineHeight:1.2}}>{a.headline}</h3>
        <p style={{fontFamily:fb,fontSize:15,color:t.sub,lineHeight:1.7,maxWidth:560,margin:"0 auto"}}>{a.desc}</p>
      </div>

      {/* Pain → Outcome */}
      <div className="story-flex" style={{display:"flex",gap:20,marginBottom:32}}>
        <div style={{flex:1,background:`${t.coral}04`,borderRadius:20,padding:"28px",border:`1px solid ${t.coral}10`}}>
          <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.coral,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Tanpa Bimbingan</div>
          {a.pains.map((p,i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<a.pains.length-1?12:0,alignItems:"flex-start"}}>
            <div style={{width:20,height:20,borderRadius:6,background:`${t.coral}10`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,marginTop:1}}>✗</div>
            <span style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.6}}>{p}</span>
          </div>)}
        </div>
        <div style={{flex:1,background:t.pS,borderRadius:20,padding:"28px",border:`1px solid ${a.c}12`}}>
          <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:a.c,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Dengan EduKazia</div>
          {a.outcomes.map((o,i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<a.outcomes.length-1?12:0,alignItems:"flex-start"}}>
            <div style={{width:20,height:20,borderRadius:6,background:`${a.c}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,marginTop:1,color:a.c}}>✓</div>
            <span style={{fontFamily:fb,fontSize:14,color:t.tx,lineHeight:1.6,fontWeight:500}}>{o}</span>
          </div>)}
        </div>
      </div>

      {/* CTA */}
      <div style={{textAlign:"center",marginBottom:36}}>
        <a href={`https://wa.me/6281384253679?text=${a.waText}`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:t.goldT,background:t.gold,borderRadius:14,padding:"14px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#1A1535"/> Daftar Kursus Bahasa Inggris</a>
        {/* English Superstar link — only for Anak & Remaja */}
        {tab<2 && <div style={{marginTop:14}}>
          <a href="/kursus/bahasa-inggris/superstar" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.p,background:t.pS,borderRadius:12,padding:"12px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6,border:`1.5px solid ${t.p}20`}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill={t.p}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Lihat Program English Superstar →
          </a>
          <div style={{fontFamily:fb,fontSize:11,color:t.mu,marginTop:6}}>Program terstruktur: Phonemic Awareness → Phonics → 7 level Speaking</div>
        </div>}
      </div>

      {/* Story */}
      {/* HIDDEN: fake testimonial story — TODO re-enable with real data */}
      {false && (
        <div style={{maxWidth:700,margin:"0 auto",background:t.card,borderRadius:22,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
        <div style={{background:a.c,padding:"14px 28px",display:"flex",alignItems:"center",gap:10}}>
          <AvatarFace gender={a.story.gender} color="#fff" size={36}/>
          <div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:"#fff"}}>{tab===2?a.story.name:`${a.story.name} — ${a.story.child}`}</div><div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.65)"}}>Kursus Bahasa Inggris</div></div>
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

// ═══════ 3. CLASS TYPES ═══════
function ClassTypes(){
  const t=useT();
  const classes=[
    {name:"Reguler",ratio:"1 : 8",desc:"Belajar bareng teman. Seru, kompetitif, biaya terjangkau.",c:t.v,tags:["Biaya ringan","Interaksi sosial","Suasana seru"]},
    {name:"Semi Privat",ratio:"1 : 4",desc:"Kelompok kecil — tutor lebih kenal karakter siswa. Balance terbaik.",c:t.or,tags:["Perhatian lebih","Kelompok nyaman","Balance harga"]},
    {name:"Privat",ratio:"1 : 1",desc:"Perhatian 100%. Jadwal fleksibel, reschedule gratis, tempo sesuai siswa.",c:t.p,rec:true,tags:["Perhatian penuh","Jadwal fleksibel","Reschedule gratis","Tempo sesuai siswa"]},
  ];
  return <section style={{background:t.bgW,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Pilih Tipe Kelas</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Semua tipe pakai kurikulum berbasis level. Rekaman & portal tersedia.</p>
    </div></Rv>
    <div style={{display:"flex",flexDirection:"column",gap:12,maxWidth:800,margin:"0 auto"}}>
      {classes.map((c,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:18,overflow:"hidden",border:c.rec?`2px solid ${c.c}35`:`1.5px solid ${h?c.c+"25":t.cb}`,boxShadow:c.rec?`0 6px 30px ${c.c}10`:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateX(4px)":"none",display:"flex"}} className="story-flex">
          <div style={{width:c.rec?110:90,flexShrink:0,background:c.rec?`linear-gradient(180deg,${c.c},${c.c}BB)`:`linear-gradient(180deg,${c.c}20,${c.c}08)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 12px",position:"relative",overflow:"hidden"}}>
            {c.rec&&<div style={{fontFamily:fb,fontSize:7,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.2)",padding:"2px 8px",borderRadius:100,marginBottom:8,letterSpacing:0.5,textTransform:"uppercase"}}>Rekomendasi</div>}
            <div style={{fontFamily:fh,fontSize:26,fontWeight:800,color:c.rec?"#fff":c.c,lineHeight:1}}>{c.ratio}</div>
            <div style={{fontFamily:fb,fontSize:7,color:c.rec?"rgba(255,255,255,0.5)":t.mu,marginTop:3}}>tutor : siswa</div>
          </div>
          <div style={{flex:1,padding:"18px 22px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h3 style={{fontFamily:fh,fontSize:c.rec?19:16,fontWeight:800,color:t.tx,margin:"0 0 4px"}}>{c.name}</h3>
            <p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:"0 0 10px"}}>{c.desc}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:5}}>{c.tags.map(tg=><span key={tg} style={{fontFamily:fb,fontSize:10,fontWeight:600,color:c.c,background:`${c.c}08`,padding:"3px 10px",borderRadius:6,border:`1px solid ${c.c}10`}}>{tg}</span>)}</div>
          </div>
        </div>
      </Rv>;})}
    </div>
  </W></section>;
}

// ═══════ 4. TES LEVEL + FAQ ═══════
function TesLevelAndFAQ(){
  const t=useT();const[op,setOp]=useState(null);
  const faqs=[
    ["Anak saya masih kecil (7 tahun), bisa ikut?","Bisa. Kurikulum anak dirancang khusus — lebih visual, lebih playful, fokus ke pronunciation dan daily conversation."],
    ["Bedanya sama les Inggris biasa?","EduKazia fokus ke speaking & practical English berbasis level — bukan sekedar grammar textbook. Setiap siswa mulai dari level yang pas."],
    ["Mamanya juga bisa ikut?","Bisa. Banyak Mama yang belajar Inggris di EduKazia — mulai dari nol juga bisa. Bonus: bisa bantu anak PR di rumah."],
    ["Jadwalnya gimana?","Privat 100% fleksibel. Reguler & Semi Privat ada slot pilihan yang kami bantu sesuaikan."],
    ["Ada rekaman kelas?","Semua sesi direkam. Siswa bisa tonton ulang kapan saja."],
    ["Pembayarannya gimana?","Per paket — supaya ringan. Detail harga konsultasi via WhatsApp."],
  ];

  return <section id="tes-level" style={{background:t.bg,padding:"80px 0"}}><W>
    <div className="story-flex" style={{display:"flex",gap:40}}>
      <div style={{flex:"1 1 360px"}}>
        <Rv><h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:"0 0 14px",letterSpacing:-0.5}}>Mulai dari Tes Level</h2>
        <p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.7,marginBottom:28}}>Supaya setiap sesi tepat sasaran — nggak terlalu mudah, nggak terlalu susah.</p></Rv>
        <Rv delay={0.05}><div style={{display:"flex",flexDirection:"column",gap:10}}>
          {[{n:"1",icon:"📲",title:"Chat WhatsApp",desc:"Bilang siapa yang mau belajar dan usia berapa."},{n:"2",icon:"📝",title:"Tes Level Online",desc:"30 menit via Zoom. Santai, tanpa tekanan."},{n:"3",icon:"📊",title:"Terima Laporan",desc:"Level sekarang, kekuatan, kelemahan, rekomendasi kelas."},{n:"4",icon:"🚀",title:"Mulai Belajar",desc:"Pilih tipe kelas, jadwal disepakati, mulai."}].map((s,i)=>
            <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0}}>
                <div style={{width:34,height:34,borderRadius:10,background:t.pS,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>{s.icon}</div>
                {i<3&&<div style={{width:2,height:20,background:t.cb}}/>}
              </div>
              <div style={{paddingBottom:i<3?8:0}}><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.tx,margin:"0 0 2px"}}>Step {s.n}: {s.title}</div><div style={{fontFamily:fb,fontSize:12,color:t.mu}}>{s.desc}</div></div>
            </div>
          )}
        </div></Rv>
        <Rv delay={0.1}><div style={{marginTop:24}}>
          <a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+Tes+Level+Bahasa+Inggris`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.goldT,background:t.gold,borderRadius:12,padding:"13px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={14} color="#1A1535"/> Daftar Tes Level</a>
        </div></Rv>
      </div>
      <div style={{flex:"1 1 380px"}}>
        <Rv><h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:t.tx,margin:"0 0 18px"}}>Pertanyaan tentang Bahasa Inggris</h3></Rv>
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

// ═══════ 5. OTHER SUBJECTS — Cross-sell ═══════
function OtherSubjects(){
  const t=useT();
  const others=[
    {name:"Bahasa Arab",desc:"Tajwid, makhraj, muhadatsah. Baca Al-Quran dengan benar.",href:"/kursus/bahasa-arab",c:t.g},
    {name:"Mandarin 中文",desc:"Pinyin, karakter, percakapan. Bahasa masa depan.",href:"/kursus/bahasa-mandarin",c:t.or},
    {name:"Matematika",desc:"Metode Singapura — logika & konsep, bukan hafalan.",href:"/kursus/matematika",c:t.pk},
  ];
  return <section style={{background:t.bgW,padding:"64px 0"}}><W>
    <Rv><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24,flexWrap:"wrap",gap:12}}>
      <h3 style={{fontFamily:fh,fontSize:24,fontWeight:800,color:t.tx,margin:0}}>Pelajaran Lainnya di EduKazia</h3>
    </div></Rv>
    <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
      {others.map((s,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.04*(i+1)}>
        <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:14,padding:"20px",border:`1.5px solid ${h?s.c+"25":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.3s",transform:h?"translateY(-2px)":"none",display:"flex",gap:12,alignItems:"flex-start"}}>
          <div style={{width:4,height:28,borderRadius:2,background:s.c,flexShrink:0,marginTop:3}}/>
          <div style={{flex:1}}>
            <h4 style={{fontFamily:fh,fontSize:15,fontWeight:700,color:t.tx,margin:"0 0 4px"}}>{s.name}</h4>
            <p style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.5,margin:"0 0 10px"}}>{s.desc}</p>
            <a href={s.href} style={{fontFamily:fh,fontWeight:700,fontSize:11,color:s.c,textDecoration:"none"}}>Lihat →</a>
          </div>
        </div>
      </Rv>;})}
    </div>
  </W></section>;
}

// ═══════ 6. CTA FINAL ═══════
function CTAFinal(){
  const t=useT();
  return <section style={{background:t.bg,padding:"80px 0"}}><W><Rv>
    <div style={{background:"linear-gradient(135deg,#0B1120,#162036)",borderRadius:28,overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",top:-30,right:-30,width:150,height:150,borderRadius:"50%",background:"#3B82F6",opacity:0.06,filter:"blur(50px)"}}/>
      <div style={{padding:"56px 48px",textAlign:"center",position:"relative",zIndex:1}}>
        <div style={{fontFamily:fh,fontSize:28,fontWeight:800,color:"#60A5FA",marginBottom:10}}>🇬🇧</div>
        <h2 style={{fontFamily:fh,fontSize:30,fontWeight:800,color:"#fff",margin:"0 0 12px",lineHeight:1.2}}>Bahasa Inggris Itu Investasi.<br/>Mulai Sekarang.</h2>
        <p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.4)",lineHeight:1.7,marginBottom:28,maxWidth:440,marginLeft:"auto",marginRight:"auto"}}>Konsultasi gratis. Kami bantu tentukan level, tipe kelas, dan jadwal yang pas.</p>
        <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:16,color:"#0B1120",background:"#60A5FA",borderRadius:14,padding:"16px 40px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(96,165,250,0.25)"}}><WAIcon size={18} color="#0B1120"/> Daftar Kursus Bahasa Inggris</a>
        <p style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.25)",marginTop:12}}>Tanpa kontrak · Kurikulum berbasis level</p>
      </div>
    </div>
  </Rv></W></section>;
}

// ═══════ FOOTER ═══════
function Footer(){const t=useT();return <footer style={{background:t.footer,padding:"40px 0 20px"}}><W><div style={{display:"flex",gap:36,flexWrap:"wrap",marginBottom:28}}><div style={{flex:"1 1 200px"}}><div style={{marginBottom:12}}><EdukaziaLogo variant="white" size="sm" href="/"/></div><p style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,maxWidth:200}}>Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia.</p></div>{[{t:"Pelajaran",i:["Bahasa Inggris","Bahasa Arab","Mandarin","Matematika"]},{t:"Kelas",i:["Privat 1-on-1","Semi Privat","Reguler"]},{t:"Lainnya",i:["FAQ","Portal Orang Tua","Kebijakan Privasi"]}].map(col=><div key={col.t} style={{flex:"1 1 100px"}}><h4 style={{fontFamily:fh,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.45)",marginBottom:12,textTransform:"uppercase",letterSpacing:0.5}}>{col.t}</h4>{col.i.map(item=><div key={item} style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:8}}>{item}</div>)}</div>)}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:14,textAlign:"center"}}><p style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.15)"}}>© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia.</p></div></W></footer>;}
function WAFloat(){return <a href={WA} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:20,right:20,width:52,height:52,borderRadius:14,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",animation:"waPulse 2s ease-in-out infinite",zIndex:999}}><WAIcon size={24}/></a>;}

export default function KursusBahasaInggris(){
  const[isDark,setIsDark]=useState(false);const t=isDark?D:L;
  return <TX.Provider value={t}><div style={{background:t.bg,minHeight:"100vh",transition:"background 0.3s"}}>
    <style>{animations}</style>
    <style>{`body{background:${t.bg};transition:background 0.3s}`}</style>
    <Nav isDark={isDark} toggle={()=>setIsDark(d=>!d)}/>
    <Hero/>
    <AudienceSection/>
    <ClassTypes/>
    <TesLevelAndFAQ/>
    <OtherSubjects/>
    <CTAFinal/>
    <Footer/>
    <WAFloat/>
  </div></TX.Provider>;
}
