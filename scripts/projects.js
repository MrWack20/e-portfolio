// ========== PROJECTS PAGE ==========

let activeFilter = "All";

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

function renderTimeline() {
  const el = document.getElementById("timeline-list");
  const list = activeFilter === "All"
    ? PORTFOLIO.projects
    : PORTFOLIO.projects.filter(p => p.stack.includes(activeFilter));

  if (list.length === 0) {
    el.innerHTML = `<div class="tl-card reveal" style="text-align:center; color: var(--ink-mute);">No projects match <strong>${activeFilter}</strong>.</div>`;
    return;
  }

  el.innerHTML = list.map(p => `
    <article id="${p.slug}" class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-card">
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
          </div>
        </div>
      </div>
    </article>
  `).join("");

  // Re-init reveal for new nodes
  requestAnimationFrame(() => initReveal());
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderTimeline();
  bootPage("projects");

  // scroll to hash after render
  setTimeout(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300);
});

// ---------- THESIS + HARDWARE ----------
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
  `;
}

function renderHardware() {
  const el = document.getElementById("hw-grid");
  if (!el) return;
  el.innerHTML = PORTFOLIO.hardwareProjects.map(h => `
    <div class="hw-card">
      <div class="hw-badge">${h.status}</div>
      <div class="hw-meta">${h.period}</div>
      <h3 class="hw-title">${h.title}</h3>
      <p class="hw-blurb">${h.blurb}</p>
      <div class="tl-stack">${h.stack.map(s => `<span>${s}</span>`).join("")}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderThesis();
  renderHardware();
});
