/* ==========================================================
   CONFIGURACIÓN DEL SITIO
   Cambiá los datos de este archivo y se actualizan en TODAS
   las páginas (teléfono, correo, dirección, horario, redes).
   ========================================================== */
const CONFIG = {
  nombre: "Farmacia María Auxiliadora",
  telefono: "0982 571 941",
  whatsapp: "595982571941",
  email: "aaolmedo06@gmail.com",
  direccion: "Tobatí, Cordillera, Paraguay",
  // Mapa embebido (busca la farmacia en Tobatí) y enlace directo a Google Maps
  mapa: "https://www.google.com/maps?q=Farmacia+Mar%C3%ADa+Auxiliadora,+Tobat%C3%AD,+Paraguay&output=embed",
  mapaLink: "https://maps.app.goo.gl/H1Rg1oXRdcUEPbHEA?g_st=ic",
  // Horario por día de la semana (0 = domingo ... 6 = sábado). null = cerrado.
  horario: {
    0: ["07:00", "20:00"], 1: ["07:00", "20:00"], 2: ["07:00", "20:00"], 3: ["07:00", "20:00"],
    4: ["07:00", "20:00"], 5: ["07:00", "20:00"], 6: ["07:00", "20:00"],
  },
  horarioTexto: "Todos los días de 07:00 a 20:00",

  // EmailJS (https://www.emailjs.com) — ver README.md, paso a paso.
  emailjs: {
    publicKey: "zmmR6eU8yMzpQ0zlf",
   serviceId: "service_xnegm4i",
   templateId: "template_29qkg26",
  },
};
