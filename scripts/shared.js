// ============================================================
// SHARED SCRIPTS — nav, theme toggle, reveal, counters
// ============================================================

// ---------- THEME ----------
(function themeInit() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
})();

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  // swap toggle icon
  document.querySelectorAll("[data-theme-icon]").forEach((el) => {
    el.innerHTML = next === "dark" ? sunIcon() : moonIcon();
  });
}

function sunIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;
}
function moonIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;
}

// ---------- NAV + FOOTER RENDER ----------
function renderChrome(activePage) {
  const p = window.PORTFOLIO;
  const theme = document.documentElement.getAttribute("data-theme");
  const pages = [
    { label: "Home",     href: "index.html",     key: "home" },
    { label: "Projects", href: "projects.html",  key: "projects" },
    { label: "About",    href: "about.html",     key: "about" },
    { label: "Contact",  href: "contact.html",   key: "contact" },
  ];

  // Nav
  const nav = document.getElementById("nav");
  if (nav) {
    nav.innerHTML = `
      <div class="nav-inner">
        <a class="nav-brand" href="index.html">
          <span class="nav-brand-dot"></span>
          <span>${p.shortName}</span>
        </a>
        <div class="nav-links">
          ${pages.map(pg => `
            <a class="nav-link ${pg.key === activePage ? 'active' : ''}" href="${pg.href}">${pg.label}</a>
          `).join("")}
        </div>
        <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">
          <span data-theme-icon>${theme === "dark" ? sunIcon() : moonIcon()}</span>
        </button>
      </div>
    `;
  }

  // Footer
  const foot = document.getElementById("foot");
  if (foot) {
    foot.innerHTML = `
      <div class="wrap">
        <div class="foot-inner">
          <div>
            <div class="eyebrow" style="margin-bottom: 10px;">— Let's build something</div>
            <div class="foot-title">${p.tagline}</div>
          </div>
          <div class="foot-links">
            ${p.socials.map(s => `<a href="${s.href}">${s.label} →</a>`).join("")}
          </div>
        </div>
        <div class="foot-fine">
          <span>© ${new Date().getFullYear()} ${p.name}</span>
          <span>Built from scratch · ${p.location}</span>
        </div>
      </div>
    `;
  }
}

// ---------- BACKDROP ----------
function renderBackdrop() {
  const b = document.getElementById("backdrop");
  if (b) {
    b.innerHTML = `
      <div class="backdrop-grid"></div>
      <div class="backdrop-orb a"></div>
      <div class="backdrop-orb b"></div>
    `;
  }
}

// ---------- REVEAL ON SCROLL ----------
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

// ---------- COUNTER ANIMATIONS ----------
function animateCounter(el, target, duration = 1600) {
  const start = performance.now();
  const from = 0;
  const isFloat = target % 1 !== 0;
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = from + (target - from) * eased;
    el.textContent = isFloat ? val.toFixed(1) : Math.round(val).toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const t = parseFloat(e.target.dataset.count);
        animateCounter(e.target, t);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach(el => obs.observe(el));
}

// ---------- MUSIC PLAYER (global OST) ----------
function renderMusicPlayer() {
  const p = window.PORTFOLIO;
  if (!p || !p.music || !p.music.length) return;
  if (document.getElementById("ost-player")) return;

  // Create container
  const wrap = document.createElement("div");
  wrap.id = "ost-player";
  wrap.className = "ost collapsed";
  wrap.innerHTML = `
    <button class="ost-tab" aria-label="Toggle music player" data-ost-toggle>
      <span class="ost-tab-eq"><i></i><i></i><i></i><i></i></span>
      <span class="ost-tab-label">OST</span>
    </button>
    <div class="ost-panel">
      <div class="ost-head">
        <div class="ost-title-row">
          <div class="ost-eyebrow">— Now playing</div>
          <button class="ost-close" aria-label="Close" data-ost-toggle>×</button>
        </div>
        <div class="ost-track-title" data-ost-track-title>—</div>
        <div class="ost-track-game" data-ost-track-game>—</div>
      </div>
      <div class="ost-controls">
        <button class="ost-btn" data-ost-prev aria-label="Previous">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 6h2v12H6zM20 6v12L9 12z"/></svg>
        </button>
        <button class="ost-btn ost-play" data-ost-play aria-label="Play / pause">
          <svg class="ic-play" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          <svg class="ic-pause" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="display:none"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
        </button>
        <button class="ost-btn" data-ost-next aria-label="Next">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 6h2v12h-2zM4 6v12l11-6z"/></svg>
        </button>
        <div class="ost-seek">
          <div class="ost-seek-bar" data-ost-bar><div class="ost-seek-fill" data-ost-fill></div></div>
          <div class="ost-times">
            <span data-ost-cur>0:00</span>
            <span data-ost-dur>0:00</span>
          </div>
        </div>
      </div>
      <div class="ost-volume">
        <svg class="ost-vol-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path class="ost-vol-wave" d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
        <input class="ost-vol-slider" data-ost-vol type="range" min="0" max="1" step="0.02" value="1" aria-label="Volume" />
      </div>
      <div class="ost-list" data-ost-list>
        ${p.music.map((t, i) => `
          <button class="ost-item ${t.src ? '' : 'locked'}" data-ost-idx="${i}">
            <span class="ost-dot"></span>
            <span class="ost-item-text">
              <span class="ost-item-title">${t.title}</span>
              <span class="ost-item-game">${t.game}${t.src ? "" : " · placeholder"}</span>
            </span>
          </button>
        `).join("")}
      </div>
      <div class="ost-fine">Drop MP3s into <code>assets/music/</code> and point <code>data/portfolio.js</code> at them.</div>
    </div>
    <audio data-ost-audio preload="none"></audio>
  `;
  document.body.appendChild(wrap);

  // State + wiring
  const audio = wrap.querySelector("[data-ost-audio]");
  const btnPlay = wrap.querySelector("[data-ost-play]");
  const icPlay = wrap.querySelector(".ic-play");
  const icPause = wrap.querySelector(".ic-pause");
  const titleEl = wrap.querySelector("[data-ost-track-title]");
  const gameEl = wrap.querySelector("[data-ost-track-game]");
  const curEl = wrap.querySelector("[data-ost-cur]");
  const durEl = wrap.querySelector("[data-ost-dur]");
  const bar = wrap.querySelector("[data-ost-bar]");
  const fill = wrap.querySelector("[data-ost-fill]");
  const items = [...wrap.querySelectorAll(".ost-item")];
  const tracks = p.music;
  let idx = parseInt(localStorage.getItem("ost.idx") || "0", 10);
  if (isNaN(idx) || idx < 0 || idx >= tracks.length) idx = 0;

  function fmt(s) {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  }

  function loadTrack(i, autoplay) {
    idx = (i + tracks.length) % tracks.length;
    const t = tracks[idx];
    titleEl.textContent = t.title;
    gameEl.textContent = t.game + (t.src ? "" : " · (no audio yet)");
    items.forEach(el => el.classList.toggle("active", parseInt(el.dataset.ostIdx, 10) === idx));
    localStorage.setItem("ost.idx", String(idx));
    if (t.src) {
      audio.src = t.src;
      if (autoplay) audio.play().catch(() => {});
    } else {
      audio.removeAttribute("src");
      audio.load();
      setPlaying(false);
    }
  }

  function setPlaying(playing) {
    icPlay.style.display = playing ? "none" : "";
    icPause.style.display = playing ? "" : "none";
    wrap.classList.toggle("playing", playing);
  }

  btnPlay.addEventListener("click", () => {
    if (!tracks[idx].src) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  });
  wrap.querySelector("[data-ost-prev]").addEventListener("click", () => loadTrack(idx - 1, !audio.paused));
  wrap.querySelector("[data-ost-next]").addEventListener("click", () => loadTrack(idx + 1, !audio.paused));
  items.forEach(el => el.addEventListener("click", () => loadTrack(parseInt(el.dataset.ostIdx, 10), true)));

  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("ended", () => loadTrack(idx + 1, true));
  audio.addEventListener("timeupdate", () => {
    const d = audio.duration || 0;
    curEl.textContent = fmt(audio.currentTime);
    durEl.textContent = fmt(d);
    fill.style.width = d ? (audio.currentTime / d * 100) + "%" : "0%";
  });
  bar.addEventListener("click", (e) => {
    const r = bar.getBoundingClientRect();
    const pct = (e.clientX - r.left) / r.width;
    if (audio.duration) audio.currentTime = audio.duration * pct;
  });

  const volSlider = wrap.querySelector("[data-ost-vol]");
  const savedVol = parseFloat(localStorage.getItem("ost.vol") ?? "1");
  audio.volume = isFinite(savedVol) ? Math.max(0, Math.min(1, savedVol)) : 1;
  volSlider.value = audio.volume;
  volSlider.style.setProperty("--vol-pct", (audio.volume * 100) + "%");
  volSlider.addEventListener("input", () => {
    audio.volume = parseFloat(volSlider.value);
    localStorage.setItem("ost.vol", volSlider.value);
    volSlider.style.setProperty("--vol-pct", (parseFloat(volSlider.value) * 100) + "%");
  });

  // Toggle open/close
  wrap.querySelectorAll("[data-ost-toggle]").forEach(el => {
    el.addEventListener("click", () => {
      wrap.classList.toggle("collapsed");
      localStorage.setItem("ost.open", wrap.classList.contains("collapsed") ? "0" : "1");
    });
  });
  if (localStorage.getItem("ost.open") === "1") wrap.classList.remove("collapsed");

  loadTrack(idx, false);
}

// ---------- BOOT ----------
function bootPage(activePage) {
  renderBackdrop();
  renderChrome(activePage);
  // Defer reveal/counter init to allow page content to mount
  requestAnimationFrame(() => {
    initReveal();
    initCounters();
    renderMusicPlayer();
  });
}
