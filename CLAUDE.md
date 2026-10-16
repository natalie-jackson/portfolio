# Project notes for Claude

Natalie's personal portfolio. Static site on GitHub Pages: plain HTML/CSS/JS, no framework, no build step, no npm. Keep it that way unless she asks otherwise.

## Structure
- `index.html`: homepage. Sections in order: hero, company strip, 01 About, 02 How I help, 03 Highlights, 04 What I offer, 05 Principles, 06 Journey (scroll tunnel), 07 Projects (nav label "Projects"; files live in writing/), 08 Off the clock, 09 Contact. The full name in the hero stays on one line (`white-space:nowrap`). No contact form, no header/footer logo, no live clock.
- `assets/css/site.css`: all styles. Color and font tokens live in `:root` at the top. Reuse existing classes (`.card`, `.btn`, `.btn.or`, `.shead`, `.h2`, `.grid3`, `.kind`, `.prose`, `.demo`) before adding new ones.
- `assets/js/site.js`: all behavior. Each feature is a self-contained IIFE that returns early if its elements are missing, so the file is shared by every page. Journey chapters are a data array in this file.
- `assets/js/posts.js`: `window.POSTS`, the list that renders Projects cards. Newest first.
- `writing/`: `index.html` lists all posts; one HTML file per post; `_template.html` is the starting point for new posts.
- `assets/js/demos/`: one script per interactive demo, loaded only by its post.

## Conventions
- Design: dark + neon to match the Journey tunnel. Black background, dark glass `.card`s, white type, single neon-blue accent `--accent: #6C8CFF` with glow, Inter Tight + JetBrains Mono. Section headers use `<div class="shead"><span><i>/ NN</i>&nbsp;&nbsp;Name</span></div>`. If you add or remove a homepage section, renumber the `/ NN` labels and update the nav.
- Pages in `writing/` use `../` relative paths for assets and homepage links.
- Icons are an inline SVG sprite injected by `site.js`: `<svg class="i"><use href="#i-NAME"/></svg>`. Add new icons to the `s` object in `injectIcons`.
- Writing style for site copy: plain, direct, first person. No invented metrics, employers, or claims; ask Natalie if a fact is missing.

## Adding a post
1. Copy `writing/_template.html` to `writing/<slug>.html`, fill in the title tag, meta description, `.art-meta` line, `.art-title`, `.art-dek`, and the `<article class="prose">` body.
2. Add `{ slug, type: "essay"|"article"|"tool", status: "live"|"soon", title, excerpt, date: "YYYY-MM", read: "N min", demo?: true }` to the top of `window.POSTS`.
3. For a demo, add `assets/js/demos/<slug>-demo.js`, wrap its UI in `<div class="card demo" id="...">`, and load the script after `site.js` in that post only. Demos must run fully in the browser (GitHub Pages has no server).

## Before committing
- Preview with `python3 -m http.server 8000` and check the homepage plus any page you touched, at desktop and phone width.
- Commit with a short message describing the change, then push to `main` (GitHub Pages deploys from there).
- When you change `assets/css/site.css` or any file in `assets/js/`, bump the `?v=N` number on its `<link>`/`<script>` tags in every HTML page, so browsers load the new version instead of a cached one.

- Never copy wording from other people's sites into this one. If Natalie shares an example from another portfolio, adapt the idea in original words.
