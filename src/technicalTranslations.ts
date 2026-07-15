import type { CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

const constellationNames: Record<string, { es: string; en: string }> = {
	Andromeda: { es: 'Andrómeda', en: 'Andromeda' },
	Auriga: { es: 'Auriga', en: 'Auriga' },
	Camelopardalis: { es: 'Jirafa', en: 'Camelopardalis' },
	Cancer: { es: 'Cáncer', en: 'Cancer' },
	'Canes Venatici': { es: 'Perros de Caza', en: 'Canes Venatici' },
	Cassiopeia: { es: 'Casiopea', en: 'Cassiopeia' },
	Cepheus: { es: 'Cefeo', en: 'Cepheus' },
	Cygnus: { es: 'Cisne', en: 'Cygnus' },
	Gemini: { es: 'Géminis', en: 'Gemini' },
	Hercules: { es: 'Hércules', en: 'Hercules' },
	Leo: { es: 'Leo', en: 'Leo' },
	Lyra: { es: 'Lira', en: 'Lyra' },
	Monoceros: { es: 'Unicornio', en: 'Monoceros' },
	Orion: { es: 'Orión', en: 'Orion' },
	Sagitta: { es: 'Flecha', en: 'Sagitta' },
	Sagitarius: { es: 'Sagitario', en: 'Sagittarius' },
	Sagittarius: { es: 'Sagitario', en: 'Sagittarius' },
	Serpens: { es: 'Serpiente', en: 'Serpens' },
	Taurus: { es: 'Tauro', en: 'Taurus' },
	Triangulum: { es: 'Triángulo', en: 'Triangulum' },
	'Ursa Major': { es: 'Osa Mayor', en: 'Ursa Major' },
	Virgo: { es: 'Virgo', en: 'Virgo' },
	Vulpecula: { es: 'Zorra', en: 'Vulpecula' },
};

export function constellationName(value: string, lang: Lang) {
	if (lang === 'ca') return value;
	return constellationNames[value]?.[lang] ?? value;
}

export function technicalValue(value: string, lang: Lang) {
	if (lang === 'ca') return value;
	if (!value.trim()) return 'N/A';

	if (lang === 'es') {
		return value
			.replace(/^Focuser /, 'Enfocador ')
			.replace(/^Sense Guiat$/, 'Sin guiado')
			.replace(/\b[Tt]ub (?=\d)/g, 'Tubo ')
			.replace(/\bApilat i postprocessat amb\b/g, 'Apilado y posprocesado con')
			.replace(/\bApilat amb\b/g, 'Apilado con')
			.replace(/\bpostprocessat amb\b/g, 'posprocesado con')
			.replace(/\betiquetatge com\b/g, 'etiquetado con')
			.replace(/\bamb els lights corresponents\b/g, 'con las tomas correspondientes')
			.replace(/\btotes de\b/g, 'todas de')
			.replace(/\ben quatre sesions\b/g, 'en cuatro sesiones')
			.replace(/\bLights:/g, 'Tomas:')
			.replace(/\blights de\b/g, 'tomas de')
			.replace(/\bSessional:/g, 'Sesiones:')
			.replace(/\bsense (?:bies|bias)\b/gi, 'sin bias')
			.replace(/\bamb\b/g, 'con')
			.replace(/\bi\b/g, 'y')
			.replace(/\bHalfa\b/g, 'H-alfa');
	}

	return value
		.replace(/^Focuser (.+)$/, '$1 focuser')
		.replace(/^Nikon D90 modificada$/, 'modified Nikon D90')
		.replace(/^Sense Guiat$/, 'No guiding')
		.replace(/\b[Tt]ub (?=\d)/g, 'Guide scope ')
		.replace(/\bApilat i postprocessat amb\b/g, 'Stacked and post-processed with')
		.replace(/\bApilat amb\b/g, 'Stacked with')
		.replace(/\bpostprocessat amb\b/g, 'post-processed with')
		.replace(/\betiquetatge com\b/g, 'labelled with')
		.replace(/\bamb els lights corresponents\b/g, 'with the corresponding light frames')
		.replace(/\btotes de\b/g, 'all at')
		.replace(/\ben quatre sesions\b/g, 'over four sessions')
		.replace(/\bSessional:/g, 'Sessions:')
		.replace(/(\d+) darks \((?:de )?biblioteca\)/gi, '$1 library dark frames')
		.replace(/(\d+) darks de biblioteca/gi, '$1 library dark frames')
		.replace(/(\d+) darks \(biblioteca\)/gi, '$1 library dark frames')
		.replace(/\bsense (?:bies|bias)\b/gi, 'without bias frames')
		.replace(/\bamb\b/g, 'with')
		.replace(/\bi\b/g, 'and')
		.replace(/\bdarkflats\b/gi, 'dark-flat frames')
		.replace(/\bdarks\b/gi, 'dark frames')
		.replace(/\bflats\b/gi, 'flat frames')
		.replace(/\blights\b/gi, 'light frames')
		.replace(/\bbias\b(?! frames)/gi, 'bias frames')
		.replace(/ de (\d+\s?s)\b/g, ' at $1')
		.replace(/ de (\d+)\s?nm\b/g, ', $1 nm')
		.replace(/ de (\d+)\s?mm\b/g, ', $1 mm')
		.replace(/ a (-?\d+\s?ºC)\b/g, ' at $1')
		.replace(/\bHalfa\b/g, 'H-alpha')
		.replace(/\bmodificada\b/g, 'modified')
		.replace(/\bde biblioteca\b/g, 'from a library');
}

export function photoTechnicalText(foto: CollectionEntry<'fotos'>, lang: Lang) {
	const localize = (value: string) => technicalValue(value, lang);
	return {
		constellacio: constellationName(foto.data.constellacio, lang),
		tempsTotal: localize(foto.data.exposicio.temps_total),
		subframes: localize(foto.data.exposicio.subframes),
		calibratge: localize(foto.data.exposicio.calibratge),
		ota: localize(foto.data.equip.ota),
		camera: localize(foto.data.camera.principal),
		filtres: localize(foto.data.camera.filtres),
		muntura: localize(foto.data.equip.muntura),
		guiat: localize(foto.data.equip.guiat),
		enfocador: localize(foto.data.equip.enfocador),
		rodaFiltres: localize(foto.data.equip.roda_filtres),
		processat: localize(foto.data.tractament.processat),
		adquisicio: localize(foto.data.tractament.adquisicio),
		lloc: localize(foto.data.entorn.lloc),
	};
}
