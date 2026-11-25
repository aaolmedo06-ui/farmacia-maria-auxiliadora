/* ==========================================================
   productos.js — catálogo con filtro por categoría, buscador
   y modal de "Ver más". También muestra los destacados en Inicio.
   ========================================================== */
function tarjetaProducto(p) {
  return `
  <article class="tarjeta">
    <img class="foto-producto" src="${p.imagen}" alt="${p.nombre}" loading="lazy">
    <div class="tarjeta-cuerpo">
      <span class="etiqueta">${p.categoria}</span>
      <h3>${p.nombre}</h3>
      <p>${p.descripcion}</p>
      <div class="tarjeta-pie">
        <span class="precio">${guaranies(p.precio)}</span>
        <button class="btn btn-oscuro btn-chico" data-ver="${p.id}">Ver más</button>
      </div>
    </div>
  </article>`;
}

function verProducto(id) {
  const p = PRODUCTOS.find((x) => x.id === id);
  if (!p) return;
  const consulta = `Hola, quisiera consultar por: ${p.nombre}`;
  abrirModal(`
  <div class="modal-contenido">
    <img class="foto-producto" src="${p.imagen}" alt="${p.nombre}">
    <div class="modal-texto">
      <span class="etiqueta">${p.categoria}</span>
      <h2>${p.nombre}</h2>
      <p class="precio">${guaranies(p.precio)}</p>
      <p>${p.detalle}</p>
      <ul>${p.usos.map((u) => `<li>${u}</li>`).join("")}</ul>
      <a class="btn btn-primario" href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(consulta)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
      <p class="nota-legal">Precio referencial, sujeto a stock. Ante cualquier duda sobre medicamentos, consultá a tu farmacéutico o médico.</p>
    </div>
  </div>`);
}

function iniciarProductos() {
  const grilla = document.getElementById("grid-productos");
  const destacados = document.getElementById("grid-destacados");

  if (destacados) {
    destacados.innerHTML = PRODUCTOS.filter((p) => p.destacado).map(tarjetaProducto).join("");
  }
  if (grilla) {
    const filtros = document.getElementById("filtros");
    const buscador = document.getElementById("buscador");
    let categoria = "Todos";
    filtros.innerHTML = ["Todos", ...CATEGORIAS].map((c) => `<button class="chip ${c === "Todos" ? "activo" : ""}" data-cat="${c}">${c}</button>`).join("");
    const pintar = () => {
      const q = buscador.value.trim().toLowerCase();
      const lista = PRODUCTOS.filter((p) => (categoria === "Todos" || p.categoria === categoria) && (p.nombre + " " + p.descripcion).toLowerCase().includes(q));
      grilla.innerHTML = lista.length ? lista.map(tarjetaProducto).join("") : `<p class="vacio">No encontramos productos con ese criterio. Probá con otra categoría o palabra.</p>`;
    };
    filtros.addEventListener("click", (e) => {
      const b = e.target.closest("[data-cat]");
      if (!b) return;
      categoria = b.dataset.cat;
      filtros.querySelectorAll(".chip").forEach((c) => c.classList.toggle("activo", c === b));
      pintar();
    });
    buscador.addEventListener("input", pintar);
    pintar();
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-ver]");
    if (b) verProducto(Number(b.dataset.ver));
  });
}
document.addEventListener("DOMContentLoaded", iniciarProductos);
