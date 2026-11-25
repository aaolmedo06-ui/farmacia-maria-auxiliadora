/* ==========================================================
   faq.js — preguntas frecuentes con acordeón accesible.
   Solo una respuesta abierta a la vez.
   ========================================================== */
function iniciarFaq() {
  const cont = document.getElementById("accordion");
  if (!cont) return;
  cont.innerHTML = PREGUNTAS.map((p, i) => `
    <div class="acc-item">
      <h3><button class="acc-btn" id="acc-b${i}" aria-expanded="false" aria-controls="acc-p${i}">${p.q}</button></h3>
      <div class="acc-panel" id="acc-p${i}" role="region" aria-labelledby="acc-b${i}"><p>${p.a}</p></div>
    </div>`).join("");

  cont.addEventListener("click", (e) => {
    const btn = e.target.closest(".acc-btn");
    if (!btn) return;
    const abrir = btn.getAttribute("aria-expanded") !== "true";
    cont.querySelectorAll(".acc-btn").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      document.getElementById(b.getAttribute("aria-controls")).style.maxHeight = null;
    });
    if (abrir) {
      btn.setAttribute("aria-expanded", "true");
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
document.addEventListener("DOMContentLoaded", iniciarFaq);
