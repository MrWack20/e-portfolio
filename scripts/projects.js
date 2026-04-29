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

// Pokéball demo link — animate open then open URL in new tab
document.addEventListener("click", e => {
  const link = e.target.closest(".pokeball-link");
  if (!link) return;
  e.preventDefault();
  const ball = link.querySelector(".pokeball");
  if (ball.classList.contains("open")) return;
  ball.classList.add("open");
  setTimeout(() => {
    window.open(link.href, "_blank", "noopener,noreferrer");
    setTimeout(() => ball.classList.remove("open"), 700);
  }, 500);
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
              ${p.demo ? `
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
              </div>` : ""}
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
      <div>
        <div class="tl-block-label">Advisors</div>
        <div class="thesis-advisors">${t.advisors}</div>
      </div>
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
  el.innerHTML = PORTFOLIO.hardwareProjects.map(h => `
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
        ${h.stack && h.stack.length ? `<div class="tl-stack">${h.stack.map(s => `<span>${s}</span>`).join("")}</div>` : ""}
      </div>
    </div>
  `).join("");
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderTimeline();
  renderThesis();
  renderHardware();
  bootPage("projects");

  setTimeout(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300);
});
