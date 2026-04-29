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
│   ├── projects.js     # Timeline, filters, thesis card, hardware grid, video embeds
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
    ├── Hao_Joaquin_Resume.pdf  # Résumé
    ├── music/                  # MP3 files for the OST player
    └── img/                    # All images: cert badges, thesis photo, hw project photos
        ├── thesis-team.jpg
        ├── cert-aws-ccp.png
        ├── cert-aws-cloud-quest.png
        ├── cert-datacamp-dataengassoc.png
        ├── cert-comptia-itf.png
        └── hw-{slug}.jpg       # Hardware project photos (drop in to activate)
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

Every `git push` to `master` auto-deploys via Vercel (~30s). Standard commit pattern:

```bash
git add <specific files>
git commit -m "feat|fix|chore|style: description"
git push
```

Always push after changes. Never `git add -A` blindly — stage specific files only.

---

## Sub-agents

Invoke any agent below by name. Each has a defined scope, files it touches, and a checklist.
Agents never overlap scope — if a task crosses two agents, name both.

---

### 🗂 Content Agent

**Trigger**: Adding or updating portfolio content — new project, cert, experience, music track,
personal fact, bio, social link, stat, hardware project detail, thesis update.

**Only touches**: `data/portfolio.js`

**Validation before every commit**:
- All string values are quoted (no bare identifiers)
- No trailing commas before `}`
- All `src` / `image` / `badge` / `video` paths are quoted strings
- Referenced asset files actually exist in `assets/`

**Patterns**:

```js
// Add a project
{
  slug: "unique-slug",
  title: "Project Title",
  period: "Month YYYY",
  blurb: "One-sentence description.",
  highlight: "Key achievement or metric.",
  role: "Your role",
  stack: ["Tech1", "Tech2"],
  bullets: ["What you did...", "..."],
  video: null,           // YouTube ID string when ready
}

// Add experience
{
  org: "Company / Event",
  role: "Your title",
  period: "Mon YYYY — Mon YYYY",
  location: "City or Remote",
  summary: "One-line summary.",
  bullets: ["..."],
  tags: ["Tag1", "Tag2"],
}

// Add a cert
{ name: "Cert Name", issuer: "Issuer", year: "YYYY", badge: "assets/img/cert-slug.png" }

// Add a music track (MP3 must already be in assets/music/)
{ title: "Track Name", game: "Source / Game", src: "assets/music/filename.mp3" }

// Update thesis: title, period, advisors, status, blurb, topics[],
//   members.software[], members.hardware[], myContributions[], videos[], teamPhoto

// Update hardware project: add period, blurb, stack[], status, image path
```

---

### 🎨 Design Agent

**Trigger**: Visual changes — new section layout, animation tweak, color change, typography
adjustment, spacing fix, new UI component, responsive breakpoint fix.

**Touches**: `styles/*.css`, `scripts/shared.js` (nav/footer/player HTML), HTML files (structure only)

**Rules**:
- Extend `tokens.css` variables — never hardcode hex colors in component CSS
- All new top-level sections need `.reveal` class for scroll-in animation
- Mobile breakpoint: `max-width: 768px`. Compact: `max-width: 500px`
- Futuristic-tech aesthetic: dark bg, cyan/violet glows, mono labels, Space Grotesk headers
- Match pattern: `eyebrow` → `section-title` → content, inside `.wrap` container
- Cache-bust changed CSS with `?v=N` on the `<link>` tag in the HTML file

**New section checklist**:
1. HTML stub in `.html` file
2. Render function in `scripts/*.js`
3. Data shape in `data/portfolio.js`
4. CSS in `styles/*.css`
5. Call render in `DOMContentLoaded`
6. Bump CSS `?v=N` version

---

### 🚀 Deploy Agent

**Trigger**: Any time changes are ready to go live.

**Pre-commit checklist**:
1. `data/portfolio.js` syntax valid? All values quoted? No bare identifiers?
2. Asset paths exist locally (`assets/img/`, `assets/music/`)?
3. `git status` — only intended files staged?
4. CSS versions bumped on any changed stylesheets?

**Commit types**: `feat` · `fix` · `chore` · `style`

**Always append**: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`

**Post-push**: confirm Vercel deploy is `● Ready` via `vercel ls`.

---

### 🖼 Media Agent

**Trigger**: Adding photos, project screenshots, cert badges, or new music tracks.

**Asset naming conventions**:
| Asset type      | Location          | Naming pattern              |
|-----------------|-------------------|-----------------------------|
| Portrait        | `assets/`         | `portrait.jpg` (fixed)      |
| Thesis photo    | `assets/img/`     | `thesis-team.jpg`           |
| Cert badge      | `assets/img/`     | `cert-{slug}.png`           |
| HW project photo| `assets/img/`     | `hw-{slug}.jpg`             |
| Project screenshot | `assets/img/`  | `proj-{slug}.jpg`           |
| Music track     | `assets/music/`   | `filename.mp3`              |
| Résumé          | `assets/`         | `Hao_Joaquin_Resume.pdf` (fixed) |

**Size limits**: portrait ≤ 500 KB · music ≤ 8 MB · images ≤ 300 KB
**All binary assets must be committed to git** — Vercel serves directly from the repo.

---

### 🔧 Debug Agent

**Trigger**: Something broke — nav missing, content not rendering, music not playing, styles wrong, images not showing.

**Diagnosis order**:
1. Browser DevTools → Console. Any red errors? A JS parse error in `portfolio.js` kills *everything*.
2. Check `portfolio.js` for syntax errors: unquoted values, trailing commas before `}`, mismatched brackets.
3. Check asset paths — does the file physically exist in `assets/`?
4. CSS not updating? Bump `?v=N` on the `<link>` tag.
5. Check Vercel logs: https://vercel.com/joaquin-alec-haos-projects/e-portfolio

**Known past bugs** (do not repeat):
- Unquoted `src` in `music[]` → entire `portfolio.js` fails to parse → nav + all content disappears
- `assets/music/` in `.gitignore` → MP3s not deployed
- Hardcoded asset path instead of using data field variable (e.g. `src="assets/thesis-team.jpg"` instead of `src="${t.teamPhoto}"`)
- CSS browser cache → bump `?v=N`

---

### ⚡ Performance Agent

**Trigger**: "Improve performance", "site feels slow", "optimize loading", "check page speed", or proactively after adding new images/scripts.

**Scope**: asset optimization, lazy loading, CSS efficiency, script loading, Vercel config.

**Checklist**:
- All `<img>` tags have `loading="lazy"` and `decoding="async"`
- Video embeds use click-to-play (never auto-load iframes)
- Images in `assets/img/` are ≤ 300 KB — flag any that exceed this
- No render-blocking scripts (all `<script>` tags at bottom of `<body>`)
- CSS is not duplicated across files — shared rules belong in `tokens.css`
- Unused CSS classes — identify and remove
- `assets/music/` MP3s are ≤ 8 MB each
- Fonts loaded via `preconnect` (already in place — verify not removed)
- Run `vercel ls` to confirm latest deploy is `● Ready` and build time is under 10s

**Automatic fixes it can make**:
- Add missing `loading="lazy"` / `decoding="async"` to any `<img>` found without them
- Convert any inline `style=""` attributes into proper CSS classes
- Deduplicate repeated CSS rules across stylesheets

---

### 🎯 UI Review Agent

**Trigger**: "Review the UI", "check how it looks", "audit the layout", "improve presentation", or after a major feature addition.

**Scope**: visual consistency, spacing, typography, responsive behaviour, component polish — across all 4 pages.

**Review checklist per page**:
- [ ] Eyebrow → title → content hierarchy is consistent
- [ ] Section spacing matches the grid (multiples of 8px / 16px)
- [ ] All cards have consistent padding, border-radius, hover states
- [ ] Reveal animations trigger correctly (no elements stuck hidden)
- [ ] Light mode looks as good as dark mode
- [ ] No text overflows or truncates unexpectedly
- [ ] Mobile (360px–768px): no horizontal scroll, no broken layouts
- [ ] Interactive elements (buttons, links, chips) have visible focus states

**What it produces**: a prioritised list of issues → immediately fixes any CSS-only issues → flags structural issues for Design Agent.

---

### 📋 Content Audit Agent

**Trigger**: "Audit my content", "what's still a placeholder", "what needs updating", or before sharing the portfolio with anyone important.

**Scope**: read-only scan of `data/portfolio.js` — never edits anything, only reports.

**Scans for**:
- Any field containing `"TBD"`, `"coming soon"`, `"placeholder"`, `"add your"`, `"to be filled"`, or `null`
- Projects missing `highlight`, `bullets`, or `stack`
- Hardware projects with empty `stack: []` or default blurb
- `personalFacts` entries with placeholder values
- `thesis.advisors` still set to `"To be filled"`
- Music tracks with `src: null`
- Cert / HW cards with `badge` / `image` paths pointing to files that don't exist

**Output format**: grouped table — section → field → current value → suggested action.

---

### ✨ Polish Agent

**Trigger**: "Polish the site", "make it more impressive", "improve the portfolio presentation", "level up the UI" — run this before sharing with recruiters or after a content update.

**Scope**: holistic improvement pass across Design + Performance + UI Review simultaneously. Combines all three agents in one sweep.

**Pass order**:
1. **Performance pass** — fix all lazy loading, check image sizes, verify no blocking resources
2. **UI consistency pass** — spacing, typography scale, hover states, reveal animations
3. **Content presentation pass** — are descriptions punchy? Are highlights specific? Are tech stacks complete?
4. **Mobile pass** — test layouts at 360px, 540px, 768px breakpoints
5. **Dark/light pass** — verify both themes look sharp
6. **Final deploy** — commit all improvements, push, verify `● Ready`

---

## Planned / future work

- [ ] Add thesis photos (solo robot shots) via Media Agent
- [ ] Fill in thesis `advisors` field when confirmed
- [ ] Add real hardware project details (period, blurb, stack) when ready
- [ ] Add hardware project photos to `assets/img/hw-{slug}.jpg`
- [ ] Add project screenshots/thumbnails to timeline cards
- [ ] Favicon + OG image for social link previews
- [ ] Bio paragraph in Joaquin's own voice
- [ ] Blog page scaffold (empty, ready for first post)
- [ ] THRIVE demo video — add YouTube ID to `video` field when ready
- [ ] Case-study deep-dive page for a headline project
