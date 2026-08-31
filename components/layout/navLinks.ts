/**
 * The nav link lists appear twice in the original components/nav.html — once in
 * the desktop bar and once in the mobile drawer — with different classes but
 * identical hrefs and labels. Sharing the data (not the markup) removes that
 * duplication without changing either rendering.
 */
export type NavLink = { href: string; label: string };

/**
 * The six capability labels index-7.html leads with, in its order.
 *
 * index-7.html points these at ai-solutions/ai-workforce/ai-lab/ai-audit/
 * digital .html. AI Solutions, AI Workforce, AI Lab and AI Audit are now
 * real routes (/solutions/, /ai-workforce/, /ai-lab/, /ai-audit/) built
 * from their own content sources; Industries resolves to the existing
 * /industries/ page that already covers it; Digital exists only as a
 * home-page section, so that one link addresses the section directly. Its
 * href is root-absolute (`/#mccarthy-digital`, not a bare fragment) because
 * this nav renders on every page — a bare fragment would look for the
 * section on whatever page the visitor is already on and silently do
 * nothing anywhere else.
 *
 * /strategy/ (the site's existing booking/pricing page, with its own
 * engagement tiers and tabs) is deliberately not one of these — it's real,
 * unrelated content, so the "AI Audit" label points at /ai-audit/'s own
 * pitch instead, whose CTAs point at /strategy/ for the actual booking step.
 */
export const PRIMARY_LINKS: NavLink[] = [
  // No Home entry: the logo lockup to the left of this list is the link home,
  // on both the desktop bar and the mobile drawer.
  { href: '/solutions/', label: 'AI Solutions' },
  { href: '/ai-workforce/', label: 'AI Workforce' },
  { href: '/ai-lab/', label: 'AI Lab' },
  { href: '/ai-audit/', label: 'AI Audit' },
  { href: '/#mccarthy-digital', label: 'Digital' },
  { href: '/industries/', label: 'Industries' },
];

/**
 * index-7.html's seventh label, "About", as a dropdown rather than a plain
 * link. Its six capability labels replaced Our Works / Our Framework / R&D in
 * the bar above, and Leadership / Alliances / Careers / Contact already lived
 * behind the old "Who We Are" trigger — so without this list seven existing
 * pages would still build and still be in the sitemap while being reachable
 * from no navigation anywhere on the site. /about/ leads it, so the label
 * still goes where index-7.html's does.
 */
export const ABOUT_LINKS: NavLink[] = [
  { href: '/about/', label: 'About' },
  { href: '/case-studies/', label: 'Our Works' },
  { href: '/framework/', label: 'Our Framework' },
  { href: '/rnd/', label: 'R&D' },
  { href: '/leadership/', label: 'Leadership' },
  { href: '/alliances/', label: 'Alliances' },
  { href: '/careers/', label: 'Careers' },
  { href: '/contact/', label: 'Contact' },
];

/**
 * Ported verbatim from nav.js. Routes are directory-style (/solutions/), so
 * comparison is by normalised pathname rather than by trailing segment.
 */
export function normalizePath(pathname: string): string {
  return pathname.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
}
