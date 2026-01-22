# NITROCOOL — Static Website

Clean, technical, minimalist multi-page website for **NITROCOOL** (rapid, on-demand personal cooling using controlled CO₂ expansion cooling). Designed for GitHub Pages + custom domain.

## Project goals
- Explain the idea clearly (non-overwhelming)
- Build engineering credibility (serious, not gimmicky)
- Convert interest into action (Contact / Partnerships)

## Completed features
- Multi-page static site (no backend required)
- Light blue / black / white brand styling
- Responsive navigation (mobile menu)
- Homepage with hero, benefits, comparison table, merch teaser, and CTA
- How it Works page with step-by-step + expandable science accordion + safety overview
- Use Cases page (Athletes, Outdoor workers, Emergency response, Military/tactical)
- Technology & Engineering page (design philosophy, modularity, direction)
- Research & Validation page (planned testing + collaboration goals)
- About page (Founder section: Carson Hull)
- IP & Legal page (disclaimer + “patent pending” placeholder)
- Contact page with:
  - Email: `hello@nitrocool.cool`
  - Instagram: `@nitro.cool`
  - Contact form wired for **Google Forms** (keeps the same on-site visual style)

## Entry URIs (site pages)
- `/index.html` — Home
- `/pages/how-it-works.html` — How it works
- `/pages/use-cases.html` — Use cases
- `/pages/technology.html` — Technology & Engineering
- `/pages/research.html` — Research & Validation
- `/pages/about.html` — About
- `/pages/ip-legal.html` — IP & Legal
- `/pages/contact.html` — Contact / Updates

## Assets you must add (logo/photos)
This project references these files. Add your real uploads to these paths:

- `images/logo.png` (your logo)
- `images/device-1.jpg` (hero device photo/render)
- `images/merch-1.jpg` (shirt photo)
- `images/merch-2.jpg` (shirt photo)
- `images/merch-3.jpg` (shirt photo)
- `images/og-cover.jpg` (social share preview)

> If an image is missing, the UI shows a clean placeholder instead of breaking.

## Features not yet implemented
- Google Forms action URL + entry IDs still need to be filled in (placeholders in `pages/contact.html`)
- Newsletter / early access email capture integration
- Analytics (Plausible/GA)
- Real merch checkout / store links

## Recommended next steps
1. Add real image assets into the `/images` folder using the filenames above.
2. Google Forms:
   - The form action URL is already set in `pages/contact.html`.
   - You still must replace the placeholder field IDs (`entry.1111111111`, etc.) with the real IDs from your Google Form.
   - See `assets/google-form-setup.md`.
   - If Google Forms is blocked by your needs, switch to **Formspree** (still works on GitHub Pages).
3. Add a simple Updates/Newsletter signup (Mailchimp/ConvertKit/Google Form).
4. Replace “Patent status TBD” on `/pages/ip-legal.html` when filings are made.

## GitHub Pages deployment (with Namecheap custom domain: `nitrocool.cool`)

### 1) Create a GitHub repo
- Example: `nitrocool-site`
- Push this project’s files to the repo root.

### 2) Enable GitHub Pages
- Go to **Settings → Pages**
- **Source**: “Deploy from a branch”
- **Branch**: `main` (or `master`) and folder `/root`
- Save

After a minute, GitHub will show your Pages URL.

### 3) Set your custom domain in GitHub
- In **Settings → Pages → Custom domain** set: `nitrocool.cool`
- Enable **Enforce HTTPS** (after DNS is correct)

GitHub will create a `CNAME` file automatically.

### 4) Configure DNS in Namecheap
In Namecheap **Domain List → Manage → Advanced DNS**:

**Option A (recommended): A + CNAME**
- `A` record:
  - Host: `@`
  - Value: `185.199.108.153`
- `A` record:
  - Host: `@`
  - Value: `185.199.109.153`
- `A` record:
  - Host: `@`
  - Value: `185.199.110.153`
- `A` record:
  - Host: `@`
  - Value: `185.199.111.153`
- `CNAME` record:
  - Host: `www`
  - Value: `<your-github-username>.github.io`

**Option B: ALIAS/ANAME** (if Namecheap supports it for your plan)
- Point apex `@` to the GitHub Pages domain.

### 5) Wait for DNS + HTTPS
- DNS can take minutes to 24–48 hours.
- Once GitHub verifies, toggle **Enforce HTTPS**.

## Public URLs
- Production (intended): https://nitrocool.cool/
- Instagram: https://instagram.com/nitro.cool

## Paper / documentation
- Paper URL (PDF): https://www.genspark.ai/api/files/s/FCwSc3Zg
  - Saved locally as: `assets/Paper_NITROCOOL-Final-compressed.pdf`

## Data models / storage
- No database.
- No REST tables.
- Static HTML/CSS/JS only.

---

If you want, I can wire the contact form to a free service (Google Forms / Formspree) so submissions go to `hello@nitrocool.cool` without relying on the visitor’s email client.
