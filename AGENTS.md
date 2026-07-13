# Guía del proyecto: El meu Cel Profund

## Comunicación

- Comunicarse con el autor en español, de forma clara y paso a paso.
- El contenido público del sitio y las etiquetas de las fichas se escriben en catalán.

## Diseño

- Conservar la tipografía elegida por el autor: Inter para los textos y Space Mono para los datos técnicos.
- Mantener la estética oscura actual y no rediseñar el sitio de forma amplia sin solicitarlo primero.

## Fichas de objetos

- Cada objeto es un archivo Markdown en `src/content/fotos/`.
- La imagen principal se guarda en `public/imagenes/` y se declara con `imatge`.
- `imatge` debe aparecer siempre inmediatamente después de `categoria`.
- `imatges_addicionals` debe aparecer al final del frontmatter, antes del cierre `---`.
- `imatges_addicionals` es opcional: incluir únicamente las imágenes que existan físicamente.
- Antes de generar o modificar una ficha, revisar los archivos reales en `public/imagenes/`; nunca inventar nombres de imagen.

## Imágenes adicionales

- Mantener este orden: `starless`, `crop`, `fov`, `annotated`, `process`, `other`.
- Usar las extensiones reales disponibles (`.jpg` o `.webp`).
- Convención habitual de nombres: `OBJETO_starless`, `OBJETO_crop`, `OBJETO_fov`, `OBJETO_annotated` y `OBJETO_process`.
- Para variantes no cubiertas por esa convención, usar `tipus: "other"` y un título descriptivo.
- No duplicar en el cuerpo Markdown imágenes ya declaradas en `imatges_addicionals`.

## Verificación

- Tras cambiar datos, imágenes o plantillas, ejecutar `npm run build` desde la raíz del proyecto.
- Mantener la compatibilidad: las tarjetas usan `imatge`; las fichas muestran `imatges_addicionals` automáticamente.
