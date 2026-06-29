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
    // Let the anchor's target="_blank" fire naturally — just reset animation
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
    // Let the anchor's target="_blank" fire naturally — just reset animation
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

// ---------- DEMO BUTTONS ----------
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
                  <span class="launch-label">Launch VoyageAI ↗</span>
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
                  <span class="pokeball-label">Click the Pokéball to visit the website</span>
                </a>
              </div>`;
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
          <div class="tl-meta">
            <span>${p.period}</span>
            <span class="pill">${p.role}</span>
          </div>
          <h2 class="tl-title">${p.title}</h2>
          <p class="tl-blurb">${p.blurb}</p>
          <div class="tl-highlight">${p.highlight}</div>
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

  setTimeout(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300);
});
