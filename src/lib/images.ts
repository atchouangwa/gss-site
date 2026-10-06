// Real photography supplied by the client, used on the home page and the Industries pages.
// Exception: the two oil-gas photos are free Unsplash stock (Unsplash License, commercial use,
// no attribution required): refinery by D Yang (vaHAD5kOBJ8), pipeline (L4gN0aeaPY4).
// Capability pages and the Solutions overview pages use no photography.
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
  refineryNight: { src: '/assets/photos/oil-gas-refinery-night.webp', alt: 'Oil refinery storage tanks and flare stack lit up at night, reflected in the water' },
  pipeline: { src: '/assets/photos/oil-gas-pipeline.webp', alt: 'Twin above-ground pipelines running through a forested valley' },
} as const;

export const SITE_PHOTOS = PHOTOS;
export const PEOPLE_PHOTOS = {
  eric: { src: '/assets/photos/eric-wilson.jpeg', alt: 'Eric F. Wilson, Founder of Global Security Solutions' },
  wade: { src: '/assets/photos/wade-wilson.jpeg', alt: 'Wade Wilson, President of Global Security Solutions' },
} as const;

// Industries overview pages: an optional hero photo (dark header, right) and an optional
// feature photo (darkened background of the black approach section), keyed by page path.
// There is no data-center photography, so that page uses general security imagery whose alt
// text describes what is actually shown, never a specific industry or site.
// The Solutions area (overview and capability pages) uses no photography.
type PhotoKey = keyof typeof PHOTOS;
type OverviewPhotos = { hero?: PhotoKey; feature?: PhotoKey };
const OVERVIEW: Record<string, OverviewPhotos> = {
  '/nuclear-security/': { hero: 'nuclearNight', feature: 'nuclearDusk' },
  '/industries/oil-gas/': { hero: 'refineryNight', feature: 'pipeline' },
  '/industries/data-centers/': { hero: 'socRoom', feature: 'cyberDesk' },
  '/industries/critical-infrastructure/': { hero: 'fenceCamera', feature: 'commsMast' },
};

export function overviewImages(path: string) {
  const o = OVERVIEW[path] ?? {};
  return { hero: o.hero && PHOTOS[o.hero], feature: o.feature && PHOTOS[o.feature] };
}
