import type { CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

type AdditionalImage = CollectionEntry<'fotos'>['data']['imatges_addicionals'][number];

export function photoText(foto: CollectionEntry<'fotos'>, lang: Lang) {
	const translation = lang === 'ca' ? undefined : foto.data.traduccions?.[lang];
	return {
		objecte: translation?.objecte ?? foto.data.objecte,
		caracteristiques: translation?.caracteristiques ?? foto.data.caracteristiques,
	};
}

export function additionalImageText(image: AdditionalImage, lang: Lang) {
	const translation = lang === 'ca' ? undefined : image.traduccions?.[lang];
	return {
		titol: translation?.titol ?? image.titol,
		descripcio: translation?.descripcio ?? image.descripcio,
	};
}
