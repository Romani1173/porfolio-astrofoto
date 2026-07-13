# El meu Cel Profund

Portafoli estàtic d'astrofotografia creat amb Astro.

## Per treballar-hi

1. Instal·la les dependències amb `npm install`.
2. Inicia la versió local amb `npm run dev`.
3. Genera la versió per publicar amb `npm run build`. Els fitxers publicables es creen a `dist/`.

## Abans de publicar

Canvia l'adreça `https://example.com` d'`astro.config.mjs` per l'adreça final del teu web. Així el mapa del web i les adreces canòniques seran correctes.

## Afegir una fotografia

1. Desa la imatge a `public/imagenes/`.
2. Crea un fitxer `.md` a `src/content/fotos/` amb les dades de la captura, usant qualsevol dels fitxers existents com a model.
3. Executa `npm run build` per comprovar-la.
