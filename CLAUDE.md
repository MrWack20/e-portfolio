# CLAUDE.md — Joaquin Hao E-Portfolio

## Project overview

Static HTML/CSS/JS e-portfolio for Joaquin Alec P. Hao (Computer Engineering student, JRU).
Hosted on Vercel via GitHub auto-deploy. No build step — Vercel serves files directly.

- **Live site**: https://e-portfolio-two-eta.vercel.app
- **GitHub**: https://github.com/MrWack20/e-portfolio
- **Vercel project**: joaquin-alec-haos-projects/e-portfolio

---

## File structure

```
/
├── index.html          # Home — hero, stats, selected work, current focus, marquee, CTA
├── about.html          # About — bio, experience accordion, skills, education, interests
├── projects.html       # Projects — timeline, thesis card, hardware grid
├── contact.html        # Contact — terminal form, social links, résumé download
│
├── data/
│   └── portfolio.js    # ★ SINGLE SOURCE OF TRUTH — all content lives here
│
├── scripts/
│   ├── shared.js       # Nav, footer, theme toggle, backdrop, reveal, counters, OST player
│   ├── home.js         # Stats counter, selected projects, focus items
│   ├── about.js        # Bio, experience accordion, skills bars, education, certs, interests
│   ├── projects.js     # Timeline, filters, thesis card, hardware grid
│   └── contact.js      # Contact info render, form submit (mailto)
│
├── styles/
│   ├── tokens.css      # Design tokens — palette, typography, spacing, animations
│   ├── home.css        # Home page styles
│   ├── about.css       # About page styles
│   ├── projects.css    # Projects page styles
│   ├── contact.css     # Contact page styles
│   └── ost.css         # Floating OST music player styles
│
└── assets/
    ├── portrait.jpg            # Profile photo
    ├── Hao_Joaquin_Resume.pdf  # Résumé (download link on home + contact)
    └── music/                  # MP3 files for the OST player
```

---

## The golden rule

**All content updates go in `data/portfolio.js` only.** No HTML edits needed for adding
projects, experience, certs, skills, music, or personal facts. The JS scripts read from
`window.PORTFOLIO` and render everything dynamically.

The only reasons to edit HTML files are structural layout changes (new page sections).

---

## Design system (tokens.css)

- **Font stack**: Space Grotesk (display) · Inter (body) · JetBrains Mono (mono/labels)
- **Dark default** with light toggle (persisted in `localStorage`)
- **Accent**: cyan `var(--accent)` + violet `var(--accent-2)` on dark; reversed on light
- **Motion**: subtle grid + orb backdrop, scroll-reveal `.reveal` class, hover glows
- **Marquee speed**: 160s — intentionally slow/calm

CSS variable names: `--bg`, `--bg-elev`, `--bg-inset`, `--ink`, `--ink-soft`, `--ink-mute`,
`--accent`, `--accent-2`, `--accent-glow`, `--accent-ink`, `--line`, `--line-soft`,
`--font-display`, `--font-sans`, `--font-mono`, `--ease-out`

---

## Deployment workflow

Every `git push` to `master` auto-deploys via Vercel. Standard commit pattern:

```bash
git add <files>
git commit -m "feat|fix|chore: description"
git push
```

Always push after changes — Vercel picks it up within ~30s.

**Never edit files directly on GitHub** — always edit locally and push.

---

## Sub-agents

The following agents handle specific categories of work. Invoke them by name when the task fits.

---

### 🗂 Content Agent

**Trigger**: Adding or updating portfolio content — new project, cert, experience, music track,
personal fact, bio, social link, or stat.

**Only touches**: `data/portfolio.js`

**Patterns**:

Add a project:
```js
{
  slug: "unique-slug",          // used for anchor links
  title: "Project Title",
  period: "Month YYYY",
  blurb: "One-sentence description.",
  highlight: "Key achievement or metric.",
  role: "Your role",
  stack: ["Tech1", "Tech2"],
  bullets: ["What you did...", "..."],
}
```

Add experience:
```js
{
  org: "Company / Event",
  role: "Your title",
  period: "Mon YYYY — Mon YYYY",
  location: "City or Remote",
  summary: "One-line summary.",
  bullets: ["..."],
  tags: ["Tag1", "Tag2"],
}
```

Add a cert:
```js
{ name: "Cert Name", issuer: "Issuer", year: "YYYY" }
```

Add a music track (drop MP3 into `assets/music/` first):
```js
{ title: "Track Name", game: "Source / Game", src: "assets/music/filename.mp3" }
```

Update thesis fields: `title`, `period`, `advisors`, `status`, `blurb`, `topics[]`,
`members.software[]`, `members.hardware[]`, `myContributions[]`

Update hardware projects: `hardwareProjects[]` array — same shape as projects but with a `status` badge.

**Always**: validate JS syntax before committing. Quote all string values. No bare identifiers as values.

---

### 🎨 Design Agent

**Trigger**: Visual changes — new section layout, animation, color tweak, typography,
responsive fix, component styling.

**Touches**: `styles/*.css`, `scripts/shared.js` (player/nav/footer HTML),
page HTML files for structural layout only.

**Rules**:
- Extend `tokens.css` variables; never hardcode hex colors in component CSS.
- All new sections need a `.reveal` class on their top-level element for scroll-in animation.
- Mobile breakpoint: `max-width: 768px`. Compact breakpoint: `max-width: 500px`.
- Futuristic-tech aesthetic — dark, cyan/violet glows, mono labels, Space Grotesk headers.
- Match existing pattern: `eyebrow` → `section-title` → content, inside a `.wrap` container.
- Cache-bust changed CSS with `?v=N` query param on the `<link>` tag if browser caching is an issue.

**New section checklist**:
1. Add HTML stub to the relevant `.html` file
2. Add render function to the relevant `scripts/*.js` file
3. Add data shape to `data/portfolio.js`
4. Add CSS to the relevant `styles/*.css` file
5. Call the render function in `DOMContentLoaded`

---

### 🚀 Deploy Agent

**Trigger**: Any time changes are ready to go live.

**Checks before committing**:
1. `data/portfolio.js` — valid JS? All `src` values quoted? No bare identifiers?
2. Asset paths — do referenced files exist locally?
3. `git status` — only intended files staged?

**Commit format**:
```
feat:  new feature or content
fix:   bug fix or broken syntax
chore: config, deps, tooling
style: visual-only CSS changes
```

**Push**:
```bash
git add <specific files — never git add -A blindly>
git commit -m "type: description\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push
```

Verify deploy: check https://e-portfolio-two-eta.vercel.app ~30s after push.

---

### 🖼 Media Agent

**Trigger**: Adding photos, project screenshots, or new music tracks.

**Rules**:
- Portrait: replace `assets/portrait.jpg` (keep same filename)
- Music: drop MP3s in `assets/music/`, add entry to `portfolio.js → music[]`, ensure `src` is a quoted string
- Project images: store in `assets/img/`, reference via a new `image` field on the project object
  (Design Agent needed to wire the `<img>` into the card template)
- Résumé: replace `assets/Hao_Joaquin_Resume.pdf` (keep same filename)
- All binary assets must be committed to git — Vercel serves directly from the repo

**Size guidance**: portrait ≤ 500 KB, music MP3 ≤ 8 MB each, screenshots ≤ 300 KB

---

### 🔧 Debug Agent

**Trigger**: Something broke — nav missing, content not rendering, music not playing, styles wrong.

**First checks**:
1. Open browser DevTools → Console tab. Any red errors? JS parse errors in `portfolio.js`
   will kill *everything* (nav, footer, all dynamic content).
2. Check `data/portfolio.js` for syntax errors — unquoted `src` values, trailing commas before `}`,
   mismatched brackets.
3. Check asset paths — do the files actually exist at the path referenced?
4. CSS not updating? Add `?v=N` to the stylesheet `<link>` in the HTML file.
5. Check Vercel deploy logs at https://vercel.com/joaquin-alec-haos-projects/e-portfolio

**Most common past bugs**:
- Unquoted `src` values in `music[]` → entire `portfolio.js` fails to parse
- `assets/music/` in `.gitignore` → MP3s not deployed to Vercel
- CSS browser cache → append `?v=N` query to `<link href>`

---

## Planned / future work

- [ ] Add thesis photos (group photo + solo robot shots) via Media Agent
- [ ] Fill in thesis `advisors` field when confirmed
- [ ] Add real hardware/robotics project details when ready to document
- [ ] Add project screenshots/thumbnails to timeline cards
- [ ] Favicon + OG image for social link previews
- [ ] Bio paragraph in Joaquin's own voice
- [ ] Blog page scaffold (empty, ready for first post)
- [ ] Case-study deep-dive page for a headline project (Pokémon binder or THRIVE)
