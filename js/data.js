/* ==========================================================
   DATOS DEL SITIO: productos, galería, noticias y preguntas.
   Para agregar o cambiar contenido, editá las listas de abajo.
   (Textos y precios de ejemplo: reemplazalos por los reales.)
   ========================================================== */

const CATEGORIAS = [
  "Medicamentos de venta libre", "Vitaminas y suplementos", "Dermocosmética",
  "Cuidado personal", "Primeros auxilios",
];

const PRODUCTOS = [
  { id: 1, nombre: "VitaCamin C 1000 mg", categoria: "Vitaminas y suplementos", precio: 30000, imagen: "img/p-vitamina-c.jpg", destacado: true,
    descripcion: "Suplemento dietario de vitamina C, comprimidos masticables sabor naranja.", detalle: "Caja con 30 comprimidos masticables sabor naranja, vía oral. Suplemento dietario de venta libre.", usos: ["Presentación: caja x 30 comprimidos masticables", "Sabor naranja", "Venta libre"] },
  { id: 2, nombre: "Nivea Sun Protect & Hydrate FPS 50", categoria: "Dermocosmética", precio: 70000, imagen: "img/p-protector-solar.jpg", destacado: true,
    descripcion: "Protector solar con hidratación prolongada y pantenol.", detalle: "Protector solar resistente al agua, de fórmula no grasa y rápida absorción, que no deja residuos blancos. Protección alta UVA/UVB.", usos: ["Presentación: 200 ml", "FPS 50, protección alta UVA y UVB", "Resistente al agua"] },
  { id: 3, nombre: "Gel antiséptico Escudo 70% alcohol", categoria: "Cuidado personal", precio: 25000, imagen: "img/p-alcohol-gel.jpg",
    descripcion: "Gel antiséptico tópico a base de alcohol etílico para las manos.", detalle: "Gel antiséptico con 70% de alcohol, sin sensación pegajosa, sin sensación de resequedad y sin parabenos. Envase con dosificador.", usos: ["Presentación: 225 ml con dosificador", "Uso externo", "Producto inflamable, mantener alejado del fuego"] },
  { id: 4, nombre: "Nivea Crema Corporal Hidratación Express", categoria: "Dermocosmética", precio: 25000, imagen: "img/p-crema-corporal.jpg",
    descripcion: "Crema corporal de humectación profunda y rápida absorción.", detalle: "Crema corporal 5 en 1 con serum de humectación profunda y minerales marinos, para piel normal a seca.", usos: ["Presentación: 400 ml", "Humectación profunda de rápida absorción", "Para piel normal a seca"] },
  { id: 5, nombre: "Termómetro digital Aspen", categoria: "Primeros auxilios", precio: 30000, imagen: "img/p-termometro.jpg", destacado: true,
    descripcion: "Termómetro digital de lectura clara para controlar la temperatura corporal.", detalle: "Termómetro digital con pantalla LCD, punta metálica y botón de encendido.", usos: ["Pantalla digital", "Fácil de limpiar", "Uso personal"] },
  { id: 6, nombre: "Multi + NAC Vitamínico AllWays", categoria: "Vitaminas y suplementos", precio: 90000, imagen: "img/p-multivitaminico.jpg", destacado: true,
    descripcion: "Complemento alimenticio con 21 vitaminas y minerales más NAC.", detalle: "Complemento alimenticio en cápsulas con 21 vitaminas y minerales + NAC, de la A a la Z.", usos: ["Presentación: 60 cápsulas de 550 mg", "Certificado GMP", "Conservar en lugar fresco y seco"] },
  { id: 7, nombre: "Shampoo Suave Bomba Frutal", categoria: "Cuidado personal", precio: 20000, imagen: "img/p-shampoo.jpg",
    descripcion: "Shampoo de suavidad con mix de vitaminas, sin parabenos.", detalle: "Shampoo Suave Vitaminas, línea Bomba Frutal, para suavidad del cabello. Con mix de vitaminas y sin parabenos.", usos: ["Presentación: 930 ml", "Con mix de vitaminas", "Sin parabenos"] },
  { id: 8, nombre: "Nivea Protector Labial Cherry Shine", categoria: "Cuidado personal", precio: 45000, imagen: "img/p-balsamo-labial.jpg",
    descripcion: "Bálsamo labial con aceites de origen natural y aroma a cereza.", detalle: "Protector labial con aceites de origen natural, aroma a cereza y 24 horas de humectación. Libre de aceite mineral.", usos: ["Presentación: 4,8 g / 5,5 ml", "24 horas de humectación", "Libre de aceite mineral"] },
  { id: 9, nombre: "Botiquín de primeros auxilios", categoria: "Primeros auxilios", precio: 28000, imagen: "img/p-botiquin.jpg",
    descripcion: "Botiquín básico con alcohol, algodón, gasas, vendas, apósitos y más.", detalle: "Botiquín en estuche rígido que incluye alcohol, agua oxigenada, antiséptico, algodón, vendas, apósitos, guantes, tijera, pinza y pack de frío.", usos: ["Estuche con insumos básicos", "Ideal para hogar o auto", "Revisar fechas de vencimiento periódicamente"] },
  { id: 10, nombre: "Omega 3 1000 mg Landerfit", categoria: "Vitaminas y suplementos", precio: 115000, imagen: "img/p-omega-3.jpg",
    descripcion: "Suplemento de aceite de pescado en cápsulas blandas.", detalle: "Suplemento dietario de aceite de pescado (Omega 3) de 1000 mg en cápsulas blandas.", usos: ["Presentación: 200 softgels", "Suplemento dietario", "No reemplaza una alimentación variada"] },
  { id: 11, nombre: "Pañuelos desechables Elite Professional", categoria: "Cuidado personal", precio: 10000, imagen: "img/p-panuelos.jpg",
    descripcion: "Pañuelos descartables de doble hoja.", detalle: "Caja de pañuelos descartables de doble hoja, ideal para el hogar, el consultorio o la oficina.", usos: ["Presentación: caja x 90 unidades", "Doble hoja", "Uso personal"] },
  { id: 12, nombre: "Alcohol 70° Gama-Lab", categoria: "Primeros auxilios", precio: 8000, imagen: "img/p-alcohol-70.jpg",
    descripcion: "Alcohol de 70° para uso externo, frasco de 120 ml.", detalle: "Alcohol 70° de uso externo, útil para la limpieza y desinfección de la piel y de instrumentos. Contenido neto: 120 ml.", usos: ["Presentación: frasco de 120 ml", "Solo para uso externo", "Producto inflamable, mantener alejado del fuego y de los niños"] },
  { id: 13, nombre: "Z-mol Paracetamol 500 mg", categoria: "Medicamentos de venta libre", precio: 15000, imagen: "img/p-paracetamol.jpg",
    descripcion: "Analgésico y antifebril, caja x 20 comprimidos.", detalle: "Paracetamol 500 mg, analgésico y antifebril que no irrita la mucosa gástrica. Sin gluten. Caja de 20 comprimidos. Leer el prospecto y consultar al farmacéutico o al médico ante cualquier duda.", usos: ["Presentación: caja x 20 comprimidos", "Alivio del dolor y la fiebre", "Respetar la dosis indicada; no exceder la dosis máxima diaria"] },
];

// Galería: fotos reales del local. 'thumb' = miniatura liviana (grilla), 'src' = imagen ampliada (lightbox)
const GALERIA = [
  { t: "Nuestro farmacéutico", c: "Equipo" },
  { t: "Fachada del dispensario", c: "Local" },
  { t: "Entrada y servicios de pago", c: "Local" },
  { t: "Mostrador y perfumería", c: "Local" },
  { t: "Vitrinas laterales", c: "Local" },
  { t: "Vitrina de cuidado personal", c: "Cuidado personal" },
  { t: "Pañales para bebé", c: "Cuidado personal" },
  { t: "Estantería de medicamentos I", c: "Medicamentos" },
  { t: "Estantería de medicamentos II", c: "Medicamentos" },
  { t: "Estantería de medicamentos III", c: "Medicamentos" },
  { t: "Librería y útiles escolares", c: "Más productos" },
  { t: "Nebulización y analgésicos", c: "Medicamentos" },
  { t: "Coloración y perfumes", c: "Cuidado personal" },
  { t: "Toallitas y suavizantes", c: "Cuidado personal" },
  { t: "Toallitas húmedas", c: "Cuidado personal" },
  { t: "Vista desde el interior", c: "Local" },
  { t: "Puesto de atención y caja", c: "Equipo" },
  { t: "Interior del local", c: "Local" },
  { t: "Estantes del fondo", c: "Local" },
  { t: "Pasillo de productos", c: "Local" },
].map((g, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { ...g, thumb: `img/gal-${n}-t.jpg`, src: `img/gal-${n}.jpg` };
});

const NOTICIAS = [
  { id: 1, fecha: "2026-11-10", titulo: "Jornada gratuita de control de presión arterial", resumen: "Este mes sumamos una jornada abierta para que toda la comunidad se controle sin costo.",
    texto: "Durante una semana, nuestro equipo realizará controles de presión arterial sin costo para quienes se acerquen a la farmacia. Es una medición rápida y sirve como primer paso para cuidar tu salud. Ante valores fuera de lo normal, te orientaremos para que consultes con tu médico." },
  { id: 2, fecha: "2026-11-03", titulo: "Nuevo servicio de entrega a domicilio", resumen: "Ahora podés pedir por WhatsApp y recibir tus productos sin salir de casa.",
    texto: "Lanzamos el servicio de entrega a domicilio en la zona. Escribinos por WhatsApp con tu pedido, confirmamos disponibilidad y coordinamos la entrega. Los medicamentos con receta se entregan únicamente con la receta correspondiente." },
  { id: 3, fecha: "2026-10-27", titulo: "Cómo armar el botiquín del hogar", resumen: "Una lista simple de lo que no debería faltar en tu casa ni en tu auto.",
    texto: "Un botiquín básico incluye gasas, vendas, apósitos, antiséptico, termómetro, tijera y guantes. Revisá las fechas de vencimiento cada seis meses y guardalo en un lugar fresco, seco y fuera del alcance de los niños." },
  { id: 4, fecha: "2026-10-18", titulo: "Cuidados de la piel en verano", resumen: "El calor llega fuerte: protector solar, hidratación y hábitos para cuidar tu piel.",
    texto: "Usá protector solar todos los días, reaplicalo cada dos horas si estás al aire libre y evitá la exposición en las horas de mayor radiación. Tomar agua y elegir cremas hidratantes livianas ayuda a mantener la piel en buen estado." },
  { id: 5, fecha: "2026-10-05", titulo: "Uso responsable de los medicamentos", resumen: "Leer el prospecto y consultar al farmacéutico evita errores comunes.",
    texto: "Antes de tomar cualquier medicamento, leé el prospecto, respetá la dosis indicada y no compartas tus medicinas. Ante cualquier duda, el farmacéutico está para ayudarte. Nunca te automediques con antibióticos." },
  { id: 6, fecha: "2026-09-22", titulo: "Llegó nuestra nueva línea de dermocosmética", resumen: "Sumamos cuidado facial y corporal para todo tipo de piel.",
    texto: "Incorporamos una nueva línea de productos de cuidado facial y corporal: limpiadores, hidratantes y protectores solares. Pedí asesoramiento en el mostrador para elegir el que mejor se adapte a tu piel." },
];

const PREGUNTAS = [
  { q: "¿Cuál es el horario de atención?", a: "Atendemos todos los días de 07:00 a 20:00. Podés ver si estamos abiertos ahora en la página de inicio." },
  { q: "¿Hacen entregas a domicilio?", a: "Sí. Escribinos por WhatsApp con tu pedido, confirmamos disponibilidad y coordinamos la entrega en la zona." },
  { q: "¿Necesito receta para comprar medicamentos?", a: "Los medicamentos de venta bajo receta se entregan solamente con la receta médica correspondiente. Los de venta libre no la requieren." },
  { q: "¿Puedo consultar a un farmacéutico?", a: "Por supuesto. Nuestro farmacéutico te orienta sobre el uso correcto de los productos, aunque no reemplaza la consulta con tu médico." },
  { q: "¿Qué medios de pago aceptan?", a: "Aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias." },
  { q: "¿Cómo sé si tienen un producto en stock?", a: "Escribinos por WhatsApp o llamanos y te confirmamos al instante la disponibilidad y el precio." },
  { q: "¿Puedo devolver un producto?", a: "Los productos de cuidado personal y accesorios cerrados, con su envase original y comprobante, pueden cambiarse. Por seguridad, los medicamentos no admiten devolución." },
  { q: "¿Realizan controles de salud en la farmacia?", a: "Realizamos controles básicos como presión arterial y temperatura. Estate atento a nuestras jornadas en la sección de noticias." },
  { q: "¿Cómo guardo mis medicamentos correctamente?", a: "En un lugar fresco, seco, lejos de la luz directa y fuera del alcance de los niños. Revisá siempre la fecha de vencimiento." },
  { q: "¿Cómo puedo contactarlos?", a: "Por teléfono, WhatsApp, correo electrónico o el formulario de la página de Contacto. También podés visitarnos en el local." },
];

const TESTIMONIOS = [
  { nombre: "Laura Benítez", rol: "Clienta del barrio", texto: "Siempre me atienden con una sonrisa y me explican todo con paciencia. Mi farmacia de confianza." },
  { nombre: "Carlos Ortiz", rol: "Padre de familia", texto: "El servicio de entrega me salvó una noche con mi hijo con fiebre. Rápidos y muy amables." },
  { nombre: "Dra. Marta Giménez", rol: "Profesional de la salud", texto: "Tienen buen stock y el farmacéutico siempre aclara mis dudas. Recomiendo la farmacia sin dudar." },
];

/* Formatea un número como guaraníes: 14000 → "₲ 14.000" */
function guaranies(n) {
  return "₲ " + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function fechaLarga(iso) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-PY", { day: "numeric", month: "long", year: "numeric" });
}
