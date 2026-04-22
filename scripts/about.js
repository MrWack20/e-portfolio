// ========== ABOUT PAGE ==========

function renderLede() {
  const el = document.getElementById("about-lede");
  el.innerHTML = `<p>${PORTFOLIO.bio} I'm currently <strong>interning in data governance</strong>, helping run a <strong>campus AWS club</strong>, and building things on the side — from <strong>card-collection apps</strong> to <strong>inclusive job platforms</strong>.</p>`;
}

function renderExperience() {
  const el = document.getElementById("exp-list");
  el.innerHTML = PORTFOLIO.experience.map((e, i) => `
    <div class="exp-item reveal ${i === 0 ? 'open' : ''}" data-idx="${i}">
      <div class="exp-head">
        <div class="exp-period">${e.period}</div>
        <div>
          <h3 class="exp-title">${e.role}</h3>
          <div class="exp-org">${e.org} · ${e.location}</div>
        </div>
        <button class="exp-toggle" aria-label="Toggle details">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
      <div class="exp-body">
        <div class="exp-body-inner">
          <div class="exp-summary">${e.summary}</div>
          <ul class="exp-bullets">
            ${e.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
          <div class="exp-tags">
            ${e.tags.map(t => `<span>${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".exp-item").forEach((item) => {
    item.addEventListener("click", (ev) => {
      // Close others for accordion feel
      if (!item.classList.contains("open")) {
        el.querySelectorAll(".exp-item").forEach(x => x.classList.remove("open"));
      }
      item.classList.toggle("open");
    });
  });
}

function renderSkills() {
  const el = document.getElementById("skills-wrap");
  el.innerHTML = PORTFOLIO.skillGroups.map(g => `
    <div class="skill-group reveal">
      <div class="skill-group-title">${g.name}</div>
      <div class="skill-list">
        ${g.items.map(s => `
          <div class="skill-row">
            <div>
              <div class="skill-label"><span>${s.label}</span></div>
              <div class="skill-bar"><div class="skill-fill" data-level="${s.level}"></div></div>
            </div>
            <div class="skill-level">${s.level}%</div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  // Animate fill on reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.level + "%";
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  el.querySelectorAll(".skill-fill").forEach(f => obs.observe(f));
}

function renderEdu() {
  const el = document.getElementById("edu-block");
  el.innerHTML = PORTFOLIO.education.map(e => `
    <div class="reveal">
      <div class="edu-school">${e.school}</div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-meta"><span>${e.location}</span><span>·</span><span>${e.period}</span></div>
      ${e.note ? `<div class="edu-note">${e.note}</div>` : ''}
    </div>
  `).join("");
}

function renderCerts() {
  const el = document.getElementById("certs-block");
  el.innerHTML = PORTFOLIO.certifications.map(c => `
    <div class="cert-card reveal">
      <div class="cert-name">${c.name}</div>
      <div class="cert-meta">${c.issuer} · ${c.year}</div>
    </div>
  `).join("");
}

function renderInterests() {
  const el = document.getElementById("interests-wrap");
  if (!el) return;
  const tags = PORTFOLIO.interests.map(i => `<span class="interest-tag">${i}</span>`).join("");
  const facts = (PORTFOLIO.personalFacts || []).map(f => `
    <div class="pf-row">
      <div class="pf-label">${f.label}</div>
      <div class="pf-value">${f.value}</div>
    </div>
  `).join("");
  el.innerHTML = `
    <div class="interest-tags">${tags}</div>
    ${facts ? `<div class="personal-facts">${facts}</div>` : ""}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderLede();
  renderExperience();
  renderSkills();
  renderEdu();
  renderCerts();
  renderInterests();
  bootPage("about");
});
