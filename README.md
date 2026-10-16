# natalie. — portfolio

This is my personal portfolio site. I built it with plain HTML, CSS, and JavaScript: no build step, no frameworks, no dependencies. It's hosted on GitHub Pages.

If you'd like to use it as a starting point for your own site, go for it. Below is how it's put together and what you'd need to change to make it yours. A link back is always appreciated.

## How I organized it

```
index.html                 Homepage (all sections)
writing/index.html         "Writing & Lab" listing page with filters
writing/<slug>.html        One file per post
writing/_template.html     The template I copy to start a new post
assets/css/site.css        All styles
assets/js/site.js          All behavior (typing effect, journey tunnel, post cards)
assets/js/posts.js         The list of posts shown on the site
assets/js/demos/           Scripts for interactive demos inside posts
assets/img/                Photos and images
```

I kept everything in one stylesheet and one main script on purpose, so there's only one place to look when something needs changing.

## Running it locally

From the project folder, I run:

```
python3 -m http.server 8000
```

Then I open http://localhost:8000. Opening `index.html` directly in a browser mostly works too.

## Making it your own

If you fork this, these are the spots that are specific to me:

**Photos.** Mine live at `assets/img/headshot.jpg` (the hero, portrait orientation) and `assets/img/about.jpg` (the About card, also portrait). Swap in your own with the same file names. If the files are missing, a placeholder shows instead.

**Links and email.** In `index.html`, search for `linkedin.com/in/natalierj` and `natalierodriguezjackson@gmail.com`. The GitHub links point to my username, `natalie-jackson`, so search for that and replace it with yours.

**Journey chapters.** My career story lives in `assets/js/site.js` under "Journey tunnel", in `const chapters = [`. Each chapter is one entry; rewrite them with your own path.

**Posts.** My posts in `writing/` and their entries in `assets/js/posts.js` are my own writing. Clear those out and add yours (see below).

## How I add a post (essay, article, or AI tool)

1. Copy `writing/_template.html` to `writing/my-new-post.html` and write the post.
2. Add an entry at the top of `window.POSTS` in `assets/js/posts.js`:
   ```js
   { slug: "my-new-post", type: "essay", status: "live",
     title: "My new post", excerpt: "One or two sentences.",
     date: "2026-11", read: "5 min" }
   ```
   - `type`: `essay`, `article`, or `tool`
   - `status`: `live` (clickable) or `soon` (shows as "Coming soon")
   - add `demo: true` if readers can try something interactive in the post
3. Commit and push. The homepage shows the 6 newest posts; `writing/` shows all of them.

## How I deploy it

I use GitHub Pages: in the repo, **Settings → Pages → Deploy from a branch → `main` / root**. Every push to `main` updates the live site within a minute or two.
