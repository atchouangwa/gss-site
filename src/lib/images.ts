// Real photography supplied by the client, mapped to capability pages by theme.
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

const SECURITY_SOLUTIONS: Record<string, keyof typeof PHOTOS> = {
  'security-assessment-design': 'fieldTech',
  'avenues-of-approach-analysis': 'fenceSensor',
  'adversary-pathway-analysis': 'fenceCamera',
  'vital-area-analysis': 'fenceSensor',
  'target-set-identification': 'fenceCamera',
  'new-build-security-design': 'fieldTech',
  'perimeter-security-intrusion-detection': 'fenceSensor',
  'barrier-systems': 'fenceCamera',
  'explosive-validation': 'fieldTech',
  'access-control-assessment': 'fenceCamera',
  'response-strategy-development': 'socRoom',
  'regulatory-compliance': 'socRoom',
  'security-program-audits': 'socRoom',
  'systematic-approach-to-training': 'fieldTech',
  'tactical-training': 'fieldTech',
  'force-on-force-readiness': 'fenceSensor',
  'human-factors-minimum-complement': 'fieldTech',
  'security-policy-development': 'socRoom',
};

const TECHNOLOGY: Record<string, keyof typeof PHOTOS> = {
  'secure-wireless-communications': 'commsMast',
  'intrusion-detection': 'fenceSensor',
  'monitoring-access-control': 'fenceCamera',
  'drone-security': 'commsMast',
  'systems-integration': 'socRoom',
  'remote-security-operations': 'socRoom',
  'kpi-performance-monitoring': 'socRoom',
};

const CYBERSECURITY: Record<string, keyof typeof PHOTOS> = {
  'cyber-physical-security': 'socRoom',
  'risk-based-controls': 'cyberDesk',
  'penetration-testing': 'cyberDesk',
  'vulnerability-management': 'cyberDesk',
  'compliance-governance': 'cyberDesk',
  'threat-hunting-incident-response': 'socRoom',
  'security-operations': 'socRoom',
  'training-education': 'cyberDesk',
};

const NUCLEAR_SECURITY: Record<string, keyof typeof PHOTOS> = {
  'nuclear-security-overview': 'nuclearNight',
  'small-modular-reactor-security': 'nuclearDusk',
  'new-nuclear-build-security': 'nuclearNight',
  'nuclear-regulatory-support': 'nuclearDusk',
  'high-performance-nuclear-operations': 'nuclearNight',
};

const HIGH_PERFORMANCE: Record<string, keyof typeof PHOTOS> = {
  'high-performance-culture': 'socRoom',
  'optimization-assessment': 'cyberDesk',
  'kpi-development': 'socRoom',
  'risk-based-decision-making': 'cyberDesk',
  'leadership-cultural-transformation': 'socRoom',
};

const FAMILY_MAPS: Record<string, Record<string, keyof typeof PHOTOS>> = {
  'security-solutions': SECURITY_SOLUTIONS,
  technology: TECHNOLOGY,
  cybersecurity: CYBERSECURITY,
  'nuclear-security': NUCLEAR_SECURITY,
  'high-performance': HIGH_PERFORMANCE,
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

// Industry and Solutions overview pages: a hero photo (dark header, right) and a different
// feature photo (darkened background of the black approach section), keyed by page path.
// There is no oil and gas or data-center photography, so those pages use general security
// imagery whose alt text describes what is actually shown, never a specific industry or site.
type OverviewPhotos = { hero: keyof typeof PHOTOS; feature: keyof typeof PHOTOS };
const OVERVIEW: Record<string, OverviewPhotos> = {
  '/security-solutions/': { hero: 'fenceCamera', feature: 'fieldTech' },
  '/technology/': { hero: 'commsMast', feature: 'fenceSensor' },
  '/cybersecurity/': { hero: 'cyberDesk', feature: 'socRoom' },
  '/high-performance/': { hero: 'socRoom', feature: 'fieldTech' },
  '/nuclear-security/': { hero: 'nuclearNight', feature: 'nuclearDusk' },
  '/industries/oil-gas/': { hero: 'fenceSensor', feature: 'fieldTech' },
  '/industries/data-centers/': { hero: 'socRoom', feature: 'cyberDesk' },
  '/industries/critical-infrastructure/': { hero: 'fenceCamera', feature: 'commsMast' },
};

export function overviewImages(path: string) {
  const o = OVERVIEW[path] ?? { hero: 'fenceCamera', feature: 'fieldTech' };
  return { hero: PHOTOS[o.hero], feature: PHOTOS[o.feature] };
}
