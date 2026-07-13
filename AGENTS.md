# Guía del proyecto: El meu Cel Profund

## Comunicación

- Comunicarse con el autor en español, de forma clara y paso a paso.
- El contenido público del sitio y las etiquetas de las fichas se escriben en catalán.

## Diseño

- Conservar la tipografía elegida por el autor: Inter para los textos y Space Mono para los datos técnicos.
- Mantener la estética oscura actual y no rediseñar el sitio de forma amplia sin solicitarlo primero.

## Publicación y estado actual

- La web pública activa se publica con Cloudflare Pages en `https://porfolio-astrofoto.pages.dev`.
- GitHub Pages está también configurado como alternativa, pero el enlace público de referencia es el de Cloudflare Pages.
- Las fichas permiten ampliar la imagen principal y las adicionales al pulsarlas; el visor se cierra con la `×`, al tocar fuera o con `Esc`.
- El catálogo permite buscar **solo por el campo `objecte`** y ordenar por fecha reciente o por nombre natural (`M2` antes que `M10`, `NGC 2237` antes que `NGC 6960`). Esta ordenación está disponible también en cada categoría.
- El diseño del catálogo y las categorías está aprobado en este punto; no cambiarlo de forma amplia sin petición expresa.

## Trabajo y publicación

- El proyecto editable es esta carpeta: `work/porfolio-astrofoto`.
- Ejecutar `npm run dev` en una terminal para la vista local y conservarla abierta mientras se prueba el sitio.
- Para Git (`git status`, `git add`, `git commit`, `git push`) usar una **segunda terminal**; la que ejecuta el servidor local no acepta esos comandos.
- Tras verificar con `npm run build`, publicar con `git push origin main`. Cloudflare Pages se actualiza automáticamente después de recibir el cambio en GitHub; puede requerir uno o dos minutos y una recarga forzada.
- Antes de subir, revisar `git status` para distinguir cambios de código de las nuevas fichas e imágenes del autor.

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
