# Natalie Rodriguez-Jackson — portfolio

**Live at [natalierodriguezjackson.com](https://natalierodriguezjackson.com)**

This is my personal portfolio. I built it with plain HTML, CSS, and JavaScript: no build step, no frameworks, no dependencies. It's hosted for free on GitHub Pages, with a custom domain from Namecheap.

I'm not a full-time front-end engineer. I'm a program and product ops person who used to write production Rails and Python. I built this site the way I'd run any project: start from a reference, set up the tools, ship a first version fast, then iterate in small changes. I paired with Claude (in the Claude app and in Claude Code) for most of the build. This README covers how I did it, so you can too.

---

## How I built it

### 1. Started from a reference
I found a portfolio I liked and used its structure as a starting point: a big-name hero, an about section with a photo, highlights, a career timeline, and contact. I asked Claude to build a first version from my own background, then rewrote everything in my own words. One rule I kept throughout: **borrow structure, never copy someone else's copy.**

### 2. Set up my tools (one time)
On my Mac:

1. **Git**: checked it was installed with `git --version`, then set my name and email:
   ```
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```
2. **VS Code**: downloaded it and signed in to GitHub from the Accounts icon.
3. **GitHub CLI**: `brew install gh`, then `gh auth login` so I could push without passwords.
4. **Claude Code**: installed it with
   ```
   curl -fsSL https://claude.ai/install.sh | bash
   ```
   then ran `claude` and signed in. I also added the Claude Code extension in VS Code.

One thing I learned: only run `claude` **inside a project folder**, never in your whole home folder. It asks whether you trust the folder for a reason.

### 3. Created the repo
```
gh repo create portfolio --public --clone
cd portfolio
claude
```
That created the repo on GitHub, downloaded it to my Mac, and opened Claude Code inside it. I dropped in the site files and asked Claude to "commit and push."

### 4. Turned on GitHub Pages
In the repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / (root) → Save.**

My first visit was a 404 because Pages wasn't switched on yet. After this step, the site went live at `natalie-jackson.github.io/portfolio` within a couple of minutes.

### 5. Iterated, one small change at a time
Most of the work was here. I'd look at the live site, decide what didn't feel like me, and ask for one change at a time:

- Kept my full name on one line in the hero
- Rewrote the intro around what I actually do: getting GTM, product, and engineering aligned, then building the process that makes it stick
- Removed things that didn't fit (a live clock, a contact form, a skills section, a side business)
- Added my real numbers to Highlights and split my GitHub years into separate Journey chapters
- Switched the whole site to **dark + neon**, because the scroll "tunnel" in the Journey section was my favorite part and the rest of the site didn't match it
- Renamed my AI tool to **Signal Match** and added a working in-browser demo
- Made the hobbies personal (hi, Rainbow)

After each change: commit, push, refresh.

### 6. Bought a custom domain
I bought `natalierodriguezjackson.com` on **Namecheap** (about $10–15/year for a .com), then:

1. **Namecheap → Domain List → Manage → Advanced DNS.** I deleted the default parking records and added:

   | Type | Host | Value |
   |---|---|---|
   | A Record | @ | 185.199.108.153 |
   | A Record | @ | 185.199.109.153 |
   | A Record | @ | 185.199.110.153 |
   | A Record | @ | 185.199.111.153 |
   | CNAME Record | www | `natalie-jackson.github.io.` |

2. **Verified the domain on GitHub** (profile **Settings → Pages → Add a domain**). GitHub gave me a TXT record to add in Namecheap. In the **Host** field, enter only the part before your domain (`_github-pages-challenge-yourusername`), because Namecheap adds the domain for you.
3. **Repo Settings → Pages → Custom domain**: typed the domain and clicked **Save**. This is the step I missed at first: the DNS was perfect, but the site still showed a 404 until the domain was saved here.
4. Ticked **Enforce HTTPS** once the DNS check passed.
5. Ran `git pull`, because saving the domain makes GitHub add a `CNAME` file to the repo.

---

## How it's organized

```
index.html                 Homepage (every section)
writing/index.html         The full Projects page, with filters
writing/<slug>.html        One page per post or project
writing/_template.html     The template I copy to start a new post
assets/css/site.css        All styles (colors and fonts are tokens at the top)
assets/js/site.js          All behavior: typing effect, journey tunnel, project cards
assets/js/posts.js         The list of posts shown on the site
assets/js/demos/           Scripts for interactive demos (like Signal Match)
assets/img/                Photos
CLAUDE.md                  Notes that tell Claude Code how this project works
CNAME                      My custom domain (GitHub manages this)
```

I kept everything in one stylesheet and one main script on purpose, so there's only one place to look when something needs changing.

## How I make changes now

1. `cd ~/portfolio && claude`
2. Ask for the change in plain English, like "update my Highlights" or "add a new project post about X"
3. Review what Claude changed, then: "commit and push"
4. Refresh the site a minute or two later

`CLAUDE.md` is what makes this work smoothly. It tells Claude Code the site's structure, design rules, and my preferences (for example: no copying other people's wording, keep my name on one line), so I don't have to repeat them.

**Caching tip:** after changing CSS or JS, browsers sometimes show the old version. I fixed that by adding a version number to each file link (`site.css?v=11`) and bumping it whenever those files change. Claude Code does this automatically because it's in `CLAUDE.md`.

## How I add a post

1. Copy `writing/_template.html` to `writing/my-new-post.html` and write it.
2. Add an entry at the top of `window.POSTS` in `assets/js/posts.js`:
   ```js
   { slug: "my-new-post", type: "essay", status: "live",
     title: "My new post", excerpt: "One or two sentences.",
     date: "2026-11", read: "5 min" }
   ```
   - `type`: `essay` (shows as "Thoughts"), `article`, or `tool` (shows as "AI Tool")
   - `status`: `live` (clickable) or `soon` (shows as "Coming soon")
   - `demo: true` if readers can try something in the post
3. Commit and push. The homepage shows the 6 newest; the Projects page shows all of them.

## Running it locally

```
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Using this for your own site

Go for it. These are the parts that are specific to me:

- **Photos:** `assets/img/headshot.jpg` and `assets/img/about.jpg` (portrait). A placeholder shows if they're missing.
- **Copy and links:** everything in `index.html`, plus my LinkedIn (`/in/natalierj`), email, and GitHub username (`natalie-jackson`).
- **Journey:** `const chapters = [` in `assets/js/site.js`.
- **Posts:** my files in `writing/` and their entries in `assets/js/posts.js`.
- **Domain:** delete the `CNAME` file, or replace it with your own domain.

Please write your own words rather than reusing mine. A link back is always appreciated.
