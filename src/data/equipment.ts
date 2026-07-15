import type { Lang } from '../i18n';
import { equipmentHref } from '../i18n';

export type EquipmentGroupId = 'main' | 'guide' | 'mount' | 'electronics';
export type EquipmentItemId =
	| 'ota'
	| 'reducer'
	| 'focuser'
	| 'filter-wheel'
	| 'main-camera'
	| 'guide-scope'
	| 'guide-camera'
	| 'wave-150i'
	| 'tripod'
	| 'powerbox'
	| 'usb-hub';

type Localized = Record<Lang, string>;

export interface EquipmentItem {
	id: EquipmentItemId;
	number: string;
	title: Localized;
	kicker: Localized;
	summary: Localized;
	slug: Localized;
}

export interface EquipmentGroup {
	id: EquipmentGroupId;
	number: string;
	title: Localized;
	summary: Localized;
	slug: Localized;
	hotspot: { x: number; y: number; targetX: number; targetY: number };
	items: EquipmentItem[];
}

const item = (
	id: EquipmentItemId,
	number: string,
	title: Localized,
	kicker: Localized,
	summary: Localized,
	slug: Localized,
): EquipmentItem => ({ id, number, title, kicker, summary, slug });

export const equipmentGroups: EquipmentGroup[] = [
	{
		id: 'main', number: '01',
		title: { ca: 'Tren principal', es: 'Tren principal', en: 'Main imaging train' },
		summary: { ca: 'Captura i formació de la imatge', es: 'Captura y formación de la imagen', en: 'Image capture and formation' },
		slug: { ca: 'tren-principal', es: 'tren-principal', en: 'main-imaging-train' },
		hotspot: { x: 15, y: 19, targetX: 35, targetY: 23 },
		items: [
			item('ota', '01', { ca: 'OTA principal', es: 'OTA principal', en: 'Main OTA' }, { ca: 'Captura principal', es: 'Captura principal', en: 'Main capture' }, { ca: 'Tub òptic principal de captura', es: 'Tubo óptico principal de captura', en: 'Main optical tube for image capture' }, { ca: 'ota-principal', es: 'ota-principal', en: 'main-ota' }),
			item('reducer', '02', { ca: 'Reductor-aplanador', es: 'Reductor-aplanador', en: 'Reducer-flattener' }, { ca: 'Tren òptic', es: 'Tren óptico', en: 'Optical train' }, { ca: 'Correcció de camp i reducció focal', es: 'Corrección de campo y reducción focal', en: 'Field correction and focal reduction' }, { ca: 'reductor-aplanador', es: 'reductor-aplanador', en: 'reducer-flattener' }),
			item('focuser', '03', { ca: 'Enfocador', es: 'Enfocador', en: 'Focuser' }, { ca: 'Enfocament', es: 'Enfoque', en: 'Focusing' }, { ca: 'Control de l’enfocament del tren principal', es: 'Control del enfoque del tren principal', en: 'Focus control for the main imaging train' }, { ca: 'enfocador', es: 'enfocador', en: 'focuser' }),
			item('filter-wheel', '04', { ca: 'Roda portafiltres', es: 'Rueda portafiltros', en: 'Filter wheel' }, { ca: 'Tren d’imatge', es: 'Tren de imagen', en: 'Imaging train' }, { ca: 'Selecció automatitzada de filtres', es: 'Selección automatizada de filtros', en: 'Automated filter selection' }, { ca: 'roda-portafiltres', es: 'rueda-portafiltros', en: 'filter-wheel' }),
			item('main-camera', '05', { ca: 'Càmera principal', es: 'Cámara principal', en: 'Main camera' }, { ca: 'Captura principal', es: 'Captura principal', en: 'Main capture' }, { ca: 'Sensor principal de captura', es: 'Sensor principal de captura', en: 'Main image-capture sensor' }, { ca: 'camera-principal', es: 'camara-principal', en: 'main-camera' }),
		],
	},
	{
		id: 'guide', number: '02',
		title: { ca: 'Tren de guiatge', es: 'Tren de guiado', en: 'Guiding train' },
		summary: { ca: 'Seguiment de precisió', es: 'Seguimiento de precisión', en: 'Precision tracking' },
		slug: { ca: 'tren-guiatge', es: 'tren-guiado', en: 'guiding-train' },
		hotspot: { x: 82, y: 16, targetX: 57, targetY: 27 },
		items: [
			item('guide-scope', '01', { ca: 'Tub de guiatge', es: 'Tubo de guiado', en: 'Guide scope' }, { ca: 'Guiatge', es: 'Guiado', en: 'Guiding' }, { ca: 'Tub òptic dedicat al seguiment', es: 'Tubo óptico dedicado al seguimiento', en: 'Dedicated optical tube for tracking' }, { ca: 'tub-guiatge', es: 'tubo-guiado', en: 'guide-scope' }),
			item('guide-camera', '02', { ca: 'Càmera de guiatge', es: 'Cámara de guiado', en: 'Guide camera' }, { ca: 'Guiatge', es: 'Guiado', en: 'Guiding' }, { ca: 'Sensor dedicat al seguiment', es: 'Sensor dedicado al seguimiento', en: 'Dedicated tracking sensor' }, { ca: 'camera-guiatge', es: 'camara-guiado', en: 'guide-camera' }),
		],
	},
	{
		id: 'mount', number: '03',
		title: { ca: 'Muntura i trípode', es: 'Montura y trípode', en: 'Mount and tripod' },
		summary: { ca: 'Suport i seguiment equatorial', es: 'Soporte y seguimiento ecuatorial', en: 'Support and equatorial tracking' },
		slug: { ca: 'muntura-tripode', es: 'montura-tripode', en: 'mount-tripod' },
		hotspot: { x: 18, y: 56, targetX: 45, targetY: 50 },
		items: [
			item('wave-150i', '01', { ca: 'Wave 150i', es: 'Wave 150i', en: 'Wave 150i' }, { ca: 'Seguiment', es: 'Seguimiento', en: 'Tracking' }, { ca: 'Muntura harmònica', es: 'Montura armónica', en: 'Harmonic mount' }, { ca: 'wave-150i', es: 'wave-150i', en: 'wave-150i' }),
			item('tripod', '02', { ca: 'Trípode', es: 'Trípode', en: 'Tripod' }, { ca: 'Suport', es: 'Soporte', en: 'Support' }, { ca: 'Suport i base d’unió de la muntura', es: 'Soporte y base de unión de la montura', en: 'Mount support and connection base' }, { ca: 'tripode', es: 'tripode', en: 'tripod' }),
		],
	},
	{
		id: 'electronics', number: '04',
		title: { ca: 'Electrònica i control', es: 'Electrónica y control', en: 'Electronics and control' },
		summary: { ca: 'Alimentació i connexions', es: 'Alimentación y conexiones', en: 'Power and connections' },
		slug: { ca: 'electronica-control', es: 'electronica-control', en: 'electronics-control' },
		hotspot: { x: 82, y: 41, targetX: 53, targetY: 35 },
		items: [
			item('powerbox', '01', { ca: 'Distribuïdor Powerbox', es: 'Distribuidor Powerbox', en: 'Powerbox distributor' }, { ca: 'Electrònica', es: 'Electrónica', en: 'Electronics' }, { ca: 'Alimentació, escalfadors i control ambiental', es: 'Alimentación, calentadores y control ambiental', en: 'Power, dew-heater and environmental control' }, { ca: 'distribuidor-powerbox', es: 'distribuidor-powerbox', en: 'powerbox-distributor' }),
			item('usb-hub', '02', { ca: 'Hub USB', es: 'Hub USB', en: 'USB hub' }, { ca: 'Connectivitat', es: 'Conectividad', en: 'Connectivity' }, { ca: 'Connexió centralitzada dels equips', es: 'Conexión centralizada de los equipos', en: 'Centralised equipment connection' }, { ca: 'hub-usb', es: 'hub-usb', en: 'usb-hub' }),
		],
	},
];

export const equipmentUi: Record<Lang, Record<string, string>> = {
	ca: { backHome: 'Tornar a la portada', backEquipment: 'Tornar a El meu equip', explore: 'Explora les quatre àrees de l’equip', prototype: 'Prototip local', components: 'components', component: 'component', photoPending: 'Fotografia pendent', provisional: 'Fitxa provisional', detailsPending: 'Característiques tècniques pendents', viewDetails: 'Veure la fitxa de' },
	es: { backHome: 'Volver a la portada', backEquipment: 'Volver a Mi equipo', explore: 'Explora las cuatro áreas del equipo', prototype: 'Prototipo local', components: 'componentes', component: 'componente', photoPending: 'Fotografía pendiente', provisional: 'Ficha provisional', detailsPending: 'Características técnicas pendientes', viewDetails: 'Ver la ficha de' },
	en: { backHome: 'Back to the home page', backEquipment: 'Back to My equipment', explore: 'Explore the four equipment areas', prototype: 'Local prototype', components: 'components', component: 'component', photoPending: 'Photograph pending', provisional: 'Provisional page', detailsPending: 'Technical specifications pending', viewDetails: 'View the details for' },
};

export const groupHref = (lang: Lang, group: EquipmentGroup, base = '/') => `${equipmentHref(lang, base)}/${group.slug[lang]}`;
export const itemHref = (lang: Lang, group: EquipmentGroup, equipmentItem: EquipmentItem, base = '/') => `${groupHref(lang, group, base)}/${equipmentItem.slug[lang]}`;
export const equipmentGroupLinks = (group: EquipmentGroup, base = '/') => ({ ca: groupHref('ca', group, base), es: groupHref('es', group, base), en: groupHref('en', group, base) });
export const equipmentItemLinks = (group: EquipmentGroup, equipmentItem: EquipmentItem, base = '/') => ({ ca: itemHref('ca', group, equipmentItem, base), es: itemHref('es', group, equipmentItem, base), en: itemHref('en', group, equipmentItem, base) });
