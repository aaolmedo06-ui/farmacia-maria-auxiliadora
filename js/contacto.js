/* ==========================================================
   contacto.js — validación del formulario con JavaScript,
   mensaje de confirmación y envío con EmailJS.
   ========================================================== */
function iniciarContacto() {
  const form = document.getElementById("form-contacto");
  if (!form) return;

  // Mapa de Google Maps (la URL se configura en js/config.js)
  const mapa = document.getElementById("mapa");
  if (mapa) mapa.src = CONFIG.mapa;

  // Inicializa EmailJS si las claves ya fueron configuradas
  const emailjsListo = typeof emailjs !== "undefined" && !CONFIG.emailjs.publicKey.startsWith("TU_");
  if (emailjsListo) emailjs.init({ publicKey: CONFIG.emailjs.publicKey });

  const reglas = {
    nombre:   (v) => (v.trim().length >= 2 ? "" : "Ingresá tu nombre (mínimo 2 letras)."),
    apellido: (v) => (v.trim().length >= 2 ? "" : "Ingresá tu apellido (mínimo 2 letras)."),
    email:    (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Ingresá un correo válido, por ejemplo nombre@correo.com."),
    telefono: (v) => (/^[+\d][\d\s-]{6,}$/.test(v.trim()) ? "" : "Ingresá un teléfono válido (solo números, mínimo 7 dígitos)."),
    asunto:   (v) => (v.trim().length >= 4 ? "" : "Escribí un asunto de al menos 4 caracteres."),
    tipo:     (v) => (v ? "" : "Elegí un tipo de consulta."),
    mensaje:  (v) => (v.trim().length >= 10 ? "" : "El mensaje debe tener al menos 10 caracteres."),
    acepto:   () => (form.acepto.checked ? "" : "Tenés que aceptar la política de privacidad."),
  };

  function validar(nombre) {
    const campo = form.elements[nombre];
    const contenedor = campo.closest(".campo");
    const error = reglas[nombre](campo.value);
    contenedor.classList.toggle("error", !!error);
    contenedor.classList.toggle("ok", !error);
    contenedor.querySelector(".msg-error").textContent = error;
    return !error;
  }

  Object.keys(reglas).forEach((n) => {
    form.elements[n].addEventListener("blur", () => validar(n));
    form.elements[n].addEventListener("input", () => { if (form.elements[n].closest(".campo").classList.contains("error")) validar(n); });
  });

  // Contador de caracteres del mensaje
  const contador = document.getElementById("contador-car");
  form.mensaje.addEventListener("input", () => (contador.textContent = `${form.mensaje.value.length} / 500`));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const todoOk = Object.keys(reglas).map(validar).every(Boolean);
    if (!todoOk) {
      mostrarToast("Revisá los campos marcados en rojo.", "error");
      const primero = form.querySelector(".campo.error input, .campo.error select, .campo.error textarea");
      if (primero) primero.focus();
      return;
    }
    const boton = form.querySelector("button[type=submit]");
    boton.disabled = true;
    boton.textContent = "Enviando…";
    const datos = {
      nombre: form.nombre.value.trim(), apellido: form.apellido.value.trim(),
      email: form.email.value.trim(), telefono: form.telefono.value.trim(),
      asunto: form.asunto.value.trim(), tipo: form.tipo.value, mensaje: form.mensaje.value.trim(),
    };
    try {
      if (!emailjsListo) throw new Error("EmailJS sin configurar");
      await emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateId, datos);
      const conf = document.getElementById("confirmacion");
      conf.textContent = `¡Gracias, ${datos.nombre}! Recibimos tu mensaje y te responderemos a ${datos.email} lo antes posible.`;
      conf.classList.add("visible");
      mostrarToast("Mensaje enviado correctamente ✔");
      form.reset();
      form.querySelectorAll(".campo").forEach((c) => c.classList.remove("ok", "error"));
      contador.textContent = "0 / 500";
    } catch (err) {
      console.error("Error al enviar con EmailJS:", err);
      mostrarToast(emailjsListo ? "No pudimos enviar el mensaje. Intentá de nuevo o escribinos por WhatsApp." : "Falta configurar EmailJS en js/config.js (ver README).", "error");
    } finally {
      boton.disabled = false;
      boton.textContent = "Enviar mensaje";
    }
  });
}
document.addEventListener("DOMContentLoaded", iniciarContacto);
