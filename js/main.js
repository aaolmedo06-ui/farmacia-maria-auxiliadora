/* ==========================================================
   main.js — funciones comunes a todas las páginas:
   datos de contacto, modo claro/oscuro, menú, scroll suave,
   "volver arriba", modal, avisos (toast), estado abierto/cerrado,
   contadores animados y carrusel de testimonios.
   ========================================================== */

/* ---------- Datos de CONFIG en la página ---------- */
function aplicarConfig() {
  document.querySelectorAll("[data-cfg]").forEach((el) => {
    const valor = CONFIG[el.dataset.cfg];
    if (valor) el.textContent = valor;
  });
  document.querySelectorAll("[data-tel]").forEach((el) => (el.href = "tel:" + CONFIG.telefono.replace(/\s/g, "")));
  document.querySelectorAll("[data-mail]").forEach((el) => (el.href = "mailto:" + CONFIG.email));
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const texto = el.dataset.waTexto || "Hola, quisiera hacer una consulta.";
    el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-mapa-link]").forEach((el) => {
    el.href = CONFIG.mapaLink;
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-anio]").forEach((el) => (el.textContent = new Date().getFullYear()));
}

/* ---------- Modo claro / oscuro (localStorage) ---------- */
function iniciarTema() {
  const boton = document.getElementById("btn-tema");
  const raiz = document.documentElement;
  const pintar = () => {
    const oscuro = raiz.dataset.theme === "dark";
    if (boton) {
      boton.textContent = oscuro ? "☀️" : "🌙";
      boton.setAttribute("aria-label", oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    }
  };
  pintar();
  if (!boton) return;
  boton.addEventListener("click", () => {
    const nuevo = raiz.dataset.theme === "dark" ? "light" : "dark";
    raiz.dataset.theme = nuevo;
    try { localStorage.setItem("tema", nuevo); } catch (e) { /* almacenamiento no disponible */ }
    pintar();
  });
}

/* ---------- Menú responsive ---------- */
function iniciarMenu() {
  const btn = document.getElementById("btn-menu");
  const nav = document.getElementById("nav");
  if (!btn || !nav) return;
  const cerrar = () => { nav.classList.remove("abierto"); btn.setAttribute("aria-expanded", "false"); btn.textContent = "☰"; };
  btn.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
    btn.textContent = abierto ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", cerrar));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });
}

/* ---------- Scroll suave entre secciones + volver arriba ---------- */
function iniciarScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const destino = id.length > 1 ? document.querySelector(id) : null;
      if (!destino) return;
      e.preventDefault();
      destino.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });
  const subir = document.getElementById("volver-arriba");
  if (!subir) return;
  window.addEventListener("scroll", () => subir.classList.toggle("visible", window.scrollY > 500), { passive: true });
  subir.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Avisos de confirmación (toast) ---------- */
let temporizadorToast;
function mostrarToast(mensaje, tipo = "ok") {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.textContent = mensaje;
  t.className = "toast " + (tipo === "error" ? "error " : "") + "visible";
  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(() => t.classList.remove("visible"), 4000);
}

/* ---------- Modal reutilizable ---------- */
let ultimoFoco = null;
let alTeclear = null; // función opcional para flechas (lightbox)
function abrirModal(html, claseExtra = "") {
  const fondo = document.getElementById("modal");
  const caja = fondo.querySelector(".modal");
  caja.className = "modal " + claseExtra;
  document.getElementById("modal-cuerpo").innerHTML = html;
  ultimoFoco = document.activeElement;
  fondo.classList.add("abierto");
  document.body.style.overflow = "hidden";
  fondo.querySelector(".modal-cerrar").focus();
}
function cerrarModal() {
  const fondo = document.getElementById("modal");
  fondo.classList.remove("abierto");
  document.body.style.overflow = "";
  alTeclear = null;
  if (ultimoFoco) ultimoFoco.focus();
}
function iniciarModal() {
  const fondo = document.getElementById("modal");
  if (!fondo) return;
  fondo.addEventListener("click", (e) => { if (e.target === fondo) cerrarModal(); });
  fondo.querySelector(".modal-cerrar").addEventListener("click", cerrarModal);
  document.addEventListener("keydown", (e) => {
    if (!fondo.classList.contains("abierto")) return;
    if (e.key === "Escape") cerrarModal();
    else if (alTeclear) alTeclear(e);
  });
}

/* ---------- ¿Estamos abiertos ahora? ---------- */
function minutos(hhmm) { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; }
function actualizarEstado() {
  const cajas = document.querySelectorAll("[data-abierto]");
  if (!cajas.length) return;
  const ahora = new Date();
  const hoy = CONFIG.horario[ahora.getDay()];
  const min = ahora.getHours() * 60 + ahora.getMinutes();
  let abierto = false, detalle = "";
  if (hoy && min >= minutos(hoy[0]) && min < minutos(hoy[1])) {
    abierto = true; detalle = `Atendemos hasta las ${hoy[1]}`;
  } else if (hoy && min < minutos(hoy[0])) {
    detalle = `Abrimos hoy a las ${hoy[0]}`;
  } else {
    for (let i = 1; i <= 7; i++) {
      const dia = CONFIG.horario[(ahora.getDay() + i) % 7];
      if (dia) { detalle = (i === 1 ? "Abrimos mañana" : "Abrimos pronto") + ` a las ${dia[0]}`; break; }
    }
  }
  cajas.forEach((c) => {
    c.querySelector(".punto").className = "punto " + (abierto ? "abierto" : "cerrado");
    c.querySelector(".estado-texto").textContent = abierto ? "Abierto ahora" : "Cerrado ahora";
    c.querySelector(".estado-detalle").textContent = detalle;
  });
}

/* ---------- Contadores animados (JavaScript) ---------- */
function iniciarContadores() {
  const els = document.querySelectorAll("[data-contar]");
  if (!els.length) return;
  const animar = (el) => {
    const meta = Number(el.dataset.contar);
    const sufijo = el.dataset.sufijo || "";
    const inicio = performance.now();
    const duracion = 1600;
    const paso = (t) => {
      const p = Math.min((t - inicio) / duracion, 1);
      el.textContent = Math.round(meta * (1 - Math.pow(1 - p, 3))).toLocaleString("es-PY") + sufijo;
      if (p < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  };
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => { if (e.isIntersecting) { animar(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  els.forEach((el) => obs.observe(el));
}

/* ---------- Carrusel de testimonios ---------- */
function iniciarTestimonios() {
  const cont = document.getElementById("testimonios");
  if (!cont) return;
  cont.innerHTML = TESTIMONIOS.map((t, i) => `
    <article class="testi ${i === 0 ? "activo" : ""}">
      <div class="estrellas" aria-label="5 de 5 estrellas">★★★★★</div>
      <blockquote>“${t.texto}”</blockquote>
      <footer><span class="avatar">${t.nombre[0]}</span><div><strong>${t.nombre}</strong><br><small>${t.rol}</small></div></footer>
    </article>`).join("") +
    `<div class="puntos">${TESTIMONIOS.map((_, i) => `<button aria-label="Ver testimonio ${i + 1}" class="${i === 0 ? "activo" : ""}"></button>`).join("")}</div>`;
  const slides = cont.querySelectorAll(".testi");
  const puntos = cont.querySelectorAll(".puntos button");
  let actual = 0, timer;
  const ir = (n) => {
    actual = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("activo", i === actual));
    puntos.forEach((p, i) => p.classList.toggle("activo", i === actual));
  };
  const auto = () => { clearInterval(timer); timer = setInterval(() => ir(actual + 1), 6000); };
  puntos.forEach((p, i) => p.addEventListener("click", () => { ir(i); auto(); }));
  cont.addEventListener("mouseenter", () => clearInterval(timer));
  cont.addEventListener("mouseleave", auto);
  auto();
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarConfig();
  iniciarTema();
  iniciarMenu();
  iniciarScroll();
  iniciarModal();
  actualizarEstado();
  setInterval(actualizarEstado, 60000);
  iniciarContadores();
  iniciarTestimonios();
});
