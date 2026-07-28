# dululu233

Personal site — portfolio + blog. Built with Next.js (App Router), plain
Markdown for posts, no database.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) installed (18+ is fine).

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Edit any file and the page reloads automatically.

## 2. Write a new post

Add a new `.md` file to `content/blog/`, following the pattern of the
existing ones:

```markdown
---
title: "Your post title"
date: "2026-08-01"
tag: "9 to 5"     # 9 to 5 | tinkering | the rest (or add your own — see below)
excerpt: "One line shown in previews (not currently displayed, but good to have)."
---

Write your post here in plain Markdown.
```

The file name (minus `.md`) becomes the URL, e.g. `content/blog/my-post.md`
becomes `/blog/my-post`.

To add a new tag color, edit `TAG_COLORS` in `lib/posts.ts`.

## 3. Edit the intro / homepage text

- Homepage intro: `app/page.tsx`
- Nav name and links (LinkedIn, GitHub): `app/layout.tsx` — swap the
  placeholder `https://linkedin.com` / `https://github.com` links for your
  real profile URLs.
- Projects list: `app/projects/page.tsx`

## 4. Put it on GitHub

```bash
git init
git add .
git commit -m "initial commit"
```

Then create a new repository on [github.com](https://github.com/new)
(don't initialize it with a README), and push:

```bash
git remote add origin https://github.com/<your-username>/dululu233.git
git branch -M main
git push -u origin main
```

## 5. Deploy on Vercel (free)

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click "Add New Project", select the `dululu233` repo.
3. Leave all settings as default (Vercel auto-detects Next.js) and click Deploy.
4. You'll get a live URL like `dululu233.vercel.app` within a minute.

From then on, every `git push` to `main` auto-deploys.

## 6. Connect your domain (dululu233.com)

1. Buy `dululu233.com` from a registrar (Namecheap, Cloudflare Registrar,
   or similar) if you haven't already.
2. In your Vercel project, go to **Settings → Domains** and add
   `dululu233.com` (and optionally `www.dululu233.com`).
3. Vercel will show you DNS records to add (usually an `A` record or
   `CNAME`) — add those in your registrar's DNS settings.
4. DNS changes can take anywhere from a few minutes to a few hours to
   propagate. Vercel's dashboard will show a green check once it's live.

## Notes

- Posts are plain Markdown rendered through `next-mdx-remote`, so you *can*
  use JSX/components inside posts later if you want, but you don't have to.
- No CMS, no database — every post is a file in `content/blog/`. Committing
  a new file is how you publish.
