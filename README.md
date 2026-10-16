# natalie. — portfolio

Personal portfolio for Natalie Rodriguez-Jackson. Plain HTML, CSS, and JavaScript: no build step, no dependencies. Hosted on GitHub Pages.

## What's where

```
index.html                 Homepage (all sections)
writing/index.html         "Writing & Lab" listing page with filters
writing/<slug>.html        One file per post
writing/_template.html     Copy this to start a new post
assets/css/site.css        All styles
assets/js/site.js          All behavior (clock, typing effect, skill bars, journey tunnel, post cards, contact form)
assets/js/posts.js         The list of posts shown on the site
assets/js/demos/           Scripts for interactive demos inside posts
assets/img/                Photos and images
```

## Preview locally

From this folder, run:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening `index.html` directly also mostly works.)

## Common edits

**Add your photos.** Save them as `assets/img/headshot.jpg` (hero, portrait) and `assets/img/about.jpg` (About card, portrait). Until they exist, a placeholder shows.

**Update links and email.** Search `index.html` for `TODO`: LinkedIn URL and handle, public email. GitHub links point to `natalie-jackson`.

**Edit the journey chapters.** In `assets/js/site.js`, find `const chapters = [` under "Journey tunnel".

**Edit skill bars.** In `assets/js/site.js`, find `const sets = {` under "Expertise bars".

**Make the contact form send email.** Create a free form at https://formspree.io, then paste its endpoint into `formEndpoint` at the top of `assets/js/site.js`.

## Add a post (essay, article, or AI tool)

1. Copy `writing/_template.html` to `writing/my-new-post.html` and write the post.
2. Add an entry at the top of `window.POSTS` in `assets/js/posts.js`:
   ```js
   { slug: "my-new-post", type: "essay", status: "live",
     title: "My new post", excerpt: "One or two sentences.",
     date: "2026-11", read: "5 min" }
   ```
   - `type`: `essay`, `article`, or `tool`
   - `status`: `live` (clickable) or `soon` (shows as "Coming soon")
   - add `demo: true` if people can try something in the post
3. Commit and push. The homepage shows the 6 newest; `writing/` shows all.

## Deploy

GitHub Pages: repo **Settings → Pages → Deploy from a branch → `main` / root**. Every push to `main` updates the live site within a minute or two.
