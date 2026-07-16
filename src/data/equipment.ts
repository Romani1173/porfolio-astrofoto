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

export interface EquipmentSpec {
	label: Localized;
	value: Localized;
}

export interface EquipmentItem {
	id: EquipmentItemId;
	number: string;
	title: Localized;
	kicker: Localized;
	summary: Localized;
	slug: Localized;
	image?: string;
	imageAlt?: Localized;
	imageProvisional?: boolean;
	additionalImage?: string;
	additionalImageAlt?: Localized;
	description?: Localized;
	specs?: EquipmentSpec[];
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
	details: Partial<Pick<EquipmentItem, 'image' | 'imageAlt' | 'imageProvisional' | 'additionalImage' | 'additionalImageAlt' | 'description' | 'specs'>> = {},
): EquipmentItem => ({ id, number, title, kicker, summary, slug, ...details });

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
			item('guide-scope', '01', { ca: 'Svbony SV106', es: 'Svbony SV106', en: 'Svbony SV106' }, { ca: 'Tub de guiatge', es: 'Tubo de guiado', en: 'Guide scope' }, { ca: 'Tub guia de 60 mm dedicat al seguiment', es: 'Tubo guía de 60 mm dedicado al seguimiento', en: '60 mm guide scope dedicated to tracking' }, { ca: 'tub-guiatge', es: 'tubo-guiado', en: 'guide-scope' }, {
				image: 'imagenes/equipo-tubo-guiado-provisional.png',
				imageProvisional: true,
				imageAlt: { ca: 'Tub de guiatge Svbony SV106 de 60 mm amb les anelles de subjecció', es: 'Tubo de guiado Svbony SV106 de 60 mm con sus anillas de sujeción', en: 'Svbony SV106 60 mm guide scope with its mounting rings' },
				description: {
					ca: 'El Svbony SV106 és un tub guia compacte de 60 mm i relació focal f/4. El seu camp ampli facilita la selecció d’estrelles de referència, mentre que l’enfocador helicoidal permet ajustar el focus amb precisió sense fer girar la càmera.',
					es: 'El Svbony SV106 es un tubo guía compacto de 60 mm y relación focal f/4. Su campo amplio facilita la selección de estrellas de referencia, mientras que el enfocador helicoidal permite ajustar el foco con precisión sin hacer girar la cámara.',
					en: 'The Svbony SV106 is a compact 60 mm f/4 guide scope. Its wide field makes guide-star selection easier, while the helical focuser allows precise adjustment without rotating the camera.',
				},
				specs: [
					{ label: { ca: 'Obertura', es: 'Apertura', en: 'Aperture' }, value: { ca: '60 mm', es: '60 mm', en: '60 mm' } },
					{ label: { ca: 'Distància focal', es: 'Distancia focal', en: 'Focal length' }, value: { ca: '240 mm', es: '240 mm', en: '240 mm' } },
					{ label: { ca: 'Relació focal', es: 'Relación focal', en: 'Focal ratio' }, value: { ca: 'f/4', es: 'f/4', en: 'f/4' } },
					{ label: { ca: 'Enfocador', es: 'Enfocador', en: 'Focuser' }, value: { ca: 'Helicoidal d’1,25″, recorregut de 30 mm, no rotatiu', es: 'Helicoidal de 1,25″, recorrido de 30 mm, no rotativo', en: '1.25″ helical, 30 mm travel, non-rotating' } },
					{ label: { ca: 'Connexions', es: 'Conexiones', en: 'Connections' }, value: { ca: 'Sortida d’1,25″ o rosca T2 (M42 × 0,75)', es: 'Salida de 1,25″ o rosca T2 (M42 × 0,75)', en: '1.25″ output or T2 thread (M42 × 0.75)' } },
					{ label: { ca: 'Pes', es: 'Peso', en: 'Weight' }, value: { ca: '690 g', es: '690 g', en: '690 g' } },
					{ label: { ca: 'Subjecció', es: 'Sujeción', en: 'Mounting' }, value: { ca: 'Anelles guia amb cargols de punta de niló i base tipus sabata', es: 'Anillas guía con tornillos de punta de nailon y base tipo zapata', en: 'Guide rings with nylon-tipped screws and standard dovetail base' } },
				],
			}),
			item('guide-camera', '02', { ca: 'ZWO ASI220MM Mini', es: 'ZWO ASI220MM Mini', en: 'ZWO ASI220MM Mini' }, { ca: 'Càmera de guiatge', es: 'Cámara de guiado', en: 'Guide camera' }, { ca: 'Sensor monocrom dedicat al seguiment', es: 'Sensor monocromo dedicado al seguimiento', en: 'Monochrome sensor dedicated to tracking' }, { ca: 'camera-guiatge', es: 'camara-guiado', en: 'guide-camera' }, {
				image: 'imagenes/equipo-camara-guiado-provisional.png',
				imageProvisional: true,
				imageAlt: { ca: 'Càmera de guiatge monocroma ZWO ASI220MM Mini', es: 'Cámara de guiado monocroma ZWO ASI220MM Mini', en: 'ZWO ASI220MM Mini monochrome guide camera' },
				additionalImage: 'imagenes/equipo-camara-guiado-datos-provisional.png',
				additionalImageAlt: { ca: 'Resum gràfic provisional de les característiques de la ZWO ASI220MM Mini', es: 'Resumen gráfico provisional de las características de la ZWO ASI220MM Mini', en: 'Provisional graphical overview of the ZWO ASI220MM Mini specifications' },
				description: {
					ca: 'La ZWO ASI220MM Mini és una càmera monocroma compacta destinada a l’autoguiatge. El sensor de 2,07 megapíxels, els píxels de 4 μm i una eficiència quàntica màxima del 92 % afavoreixen la detecció d’estrelles guia amb exposicions curtes.',
					es: 'La ZWO ASI220MM Mini es una cámara monocroma compacta destinada al autoguiado. El sensor de 2,07 megapíxeles, los píxeles de 4 μm y una eficiencia cuántica máxima del 92 % favorecen la detección de estrellas guía con exposiciones cortas.',
					en: 'The ZWO ASI220MM Mini is a compact monochrome autoguiding camera. Its 2.07-megapixel sensor, 4 μm pixels and peak quantum efficiency of 92% support reliable guide-star detection with short exposures.',
				},
				specs: [
					{ label: { ca: 'Sensor', es: 'Sensor', en: 'Sensor' }, value: { ca: 'CMOS monocrom SmartSens SC2210, format 1/1,8″', es: 'CMOS monocromo SmartSens SC2210, formato 1/1,8″', en: 'SmartSens SC2210 monochrome CMOS, 1/1.8″ format' } },
					{ label: { ca: 'Resolució', es: 'Resolución', en: 'Resolution' }, value: { ca: '2,07 MP (1920 × 1080)', es: '2,07 MP (1920 × 1080)', en: '2.07 MP (1920 × 1080)' } },
					{ label: { ca: 'Mida de píxel', es: 'Tamaño de píxel', en: 'Pixel size' }, value: { ca: '4,0 μm', es: '4,0 μm', en: '4.0 μm' } },
					{ label: { ca: 'Eficiència quàntica màxima', es: 'Eficiencia cuántica máxima', en: 'Peak quantum efficiency' }, value: { ca: '92 %', es: '92 %', en: '92%' } },
					{ label: { ca: 'Interfície', es: 'Interfaz', en: 'Interface' }, value: { ca: 'USB 2.0 tipus C i port ST4', es: 'USB 2.0 tipo C y puerto ST4', en: 'USB 2.0 Type-C and ST4 port' } },
					{ label: { ca: 'Exposició', es: 'Exposición', en: 'Exposure' }, value: { ca: 'De 32 μs a 10 s', es: 'De 32 μs a 10 s', en: '32 μs to 10 s' } },
					{ label: { ca: 'Convertidor', es: 'Convertidor', en: 'ADC' }, value: { ca: '12 bits', es: '12 bits', en: '12 bit' } },
					{ label: { ca: 'Dimensions i pes', es: 'Dimensiones y peso', en: 'Dimensions and weight' }, value: { ca: 'Ø 36 × 61 mm · 60 g', es: 'Ø 36 × 61 mm · 60 g', en: 'Ø 36 × 61 mm · 60 g' } },
					{ label: { ca: 'Back focus', es: 'Back focus', en: 'Back focus' }, value: { ca: '8,5 mm / 12,5 mm', es: '8,5 mm / 12,5 mm', en: '8.5 mm / 12.5 mm' } },
				],
			}),
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
			item('powerbox', '01', { ca: 'Distribuïdor Powerbox', es: 'Distribuidor Powerbox', en: 'Powerbox distributor' }, { ca: 'Electrònica', es: 'Electrónica', en: 'Electronics' }, { ca: 'Alimentació, escalfadors i control ambiental', es: 'Alimentación, calentadores y control ambiental', en: 'Power, dew-heater and environmental control' }, { ca: 'distribuidor-powerbox', es: 'distribuidor-powerbox', en: 'powerbox-distributor' }, {
				image: 'imagenes/equipo-powerbox.png',
				imageAlt: { ca: 'Distribuïdor Powerbox blau instal·lat a l’equip d’astrofotografia', es: 'Distribuidor Powerbox azul instalado en el equipo de astrofotografía', en: 'Blue Powerbox distributor installed on the astrophotography rig' },
			}),
			item('usb-hub', '02', { ca: 'Hub USB', es: 'Hub USB', en: 'USB hub' }, { ca: 'Connectivitat', es: 'Conectividad', en: 'Connectivity' }, { ca: 'Connexió centralitzada dels equips', es: 'Conexión centralizada de los equipos', en: 'Centralised equipment connection' }, { ca: 'hub-usb', es: 'hub-usb', en: 'usb-hub' }, {
				image: 'imagenes/equipo-hub-usb.png',
				imageAlt: { ca: 'Hub USB blau instal·lat a l’equip d’astrofotografia', es: 'Hub USB azul instalado en el equipo de astrofotografía', en: 'Blue USB hub installed on the astrophotography rig' },
			}),
		],
	},
];

export const equipmentUi: Record<Lang, Record<string, string>> = {
	ca: { backHome: 'Tornar a la portada', backEquipment: 'Tornar a El meu equip', explore: 'Explora les quatre àrees de l’equip', prototype: 'Prototip local', components: 'components', component: 'component', photoPending: 'Fotografia pendent', provisional: 'Fitxa provisional', provisionalImage: 'Imatge provisional', detailsPending: 'Característiques tècniques pendents', specifications: 'Característiques tècniques', referenceGraphic: 'Resum gràfic provisional', viewDetails: 'Veure la fitxa de' },
	es: { backHome: 'Volver a la portada', backEquipment: 'Volver a Mi equipo', explore: 'Explora las cuatro áreas del equipo', prototype: 'Prototipo local', components: 'componentes', component: 'componente', photoPending: 'Fotografía pendiente', provisional: 'Ficha provisional', provisionalImage: 'Imagen provisional', detailsPending: 'Características técnicas pendientes', specifications: 'Características técnicas', referenceGraphic: 'Resumen gráfico provisional', viewDetails: 'Ver la ficha de' },
	en: { backHome: 'Back to the home page', backEquipment: 'Back to My equipment', explore: 'Explore the four equipment areas', prototype: 'Local prototype', components: 'components', component: 'component', photoPending: 'Photograph pending', provisional: 'Provisional page', provisionalImage: 'Provisional image', detailsPending: 'Technical specifications pending', specifications: 'Technical specifications', referenceGraphic: 'Provisional graphical overview', viewDetails: 'View the details for' },
};

export const groupHref = (lang: Lang, group: EquipmentGroup, base = '/') => `${equipmentHref(lang, base)}/${group.slug[lang]}`;
export const itemHref = (lang: Lang, group: EquipmentGroup, equipmentItem: EquipmentItem, base = '/') => `${groupHref(lang, group, base)}/${equipmentItem.slug[lang]}`;
export const equipmentGroupLinks = (group: EquipmentGroup, base = '/') => ({ ca: groupHref('ca', group, base), es: groupHref('es', group, base), en: groupHref('en', group, base) });
export const equipmentItemLinks = (group: EquipmentGroup, equipmentItem: EquipmentItem, base = '/') => ({ ca: itemHref('ca', group, equipmentItem, base), es: itemHref('es', group, equipmentItem, base), en: itemHref('en', group, equipmentItem, base) });
