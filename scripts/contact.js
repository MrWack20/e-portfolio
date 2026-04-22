// ========== CONTACT PAGE ==========

function renderContactInfo() {
  const p = PORTFOLIO;
  const rows = [
    { label: "Email",    handle: p.email, href: `mailto:${p.email}` },
    { label: "Phone",    handle: p.phone, href: `tel:${p.phone.replace(/\s/g,'')}` },
    { label: "Location", handle: p.location, href: "#" },
    ...p.socials.filter(s => s.label !== "Email").map(s => ({ label: s.label, handle: s.handle, href: s.href }))
  ];
  document.getElementById("contact-info").innerHTML = rows.map(r => `
    <a class="contact-row" href="${r.href}">
      <div class="contact-label">${r.label}</div>
      <div class="contact-handle">${r.handle}</div>
      <div class="contact-arrow">↗</div>
    </a>
  `).join("");
}

function submitForm(ev) {
  ev.preventDefault();
  const form = ev.target;
  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const topic = data.get("topic");
  const message = data.get("message");

  const body = `Hi Joaquin,\n\n${message}\n\n— ${name}\n${email}`;
  const subject = `[${topic}] Portfolio contact from ${name}`;
  const mailto = `mailto:${PORTFOLIO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open mailto
  window.location.href = mailto;

  document.getElementById("form-success").classList.add("show");
  setTimeout(() => {
    document.getElementById("form-success").classList.remove("show");
    form.reset();
  }, 6000);

  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  renderContactInfo();
  bootPage("contact");
});
