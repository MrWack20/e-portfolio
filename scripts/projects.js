// ========== PROJECTS PAGE ==========

let activeFilter = "All";

// ---------- CLICK-TO-PLAY VIDEO EMBED ----------
function videoEmbed(id, title) {
  return `
    <div class="video-wrap" data-vid="${id}">
      <img class="video-poster"
           src="https://img.youtube.com/vi/${id}/maxresdefault.jpg"
           alt="${title}"
           loading="lazy"
           decoding="async" />
      <button class="video-play-btn" aria-label="Play ${title}">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
    </div>
  `;
}

// On touch devices, window.open() inside setTimeout is blocked by mobile Safari's
// popup blocker (no longer a direct user gesture). Instead, let the native
// anchor target="_blank" handle navigation and just run the animation.
const isTouchDevice = () => navigator.maxTouchPoints > 0;

// Pokéball demo link — animate open then open URL in new tab
document.addEventListener("click", e => {
  const link = e.target.closest(".pokeball-link");
  if (!link) return;
  const ball = link.querySelector(".pokeball");
  if (ball.classList.contains("open")) return;
  ball.classList.add("open");

  if (isTouchDevice()) {
    setTimeout(() => ball.classList.remove("open"), 1200);
    return;
  }

  e.preventDefault();
  setTimeout(() => {
    window.open(link.href, "_blank", "noopener,noreferrer");
    setTimeout(() => ball.classList.remove("open"), 700);
  }, 500);
});

// Launch (paper plane) demo link — fire then open URL in new tab
document.addEventListener("click", e => {
  const link = e.target.closest(".launch-link");
  if (!link) return;
  const icon = link.querySelector(".launch-icon");
  if (icon.classList.contains("fired")) return;
  icon.classList.add("fired");

  if (isTouchDevice()) {
    setTimeout(() => icon.classList.remove("fired"), 1200);
    return;
  }

  e.preventDefault();
  setTimeout(() => {
    window.open(link.href, "_blank", "noopener,noreferrer");
    setTimeout(() => icon.classList.remove("fired"), 700);
  }, 450);
});

// Single delegated listener — swaps poster for live iframe on click
document.addEventListener("click", e => {
  const wrap = e.target.closest(".video-wrap[data-vid]");
  if (!wrap) return;
  const id   = wrap.dataset.vid;
  const title = wrap.querySelector("img")?.alt || "Demo";
  wrap.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1"
      title="${title}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  `;
  wrap.classList.add("playing");
});

// ---------- DEMO BUTTONS (themed: pokéball / paper-plane launch) ----------
function renderDemoButton(p) {
  if (p.demoStyle === "launch") {
    return `
              <div class="tl-demo">
                <a class="launch-link" href="${p.demo}" target="_blank" rel="noopener noreferrer">
                  <div class="launch-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="28" height="28">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2z"/>
                    </svg>
                  </div>
                  <span class="launch-label">${p.demoLabel || "Launch site"} ↗</span>
                </a>
              </div>`;
  }
  // default: pokeball
  return `
              <div class="tl-demo">
                <a class="pokeball-link" href="${p.demo}" target="_blank" rel="noopener noreferrer">
                  <div class="pokeball">
                    <div class="pokeball-top"></div>
                    <div class="pokeball-bottom"></div>
                    <div class="pokeball-band"></div>
                    <div class="pokeball-btn-circle"></div>
                  </div>
                  <span class="pokeball-label">${p.demoLabel || "Tap the Pokéball to visit the site"}</span>
                </a>
              </div>`;
}

// ---------- SOURCE LINK(S) ----------
// Supports a single p.repo (URL string) or a labeled p.repos array [{label, url}].
function sourceLinks(p) {
  const list = (p.repos && p.repos.length)
    ? p.repos
    : (p.repo ? [{ label: "Source", url: p.repo }] : []);
  if (!list.length) return "";
  const gh = '<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';
  return `<span class="tl-sources">${list.map(r => `<a class="tl-source" href="${r.url}" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub">${gh} ${r.label}</a>`).join("")}</span>`;
}

// ---------- FILTERS ----------
function allTags() {
  const set = new Set(["All"]);
  PORTFOLIO.projects.forEach(p => p.stack.forEach(s => set.add(s)));
  return Array.from(set);
}

function renderFilters() {
  const el = document.getElementById("filters");
  el.innerHTML = allTags().map(t => `
    <button class="filter-chip ${t === activeFilter ? 'active' : ''}" data-tag="${t}">${t}</button>
  `).join("");
  el.querySelectorAll(".filter-chip").forEach(c => {
    c.addEventListener("click", () => {
      activeFilter = c.dataset.tag;
      renderFilters();
      renderTimeline();
    });
  });
}

// ---------- TIMELINE ----------
function renderTimeline() {
  const el = document.getElementById("timeline-list");
  const list = activeFilter === "All"
    ? PORTFOLIO.projects
    : PORTFOLIO.projects.filter(p => p.stack.includes(activeFilter));

  if (list.length === 0) {
    el.innerHTML = `<div class="tl-card reveal" style="text-align:center;color:var(--ink-mute);">No projects match <strong>${activeFilter}</strong>.</div>`;
    return;
  }

  el.innerHTML = list.map(p => `
    <article id="${p.slug}" class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-card ${p.video ? 'has-video' : ''}">

        <div class="tl-content">
          ${p.cover ? `<div class="tl-cover"><img src="${p.cover}" alt="${p.title}" loading="lazy" decoding="async" onerror="this.closest('.tl-cover').style.display='none'" /></div>` : ""}
          <div class="tl-meta">
            <span>${p.period}</span>
            <span class="pill">${p.role}</span>
            ${sourceLinks(p)}
          </div>
          <div class="tl-titlerow">
            ${p.logo ? `<span class="tl-logo"><img src="${p.logo}" alt="${p.title} logo" loading="lazy" decoding="async" onerror="this.closest('.tl-logo').remove()" /></span>` : ""}
            <h2 class="tl-title">${p.title}</h2>
          </div>
          <p class="tl-blurb">${p.blurb}</p>
          <div class="tl-highlight">${p.highlight}</div>
          ${galleryHtml(p)}
          <div class="tl-detail">
            <div>
              <div class="tl-block-label">What I did</div>
              <ul class="tl-bullets">
                ${p.bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
            </div>
            <div>
              <div class="tl-block-label">Stack</div>
              <div class="tl-stack">
                ${p.stack.map(s => `<span>${s}</span>`).join("")}
              </div>
              ${p.demo ? renderDemoButton(p) : ""}
            </div>
          </div>

        </div>

        ${p.video ? `
        <div class="tl-video-col">
          <div class="tl-block-label tl-vid-label">— Demo</div>
          ${videoEmbed(p.video, p.title + " demo")}
        </div>` : ""}

      </div>
    </article>
  `).join("");

  requestAnimationFrame(() => initReveal());
}

// ---------- THESIS ----------
function renderThesis() {
  const el = document.getElementById("thesis-card");
  if (!el) return;
  const t = PORTFOLIO.thesis;

  el.innerHTML = `
    <div class="thesis-meta">
      <span class="thesis-status">${t.status}</span>
      <span>${t.period}</span>
    </div>
    <h3 class="thesis-title">${t.title}</h3>
    <p class="thesis-blurb">${t.blurb}</p>

    ${t.teamPhoto ? `
    <div class="thesis-photo-wrap">
      <img class="thesis-team-photo"
           src="${t.teamPhoto}"
           alt="Thesis team with the robot"
           loading="lazy"
           decoding="async" />
      <div class="thesis-photo-caption">The full team — Software & Hardware</div>
    </div>` : ""}

    ${t.videos && t.videos.length ? `
    <div class="thesis-videos">
      <div class="tl-block-label" style="margin-bottom:14px;">— ${t.videos.length === 1 ? t.videos[0].label : "Demo Videos"}</div>
      <div class="video-grid ${t.videos.length === 1 ? 'video-grid-single' : ''}">
        ${t.videos.map(v => `
          <div class="video-item">
            ${t.videos.length > 1 ? `<div class="video-item-label">${v.label}</div>` : ""}
            ${videoEmbed(v.id, v.label)}
          </div>
        `).join("")}
      </div>
    </div>` : ""}

    <div class="thesis-detail">
      ${t.advisors && t.advisors !== "To be filled" ? `
      <div>
        <div class="tl-block-label">Advisors</div>
        <div class="thesis-advisors">${t.advisors}</div>
      </div>` : ""}
      <div>
        <div class="tl-block-label">Topic areas</div>
        <div class="tl-stack">${t.topics.map(x => `<span>${x}</span>`).join("")}</div>
      </div>
    </div>

    ${t.myContributions ? `
    <div class="thesis-contributions">
      <div class="tl-block-label">My contributions</div>
      <ul class="tl-bullets">
        ${t.myContributions.map(b => `<li>${b}</li>`).join("")}
      </ul>
    </div>` : ""}

    ${t.members ? `
    <div class="thesis-members">
      <div class="tl-block-label">Team members</div>
      <div class="thesis-teams">
        <div class="thesis-team">
          <div class="thesis-team-label">Software</div>
          <ul>${t.members.software.map(m => `<li>${m}</li>`).join("")}</ul>
        </div>
        <div class="thesis-team">
          <div class="thesis-team-label">Hardware</div>
          <ul>${t.members.hardware.map(m => `<li>${m}</li>`).join("")}</ul>
        </div>
      </div>
    </div>` : ""}
  `;
}

// ---------- HARDWARE ----------
function renderHardware() {
  const el = document.getElementById("hw-grid");
  if (!el) return;
  // Only show hardware projects with real details (hide "Coming Soon" placeholders)
  const shown = PORTFOLIO.hardwareProjects.filter(h => h.status !== "Coming Soon");
  el.innerHTML = shown.map(h => {
    const hasDetail = (h.images && h.images.length) || (h.materials && h.materials.length);
    return `
    <div class="hw-card ${h.image ? 'has-img' : ''}">
      ${h.image ? `
      <div class="hw-img-wrap">
        <img src="${h.image}"
             alt="${h.title}"
             loading="lazy"
             decoding="async"
             onerror="this.closest('.hw-img-wrap').style.display='none'" />
      </div>` : ""}
      <div class="hw-card-body">
        <div class="hw-badge">${h.status}</div>
        <div class="hw-meta">${h.period}</div>
        <h3 class="hw-title">${h.title}</h3>
        <p class="hw-blurb">${h.blurb}</p>
        ${h.stack && h.stack.length ? `
        <div class="tl-stack hw-stack-preview">
          ${h.stack.slice(0, 3).map(s => `<span>${s}</span>`).join("")}
          ${h.stack.length > 3 ? `<span class="hw-more">+${h.stack.length - 3}</span>` : ""}
        </div>` : ""}
        ${hasDetail ? `
        <button class="hw-detail-btn" data-slug="${h.slug}">
          View details
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </button>` : ""}
      </div>
    </div>`;
  }).join("");

  el.querySelectorAll(".hw-detail-btn").forEach(btn => {
    btn.addEventListener("click", () => openHwModal(btn.dataset.slug));
  });
}

// ---------- HW MODAL ----------
function openHwModal(slug) {
  const h = PORTFOLIO.hardwareProjects.find(p => p.slug === slug);
  if (!h) return;

  const body = document.getElementById("hw-modal-body");
  const galleryImgs = h.images && h.images.length ? h.images
    : (h.image ? [{ src: h.image, caption: "" }] : []);

  // Smart column count: 1→1, 2→2, 3→3, 4→2×2, 5→3+2, 6→3×2
  const n = galleryImgs.length;
  const cols = n <= 1 ? 1 : n === 4 ? 2 : Math.min(n, 3);

  body.innerHTML = `
    <div class="hm-header">
      <div class="hm-top">
        <span class="hw-badge">${h.status}</span>
        <span class="hm-period">${h.period}</span>
      </div>
      <h2 class="hm-title">${h.title}</h2>
    </div>

    ${galleryImgs.length ? `
    <div class="hm-gallery" style="grid-template-columns: repeat(${cols}, 1fr);">
      ${galleryImgs.map(img => `
        <figure class="hm-img-item">
          <img src="${img.src}" alt="${img.caption || h.title}" loading="lazy" decoding="async" />
          ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ""}
        </figure>`).join("")}
    </div>` : ""}

    <p class="hm-blurb">${h.blurb}</p>

    ${h.stack && h.stack.length ? `
    <div class="hm-section">
      <div class="hm-label">— Components & Stack</div>
      <div class="tl-stack">${h.stack.map(s => `<span>${s}</span>`).join("")}</div>
    </div>` : ""}

    ${h.materials && h.materials.length ? `
    <div class="hm-section">
      <div class="hm-label">— Materials used</div>
      <ul class="hm-materials">
        ${h.materials.map(m => `<li>${m}</li>`).join("")}
      </ul>
    </div>` : ""}
  `;

  const modal = document.getElementById("hw-modal");
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeHwModal() {
  const modal = document.getElementById("hw-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ---------- SCREENSHOT GALLERY + LIGHTBOX ----------
// Renders a click-to-zoom gallery from p.screenshots (array of image paths).
// Empty/missing = nothing renders. Broken images remove themselves; an empty
// gallery removes its own heading too.
function galleryHtml(p) {
  if (!p.screenshots || !p.screenshots.length) return "";
  return `
    <div class="tl-gallery">
      <div class="tl-block-label">— Screenshots</div>
      <div class="tl-shots">
        ${p.screenshots.map((s, i) => `
          <figure class="tl-shot">
            <img src="${s}" alt="${p.title} — screenshot ${i + 1}" loading="lazy" decoding="async"
                 onerror="(function(im){var g=im.closest('.tl-gallery');im.closest('.tl-shot').remove();if(g&&!g.querySelector('.tl-shot'))g.remove();})(this)" />
          </figure>`).join("")}
      </div>
    </div>`;
}

function openLightbox(src, alt) {
  const lb = document.getElementById("img-lightbox");
  if (!lb) return;
  const img = lb.querySelector("img");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  const lb = document.getElementById("img-lightbox");
  if (!lb) return;
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
// Open the lightbox when a screenshot is clicked (delegated)
document.addEventListener("click", e => {
  const shot = e.target.closest(".tl-shot img");
  if (shot) openLightbox(shot.src, shot.alt);
});

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderTimeline();
  renderThesis();
  renderHardware();
  bootPage("projects");

  // Modal close handlers
  document.getElementById("hw-modal-close").addEventListener("click", closeHwModal);
  document.getElementById("hw-modal-backdrop").addEventListener("click", closeHwModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeHwModal(); });

  // Lightbox close handlers (click backdrop / close button / Escape)
  const lb = document.getElementById("img-lightbox");
  if (lb) lb.addEventListener("click", e => {
    if (e.target === lb || e.target.closest(".img-lightbox-close")) closeLightbox();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

  setTimeout(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300);
});
