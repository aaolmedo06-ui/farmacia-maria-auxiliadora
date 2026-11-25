# Farmacia María Auxiliadora — Sitio web (Programación III)

Sitio web de 9 páginas hecho con HTML5, CSS3 y JavaScript (sin frameworks).

## 1. Datos del sitio

Los datos de contacto (teléfono, WhatsApp, correo, dirección, horario y mapa) ya están cargados en `js/config.js`.
Si algo cambia, se edita ahí y se actualiza en todas las páginas.

## 2. Configurar EmailJS (formulario de contacto)

1. Creá una cuenta gratis en https://www.emailjs.com
2. **Email Services** → *Add New Service* (Gmail, por ejemplo) → copiá el **Service ID**.
3. **Email Templates** → *Create New Template*. En el cuerpo usá estas variables:
   `{{nombre}} {{apellido}} {{email}} {{telefono}} {{asunto}} {{tipo}} {{mensaje}}`
   En *To Email* poné el correo donde querés recibir los mensajes, y en *Reply To* `{{email}}`.
   Copiá el **Template ID**.
4. **Account → General** → copiá tu **Public Key**.
5. Pegá los tres valores en `js/config.js`, dentro de `emailjs`.

## 3. Publicar gratis en GitHub Pages

1. Creá un repositorio público en https://github.com (por ejemplo `farmacia-maria-auxiliadora`).
2. Subí **el contenido** de esta carpeta (que `index.html` quede en la raíz del repositorio).
3. *Settings → Pages → Branch: main → Folder: / (root) → Save*.
4. En 1–2 minutos tu URL será `https://TU-USUARIO.github.io/farmacia-maria-auxiliadora/`. Esa es la URL a entregar.

(Alternativa más rápida: arrastrar la carpeta a https://app.netlify.com/drop)

## 4. Contenido de ejemplo para reemplazar

- Productos, noticias, preguntas y testimonios: `js/data.js` (precios y textos de ejemplo).
- Imágenes: son ilustraciones generadas (`img/*.svg`). Podés reemplazarlas por fotos reales de tu
  farmacia manteniendo el mismo nombre de archivo, o cambiando la ruta en `js/data.js`.
- Historia, línea de tiempo y equipo: `nosotros.html`.
- Política de privacidad: `privacidad.html` (texto base, revisalo).

## 5. Estructura

```
index.html  nosotros.html  productos.html  galeria.html  noticias.html
faq.html  contacto.html  desarrolladores.html  privacidad.html
css/styles.css
js/  config.js  data.js  main.js  productos.js  galeria.js  noticias.js  faq.js  contacto.js
img/ (ilustraciones SVG)
```

## 6. Requisitos del examen → dónde están

| Requisito | Dónde |
|---|---|
| Header fijo, menú responsive | `css/styles.css` (sección 3), `js/main.js` |
| Scroll suave y "volver arriba" | `html { scroll-behavior }`, `js/main.js` |
| Modal (productos, noticias) y lightbox | `js/main.js`, `productos.js`, `noticias.js`, `galeria.js` |
| 13 productos, 20 imágenes, 6 noticias, 10 preguntas | `js/data.js` |
| Accordion | `js/faq.js` |
| Validación + confirmación + EmailJS | `js/contacto.js` |
| Modo claro/oscuro con localStorage | `js/main.js`, script en el `<head>` de cada página |
| Animaciones CSS / JavaScript | CSS: banner, tarjetas, modal. JS: contadores, carrusel, toast |
