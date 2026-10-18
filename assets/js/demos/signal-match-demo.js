/* =========================================================
   Signal Match, sample edition.
   Scores new feedback against a small set of fictional issues
   using TF-IDF word overlap plus a few synonyms. The real
   system uses embeddings; this keeps the demo in-browser.
   ========================================================= */
(function(){
  const root = document.getElementById("signal-match"); if(!root) return;

  const ISSUES = [
    {id:"#1042", title:"SSO sign-in redirects back to the login page", body:"Users signing in through Okta or Azure AD single sign-on get redirected to the login screen again in a loop."},
    {id:"#1057", title:"Duplicate notifications for a single mention", body:"When someone mentions a user, the user receives the same email and push notification twice."},
    {id:"#1063", title:"Mobile app crashes when uploading large images", body:"The iOS and Android app closes unexpectedly when attaching photos or large image files."},
    {id:"#1071", title:"Search is slow on large projects", body:"Search results take a long time to load and sometimes time out in projects with many files."},
    {id:"#1088", title:"CSV export drops accented and non-English characters", body:"Exported spreadsheets show garbled text for names with accents, Spanish, or other non-English characters."},
    {id:"#1094", title:"Billing page shows the wrong currency for EU accounts", body:"Customers in Europe see prices and invoices in US dollars instead of euros."},
    {id:"#1102", title:"Dark mode text is unreadable in settings", body:"In dark theme, the settings panel shows dark gray text on a black background."},
    {id:"#1110", title:"API rate limit errors give no retry guidance", body:"The API returns 429 too many requests errors without a retry-after header or documentation."}
  ];

  const SAMPLES = [
    "Every time I log in with Okta it just dumps me back on the sign in screen",
    "I keep getting two emails whenever a teammate @'s me",
    "The app dies on my phone when I try to attach pictures",
    "Can you add a way to schedule reports for Monday mornings?"
  ];

  // Light synonym map so different wording can still meet in the middle.
  const SYN = {
    log:"login", logged:"login", signin:"login", sign:"login", "sign-in":"login",
    dies:"crash", die:"crash", crashes:"crash", closes:"crash", quits:"crash",
    pictures:"image", picture:"image", photos:"image", photo:"image", images:"image", pics:"image",
    phone:"mobile", iphone:"mobile", android:"mobile", ios:"mobile",
    attach:"upload", attaching:"upload", uploading:"upload",
    emails:"notification", email:"notification", notifications:"notification", alerts:"notification", pings:"notification",
    two:"duplicate", twice:"duplicate", double:"duplicate", duplicates:"duplicate",
    "@'s":"mention", tag:"mention", tags:"mention", tagged:"mention", mentions:"mention",
    slow:"performance", lag:"performance", laggy:"performance", forever:"performance", timeout:"performance",
    euro:"currency", euros:"currency", dollars:"currency", usd:"currency",
    invoice:"billing", invoices:"billing", charged:"billing", bill:"billing", europe:"eu", france:"eu", germany:"eu", spain:"eu",
    garbled:"character", accents:"character", accented:"character", characters:"character",
    dark:"darkmode", theme:"darkmode", unreadable:"readable", "can't":"readable",
    "429":"ratelimit", throttled:"ratelimit", limit:"ratelimit",
    screen:"page", loop:"redirect", redirected:"redirect", back:"redirect", dumps:"redirect", kicks:"redirect"
  };
  const STOP = new Set("a an the and or but i me my we our you your it its is are was were be been to of in on at for with when whenever every time just so this that there they them as by from into get gets got can could would should do does did not no yes if then than also very really keep keeps try trying".split(" "));

  const tokens = text => text.toLowerCase()
    .replace(/[^a-z0-9@'\- ]+/g," ")
    .split(/\s+/).filter(Boolean)
    .map(w => SYN[w] || w)
    .map(w => w.length > 4 ? w.replace(/(ing|ed|es|s)$/,"") : w)
    .filter(w => w.length > 1 && !STOP.has(w));

  const docs = ISSUES.map(i => tokens(i.title + " " + i.title + " " + i.body));
  const df = {};
  docs.forEach(d => new Set(d).forEach(w => df[w] = (df[w]||0) + 1));
  const idf = w => Math.log((docs.length + 1) / ((df[w]||0) + 1)) + 1;
  const vec = toks => { const v = {}; toks.forEach(w => v[w] = (v[w]||0) + 1); Object.keys(v).forEach(w => v[w] *= idf(w)); return v; };
  const norm = v => Math.sqrt(Object.values(v).reduce((s,x)=>s+x*x,0)) || 1;
  const cos = (a,b) => { let s=0; for(const w in a) if(b[w]) s += a[w]*b[w]; return s/(norm(a)*norm(b)); };
  const issueVecs = docs.map(vec);

  const fb = root.querySelector("#fb"), out = root.querySelector("#results");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

  function run(){
    const text = fb.value.trim();
    if(!text){ out.innerHTML = '<div class="verdict">Type or pick some feedback first.</div>'; return; }
    const q = vec(tokens(text));
    const ranked = ISSUES.map((iss,k)=>({...iss, score:cos(q, issueVecs[k])})).sort((a,b)=>b.score-a.score).slice(0,3);
    const best = ranked[0].score;
    const verdict = best >= 0.25
      ? `Likely duplicate of <b>${ranked[0].id}</b>. Add it to that issue and count it toward its volume.`
      : best >= 0.12
        ? `Possible match with <b>${ranked[0].id}</b>. Worth a quick human look.`
        : "No strong match. This looks like new signal, so open a new issue.";
    out.innerHTML = `<div class="verdict">${verdict}</div>` + ranked.map((r,i)=>{
      const pct = Math.round(Math.min(1, r.score) * 100);
      return `<div class="res${i===0 && best>=0.12 ? " best" : ""}"><span class="id">${r.id}</span><span class="tt">${esc(r.title)}</span><span class="sc">${pct}%</span><span class="meter"><i style="width:${pct}%"></i></span></div>`;
    }).join("");
  }

  const box = root.querySelector("#samples");
  SAMPLES.forEach(s => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = "“" + s + "”";
    b.addEventListener("click", () => { fb.value = s; run(); });
    box.appendChild(b);
  });
  root.querySelector("#run").addEventListener("click", run);
  fb.addEventListener("keydown", e => { if(e.key === "Enter" && (e.metaKey || e.ctrlKey)) run(); });

  // Start in a working state so the demo shows what it does.
  fb.value = SAMPLES[0]; run();
})();
