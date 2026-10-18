/* =========================================================
   Natalie Rodriguez-Jackson — site scripts
   Every feature checks that its elements exist, so this one
   file works on the homepage and on the writing pages.
   ========================================================= */

/* ---------- Settings you may want to change ---------- */
const SITE = {
  timeZone: "America/New_York",
  typedRoles: ["Program Manager", "TPM", "Product Ops Lead", "Former Engineer", "Builder"]
};

/* ---------- Icon sprite (referenced as <use href="#i-name">) ---------- */
(function injectIcons(){
  const s = {
    li:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    gh:'<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    arrow:'<path d="M7 17 17 7M7 7h10v10"/>',
    right:'<path d="M5 12h14M13 6l6 6-6 6"/>',
    up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
    cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
    pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    cam:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    flow:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a3 3 0 0 0 3 3h6"/>',
    msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>',
    code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    gear:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    brief:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    frame:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    wine:'<path d="M8 22h8M12 15v7M17 2H7l-.5 5a5.5 5.5 0 0 0 11 0z"/>',
    plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    pulse:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    home:'<path d="m3 10 9-7 9 7v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    paw:'<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="4" cy="8" r="2"/><path d="M8 14.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 1.5 1.5 2 1.5 3.5 0 2-2 3-4 2.5-1-.3-2-.3-3 0-2 .5-4-.5-4-2.5 0-1.5 1.5-2 1.5-3.5z"/>',
    book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'
  };
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("aria-hidden","true");
  svg.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
  svg.innerHTML = Object.entries(s).map(([k,v])=>`<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join("");
  document.body.prepend(svg);
})();

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ---------- Keep the full name on one line, sized to fill the width ---------- */
(function(){
  const h = $(".big"); if(!h) return;
  const fit = () => {
    h.style.fontSize = "100px";
    const size = 100 * h.clientWidth / h.scrollWidth * 0.995;
    h.style.fontSize = Math.max(20, Math.min(132, size)) + "px";
  };
  fit();
  addEventListener("resize", fit);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();

/* ---------- Photos: hide placeholder once the image loads ---------- */
$$(".photo img").forEach(img=>{
  const ph = img.parentElement.querySelector(".ph");
  const ok = () => { if(ph) ph.hidden = true; };
  const bad = () => img.remove();
  if(img.complete && img.naturalWidth) ok(); else { img.addEventListener("load", ok); img.addEventListener("error", bad); }
  if(img.complete && !img.naturalWidth) bad();
});

/* ---------- "I'm a ..." typewriter ---------- */
(function(){
  const el = $("#typed"); if(!el) return;
  const words = SITE.typedRoles;
  if(reduceMotion){ el.textContent = words[0]; return; }
  let w=0, c=0, del=false;
  (function step(){
    const word = words[w];
    if(!del){ c++; el.textContent = word.slice(0,c); if(c===word.length){ del=true; return setTimeout(step,1600); } }
    else { c--; el.textContent = word.slice(0,c); if(c===0){ del=false; w=(w+1)%words.length; } }
    setTimeout(step, del?45:85);
  })();
})();

/* ---------- Writing & Lab cards (homepage + writing/index.html) ---------- */
(function(){
  const grid = $("[data-posts]"); if(!grid || !window.POSTS) return;
  const base = grid.dataset.base || "";               // "" on homepage, "../" on writing pages
  const limit = parseInt(grid.dataset.limit || "0",10);
  const labels = {essay:"Thoughts", article:"Article", tool:"AI Tool"};
  const fmt = d => { const [y,m] = d.split("-"); return new Date(+y, (+m||1)-1).toLocaleString("en-US",{month:"short",year:"numeric"}); };
  const card = p => {
    const live = p.status === "live";
    const inner = `
      <div class="tp"><span class="kind">${labels[p.type]||p.type}</span><span class="date">${live ? fmt(p.date) : "Coming soon"}</span></div>
      <h5>${esc(p.title)}</h5>
      <p>${esc(p.excerpt)}</p>
      <div class="bt">
        <span class="meta">${p.demo ? '<span class="live">Live demo</span><span>·</span>' : ""}<span>${esc(p.read||"")} read</span></span>
        ${live ? '<span class="go"><svg class="i"><use href="#i-arrow"/></svg></span>' : ""}
      </div>`;
    return live
      ? `<a class="card post" href="${base}writing/${p.slug}.html" data-type="${p.type}">${inner}</a>`
      : `<div class="card post soon" data-type="${p.type}">${inner}</div>`;
  };
  let filter = "all";
  const render = () => {
    let list = window.POSTS.filter(p => filter==="all" || p.type===filter);
    if(limit) list = list.slice(0, limit);
    grid.innerHTML = list.length ? list.map(card).join("") : '<div class="empty">Nothing here yet. Check back soon.</div>';
  };
  const tabs = $$("[data-filter]");
  tabs.forEach(t=>t.addEventListener("click",()=>{
    filter = t.dataset.filter;
    tabs.forEach(x=>x.setAttribute("aria-selected", x===t));
    render();
  }));
  render();
})();

/* ---------- Journey tunnel ---------- */
(function(){
  const sec = $("#resume"); if(!sec) return;
  const chapters = [
    {theme:"AI Governance",jump:"AI Gov",color:"#5C89FF",when:"GitHub / Microsoft · 2022–2026",co:"AI Governance",role:"Senior Program Manager · CoreAI",where:"Model Gating · Limited Access Framework",desc:"Led Model Gating for Microsoft Copilot: 5 engineers across 4 time zones and 25+ stakeholders aligned on one decision framework. Built the Limited Access Framework from a blank slate, with three parallel workstreams across Legal, Responsible AI, Engineering, and Risk.",tags:["Copilot","Model Gating","LAF","RACI"]},
    {theme:"Feedback Ecosystem",jump:"Feedback",color:"#F2A33A",when:"GitHub / Microsoft · 2022–2026",co:"Feedback",role:"Senior Program Manager · Feedback ecosystem",where:"HPF · Signal Match · Unwrap",desc:"Built High Priority Feedback from scratch, connecting 1,000+ enterprise signals to roadmaps and $508M+ in nominated ARR. Automated it to lift SLA attainment from 52% to 92%, shipped 170 priority changes in 18 months, and built Signal Match, which has matched 6,000+ issues.",tags:["HPF","Automation","AI","Dashboards"]},
    {theme:"Community",jump:"Community",color:"#3DD68C",when:"GitHub / Microsoft · 2022–2026",co:"Community",role:"Senior Program Manager · Community program",where:"GitHub Community Discussions",desc:"Grew monthly engaged community users from 5,000 to 48,000, migrated the community from Discord to GitHub Community Discussions, and doubled the Community Events program in one year with Revenue, EPD, and Operations.",tags:["Community","Events","Migration"]},
    {theme:"Shipping Outcomes",jump:"Product",color:"#B07CFF",when:"Chapter three",co:"Product & Program",role:"Product & Program Management",where:"Betterment → GitHub",desc:"Moved from shipping code to shipping outcomes across teams.",tags:["Strategy","Delivery"]},
    {theme:"Builder Era",jump:"Engineer",color:"#2EC5D3",when:"Chapter two",co:"Betterment",role:"Software Engineer",where:"Fintech",desc:"Built product in Ruby on Rails, Python, and GraphQL.",tags:["Rails","Python","GraphQL"]},
    {theme:"Customer First",jump:"Support",color:"#FF6B6B",when:"Where it started",co:"Betterment",role:"Product Support",where:"Fintech",desc:"Learned the product from the customer side and which problems keep coming back.",tags:["Support","VoC"]}
  ];
  sec.style.height = (chapters.length * 100 + 100) + "vh";
  const stage = $(".stage",sec), cv = $("#tunnel"), ctx = cv.getContext("2d");
  const chapsEl = $("#chaps"), prog = $("#jprog"), jump = $("#jump");
  $("#jtotal").textContent = String(chapters.length).padStart(2,"0");
  chapters.forEach((c,i)=>{
    const d = document.createElement("div"); d.className = "chap";
    d.innerHTML = `<div class="in"><div class="when">${c.when}</div><h3>${c.co}</h3><div class="role">${c.role}</div><div class="meta">${c.where}</div><p class="desc">${c.desc}</p><div class="tg">${c.tags.map(t=>`<span>${t}</span>`).join("")}</div></div>`;
    chapsEl.appendChild(d);
    const s = document.createElement("span"); s.innerHTML = "<i></i>"; prog.appendChild(s);
    const b = document.createElement("button"); b.type="button"; b.textContent = c.jump || c.co;
    b.addEventListener("click",()=>window.scrollTo({top: sec.offsetTop + (i+.5)*(sec.offsetHeight-innerHeight)/chapters.length, behavior:"smooth"}));
    jump.appendChild(b);
  });
  const chEls=[...chapsEl.children], bars=$$("i",prog), jbs=$$("button",jump);
  const hex = h => [1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
  let cur=-1, rgb=hex(chapters[0].color), target=rgb.slice(), speed=0, lastY=scrollY, z=0;
  function setChapter(i){
    if(i===cur) return; cur=i; const c=chapters[i]; target=hex(c.color);
    sec.style.setProperty("--jc", c.color);
    $("#jtheme").textContent = c.theme; $("#jnum").textContent = String(i+1).padStart(2,"0");
    chEls.forEach((e,k)=>e.classList.toggle("on",k===i)); jbs.forEach((b,k)=>b.classList.toggle("on",k===i));
  }
  function onScroll(){
    const r = sec.getBoundingClientRect(), total = sec.offsetHeight - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top/total)), n = chapters.length, f = p*n;
    setChapter(Math.min(n-1, Math.floor(f)));
    bars.forEach((b,k)=>b.style.width = Math.max(0,Math.min(1,f-k))*100+"%");
    speed += Math.abs(scrollY-lastY)*.02; lastY = scrollY;
  }
  addEventListener("scroll", onScroll, {passive:true}); onScroll(); setChapter(0);
  const stars = Array.from({length:70},()=>({x:Math.random()*2-1,y:Math.random()*-1,z:Math.random()}));
  function resize(){ const dpr=Math.min(2,devicePixelRatio||1); cv.width=stage.clientWidth*dpr; cv.height=stage.clientHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
  addEventListener("resize", resize); resize();
  let visible = true;
  if("IntersectionObserver" in window) new IntersectionObserver(e=>visible=e[0].isIntersecting).observe(sec);
  function frame(){
    requestAnimationFrame(frame);
    if(!visible) return;
    const W=stage.clientWidth, H=stage.clientHeight, cx=W/2, cy=H*.48;
    rgb = rgb.map((v,i)=>v+(target[i]-v)*.06);
    const col = a => `rgba(${rgb[0]|0},${rgb[1]|0},${rgb[2]|0},${a})`;
    speed *= .92; z = (z + (reduceMotion ? 0 : .004 + speed*.01)) % 1;
    ctx.fillStyle="#000"; ctx.fillRect(0,0,W,H);
    const g = ctx.createRadialGradient(cx,cy,0,cx,cy,Math.max(W,H)*.6); g.addColorStop(0,col(.18)); g.addColorStop(1,"rgba(0,0,0,0)"); ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    const N=18; ctx.lineCap="round";
    for(let k=N;k>=1;k--){
      const d=(k-z)/N, s=1/(d*d*3+.04), half=Math.min(W*.55,s*28), hgt=s*22, a=Math.min(1,1.25-d);
      ctx.strokeStyle=col(a*.9); ctx.lineWidth=Math.max(.6,s*.12); ctx.shadowColor=col(1); ctx.shadowBlur=10;
      [-1,1].forEach(side=>{ const x=cx+side*half; if(x<-20||x>W+20) return; ctx.beginPath(); ctx.moveTo(x,cy-hgt); ctx.lineTo(x,cy+hgt*.9); ctx.stroke(); });
      ctx.shadowBlur=0; const dy=cy+s*16, dw=Math.max(1,s*.25);
      if(dy<H+20){ ctx.fillStyle=col(a); ctx.fillRect(cx-dw/2,dy,dw,Math.max(1,s*.9)); }
    }
    ctx.strokeStyle=col(.35); ctx.lineWidth=1;
    [-1,1].forEach(side=>{ ctx.beginPath(); ctx.moveTo(cx+side*8,cy+10); ctx.lineTo(cx+side*W*.9,H*1.05); ctx.stroke(); });
    stars.forEach(st=>{
      st.z -= reduceMotion ? 0 : .002 + speed*.004;
      if(st.z<=.02){ st.z=1; st.x=Math.random()*2-1; st.y=Math.random()*-1; }
      const sx=cx+st.x/st.z*W*.12, sy=cy+st.y/st.z*H*.12, r=Math.max(.5,(1-st.z)*2.4);
      if(sx>0&&sx<W&&sy>0&&sy<H){ ctx.fillStyle=col(1-st.z); ctx.beginPath(); ctx.arc(sx,sy,r,0,7); ctx.fill(); }
    });
  }
  frame();
})();

/* ---------- Highlight the nav link for the section in view ---------- */
(function(){
  const links = $$(".pill a"); if(!links.length || !("IntersectionObserver" in window)) return;
  const map = new Map(links.filter(a=>a.hash).map(a=>[a.hash.slice(1),a]));
  const io = new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ links.forEach(l=>l.classList.remove("on")); map.get(e.target.id)?.classList.add("on"); }
  }),{rootMargin:"-45% 0px -50% 0px"});
  map.forEach((_,id)=>{ const s=document.getElementById(id); if(s) io.observe(s); });
})();

/* ---------- Copy email ---------- */
(function(){
  const b = $("#copy"); if(!b) return;
  b.addEventListener("click",()=>{
    const t = $("#email");
    const fb = () => { const r=document.createRange(); r.selectNodeContents(t); const s=getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent="Selected"; };
    try { navigator.clipboard.writeText(t.textContent).then(()=>{ b.textContent="Copied"; setTimeout(()=>b.textContent="Copy",1500); }, fb); } catch(_) { fb(); }
  });
})();

