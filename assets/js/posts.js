/* =========================================================
   Writing & Lab — the list of posts.
   Add a new post by copying writing/_template.html to
   writing/<slug>.html and adding an entry here (newest first).

   type:   "essay" | "article" | "tool"
   status: "live"  -> card links to the post
           "soon"  -> card shows as "Coming soon" (not clickable)
   demo:   true if the post includes something people can try
   ========================================================= */
window.POSTS = [
  {
    slug: "matchy-matchy",
    type: "tool",
    status: "live",
    title: "Matchy Matchy: matching customer feedback to issues you already know about",
    excerpt: "Semantic matching that pairs incoming feedback with existing issues, so duplicates collapse and new signal stands out. Includes a small demo you can run in your browser.",
    date: "2026-10",
    read: "4 min",
    demo: true
  },
  {
    slug: "feedback-sla",
    type: "article",
    status: "soon",
    title: "From 52% to 92%: automating a feedback SLA",
    excerpt: "How the High Priority Feedback system moved from manual triage to automated routing with GitHub Actions, Python, and Salesforce/Gainsight.",
    date: "2026-11",
    read: "6 min"
  },
  {
    slug: "model-gating",
    type: "essay",
    status: "soon",
    title: "Gating AI capabilities without stalling the people who ship them",
    excerpt: "What running Model Gating and the Limited Access Framework taught me about getting legal, Responsible AI, and engineering to say yes together.",
    date: "2026-11",
    read: "7 min"
  }
];
