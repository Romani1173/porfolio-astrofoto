---
objecte: "WR134 – Estrella Wolf-Rayet (HOO)"
constellacio: "Cygnus"
caracteristiques: "WR134 és una estrella Wolf-Rayet de tipus espectral WN6 situada a la constel·lació de Cygnus. És una estrella molt calenta, rica en nitrogen i heli i gairebé desproveïda d'hidrogen, que es troba en una etapa avançada de la seva evolució. Expulsa les capes externes mitjançant un vent estel·lar extremadament ràpid i dens, que modela una bombolla de gas ionitzat al seu voltant. La intensa radiació ultraviolada de l'estrella excita aquest gas, i l'emissió de l'oxigen doblement ionitzat de la bombolla es registra amb el filtre OIII. Previsiblement, WR134 acabarà la seva evolució amb una explosió de supernova."
categoria: "Cúmuls i Estrelles"
imatge: "WR134.jpg"

equip:
  ota: "TS102 f/5.6"
  roda_filtres: "ZWO EFW 7pos"
  enfocador: "ZWO EAF"
  guiat: "PHD2, tub 60mm/f4 + ASI220MM + PegasusAstro UCH + PPBMicro"
  muntura: "Sky Watcher Wave 150i"

camera:
  principal: "ASI294MM a -10ºC"
  filtres: "Ha i OIII Astronomik de 6nm"

exposicio:
  temps_total: "6h 40min"
  gain: "125"
  offset: "30"
  subframes: "360s (Ha: 10x, OIII: 5x) bin1; 300s (Ha: 18x, OIII: 44x) bin1"
  calibratge: "30 flats, 30 darkflats i 40 darks (de biblioteca), sense bies"

tractament:
  adquisicio: "NINA"
  processat: "Apilat i postprocessat amb PixInsight 1.9.3"

entorn:
  lloc: "l'Ampolla"
  data: "2025-08-15"
  bortle: "4"

imatges_addicionals:
  - tipus: "annotated"
    fitxer: "WR134_annotated.jpg"
    titol: "Objectes identificats"
    descripcio: "Localització de WR134 dins de la seva bombolla de gas ionitzat i identificació del cúmul obert NGC6883 al camp fotografiat."
  - tipus: "process"
    fitxer: "WR134_process.jpg"
    titol: "Flux de postprocessament"
    descripcio: "Flux de treball del postprocessament de la composició HOO de WR134 amb PixInsight."
---
