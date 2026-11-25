/* ==========================================================
   noticias.js — listado de noticias y modal "Leer más".
   ========================================================== */
function iniciarNoticias() {
  const grilla = document.getElementById("grid-noticias");
  if (!grilla) return;
  grilla.innerHTML = NOTICIAS.map((n) => `
    <article class="tarjeta">
      <img src="img/noticia-${n.id}.svg" alt="" loading="lazy">
      <div class="tarjeta-cuerpo">
        <time class="fecha" datetime="${n.fecha}">${fechaLarga(n.fecha)}</time>
        <h3>${n.titulo}</h3>
        <p>${n.resumen}</p>
        <div class="tarjeta-pie"><button class="btn btn-secundario btn-chico" data-noticia="${n.id}">Leer más</button></div>
      </div>
    </article>`).join("");

  grilla.addEventListener("click", (e) => {
    const b = e.target.closest("[data-noticia]");
    if (!b) return;
    const n = NOTICIAS.find((x) => x.id === Number(b.dataset.noticia));
    abrirModal(`
      <div class="modal-contenido modal-noticia">
        <img src="img/noticia-${n.id}.svg" alt="">
        <div class="modal-texto">
          <time class="fecha" datetime="${n.fecha}">${fechaLarga(n.fecha)}</time>
          <h2>${n.titulo}</h2>
          <p>${n.texto}</p>
        </div>
      </div>`, "modal-noticia");
  });
}
document.addEventListener("DOMContentLoaded", iniciarNoticias);
