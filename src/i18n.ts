export type Lang = 'ca' | 'es' | 'en';
export type CategoryKey = 'galaxies' | 'nebulae' | 'clusters' | 'sky';

export const languages: Lang[] = ['ca', 'es', 'en'];

export const categories: Array<{
	key: CategoryKey;
	value: 'Galàxies' | 'Nebuloses' | 'Cúmuls i Estrelles' | 'Cel';
	labels: Record<Lang, string>;
	slugs: Record<Lang, string>;
}> = [
	{ key: 'galaxies', value: 'Galàxies', labels: { ca: 'Galàxies', es: 'Galaxias', en: 'Galaxies' }, slugs: { ca: 'Gal%C3%A0xies', es: 'Galaxias', en: 'Galaxies' } },
	{ key: 'nebulae', value: 'Nebuloses', labels: { ca: 'Nebuloses', es: 'Nebulosas', en: 'Nebulae' }, slugs: { ca: 'Nebuloses', es: 'Nebulosas', en: 'Nebulae' } },
	{ key: 'clusters', value: 'Cúmuls i Estrelles', labels: { ca: 'Cúmuls i estrelles', es: 'Cúmulos y estrellas', en: 'Clusters and stars' }, slugs: { ca: 'C%C3%BAmuls%20i%20Estrelles', es: 'Cumulos-y-estrellas', en: 'Clusters-and-stars' } },
	{ key: 'sky', value: 'Cel', labels: { ca: 'Cel', es: 'Cielo', en: 'Sky' }, slugs: { ca: 'Cel', es: 'Cielo', en: 'Sky' } },
];

export const copy = {
	ca: {
		siteDescription: 'Un recull personal de fotografies de cel profund.',
		home: 'Inici', catalogue: 'Catàleg', all: 'Tots', backHome: 'Tornar a la portada', backCatalogue: 'Tornar al catàleg',
		explore: 'Explora el catàleg', categoryNav: 'Filtra per categoria', search: 'Cerca al catàleg', searchPlaceholder: 'M31, NGC2237, …',
		order: 'Ordena', recent: 'Data: recents', name: 'Nom: A–Z', object: 'objecte', objects: 'objectes', photographedObject: 'objecte fotografiat', photographedObjects: 'objectes fotografiats',
		noResults: "No s'ha trobat cap objecte amb aquesta cerca.", emptyCategory: 'Encara no hi ha cap fotografia en aquesta categoria.',
		viewPhoto: 'Veure la fitxa de', astroPhoto: 'Fotografia astronòmica de', constellation: 'Constel·lació', exposure: 'Exposició', includesProcess: 'Inclou el flux de processat',
		generalInfo: 'Informació general', category: 'Categoria', date: 'Data', capture: 'Captura', totalTime: 'Temps total', subframes: 'Subframes', calibration: 'Calibratge',
		equipment: 'Equip', telescope: 'Telescopi', camera: 'Càmera', filters: 'Filtres', mount: 'Muntura', guiding: 'Guiat', focuser: 'Enfocador', filterWheel: 'Roda de filtres',
		processingEnvironment: 'Processat i entorn', processing: 'Processat', acquisition: 'Adquisició', place: 'Lloc', sky: 'Cel', additionalVersions: 'Versions addicionals', enlarge: 'Ampliar', enlargedImage: 'Imatge ampliada', closeImage: 'Tancar la imatge ampliada',
		languageSelector: 'Selecciona l’idioma', backToCategory: (category: string) => `Tornar a ${category}`, categoryDescription: (category: string) => `Fotografies de ${category.toLocaleLowerCase('ca')} del meu catàleg de cel profund.`,
	},
	es: {
		siteDescription: 'Una colección personal de fotografías de cielo profundo.',
		home: 'Inicio', catalogue: 'Catálogo', all: 'Todas', backHome: 'Volver a la portada', backCatalogue: 'Volver al catálogo',
		explore: 'Explora el catálogo', categoryNav: 'Filtrar por categoría', search: 'Buscar en el catálogo', searchPlaceholder: 'M31, NGC2237, …',
		order: 'Ordenar', recent: 'Fecha: recientes', name: 'Nombre: A–Z', object: 'objeto', objects: 'objetos', photographedObject: 'objeto fotografiado', photographedObjects: 'objetos fotografiados',
		noResults: 'No se ha encontrado ningún objeto con esta búsqueda.', emptyCategory: 'Todavía no hay ninguna fotografía en esta categoría.',
		viewPhoto: 'Ver la ficha de', astroPhoto: 'Fotografía astronómica de', constellation: 'Constelación', exposure: 'Exposición', includesProcess: 'Incluye el flujo de procesado',
		generalInfo: 'Información general', category: 'Categoría', date: 'Fecha', capture: 'Captura', totalTime: 'Tiempo total', subframes: 'Subframes', calibration: 'Calibración',
		equipment: 'Equipo', telescope: 'Telescopio', camera: 'Cámara', filters: 'Filtros', mount: 'Montura', guiding: 'Guiado', focuser: 'Enfocador', filterWheel: 'Rueda de filtros',
		processingEnvironment: 'Procesado y entorno', processing: 'Procesado', acquisition: 'Adquisición', place: 'Lugar', sky: 'Cielo', additionalVersions: 'Versiones adicionales', enlarge: 'Ampliar', enlargedImage: 'Imagen ampliada', closeImage: 'Cerrar la imagen ampliada',
		languageSelector: 'Selecciona el idioma', backToCategory: (category: string) => `Volver a ${category}`, categoryDescription: (category: string) => `Fotografías de ${category.toLocaleLowerCase('es')} de mi catálogo de cielo profundo.`,
	},
	en: {
		siteDescription: 'A personal collection of deep-sky photographs.',
		home: 'Home', catalogue: 'Catalogue', all: 'All', backHome: 'Back to the home page', backCatalogue: 'Back to the catalogue',
		explore: 'Explore the catalogue', categoryNav: 'Filter by category', search: 'Search the catalogue', searchPlaceholder: 'M31, NGC2237, …',
		order: 'Sort', recent: 'Date: newest', name: 'Name: A–Z', object: 'object', objects: 'objects', photographedObject: 'photographed object', photographedObjects: 'photographed objects',
		noResults: 'No objects match this search.', emptyCategory: 'There are no photographs in this category yet.',
		viewPhoto: 'View the details for', astroPhoto: 'Astronomical photograph of', constellation: 'Constellation', exposure: 'Exposure', includesProcess: 'Includes the processing workflow',
		generalInfo: 'General information', category: 'Category', date: 'Date', capture: 'Capture', totalTime: 'Total time', subframes: 'Subframes', calibration: 'Calibration',
		equipment: 'Equipment', telescope: 'Telescope', camera: 'Camera', filters: 'Filters', mount: 'Mount', guiding: 'Guiding', focuser: 'Focuser', filterWheel: 'Filter wheel',
		processingEnvironment: 'Processing and environment', processing: 'Processing', acquisition: 'Acquisition', place: 'Location', sky: 'Sky', additionalVersions: 'Additional versions', enlarge: 'Enlarge', enlargedImage: 'Enlarged image', closeImage: 'Close enlarged image',
		languageSelector: 'Select language', backToCategory: (category: string) => `Back to ${category}`, categoryDescription: (category: string) => `Photographs of ${category.toLocaleLowerCase('en')} from my deep-sky catalogue.`,
	},
} as const;

export const localeFor = (lang: Lang) => ({ ca: 'ca-ES', es: 'es-ES', en: 'en-GB' })[lang];
export const homeHref = (lang: Lang, base = '/') => lang === 'ca' ? base : `${base}${lang}/`;
export const galleryHref = (lang: Lang, base = '/') => lang === 'ca' ? `${base}galeria` : `${base}${lang}/${lang === 'en' ? 'gallery' : 'galeria'}`;
export const photoHref = (lang: Lang, id: string, base = '/') => lang === 'ca' ? `${base}foto/${id}` : `${base}${lang}/${lang === 'en' ? 'photo' : 'foto'}/${id}`;
export const categoryHref = (lang: Lang, key: CategoryKey, base = '/') => {
	const category = categories.find((item) => item.key === key)!;
	const segment = lang === 'en' ? 'category' : 'categoria';
	return lang === 'ca' ? `${base}${segment}/${category.slugs.ca}` : `${base}${lang}/${segment}/${category.slugs[lang]}`;
};
export const categoryByValue = (value: string) => categories.find((item) => item.value === value)!;

export const languageLinks = {
	home: (base = '/') => ({ ca: homeHref('ca', base), es: homeHref('es', base), en: homeHref('en', base) }),
	gallery: (base = '/') => ({ ca: galleryHref('ca', base), es: galleryHref('es', base), en: galleryHref('en', base) }),
	category: (key: CategoryKey, base = '/') => ({ ca: categoryHref('ca', key, base), es: categoryHref('es', key, base), en: categoryHref('en', key, base) }),
	photo: (id: string, base = '/') => ({ ca: photoHref('ca', id, base), es: photoHref('es', id, base), en: photoHref('en', id, base) }),
};
