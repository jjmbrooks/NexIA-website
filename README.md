# NexIA — Sitio web (nexia.ing)

Sitio estático de NexIA Digital: página informativa, mobile-first, en español e
inglés, con tema claro y oscuro. Se publica con GitHub Pages y el dominio
`nexia.ing` apunta a este repositorio.

## Origen

Compilación estática (v3) del Space `pagina-de-nexia`: `index.html` +
`assets/` es el sitio tal como se sirve. No se edita a mano: los cambios se
hacen en el Space y se vuelve a copiar la salida compilada (`.space-build/`)
a la raíz de este repo.

## Estructura

- `index.html` — punto de entrada del sitio.
- `assets/` — JavaScript y CSS compilados del sitio.
- `manifest.json` — manifiesto de la compilación (fecha y hash del contenido).
- `logo/` — sistema de logo terminado de NexIA (SVG a color: horizontal e
  isotipo). El resto del sistema (vertical, negativo, una tinta, PNG) vive en
  Dropbox `/SMM/NexIA/Logo definitivo/`.

## Publicación (GitHub Pages)

Repo → Settings → Pages → Build and deployment → Deploy from a branch →
rama `main`, carpeta `/ (root)`. El sitio queda en
`https://jjmbrooks.github.io/NexIA-website/` hasta que el dominio `nexia.ing`
apunte aquí (paso de DNS, fuera de este repo).

## Regla de redacción

En el sitio se habla de `problema` / `dificultad`, nunca de `dolor`.
