# GSS Website Content Audit

Pre-build governance document, per the rebuild brief in `chats/chat1.md`. This file is the
source of truth for what may be published, and the reasoning behind it. Every page in this
site should be traceable back to something in this document.

## 1. Source Inventory

| Source | Type | Role in this build |
|---|---|---|
| `chats/chat1.md` | Design-session transcript | Primary source. Contains the full website-rebuild brief and an embedded transcript of an April 9 client call (Alo ↔ Wade Wilson) that resolves the leadership/facility-count discrepancies below. Treated as the highest-priority source because it is the most recent and explicitly overrides older documents. |
| `project/GSS Website Mockups v2.dc.html` | Approved visual design | Homepage, capability-page template, contact page, and mobile spec. Implemented pixel-for-pixel; its copy is treated as pre-approved (it was itself produced against this same governance). |
| `project/uploads/Company Overview Presentation.pptx` | Client-supplied source material | Company background, capability list, methodology descriptions. Referenced for terminology and service breadth; not re-transcribed verbatim. |
| `project/uploads/Aethon Systems Security Solutions Flyer.pdf` | Client-supplied source material | Security-solutions capability detail. |
| `project/uploads/Nuclear HPC Business Flyer.pdf` | Client-supplied source material | High-Performance Culture / operational-optimization capability detail. |
| `project/uploads/Onboarding Document from tchouangwa5.docx` | Client-supplied source material | Company background and onboarding context. |
| `project/uploads/Eric Wilson LinkedIn Photo.jpeg`, `Wade Wilson Profile Picture.jpeg` | Reference photos | Not used as web assets (see §9 — Images); noted here only as evidence the two leadership subjects are correctly identified. |

Several files in `uploads/` (`Cashvertising`, `Everybody Writes Guide`, `Followers Into Dollars`,
`Magnetic Messaging`, `Mega Doc`, `Messaging`) are general marketing/copywriting reference
material rather than GSS-specific source content and were not treated as factual sources about
GSS itself.

## 2. Approved Overrides (highest priority — supersede any conflicting document)

These three decisions were made explicitly on the April 9 call and in the follow-up correction,
and override anything in the flyers, the presentation, or an older website:

1. **Wade Wilson = President.** His stated preference on the call was "President," not CEO.
2. **Eric F. Wilson = Founder.** He is deceased. He is never presented as a current executive,
   in leadership tables, schema, metadata, alt text, or anywhere else.
3. **50+ nuclear facilities/sites** is the approved public figure — not "100+" or "over 100."
   The client explicitly could not confirm the exact count and chose 50+ as the defensible
   figure ("50 plus sites is already a ton of sites anyway" — Wade Wilson, 10:04 on the call).

A fourth, related decision: **no client, site, utility, or program names appear anywhere on the
site.** Global experience is communicated as regions (North America, Europe, Middle East) and,
on the homepage, as a globe highlighting countries of demonstrated experience — not a client
roster. This was an explicit action item from the call ("Rework capabilities image to
globe/nations; remove client names").

A later design-session instruction added one more constraint: **no other executive (e.g. "Dennis")
is named.** Only Wade Wilson (President) and Eric F. Wilson (Founder) appear as named leadership.

**October 2026 website-changes document** (`GSS_Website_Changes.docx`, client-supplied) made these
further decisions, which supersede anything below that conflicts with them:

- Eric F. Wilson's executive record now reads **"31 critical infrastructure facilities"** reporting
  directly (previously "31 nuclear facilities").
- His military service is stated specifically: **U.S. Army Special Forces (the Green Berets) and the
  Rangers**.
- The NRC-inspector claim is worded as **"former U.S. NRC inspectors with direct experience developing
  federal cybersecurity requirements."** Earlier "authored the regulations" wording was retired
  site-wide so the site makes one consistent claim.
- Navigation is **About, Industries, Solutions, Insights**. Founder & Legacy, Leadership Roles and Our
  Personnel live on the About page; `/founder/` and `/leadership/` redirect there.
- Website copy uses **no em dashes**, and avoids colons in marketing copy where a period, comma or
  rewrite reads more naturally (labels, code, URLs and similar are exempt).

A subsequent client instruction reversed an earlier design-session direction: the site no longer
frames Wade as "Eric's son," and does not describe GSS as "family-led." Wade and Eric are
presented as President and Founder respectively — related by the standard and methodology GSS
was built on, not by family relationship. No page should reintroduce "son of," "father," or
"family-led" language; this was an explicit, deliberate removal.

## 3. Current Leadership

**Wade Wilson — President.** Positioned as continuity of leadership: same team, same
methodology, same standard as the company was founded on — not framed through a family
relationship to the founder. Full biography and LinkedIn URL were not supplied at build time —
the homepage and leadership page mark this explicitly
(`FULL BIOGRAPHY AND LINKEDIN TO BE SUPPLIED`) rather than inventing detail.

Team note (approved, from the v2 mockup): the working team includes former U.S. special forces
operators, engineers, and executives with C-level industry experience; the cyber-physical
division is led by former U.S. NRC inspectors who authored the cybersecurity regulations
governing U.S. plants today. **Superseded October 2026:** the approved wording is now "former U.S. NRC
inspectors with direct experience developing federal cybersecurity requirements" (see §2).

## 4. Founder History — Eric F. Wilson

Treated respectfully, without sensationalizing his passing. Verified timeline (from the approved
v2 mockup, itself derived from the source documents):

1. **Military** — served in two U.S. Special Operations units as an operator and explosives expert.
2. **Nuclear Security** — contributed to U.S. nuclear response strategy design and the explosive
   validation of barriers still in use today; testified before Congress as a subject matter expert.
3. **Executive** — Vice President, then President and CEO within the world's largest security
   company, with 31 critical infrastructure facilities reporting directly (wording per the October
   2026 change document).

The separate "Founded GSS" timeline entry was removed in October 2026 at the client's request. The
2012 founding remains on the site ("EST. 2012" on the homepage, and the Nuclear Security page).

Military service (item 1) now reads: served with the U.S. Army Special Forces, also known as the Green
Berets, and the Rangers. Legislative contributions (testimony before Congress) are kept as written
and must not be expanded until the client supplies approved wording.

Founder-era accomplishments (his personal military/executive record) are kept distinct from
present-day GSS corporate claims — e.g. "31 nuclear facilities reporting directly" describes his
prior employer, not GSS's own client count, and is written that way throughout the site. (As of
October 2026 the figure reads "31 critical infrastructure facilities"; see §2.)

## 5. Conflicting Claims Found, and How They Were Resolved

| Claim | Conflict | Resolution |
|---|---|---|
| Facility/site count | Some flyer material says "over 100 nuclear facilities"; the April 9 call settles on 50+ because the exact historical count couldn't be confirmed. | **50+**, used site-wide via a single constant (`SITE.facilityCount` in `src/lib/site.ts`) so it can never drift page-to-page. |
| Wade Wilson's title | Call transcript initially floats "CEO" as a possibility before Wade states his preference. | **President**, per Wade's explicit statement at 5:49 on the call. |
| Eric Wilson's role | Older material implicitly treats him as active leadership. | **Founder**, clearly distinguished from current leadership; deceased, not stated in gratuitous detail. |
| Third executive ("Dennis") | An earlier design pass included a second current executive. | Removed per explicit design-session instruction; only Wade and Eric are named. |
| Client/site identification | Flyers and the presentation include named clients and site counts. | Never published. Site-level and client-level detail is treated as NDA-covered per explicit client instruction, communicated instead as regions + globe. |

## 6. Capability Inventory (what the site's information architecture is built from)

Grounded in the master rebuild brief (`chats/chat1.md`, §7) and the v2 mockup's own capability
index and mega menu. Organized into five families, each with its own overview page and one
crawlable URL per capability:

- **Security Solutions** (`/security-solutions/`) — assessment & design, avenues-of-approach
  analysis, adversary pathway & timeline analysis, vital area analysis, target set identification,
  new-build security design, perimeter security & intrusion detection, barrier systems, explosive
  validation & blast-resistant design, access control assessment, response strategy development,
  regulatory compliance & basis documentation, security program audits, Systematic Approach to
  Training, tactical training & train-the-trainer, force-on-force readiness, human factors /
  minimum complement, security policy development & optimization.
- **Technology Solutions** (`/technology/`) — secure wireless communications, rapidly deployable
  intrusion detection, monitoring/alarms/access control, drone detection & countermeasures,
  security systems integration, remote security operations & SOC design, KPI/performance
  monitoring technology.
- **Cybersecurity** (`/cybersecurity/`) — cyber-physical security, risk-based security controls,
  penetration testing, risk & vulnerability management, compliance advisory & governance, threat
  hunting & incident response, security operations, training & education.
- **Nuclear & SMR** (`/nuclear-security/`) — nuclear security, small modular reactor security, new
  nuclear build security, nuclear regulatory support, high-performance nuclear operations.
- **High Performance** (`/high-performance/`) — high-performance culture, optimization assessment,
  KPI development & performance metrics, risk-based decision making, leadership & cultural
  transformation.

The full, authoritative list with slugs lives in `src/lib/site.ts` (`NAV`) and drives the header
mega menu, the footer, and the homepage capability index identically — there is one list, not
several that can drift out of sync.

## 7. Proposed Sitemap

Main navigation (October 2026): **About · Industries · Solutions · Insights**. Industries lists Nuclear
(`/nuclear-security/`), Oil & Gas, Data Centers and Other Critical Infrastructure. Solutions lists
Security, Technology, Cybersecurity and High Performance, each with its capability pages.

```
/                                  Home
/about/                            About GSS, incl. #leadership, #founder, #personnel
/founder/, /leadership/            Redirect to the matching About section
/global-experience/                Global Experience
/industries/oil-gas/               Industry page (copy pending, noindex, not in sitemap)
/industries/data-centers/          Industry page (copy pending, noindex, not in sitemap)
/industries/critical-infrastructure/  Industry page (copy pending, noindex, not in sitemap)
/security-solutions/               + 17 capability pages (see §6)
/technology/                       + 7 capability pages
/cybersecurity/                    + 8 capability pages
/nuclear-security/                 + 5 capability pages
/high-performance/                 + 5 capability pages
/insights/                         + article pages
/contact/                          Request a Consultation
```

Generated automatically as an XML sitemap at build time (`@astrojs/sitemap`); see `robots.txt`.

Note: the v2 mockup's homepage included a "Capability Index" section (§03) that listed every
capability page with its raw URL slug in monospace — useful as a build-time IA reference, not as
public-facing sales content. Per client instruction it was removed from the live homepage; the
underlying pages, sitemap, and navigation (header mega menu, footer, family hub pages) are
unaffected and remain fully crawlable/linked.

## 8. Keyword Mapping (primary theme per top-level page)

| Page | Primary theme |
|---|---|
| Home | Nuclear security consulting, physical protection, critical infrastructure |
| Security Solutions | Physical security assessment & design, DBT-based protective strategy |
| Technology | Security technology integration, rapidly deployable IDS |
| Cybersecurity | Cyber-physical security for nuclear infrastructure |
| Nuclear & SMR | Nuclear security, SMR security, new nuclear build security |
| High Performance | Operational optimization, KPI development, high-performance culture |
| About (incl. Founder & Legacy, Leadership Roles) | GSS founder story, Wade Wilson, team |
| Global Experience | International nuclear security experience |

Per-page `<title>`/meta description are unique and set alongside each page's content (see
`src/lib/site.ts` and each page's frontmatter) rather than templated from a single pattern, to
avoid thin/duplicate metadata.

## 9. Images

Real photography is now in place for every non-personal image slot (`public/assets/photos/`,
mapped per page in `src/lib/images.ts`): a nuclear facility exterior (two variants, night and
dusk), a perimeter fence with mounted sensor/camera (two variants), a field technician servicing
GSS equipment, a deployed secure-communications mast, a security operations center, and a
cybersecurity analyst workstation — each assigned to capability pages by theme (see
`capabilityImage()` in `src/lib/images.ts` for the exact family/slug mapping). Client-supplied
headshots for Eric F. Wilson and Wade Wilson are used only on the founder/leadership sections —
never reused as generic imagery elsewhere, per the client's instruction.

Any `ImagePlaceholder` still showing the dashed-frame placeholder (rather than a photo) has not
been assigned an image and is intentionally left that way — check `src/lib/images.ts` before
assuming a gap.

## 10. Content Gaps

- **Wade Wilson's full biography and LinkedIn URL** — not supplied. The About page uses the
  client-approved "Leadership Roles" paragraph (October 2026).
- **Industry pages (Oil & Gas, Data Centers, Other Critical Infrastructure)** — no industry-specific
  copy has been supplied, and no existing source material covers those industries. The pages use
  general GSS copy only, show a visible "INDUSTRY-SPECIFIC COPY TO BE SUPPLIED" label, are
  `noindex`, and are excluded from the sitemap. Do not add industry-specific experience claims
  until the client supplies approved wording.
- **Photography** — see §9.
- **Insights articles** — the source transcript references eight drafted blog articles pending
  technical review; their content was not supplied to this build. The Insights section ships
  with the four approved teaser headlines from the v2 mockup and a small number of full sample
  articles written to the same voice/depth standard, clearly usable as a pattern for the
  remaining drafts once they clear review. No specific technical claims were fabricated to fill
  the gap.
- **National regulatory regime count (currently "04")** — carried over from the v2 mockup as
  given; not independently re-derived from the uploaded source documents.

## 11. Sensitive / Do Not Publish

Per explicit client instruction and general good practice for this industry, the following are
excluded from every page, including capability pages, case studies, and insights articles:

- Named clients, sites, facilities, utilities, or government programs.
- Specific vulnerabilities, exploitable facility details, or detailed protective-strategy
  specifics (barrier ratings, sensor placement, response timing, complement numbers).
- Anything sourced from material marked "Confidential & GSS Proprietary" in the uploaded
  documents — those are used only for high-level positioning, never reproduced.
- Fabricated statistics, testimonials, certifications, awards, or case studies. Every number on
  the site traces to §2 of this document, with one noted exception below.

**Exception — KPI dashboard visualization (formerly on the homepage, High Performance section):**
the homepage High Performance section was removed in October 2026, so this chart no longer appears on
the site. The note below is kept in case it is reinstated. per client
correction, this represents real performance data, not an illustrative example, and the
"ILLUSTRATIVE — NOT CLIENT DATA" label has been removed. Note for future editors: the specific
bar heights in that chart (34/48/42/61/55/72/80/92%) were chosen at build time for visual
composition (an ascending trend), not transcribed from a real measured dataset. If exact figures
become available, replace those values in `src/pages/index.astro` (search `kpi-bars`) rather than
leaving the current placeholder heights presented as real data.

## 12. QA Checklist (run before every publish)

- [ ] No instance of "Eric Wilson CEO" or "Eric Wilson President" (Founder only).
- [ ] No instance of "100+" or "over 100" facilities (50+ only).
- [ ] No mention of "Dennis" or any second current executive.
- [ ] No "son of," "father," or "family-led" language anywhere (removed by explicit client instruction).
- [ ] No named client, site, or utility anywhere in copy, alt text, or schema.
- [ ] No Lorem Ipsum, no broken internal links, no unfilled template placeholders left un-labeled.
- [ ] No fabricated testimonials, logos, certifications, awards, or case studies.
- [ ] No em dashes in website copy; colons only where a label, code, or URL needs one.
- [ ] No "authored the regulations" wording; NRC claim uses the October 2026 approved phrasing.
- [ ] Founder record says "31 critical infrastructure facilities", not "31 nuclear facilities".
- [ ] Industry pages still carry the "copy to be supplied" label and `noindex` until approved copy lands.
