/* eslint-disable */
// @ts-nocheck
"use client";

import { useState, useEffect, useRef, createContext, useContext } from "react";
import { BarChart3, ClipboardCheck, GraduationCap, MessageSquare, Users, Zap } from "lucide-react";

const TX = createContext();
const useT = () => useContext(TX);
const L = {bg:"#FDFCFA",bgW:"#FFFBEB",bgC:"#FFF8E0",card:"#FFFFFF",cb:"rgba(0,0,0,0.05)",cs:"0 2px 20px rgba(0,0,0,0.04)",ch:"0 12px 40px rgba(245,158,11,0.1)",tx:"#1A1535",sub:"#5E5878",mu:"#9D97B5",p:"#F59E0B",pS:"#FFFBEB",g:"#10B981",gS:"#ECFDF5",gold:"#E6B800",goldS:"#FFF9E0",goldT:"#1A1535",pk:"#EC4899",pkS:"#FDF2F8",bl:"#3B82F6",blS:"#EFF6FF",v:"#5C4FE5",vS:"#EEEDFC",coral:"#EF4444",nav:"rgba(253,252,250,0.92)",navB:"rgba(0,0,0,0.05)",footer:"#1A1535",cta:"linear-gradient(135deg,#F59E0B,#D97706)",m:"light"};
const D = {bg:"#0E0A08",bgW:"#120E08",bgC:"#14100A",card:"rgba(255,255,255,0.03)",cb:"rgba(255,255,255,0.07)",cs:"0 2px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",ch:"0 16px 48px rgba(245,158,11,0.12), 0 0 0 1px rgba(255,255,255,0.08)",tx:"#F5F4FF",sub:"#A8A4BE",mu:"#5D596F",p:"#FFB84D",pS:"rgba(255,184,77,0.1)",g:"#4ADE9A",gS:"rgba(74,222,154,0.08)",gold:"#F0C830",goldS:"rgba(240,200,48,0.08)",goldT:"#0E0A08",pk:"#F78DC2",pkS:"rgba(247,141,194,0.08)",bl:"#70AEFF",blS:"rgba(112,174,255,0.08)",v:"#8B7FF5",vS:"rgba(139,127,245,0.1)",coral:"#FF8A8A",nav:"rgba(14,10,8,0.85)",navB:"rgba(255,255,255,0.06)",footer:"#080604",cta:"linear-gradient(135deg,#F59E0B,#D97706)",m:"dark"};
const fh="'Sora',sans-serif",fb="'Plus Jakarta Sans',sans-serif";
const WA="https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+tertarik+kursus+Mandarin";

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
::selection{background:#F59E0B40}
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

// ═══════ NAV ═══════
function Nav({isDark,toggle}){
  const t=useT();const[sc,setSc]=useState(false);const[openDD,setOpenDD]=useState(null);const[mob,setMob]=useState(false);
  useEffect(()=>{const h=()=>setSc(window.scrollY>50);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  const dropdowns=[
    {label:"Untuk Siapa",items:[{text:"Anak (7–13 thn)",href:"/untuk-anak"},{text:"Remaja SMP–SMA (13–18 thn)",href:"/untuk-remaja"},{text:"Mama Yang Mau Belajar",href:"/untuk-orang-tua"},{text:"Kelas Privat 1-on-1",href:"/kursus/privat"}]},
    {label:"Pelajaran",items:[{text:"Bahasa Inggris",href:"/kursus/bahasa-inggris"},{text:"Bahasa Arab",href:"/kursus/bahasa-arab"},{text:"Mandarin",href:"/kursus/bahasa-mandarin"},{text:"Matematika",href:"/kursus/matematika"}]},
  ];
  return <>
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:sc?t.nav:"rgba(14,10,8,0.6)",backdropFilter:"blur(20px)",borderBottom:`1px solid ${sc?t.navB:"rgba(255,255,255,0.04)"}`,transition:"all 0.35s"}}>
      <W s={{display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
        <EdukaziaLogo variant={t.m==='dark'||!sc?'white':'default'} size="md" href="/"/>{sc&&<span className="hide-mobile" style={{fontFamily:fb,fontSize:11,fontWeight:600,color:t.p,background:t.pS,padding:"4px 12px",borderRadius:100,marginLeft:8,whiteSpace:"nowrap"}}>Bimbel dari Maluku Utara yang punya LMS Keren!</span>}
        <div className="desktop-menu" style={{display:"flex",alignItems:"center",gap:4}}>
          {dropdowns.map((dd,di)=><div key={di} style={{position:"relative"}} onMouseEnter={()=>setOpenDD(di)} onMouseLeave={()=>setOpenDD(null)}><button style={{fontFamily:fb,fontSize:13,fontWeight:600,color:sc?t.sub:"rgba(255,255,255,0.7)",background:"none",border:"none",cursor:"pointer",padding:"8px 12px",borderRadius:8,display:"flex",alignItems:"center",gap:5}}>{dd.label}<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>{openDD===di&&<div style={{position:"absolute",top:"100%",left:0,background:t.card,borderRadius:14,border:`1px solid ${t.cb}`,boxShadow:"0 12px 40px rgba(0,0,0,0.15)",padding:6,minWidth:220,zIndex:100}}>{dd.items.map((item,ii)=><a key={ii} href={item.href} style={{display:"block",padding:"10px 16px",borderRadius:10,textDecoration:"none",fontFamily:fb,fontSize:13,fontWeight:600,color:t.tx}} onMouseEnter={e=>e.currentTarget.style.background=t.pS} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{item.text}</a>)}</div>}</div>)}
          <button onClick={toggle} style={{width:36,height:36,borderRadius:10,background:sc?"rgba(92,79,229,0.08)":"rgba(255,255,255,0.1)",border:`1.5px solid ${sc?"rgba(92,79,229,0.28)":"rgba(255,255,255,0.2)"}`,boxShadow:sc?"0 1px 3px rgba(0,0,0,0.08)":"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:8}}>{isDark?<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={sc?t.tx:"#fff"} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}</button>
          <a href="https://app.edukazia.com" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:"#fff",background:"linear-gradient(135deg,#5C4FE5,#7B6FF0)",borderRadius:12,padding:"10px 22px",textDecoration:"none",boxShadow:"0 4px 16px rgba(92,79,229,0.2)",marginLeft:8}}>Login ke Portal</a>
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

// ═══════ 1. HERO — Warm amber, Chinese character visual ═══════
function Hero(){
  const t=useT();
  const chars=["你好","谢谢","学习","中文"];
  const pinyins=["nǐ hǎo","xiè xie","xué xí","zhōng wén"];
  const meanings=["halo","terima kasih","belajar","bahasa Mandarin"];
  const[ci,setCi]=useState(0);
  useEffect(()=>{const i=setInterval(()=>setCi(p=>(p+1)%chars.length),2500);return()=>clearInterval(i);},[]);

  return <section style={{background:"linear-gradient(160deg,#1A1008 0%,#2A1C0E 40%,#1A1008 100%)",paddingTop:130,paddingBottom:80,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:"15%",left:"8%",width:280,height:280,borderRadius:"50%",background:"#F59E0B",opacity:0.04,filter:"blur(100px)"}}/>
    <div style={{position:"absolute",bottom:"10%",right:"12%",width:220,height:220,borderRadius:"50%",background:"#FFB84D",opacity:0.03,filter:"blur(80px)"}}/>
    <W>
      <div className="hero-flex" style={{display:"flex",alignItems:"center",gap:52}}>
        <div style={{flex:"1 1 500px"}}>
          <Rv><div style={{fontFamily:fb,fontSize:13,fontWeight:700,color:"#FFB84D",background:"rgba(255,184,77,0.08)",padding:"6px 18px",borderRadius:100,display:"inline-flex",alignItems:"center",gap:8,marginBottom:24,border:"1px solid rgba(255,184,77,0.15)"}}>
            <span style={{fontSize:16}}>中文</span> Bahasa Mandarin
          </div></Rv>
          <Rv delay={0.08}>
            <h1 style={{fontFamily:fh,fontSize:46,fontWeight:800,color:"#fff",lineHeight:1.1,letterSpacing:-1.5,margin:"0 0 10px"}}>
              Bahasa yang Paling<br/><span style={{color:"#FFB84D"}}>Dibutuhkan Dunia</span>.
            </h1>
            <div style={{fontFamily:fh,fontSize:18,fontWeight:600,color:"rgba(255,255,255,0.4)",marginBottom:20}}>Mulai dari nol. Satu karakter, satu langkah.</div>
          </Rv>
          <Rv delay={0.12}>
            <p style={{fontFamily:fb,fontSize:16,color:"rgba(255,255,255,0.35)",lineHeight:1.75,margin:"0 0 28px",maxWidth:440}}>
              Pinyin, karakter, nada, percakapan. Kurikulum terstruktur dari level paling dasar. Tidak perlu bisa apa-apa dulu — tutor bimbing dari nol. Live via Zoom.
            </p>
          </Rv>
          <Rv delay={0.16}>
            <a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:15,color:"#1A1008",background:"#FFB84D",borderRadius:14,padding:"16px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(255,184,77,0.25)"}}><WAIcon size={18} color="#1A1008"/> Daftar Kursus Mandarin</a>
          </Rv>
        </div>

        {/* Right — Rotating character flashcard */}
        <div className="hero-right" style={{flex:"0 0 360px",position:"relative"}}>
          <Rv delay={0.15}>
            <div style={{background:"rgba(255,255,255,0.03)",borderRadius:24,border:"1px solid rgba(255,255,255,0.06)",padding:"36px 32px",textAlign:"center"}}>
              <div style={{fontFamily:fb,fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:1,marginBottom:20}}>Karakter Hari Ini</div>
              <div key={ci} style={{animation:"countUp 0.4s ease"}}>
                <div style={{fontSize:64,color:"#FFB84D",lineHeight:1.1,marginBottom:4}}>{chars[ci]}</div>
                <div style={{fontFamily:"monospace",fontSize:18,color:"rgba(255,255,255,0.5)",marginBottom:2}}>{pinyins[ci]}</div>
                <div style={{fontFamily:fb,fontSize:14,color:"rgba(255,255,255,0.3)",marginBottom:20}}>"{meanings[ci]}"</div>
              </div>
              {/* Tone indicators */}
              <div style={{display:"flex",gap:8,justifyContent:"center",marginBottom:16}}>
                {["1̄ flat","2́ naik","3̌ turun-naik","4̀ turun"].map((tone,i)=>
                  <div key={i} style={{fontFamily:"monospace",fontSize:9,color:i===0?"#FFB84D":"rgba(255,255,255,0.25)",background:i===0?"rgba(255,184,77,0.1)":"rgba(255,255,255,0.03)",padding:"4px 10px",borderRadius:6,border:`1px solid ${i===0?"rgba(255,184,77,0.15)":"rgba(255,255,255,0.04)"}`}}>{tone}</div>
                )}
              </div>
              <div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.25)"}}>Kurikulum terstruktur · Pinyin → Karakter → Percakapan</div>
            </div>
          </Rv>
          <div style={{position:"absolute",bottom:-8,left:-20,background:"rgba(26,16,8,0.95)",borderRadius:12,padding:"10px 16px",border:"1px solid rgba(255,184,77,0.12)",boxShadow:"0 8px 20px rgba(0,0,0,0.3)",animation:"float 5s ease-in-out infinite",zIndex:2}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{fontSize:14}}>🀄</span>
              <div><div style={{fontFamily:fh,fontSize:11,fontWeight:800,color:"#FFB84D"}}>Dari Nol Bisa</div><div style={{fontFamily:fb,fontSize:8,color:"rgba(255,255,255,0.35)"}}>Tidak perlu bakat khusus</div></div>
            </div>
          </div>
        </div>
      </div>
    </W>
  </section>;
}

// ═══════ 2. AUDIENCE TABS — Flashcard-style cards ═══════
function AudienceSection(){
  const t=useT();
  const[tab,setTab]=useState(0);

  const audiences = [
    {
      label:"Anak 7–13 thn",icon:"gradcap",c:t.pk,
      headline:"Otak Anak Masih Plastis — Waktu Terbaik Belajar Bahasa Baru",
      desc:"Anak kecil menyerap bahasa baru jauh lebih cepat dari remaja atau dewasa. Mulai Mandarin sekarang = investasi yang hasilnya terasa seumur hidup.",
      pains:["Anak tidak punya exposure Mandarin sama sekali","Di sekolah tidak ada pelajaran Mandarin","Mama tidak bisa ngajari karena tidak bisa Mandarin"],
      outcomes:["Anak kenal Pinyin, nada, dan karakter dasar dari kecil","Fondasi pronunciation yang bersih — lebih susah kalau mulai dewasa","Skill yang membedakan anak dari teman-temannya"],
      story:{name:"Mama Diana",child:"Kenji, 8 thn · Ternate",before:"Nol besar, belum pernah dengar Mandarin",after:"Bisa salam, hitung 1–10, dan kenal 20+ karakter",detail:"Kenji mulai dari nol murni. Tutor pakai metode visual — karakter dihubungkan dengan gambar. Setelah paket pertama, Kenji bisa perkenalan diri: 你好，我叫Kenji. Mama-nya kaget.",gender:"boy"},
      waText:"Halo+EduKazia%2C+saya+ingin+daftarkan+anak+untuk+kursus+Mandarin.+Nama%3A+...+Usia%3A+...",
    },
    {
      label:"Remaja 13–18 thn",icon:"gradcap",c:t.bl,
      headline:"Skill yang Bikin CV Remaja Beda dari yang Lain",
      desc:"Mandarin itu rare skill. Remaja yang bisa Mandarin — bahkan di level dasar — punya keunggulan yang nyata untuk beasiswa, karir, dan masa depan.",
      pains:["Semua orang belajar Inggris, tapi hampir tidak ada yang bisa Mandarin","Mau belajar tapi tidak tahu harus mulai dari mana","Takut Mandarin terlalu susah"],
      outcomes:["Punya skill langka yang membedakan dari peers","Fondasi untuk persiapan HSK di masa depan","Mandarin tidak sesusah yang dibayangkan kalau metodenya benar"],
      story:{name:"Papa Andi",child:"Farah, 16 thn · Sofifi",before:"Penasaran tapi takut — 'Mandarin kan susah banget?'",after:"Bisa perkenalan diri dan percakapan dasar",detail:"Farah penasaran sama Mandarin tapi tidak pernah berani coba. Tutor mulai dari Pinyin — bukan langsung karakter. Ternyata tidak seseram yang dibayangkan. Sekarang Farah bisa 自我介绍 (perkenalan diri) dan makin semangat.",gender:"girl"},
      waText:"Halo+EduKazia%2C+saya+ingin+daftarkan+anak+remaja+untuk+kursus+Mandarin.+Nama%3A+...+Kelas%3A+...",
    },
    {
      label:"Mama / Dewasa",icon:"users",c:t.g,
      headline:"Challenge Diri Sendiri — Tidak Ada Kata Terlambat",
      desc:"Mandarin bukan cuma untuk anak muda. Mama yang belajar Mandarin membuka peluang baru — bisnis, networking, atau sekadar kebanggaan pribadi.",
      pains:["Penasaran tapi merasa sudah terlalu tua untuk belajar bahasa baru","Mau coba tapi tidak ada guru Mandarin di daerah","Takut tidak bisa karena belum pernah belajar bahasa Asia"],
      outcomes:["Mulai dari Pinyin — tidak langsung karakter, tidak overwhelming","Privat: tempo sesuai Mama, tidak dipaksa cepat","Kebanggaan pribadi + peluang baru yang tidak terduga"],
      story:{name:"Mama Rinna",child:"38 thn · Tidore",before:"Nol besar, tidak tahu Pinyin sama sekali",after:"Bisa salam & perkenalan diri dalam Mandarin",detail:"Rinna penasaran sama Mandarin setelah lihat peluang bisnis dengan partner dari China. Mulai dari nol — Pinyin, nada, karakter paling dasar. Belum fasih, tapi fondasinya terbentuk dan dia makin semangat lanjut.",gender:"girl"},
      waText:"Halo+EduKazia%2C+saya+Mama+yang+mau+belajar+Mandarin.+Bisa+konsultasi+dulu%3F",
    },
  ];

  const a = audiences[tab];

  return <section style={{background:t.bg,padding:"80px 0"}}><W>
    <Rv><div style={{textAlign:"center",marginBottom:44}}>
      <h2 style={{fontFamily:fh,fontSize:38,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5,lineHeight:1.15}}>Mandarin untuk Siapa?</h2>
      <p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Semua bisa mulai dari nol. Pilih yang sesuai.</p>
    </div></Rv>

    {/* Flashcard-style audience cards */}
    <Rv delay={0.05}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16,marginBottom:44}} className="grid-3">
        {audiences.map((au,i)=>{
          const active = tab===i;
          const hanzi = ["孩子","少年","妈妈"];
          const pinyin = ["háizi","shàonián","māma"];
          const previews = [
            {pain:"Nol exposure Mandarin",outcome:"Kenal karakter & Pinyin"},
            {pain:"Takut terlalu susah",outcome:"Percakapan dasar lancar"},
            {pain:"Merasa sudah terlambat",outcome:"Kebanggaan + peluang baru"},
          ];
          const pv = previews[i];
          return <div key={i} onClick={()=>setTab(i)} style={{
            borderRadius:20,overflow:"hidden",position:"relative",cursor:"pointer",
            transition:"all 0.5s cubic-bezier(0.22,1,0.36,1)",
            transform:active?"scale(1.02)":"scale(0.98)",
            opacity:active?1:0.85,
            background:active?au.c:t.card,
            border:active?`2px solid ${au.c}`:`2px solid ${t.cb}`,
            boxShadow:active?`0 20px 60px ${au.c}25`:"0 4px 20px rgba(0,0,0,0.06)",
          }}>
            {/* Brush stroke decoration */}
            <svg style={{position:"absolute",top:8,right:8,opacity:active?0.12:0.05,transition:"opacity 0.4s"}} width="50" height="50" viewBox="0 0 50 50">
              <path d="M10 40C15 15 35 10 45 8" stroke={active?"#fff":au.c} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
              <path d="M8 35C20 20 30 18 42 12" stroke={active?"#fff":au.c} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3"/>
            </svg>

            <div style={{position:"relative",padding:"22px 22px 20px"}}>
              {/* Hanzi character + Pinyin as "flashcard header" */}
              <div style={{display:"flex",alignItems:"flex-end",gap:10,marginBottom:4}}>
                <div style={{fontSize:38,lineHeight:1,color:active?"rgba(255,255,255,0.2)":`${au.c}15`,transition:"color 0.3s"}}>{hanzi[i]}</div>
                <div style={{fontFamily:"monospace",fontSize:12,color:active?"rgba(255,255,255,0.4)":`${au.c}40`,paddingBottom:4}}>{pinyin[i]}</div>
              </div>
              <h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:active?"#fff":t.tx,margin:"0 0 12px",lineHeight:1.2,transition:"color 0.3s"}}>{au.label}</h3>

              {/* Before → After as character cards */}
              <div style={{display:"flex",gap:8,marginBottom:14}}>
                <div style={{flex:1,background:active?"rgba(255,255,255,0.08)":`${t.coral}05`,borderRadius:8,padding:"10px",textAlign:"center",border:active?"1px solid rgba(255,255,255,0.08)":`1px solid ${t.coral}06`,transition:"all 0.3s"}}>
                  <div style={{fontFamily:fb,fontSize:7,fontWeight:700,color:active?"rgba(255,255,255,0.4)":t.coral,textTransform:"uppercase",letterSpacing:0.3,marginBottom:3}}>Sebelum</div>
                  <div style={{fontFamily:fh,fontSize:10,fontWeight:700,color:active?"rgba(255,255,255,0.7)":t.coral,lineHeight:1.3}}>{pv.pain}</div>
                </div>
                <div style={{display:"flex",alignItems:"center",fontSize:14,color:active?"rgba(255,255,255,0.2)":t.mu}}>→</div>
                <div style={{flex:1,background:active?"rgba(255,255,255,0.12)":`${au.c}06`,borderRadius:8,padding:"10px",textAlign:"center",border:active?"1px solid rgba(255,255,255,0.12)":`1px solid ${au.c}08`,transition:"all 0.3s"}}>
                  <div style={{fontFamily:fb,fontSize:7,fontWeight:700,color:active?"rgba(255,255,255,0.5)":au.c,textTransform:"uppercase",letterSpacing:0.3,marginBottom:3}}>Sesudah</div>
                  <div style={{fontFamily:fh,fontSize:10,fontWeight:700,color:active?"#fff":au.c,lineHeight:1.3}}>{pv.outcome}</div>
                </div>
              </div>

              {/* Action row with seal stamp indicator */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span style={{fontFamily:fb,fontSize:11,fontWeight:600,color:active?"rgba(255,255,255,0.6)":t.mu}}>{active?"Sedang dilihat":"Klik untuk lihat"}</span>
                <div style={{width:24,height:24,borderRadius:4,border:active?`2px solid rgba(255,255,255,0.25)`:`2px solid ${au.c}20`,display:"flex",alignItems:"center",justifyContent:"center",background:active?"rgba(255,255,255,0.1)":`${au.c}06`}}>
                  {active
                    ?<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    :<span style={{fontSize:10,color:au.c,fontWeight:800}}>中</span>
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
      <div className="story-flex" style={{display:"flex",gap:20,marginBottom:32}}>
        <div style={{flex:1,background:`${t.coral}04`,borderRadius:20,padding:"28px",border:`1px solid ${t.coral}10`}}>
          <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:t.coral,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Tanpa Bimbingan</div>
          {a.pains.map((p,i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<a.pains.length-1?12:0,alignItems:"flex-start"}}><div style={{width:20,height:20,borderRadius:6,background:`${t.coral}10`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,marginTop:1}}>✗</div><span style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.6}}>{p}</span></div>)}
        </div>
        <div style={{flex:1,background:t.pS,borderRadius:20,padding:"28px",border:`1px solid ${a.c}12`}}>
          <div style={{fontFamily:fh,fontSize:12,fontWeight:700,color:a.c,textTransform:"uppercase",letterSpacing:1,marginBottom:16}}>Dengan EduKazia</div>
          {a.outcomes.map((o,i)=><div key={i} style={{display:"flex",gap:10,marginBottom:i<a.outcomes.length-1?12:0,alignItems:"flex-start"}}><div style={{width:20,height:20,borderRadius:6,background:`${a.c}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0,marginTop:1,color:a.c}}>✓</div><span style={{fontFamily:fb,fontSize:14,color:t.tx,lineHeight:1.6,fontWeight:500}}>{o}</span></div>)}
        </div>
      </div>
      <div style={{textAlign:"center",marginBottom:36}}>
        <a href={`https://wa.me/6281384253679?text=${a.waText}`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:14,color:t.goldT,background:t.gold,borderRadius:14,padding:"14px 32px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={16} color="#1A1535"/> Daftar Kursus Mandarin</a>
      </div>
      {/* HIDDEN: fake testimonial story — TODO re-enable with real data */}
      {false && (
        <div style={{maxWidth:700,margin:"0 auto",background:t.card,borderRadius:22,border:`1px solid ${t.cb}`,boxShadow:t.cs,overflow:"hidden"}}>
        <div style={{background:a.c,padding:"14px 28px",display:"flex",alignItems:"center",gap:10}}>
          <AvatarFace gender={a.story.gender} color="#fff" size={36}/>
          <div><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:"#fff"}}>{tab===2?a.story.name:`${a.story.name} — ${a.story.child}`}</div><div style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.65)"}}>Kursus Mandarin</div></div>
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
function ClassTypes(){const t=useT();const classes=[{name:"Reguler",ratio:"1 : 8",desc:"Belajar Mandarin bareng teman. Seru, biaya terjangkau.",c:t.v,tags:["Biaya ringan","Ada teman","Seru"]},{name:"Semi Privat",ratio:"1 : 4",desc:"Kelompok kecil — tutor lebih kenal karakter siswa.",c:t.p,tags:["Perhatian lebih","Kelompok nyaman"]},{name:"Privat",ratio:"1 : 1",desc:"Perhatian 100%. Nada & karakter dikoreksi satu per satu. Jadwal fleksibel.",c:t.bl,rec:true,tags:["Perhatian penuh","Koreksi individual","Reschedule gratis"]}];return <section style={{background:t.bgW,padding:"80px 0"}}><W><Rv><div style={{textAlign:"center",marginBottom:44}}><h2 style={{fontFamily:fh,fontSize:36,fontWeight:800,color:t.tx,margin:0,letterSpacing:-0.5}}>Pilih Tipe Kelas</h2><p style={{fontFamily:fb,fontSize:15,color:t.sub,marginTop:10,lineHeight:1.7}}>Kurikulum berbasis level untuk semua tipe.</p></div></Rv><div style={{display:"flex",flexDirection:"column",gap:12,maxWidth:800,margin:"0 auto"}}>{classes.map((c,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.06*(i+1)}><div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:18,overflow:"hidden",border:c.rec?`2px solid ${c.c}35`:`1.5px solid ${h?c.c+"25":t.cb}`,boxShadow:c.rec?`0 6px 30px ${c.c}10`:h?t.ch:t.cs,transition:"all 0.35s",transform:h?"translateX(4px)":"none",display:"flex"}} className="story-flex"><div style={{width:c.rec?110:90,flexShrink:0,background:c.rec?`linear-gradient(180deg,${c.c},${c.c}BB)`:`linear-gradient(180deg,${c.c}20,${c.c}08)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 12px"}}>{c.rec&&<div style={{fontFamily:fb,fontSize:7,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.2)",padding:"2px 8px",borderRadius:100,marginBottom:8,textTransform:"uppercase",letterSpacing:0.5}}>Rekomendasi</div>}<div style={{fontFamily:fh,fontSize:26,fontWeight:800,color:c.rec?"#fff":c.c,lineHeight:1}}>{c.ratio}</div><div style={{fontFamily:fb,fontSize:7,color:c.rec?"rgba(255,255,255,0.5)":t.mu,marginTop:3}}>tutor : siswa</div></div><div style={{flex:1,padding:"18px 22px",display:"flex",flexDirection:"column",justifyContent:"center"}}><h3 style={{fontFamily:fh,fontSize:c.rec?19:16,fontWeight:800,color:t.tx,margin:"0 0 4px"}}>{c.name}</h3><p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.6,margin:"0 0 10px"}}>{c.desc}</p><div style={{display:"flex",flexWrap:"wrap",gap:5}}>{c.tags.map(tg=><span key={tg} style={{fontFamily:fb,fontSize:10,fontWeight:600,color:c.c,background:`${c.c}08`,padding:"3px 10px",borderRadius:6,border:`1px solid ${c.c}10`}}>{tg}</span>)}</div></div></div></Rv>})}</div></W></section>;}

// ═══════ 4. TES LEVEL + FAQ ═══════
function TesLevelAndFAQ(){const t=useT();const[op,setOp]=useState(null);const faqs=[["Mandarin itu susah banget kan?","Kalau belajar sendiri, iya. Tapi dengan kurikulum terstruktur dan tutor yang sabar, Mandarin jauh lebih mudah dari yang dibayangkan. Mulai dari Pinyin, bukan langsung karakter."],["Anak saya tidak tahu apa-apa tentang Mandarin. Bisa?","Bisa. Justru mayoritas siswa kami mulai dari nol. Kurikulum dirancang untuk pemula murni."],["Untuk apa belajar Mandarin?","Mandarin digunakan oleh 1.1 miliar orang. Skill langka yang membuka peluang beasiswa, bisnis, dan karir internasional."],["Jadwalnya bagaimana?","Privat 100% fleksibel. Reguler & Semi Privat ada slot pilihan."],["Ada rekaman kelas?","Semua sesi direkam. Siswa bisa tonton ulang."],["Pembayarannya bagaimana?","Per paket — ringan. Detail harga via WhatsApp."]];return <section id="tes-level" style={{background:t.bg,padding:"80px 0"}}><W><div className="story-flex" style={{display:"flex",gap:40}}><div style={{flex:"1 1 360px"}}><Rv><h2 style={{fontFamily:fh,fontSize:32,fontWeight:800,color:t.tx,margin:"0 0 14px",letterSpacing:-0.5}}>Mulai dari Tes Level</h2><p style={{fontFamily:fb,fontSize:14,color:t.sub,lineHeight:1.7,marginBottom:28}}>Supaya tutor tahu dari mana harus mulai — Pinyin, karakter, atau sudah percakapan.</p></Rv><Rv delay={0.05}><div style={{display:"flex",flexDirection:"column",gap:10}}>{[{n:"1",icon:<MessageSquare size={22} color={t.p}/>,title:"Chat WhatsApp",desc:"Bilang siapa yang mau belajar."},{n:"2",icon:<ClipboardCheck size={22} color={t.p}/>,title:"Tes Level Online",desc:"30 menit via Zoom. Santai."},{n:"3",icon:<BarChart3 size={22} color={t.p}/>,title:"Terima Laporan",desc:"Level, rekomendasi, roadmap."},{n:"4",icon:<Zap size={22} color={t.p}/>,title:"Mulai Belajar",desc:"Pilih kelas, mulai sesuai level."}].map((s,i)=><div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}><div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0}}><div style={{width:34,height:34,borderRadius:10,background:t.pS,display:"flex",alignItems:"center",justifyContent:"center"}}>{ s.icon==="gradcap"?<GraduationCap size={16} color="currentColor"/>:<Users size={16} color="currentColor"/>}</div>{i<3&&<div style={{width:2,height:20,background:t.cb}}/>}</div><div style={{paddingBottom:i<3?8:0}}><div style={{fontFamily:fh,fontSize:13,fontWeight:700,color:t.tx,margin:"0 0 2px"}}>Step {s.n}: {s.title}</div><div style={{fontFamily:fb,fontSize:12,color:t.mu}}>{s.desc}</div></div></div>)}</div></Rv><Rv delay={0.1}><div style={{marginTop:24}}><a href={`https://wa.me/6281384253679?text=Halo+EduKazia%2C+saya+ingin+Tes+Level+Mandarin`} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:13,color:t.goldT,background:t.gold,borderRadius:12,padding:"13px 28px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6,boxShadow:"0 4px 16px rgba(230,184,0,0.2)"}}><WAIcon size={14} color="#1A1535"/> Daftar Tes Level</a></div></Rv></div><div style={{flex:"1 1 380px"}}><Rv><h3 style={{fontFamily:fh,fontSize:20,fontWeight:800,color:t.tx,margin:"0 0 18px"}}>Pertanyaan tentang Mandarin</h3></Rv><Rv delay={0.05}><div>{faqs.map(([q,a],i)=><div key={i} style={{background:t.card,borderRadius:12,marginBottom:8,border:`1px solid ${op===i?t.p+"25":t.cb}`,overflow:"hidden",transition:"border 0.2s"}}><button onClick={()=>setOp(op===i?null:i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 16px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}><span style={{fontFamily:fh,fontSize:13,fontWeight:600,color:op===i?t.tx:t.sub,flex:1}}>{q}</span><span style={{fontSize:16,color:t.p,transition:"transform 0.3s",transform:op===i?"rotate(45deg)":"none",fontWeight:300}}>+</span></button><div style={{maxHeight:op===i?160:0,transition:"max-height 0.3s ease",overflow:"hidden"}}><p style={{fontFamily:fb,fontSize:13,color:t.sub,lineHeight:1.7,padding:"0 16px 14px"}}>{a}</p></div></div>)}</div></Rv><Rv delay={0.1}><div style={{marginTop:12}}><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:12,color:"#fff",background:"#25D366",borderRadius:10,padding:"10px 20px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6}}><WAIcon size={14}/> Chat WhatsApp</a></div></Rv></div></div></W></section>;}

// ═══════ 5. OTHER SUBJECTS ═══════
function OtherSubjects(){const t=useT();const others=[{name:"Bahasa Inggris",desc:"Speaking, conversation, pronunciation.",href:"/kursus/bahasa-inggris",c:t.bl},{name:"Bahasa Arab",desc:"Tajwid, makhraj, muhadatsah, baca Al-Quran.",href:"/kursus/bahasa-arab",c:t.g},{name:"Matematika",desc:"Metode Singapura — logika & konsep.",href:"/kursus/matematika",c:t.pk}];return <section style={{background:t.bgW,padding:"64px 0"}}><W><Rv><h3 style={{fontFamily:fh,fontSize:24,fontWeight:800,color:t.tx,margin:"0 0 24px"}}>Pelajaran Lainnya di EduKazia</h3></Rv><div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>{others.map((s,i)=>{const[h,setH]=useState(false);return <Rv key={i} delay={0.04*(i+1)}><div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:t.card,borderRadius:14,padding:"20px",border:`1.5px solid ${h?s.c+"25":t.cb}`,boxShadow:h?t.ch:t.cs,transition:"all 0.3s",display:"flex",gap:12,alignItems:"flex-start"}}><div style={{width:4,height:28,borderRadius:2,background:s.c,flexShrink:0,marginTop:3}}/><div><h4 style={{fontFamily:fh,fontSize:15,fontWeight:700,color:t.tx,margin:"0 0 4px"}}>{s.name}</h4><p style={{fontFamily:fb,fontSize:12,color:t.sub,lineHeight:1.5,margin:"0 0 10px"}}>{s.desc}</p><a href={s.href} style={{fontFamily:fh,fontWeight:700,fontSize:11,color:s.c,textDecoration:"none"}}>Lihat →</a></div></div></Rv>})}</div></W></section>;}

// ═══════ 6. CTA FINAL ═══════
function CTAFinal(){const t=useT();return <section style={{background:t.bg,padding:"80px 0"}}><W><Rv><div style={{background:"linear-gradient(135deg,#1A1008,#2A1C0E)",borderRadius:28,overflow:"hidden",position:"relative"}}><div style={{position:"absolute",top:-30,right:-30,width:150,height:150,borderRadius:"50%",background:"#F59E0B",opacity:0.06,filter:"blur(50px)"}}/>
<div style={{padding:"56px 48px",textAlign:"center",position:"relative",zIndex:1}}><div style={{fontSize:40,color:"#FFB84D",lineHeight:1,marginBottom:10}}>中文</div><h2 style={{fontFamily:fh,fontSize:30,fontWeight:800,color:"#fff",margin:"0 0 12px",lineHeight:1.2}}>Satu Karakter, Satu Langkah.<br/>Mulai Sekarang.</h2><p style={{fontFamily:fb,fontSize:15,color:"rgba(255,255,255,0.4)",lineHeight:1.7,marginBottom:28,maxWidth:440,marginLeft:"auto",marginRight:"auto"}}>Chat langsung. Kami bantu tentukan level, tipe kelas, dan jadwal yang pas.</p><a href={WA} target="_blank" rel="noreferrer" style={{fontFamily:fh,fontWeight:700,fontSize:16,color:"#1A1008",background:"#FFB84D",borderRadius:14,padding:"16px 40px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,boxShadow:"0 6px 24px rgba(255,184,77,0.25)"}}><WAIcon size={18} color="#1A1008"/> Daftar Kursus Mandarin</a><p style={{fontFamily:fb,fontSize:11,color:"rgba(255,255,255,0.25)",marginTop:12}}>Tanpa kontrak · Mulai dari nol bisa</p></div></div></Rv></W></section>;}

// ═══════ FOOTER ═══════
function Footer(){const t=useT();return <footer style={{background:t.footer,padding:"40px 0 20px"}}><W><div style={{display:"flex",gap:36,flexWrap:"wrap",marginBottom:28}}><div style={{flex:"1 1 200px"}}><div style={{marginBottom:12}}><EdukaziaLogo variant="white" size="sm" href="/"/></div><p style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.35)",lineHeight:1.6,maxWidth:200}}>Bimbingan belajar online Bahasa & Matematika untuk pelajar Indonesia.</p></div>{[{t:"Pelajaran",i:["Bahasa Inggris","Bahasa Arab","Mandarin","Matematika"]},{t:"Kelas",i:["Privat 1-on-1","Semi Privat","Reguler"]},{t:"Lainnya",i:["FAQ","Portal Orang Tua","Kebijakan Privasi"]}].map(col=><div key={col.t} style={{flex:"1 1 100px"}}><h4 style={{fontFamily:fh,fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.45)",marginBottom:12,textTransform:"uppercase",letterSpacing:0.5}}>{col.t}</h4>{col.i.map(item=><div key={item} style={{fontFamily:fb,fontSize:12,color:"rgba(255,255,255,0.3)",marginBottom:8}}>{item}</div>)}</div>)}</div><div style={{borderTop:"1px solid rgba(255,255,255,0.05)",paddingTop:14,textAlign:"center"}}><p style={{fontFamily:fb,fontSize:10,color:"rgba(255,255,255,0.15)"}}>© 2026 EduKazia. Dibuat dengan ❤️ untuk pelajar Indonesia.</p></div></W></footer>;}
function WAFloat(){return <a href={WA} target="_blank" rel="noreferrer" style={{position:"fixed",bottom:20,right:20,width:52,height:52,borderRadius:14,background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",animation:"waPulse 2s ease-in-out infinite",zIndex:999}}><WAIcon size={24}/></a>;}

export default function KursusMandarin(){
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
