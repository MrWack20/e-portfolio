// ========== HOME PAGE LOGIC ==========

function renderStats() {
  const el = document.getElementById("stats");
  el.innerHTML = PORTFOLIO.stats.map(s => `
    <div class="stat reveal">
      <div class="stat-num">
        <span data-count="${s.value}">0</span><span class="suffix">${s.suffix}</span>
      </div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

function renderSelected() {
  const list = document.getElementById("selected-list");
  // Use top 3 from the projects array
  const featured = PORTFOLIO.projects.slice(0, 3);
  list.innerHTML = featured.map((p, i) => `
    <a class="proj-row reveal" href="projects.html#${p.slug}" style="transition-delay:${i * 80}ms">
      <div class="proj-year">${p.period}</div>
      <div class="proj-info">
        <h3 class="proj-title">${p.title}</h3>
        <p class="proj-blurb">${p.blurb}</p>
      </div>
      <div class="proj-highlight">${p.highlight}</div>
      <div class="proj-arrow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </div>
    </a>
  `).join("");
}

function startClock() {
  const el = document.getElementById("clock");
  function tick() {
    const now = new Date();
    const opts = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Manila' };
    el.textContent = now.toLocaleTimeString('en-PH', opts) + " MNL";
  }
  tick();
  setInterval(tick, 30000);
}

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderSelected();
  startClock();
  bootPage("home");
});
