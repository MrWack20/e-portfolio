// ============================================================
// PORTFOLIO DATA LOADER
// ------------------------------------------------------------
// Content now lives in data/portfolio.json — edited via the /admin CMS.
// This fetches it into window.PORTFOLIO before any page script renders.
// Page scripts do `await window.PORTFOLIO_READY;` before rendering.
// ============================================================
window.PORTFOLIO_READY = fetch("data/portfolio.json", { cache: "no-cache" })
  .then((r) => {
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  })
  .then((data) => {
    window.PORTFOLIO = data;
    return data;
  })
  .catch((err) => {
    console.error("Failed to load portfolio data:", err);
    window.PORTFOLIO = window.PORTFOLIO || {};
    return window.PORTFOLIO;
  });
