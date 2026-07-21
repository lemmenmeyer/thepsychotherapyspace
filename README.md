# The Psychotherapy Space — Website

Static website for The Psychotherapy Space (Dr. María del Carmen Gutierrez, PhD).
Built as plain HTML/CSS/JS — no build step, no framework, no dependencies.

## Structure

- `index.html` — Home (animated dandelion hero, specialties grid, office maps)
- `about.html` — About Dr. Gutierrez
- `individual-therapy.html`, `couples-therapy.html`, `emdr-therapy.html` — Services
- `therapy-for-anxiety.html`, `therapy-for-depression.html`, `trauma-therapy.html`, `eating-disorder-therapy.html`, `relationship-issues.html`, `life-transitions.html` — Specialty pages (SEO pillar pages with FAQ schema)
- `blog.html` + `blog-*.html` — Blog index and articles
- `faq.html`, `contact.html`
- `sitemap.xml`, `robots.txt` — SEO
- `assets/` — source images (logo originals, portrait, photos)
- `.nojekyll` — tells GitHub Pages to serve files as-is

Note: each page is intentionally **self-contained** (styles, scripts, logo and portrait embedded) so any page renders correctly standalone. Stock photography is hotlinked from Pexels' CDN (free commercial license, no attribution required).

## Deploying with GitHub Pages

1. Create an empty repository on GitHub (no README/gitignore — this repo already has them)
2. From this folder:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / root → Save**
4. The site goes live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two
5. Custom domain: add it under Settings → Pages → Custom domain, and point your DNS per GitHub's instructions

## Before going to production — checklist

- [ ] **Replace `https://YOUR-DOMAIN.com`** across all files with the real domain (canonical URLs, Open Graph, sitemap, robots, schema)
- [ ] **Contact form backend** — the form is visual-only; connect Formspree/Netlify Forms or similar, or it won't send
- [ ] **Hero video (optional)** — the home hero currently uses the animated dandelion; if switching to a video, commit the file here and reference it locally
- [ ] **Review draft copy** — everything marked *[Draft — for review]* needs Dr. Gutierrez's clinical sign-off (accordions on several pages + both blog articles)
- [ ] **Privacy Policy & Terms** — footer links are placeholders; a therapy practice site should have a real privacy policy (especially with a contact form)
- [ ] Consider downloading hotlinked Pexels images into `assets/` for full independence

## License notes

- Logo & portrait: property of the practice
- Stock photos: Pexels license (free commercial use)
- Do **not** reuse the dandelion video from the old Squarespace site — it is an unlicensed watermarked iStock/Getty preview
