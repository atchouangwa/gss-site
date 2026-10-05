// Real photography supplied by the client, mapped to Nuclear capability pages and Industries
// pages by theme.
// Wade Wilson's and Eric Wilson's photos are handled separately (leadership/founder only) —
// never used as generic imagery.

const PHOTOS = {
  nuclearNight: { src: '/assets/photos/nuclear-facility-night.webp', alt: 'Nuclear facility cooling towers and reactor domes illuminated at night' },
  nuclearDusk: { src: '/assets/photos/nuclear-facility-dusk.webp', alt: 'Nuclear facility perimeter and reactor building at dusk' },
  fenceSensor: { src: '/assets/photos/perimeter-fence-sensor.webp', alt: 'Perimeter security fence with mounted sensor at sunset' },
  fenceCamera: { src: '/assets/photos/perimeter-fence-camera.webp', alt: 'Perimeter security fence with surveillance camera at sunset' },
  fieldTech: { src: '/assets/photos/field-technician.webp', alt: 'Field technician servicing security equipment' },
  commsMast: { src: '/assets/photos/comms-mast-sunset.webp', alt: 'Deployable secure communications mast at sunset' },
  socRoom: { src: '/assets/photos/soc-control-room.webp', alt: 'Security operations center with analysts monitoring global systems' },
  cyberDesk: { src: '/assets/photos/cyber-analyst-desk.webp', alt: 'Cybersecurity analyst monitoring threat intelligence dashboards' },
} as const;

const NUCLEAR_SECURITY: Record<string, keyof typeof PHOTOS> = {
  'nuclear-security-overview': 'nuclearNight',
  'small-modular-reactor-security': 'nuclearDusk',
  'new-nuclear-build-security': 'nuclearNight',
  'nuclear-regulatory-support': 'nuclearDusk',
  'high-performance-nuclear-operations': 'nuclearNight',
};

// Only Nuclear capability pages (under Industries) show a photo; Solutions capability pages
// use SolutionCapabilityLayout, which has none.
const FAMILY_MAPS: Record<string, Record<string, keyof typeof PHOTOS>> = {
  'nuclear-security': NUCLEAR_SECURITY,
};

export function capabilityImage(family: string, slug: string) {
  const key = FAMILY_MAPS[family]?.[slug] ?? 'fieldTech';
  return PHOTOS[key];
}

export const SITE_PHOTOS = PHOTOS;
export const PEOPLE_PHOTOS = {
  eric: { src: '/assets/photos/eric-wilson.jpeg', alt: 'Eric F. Wilson, Founder of Global Security Solutions' },
  wade: { src: '/assets/photos/wade-wilson.jpeg', alt: 'Wade Wilson, President of Global Security Solutions' },
} as const;

// Industries overview pages: an optional hero photo (dark header, right) and an optional
// feature photo (darkened background of the black approach section), keyed by page path.
// There is no oil and gas or data-center photography, so those pages use general security
// imagery whose alt text describes what is actually shown, never a specific industry or site.
// The Solutions area (overview and capability pages) uses no photography.
type PhotoKey = keyof typeof PHOTOS;
type OverviewPhotos = { hero?: PhotoKey; feature?: PhotoKey };
const OVERVIEW: Record<string, OverviewPhotos> = {
  '/nuclear-security/': { hero: 'nuclearNight', feature: 'nuclearDusk' },
  '/industries/oil-gas/': { hero: 'fenceSensor', feature: 'fieldTech' },
  '/industries/data-centers/': { hero: 'socRoom', feature: 'cyberDesk' },
  '/industries/critical-infrastructure/': { hero: 'fenceCamera', feature: 'commsMast' },
};

export function overviewImages(path: string) {
  const o = OVERVIEW[path] ?? {};
  return { hero: o.hero && PHOTOS[o.hero], feature: o.feature && PHOTOS[o.feature] };
}
