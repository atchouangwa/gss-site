// Single source of truth for approved public claims and site-wide facts.
// See /docs/content-audit.md for sourcing and the governance decisions behind these values.

export const SITE = {
  name: 'Global Security Solutions, LLC',
  shortName: 'GSS',
  domain: 'gsscorporate.com',
  url: 'https://gsscorporate.com',
  phone: '1-866-4-GSSCORP',
  phoneTel: '+18664477267',
  email: 'contact@gsscorporate.com',
  brandLine: 'Engineered. Tested. Proven.',
  founded: 'EST. 2012',
  facilityCount: '50+',
  yearsExperience: '20+',
  regulatoryRegimes: '04',
  regions: ['North America', 'Europe', 'Middle East'] as const,
  regionsLine: 'NORTH AMERICA · EUROPE · MIDDLE EAST',
} as const;

export const FOUNDER = {
  name: 'Eric F. Wilson',
  title: 'Founder, Global Security Solutions',
  timeline: [
    {
      n: '01',
      label: 'Military',
      body: 'Served in two U.S. Special Operations units as an operator and explosives expert.',
    },
    {
      n: '02',
      label: 'Nuclear Security',
      body: 'Contributed to U.S. nuclear response strategy design and the explosive validation of barriers still in use today. Testified before Congress as a subject matter expert.',
    },
    {
      n: '03',
      label: 'Executive',
      body: "Vice President, then President and CEO within the world's largest security company, with 31 nuclear facilities reporting directly.",
    },
    {
      n: '04',
      label: 'Founded GSS',
      body: 'Established GSS in 2012 to deliver security holistically rather than as isolated services.',
    },
  ],
} as const;

export const LEADERSHIP = {
  name: 'Wade Wilson',
  title: 'President',
  eyebrow: "PRESIDENT, GLOBAL SECURITY SOLUTIONS",
  bio: [
    'Wade Wilson leads GSS as President, holding the company to the standard it was built on: security judged by what it actually delays, detects, and answers — not by what it satisfies on paper.',
    'The same team, the same methodology, the same expectation of Best-in-Class. Continuity of leadership, not a change of direction.',
  ],
  teamIntro: 'GSS is staffed by people who did this work before they did it for GSS — not consultants who studied it.',
  teamRoster: [
    {
      label: 'Special Operations',
      detail: 'Former U.S. special forces operators who have run physical security and tactical response in the field — the standard the rest of the practice is measured against.',
    },
    {
      label: 'Security Engineering & Executive Leadership',
      detail: 'Engineers and executives who have held C-level roles running security programs at scale, before bringing that judgment to GSS engagements.',
    },
    {
      label: 'Nuclear Regulatory — Cyber-Physical',
      detail: 'The cyber-physical division is led by former U.S. NRC inspectors who authored the cybersecurity regulations U.S. nuclear plants operate under today.',
    },
  ],
} as const;

export type NavChild = { label: string; slug: string };
export type NavGroup = { label: string; path: string; children: NavChild[] };

export const NAV: NavGroup[] = [
  { label: 'About', path: '/about/', children: [] },
  {
    label: 'Security',
    path: '/security-solutions/',
    children: [
      { label: 'Security assessment & design', slug: 'security-assessment-design' },
      { label: 'Avenues of approach analysis', slug: 'avenues-of-approach-analysis' },
      { label: 'Adversary pathway & timeline analysis', slug: 'adversary-pathway-analysis' },
      { label: 'Vital area analysis', slug: 'vital-area-analysis' },
      { label: 'Target set identification', slug: 'target-set-identification' },
      { label: 'New build security design', slug: 'new-build-security-design' },
      { label: 'Perimeter security & intrusion detection', slug: 'perimeter-security-intrusion-detection' },
      { label: 'Vehicle & personnel barrier systems', slug: 'barrier-systems' },
      { label: 'Explosive validation & blast-resistant design', slug: 'explosive-validation' },
      { label: 'Access control assessment', slug: 'access-control-assessment' },
      { label: 'Response strategy development', slug: 'response-strategy-development' },
      { label: 'Regulatory compliance & basis documentation', slug: 'regulatory-compliance' },
      { label: 'Security program audits', slug: 'security-program-audits' },
      { label: 'Systematic Approach to Training', slug: 'systematic-approach-to-training' },
      { label: 'Tactical training & train-the-trainer', slug: 'tactical-training' },
      { label: 'Force-on-force readiness', slug: 'force-on-force-readiness' },
      { label: 'Human factors / minimum complement', slug: 'human-factors-minimum-complement' },
      { label: 'Security policy development & optimization', slug: 'security-policy-development' },
    ],
  },
  {
    label: 'Technology',
    path: '/technology/',
    children: [
      { label: 'Secure wireless communications', slug: 'secure-wireless-communications' },
      { label: 'Rapidly deployable intrusion detection', slug: 'intrusion-detection' },
      { label: 'Monitoring, alarms & access control', slug: 'monitoring-access-control' },
      { label: 'Drone detection & countermeasures', slug: 'drone-security' },
      { label: 'Security systems integration', slug: 'systems-integration' },
      { label: 'Remote security operations & SOC design', slug: 'remote-security-operations' },
      { label: 'KPI / performance monitoring technology', slug: 'kpi-performance-monitoring' },
    ],
  },
  {
    label: 'Cybersecurity',
    path: '/cybersecurity/',
    children: [
      { label: 'Cyber-physical security', slug: 'cyber-physical-security' },
      { label: 'Risk-based security controls', slug: 'risk-based-controls' },
      { label: 'Penetration testing', slug: 'penetration-testing' },
      { label: 'Risk & vulnerability management', slug: 'vulnerability-management' },
      { label: 'Compliance advisory & governance', slug: 'compliance-governance' },
      { label: 'Threat hunting & incident response', slug: 'threat-hunting-incident-response' },
      { label: 'Security operations', slug: 'security-operations' },
      { label: 'Training & education', slug: 'training-education' },
    ],
  },
  {
    label: 'Nuclear',
    path: '/nuclear-security/',
    children: [
      { label: 'Nuclear security', slug: 'nuclear-security-overview' },
      { label: 'Small modular reactor security', slug: 'small-modular-reactor-security' },
      { label: 'New nuclear build security', slug: 'new-nuclear-build-security' },
      { label: 'Nuclear regulatory support', slug: 'nuclear-regulatory-support' },
      { label: 'High performance nuclear operations', slug: 'high-performance-nuclear-operations' },
    ],
  },
  {
    label: 'High Performance',
    path: '/high-performance/',
    children: [
      { label: 'High-performance culture', slug: 'high-performance-culture' },
      { label: 'Optimization assessment', slug: 'optimization-assessment' },
      { label: 'KPI development & performance metrics', slug: 'kpi-development' },
      { label: 'Risk-based decision making', slug: 'risk-based-decision-making' },
      { label: 'Leadership & cultural transformation', slug: 'leadership-cultural-transformation' },
    ],
  },
  { label: 'Insights', path: '/insights/', children: [] },
];

export const FAMILIES = [
  { n: '01', label: 'Security Solutions', slug: 'security-solutions', mono: '/security-solutions/' },
  { n: '02', label: 'Technology Solutions', slug: 'technology', mono: '/technology/' },
  { n: '03', label: 'Cybersecurity', slug: 'cybersecurity', mono: '/cybersecurity/' },
  { n: '04', label: 'Nuclear & SMR', slug: 'nuclear-security', mono: '/nuclear-security/' },
  { n: '05', label: 'High Performance', slug: 'high-performance', mono: '/high-performance/' },
] as const;

export function familyLabel(slug: string): string {
  return FAMILIES.find((f) => f.slug === slug)?.label ?? slug;
}

/** Natural Earth numeric country ids used to highlight the globe: US, Canada, Slovakia, UAE */
export const GLOBE_HIGHLIGHT_IDS = ['840', '124', '703', '784'];
