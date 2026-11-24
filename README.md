# NexIA — sitio web para clientes

Sitio real de NexIA Digital para sus clientes (no el documento de
definición del proyecto, que vive en el Space `pagina-de-nexia`).

- **En vivo:** https://jjmbrooks.github.io/NexIA-website/
- **Dominio final (pendiente):** www.nexia.ing

## Qué es

Página estática (HTML + CSS + JS, sin build): vende problemas y
resultados, no productos. Las dos servicios — campañas de marketing y
automatizaciones con IA — aparecen solo en letra chica, como el «cómo».
Wording: «problema» / «dificultad», nunca «dolor». Sin cifras ni
testimonios inventados: la sección de resultados es un espacio reservado
para casos reales.

## Estructura (9 secciones)

Hero · ¿Te suena familiar? · Lo que cambia (problemas → resultados) ·
Así trabajamos · ¿Para quién es? · Resultados reales (reservado) ·
Preguntas de siempre · Formularios · Cierre por WhatsApp.

Mobile first, ES/EN con un clic, claro/oscuro con un clic (claro por
defecto). Identidad JJMBrooks minimalista editorial: terracota #C9785B,
arena #E9DCC5, azul claro #AECEDB, carbón #3A3D40, blanco #FFFFFF;
Playfair Display en titulares, Inter en cuerpo. Logo definitivo de
NexIA en `logo/` (color y negativo para tema oscuro).

## Formularios

El sitio estático no guarda envíos: los dos formularios (Cuéntanos tu
caso, Revisión gratuita) abren WhatsApp con un mensaje prellenado con
los datos escritos.

⚠ **PENDIENTE — número de WhatsApp:** `app.js` usa el placeholder
`527550000000` (755 000 0000, el de los ejemplos del documento de
definición). Hay que reemplazar `WA_NUMBER` por el número real de
NexIA antes de anunciarlo a clientes.

## Archivos

- `index.html` — contenido y estructura
- `styles.css` — estilos, temas claro/oscuro
- `app.js` — diccionario ES/EN, toggles, formularios → WhatsApp
- `logo/` — logo horizontal e isotipo (color y negativo)
- `favicon.svg` — isotipo
