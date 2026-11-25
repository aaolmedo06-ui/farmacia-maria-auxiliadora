/* ==========================================================
   galeria.js — galería responsive con filtro por categoría y
   visor ampliado (lightbox) con flechas del teclado.
   ========================================================== */
function iniciarGaleria() {
  const grilla = document.getElementById("galeria");
  if (!grilla) return;
  const filtros = document.getElementById("filtros-galeria");
  const categorias = ["Todas", ...new Set(GALERIA.map((g) => g.c))];
  let visibles = GALERIA;

  filtros.innerHTML = categorias.map((c, i) => `<button class="chip ${i === 0 ? "activo" : ""}" data-cat="${c}">${c}</button>`).join("");

  const pintar = () => {
    grilla.innerHTML = visibles.map((g, i) => `
      <button class="galeria-item" data-i="${i}" data-titulo="${g.t}" aria-label="Ampliar: ${g.t}">
        <img src="${g.thumb}" alt="${g.t}" loading="lazy">
      </button>`).join("");
  };

  const abrir = (i) => {
    const n = visibles.length;
    i = (i + n) % n;
    const g = visibles[i];
    abrirModal(`
      <div class="lightbox">
        <img src="${g.src}" alt="${g.t}">
        <p>${g.t} · ${i + 1} de ${n}</p>
        <button class="btn-icono lb-nav lb-prev" aria-label="Imagen anterior">‹</button>
        <button class="btn-icono lb-nav lb-next" aria-label="Imagen siguiente">›</button>
      </div>`, "lightbox");
    document.querySelector(".lb-prev").onclick = () => abrir(i - 1);
    document.querySelector(".lb-next").onclick = () => abrir(i + 1);
    alTeclear = (e) => {
      if (e.key === "ArrowLeft") abrir(i - 1);
      if (e.key === "ArrowRight") abrir(i + 1);
    };
  };

  filtros.addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    visibles = b.dataset.cat === "Todas" ? GALERIA : GALERIA.filter((g) => g.c === b.dataset.cat);
    filtros.querySelectorAll(".chip").forEach((c) => c.classList.toggle("activo", c === b));
    pintar();
  });
  grilla.addEventListener("click", (e) => {
    const b = e.target.closest("[data-i]");
    if (b) abrir(Number(b.dataset.i));
  });
  pintar();
}
document.addEventListener("DOMContentLoaded", iniciarGaleria);
