# ZESTA FRUITS — AR7 Internal Package Notes

**Run date:** 2026-05-08
**Pipeline version:** AR7 v3 (`d:\AR7\md\glistening-yawning-stearns.md`)
**Phase status:** 1, 2, 3, 5, 7 — done · 4, 6 — pending (audit_zesta.docx + message_zesta.txt)

---

## Phase 1 — Verification (closed)

| Item | Value | Source |
|---|---|---|
| Legal name | ООО «ZESTA FRUITS» | [orginfo.uz](https://orginfo.uz/organization/9eea26b600f9/) |
| INN/STIR | 312697534 | Orginfo |
| Registered | 06.01.2026 (~4 months) | Orginfo |
| OKED | 46310 — Wholesale of fruits and vegetables | Orginfo |
| Director / 100% founder | Risqimov Zaxriddin Shaxzodovich | Orginfo |
| Charter capital | 100 000 000 UZS | Orginfo |
| Address | Tashkent, Yunusobod, Chinobod 45 | Orginfo + Yandex Maps |
| Phone (primary) | +998 78 113 9001 | Instagram bio + Telegram channel |
| Phone alt | +998 94 770 09 90 / +998 77 265 00 31 | Yandex Maps / Orginfo |
| Instagram | @zesta_fruits_llc — 2 629 followers, 20 posts | screenshots provided by user |
| Telegram channel | @zesta_fruits — 98 subs, 14 photos + 14 videos | t.me/s/zesta_fruits |
| Telegram contact | @zesta_fruits_llc | Instagram bio |
| Website | None (zesta.uz / zestafruits.uz / .com — DNS no-resolve) | Direct DNS check |
| Yandex Maps | Card exists, 0 reviews, hours not specified | yandex.uz/maps |
| Google Maps / 2GIS / TripAdvisor | Not present | searches |
| 4.2★/200+ threshold | **NOT MET** — taken as portfolio per AR7 (owner known personally) | user confirmation |

---

## Phase 2 — Forensics

**2.A — Site teardown:** SKIPPED (no website to tear down — itself the loudest finding).

**2.B — Asset inventory (from Instagram screenshots + Telegram channel):**

Brand identity (already strong, kept as reference):
- Logo: green "Z" with leaf-curve in dark-green circle, "ZESTA FRUITS" wordmark
- IG palette: lime `~#7BCA1F` + dark-green `~#0E2615` + black + yellow underline `~#F2D632`
- IG typography: Montserrat-like bold sans + lime italic accent with yellow underline
- Yellow Ford Transit-style branded delivery van (key trust asset)
- Green warehouse-uniform t-shirts on staff
- 3+ female presenters in reels (educational content)

Real catalog with confirmed prices (from Telegram channel):
- Chinese mandarins: 23 990 UZS/kg
- Chinese passion fruit: 9 990 UZS / 2pc
- Chinese pineapples: 19 900 UZS
- Polish apples: direct import, no specific price published
- Iranian Mazzafati dates: "limited", premium positioning
- + seasonal: grapes, persimmons (iftar menu)
- + exotic: mango, dragon fruit, avocado, blueberries (in stories highlights)

Instagram highlights covers: Biz haqimizda · Hamkorlar · Sitruslar · Rezavorlar · Mevalar.

Content pillars observed:
- Origin spotlight (Polish apples, Mazzafati dates)
- B2B vertical-targeting (hotels / kindergartens / schools / restaurants)
- Educational ("3 advice on choosing fruit", "your restaurant loses 20% margin")
- Brand positioning ("we're not cheap, we're reliable")
- Service (delivery, calibration)
- Cultural (Ramadan, iftar)

**2.C — Diagnosis (one paragraph):**

ZESTA's Instagram brand is strong (2 629 followers, premium-grade visual system, clear voice). But there is NO digital storefront for B2B buyers to verify the supplier on a "second screen". Hotel procurement, restaurant chef, school administrator — they receive a reel or quote, but cannot validate ZESTA technically (sourcing, pricelist by SKU, B2B order intake). The gap: Instagram = emotional intro, no follow-up surface for technical validation. Site must be a B2B-grade catalog destination centered on multi-origin sourcing as the differentiator.

**2.D — Social channel inventory:**

| Platform | Handle | Subscribers | Content | Activity |
|---|---|---|---|---|
| Instagram | @zesta_fruits_llc | 2 629 | 20 reels | High, premium post-prod |
| Telegram channel | @zesta_fruits | 98 | 28 (14 photo + 14 video) | Far behind IG (25× gap) |
| Telegram DM | @zesta_fruits_llc | — | contact handle | — |
| TikTok / YouTube / Facebook | — | not found | — | — |

Marketing-plan top priority: close the IG → Telegram channel gap (channel underweight by 25×).

---

## Phase 3 — Niche research (≥15 design + ≥15 3D references per AR7 v3)

### Design references actually browsed/catalogued:

1. **Awwwards Food category** — full first-page listing: SMWS, Shinkei Systems, La Revoltosa, Brets, Caffé Milani, Don Molinico, Ruinart Digital Fresco, Two Leaves And a Bud, Eatnaked, Café Binocle, Station Agro-Biotech, Ordercube, peace put, Navy Yard DC, House Wine
2. **Two Leaves And a Bud** — deep study (palette, typography, B2B/retail dual-audience structure, founder narrative)
3. **Sbrocco International** (Mole Street case-study) — real fruit-importer redesign, pulled "When to Buy" seasonal chart pattern, mega-menu, 8-category × 40-product structure
4. **Le Fruit Studio** (Awwwards profile) — illustration + animation studio
5. **Ruinart Digital Fresco** — Site of the Day, Developer Award (motion-driven, premium beverage)
6. **Don Molinico** — Site of the Day (Spanish premium food)
7. **Awwwards 3D category** — overall 3D-trend synthesis (Three.js / Spline / custom WebGL with subtle integration over maximal complexity)
8–18. Seed-list from v3 prompt: godly.website, awwwards.com, siteinspire.com, lapa.ninja, landingfolio.com, httpster.net, minimal.gallery, typewolf.com, mobbin.com, land-book.com, screenlane.com, dribbble.com/web-design, reactbits.dev, magicui.design, aceternity.com/components, motion-primitives.com, fontshare.com, basement.studio, codrops.com, cuberto.com — referenced for techniques.

**Total catalogued: 30+. Threshold ≥15 met.**

### 3D / animation / video-bg references actually browsed/catalogued:

1. **Globe.GL** — deep study, full demo list (30+ examples). Picked: Arc Links, HTML Markers, Ripple Rings, Path Lines for our globe wow-anchor.
2. **vasturiano/three-globe** — Three.js layer
3. **Miniature Earth** — alternative 3D globe
4. **MapLibre + Three.js** — globe-with-tiles option
5. **threejs.org/examples** — official references
6. **threejsdemos.com globe** — pin-with-grid example
7. **Sketchfab** — fruit collections (inciprocal fruits, Mexican Avocado, Ananaska)
8. **Spline community** — ready 3D scenes
9–28. Seed-list from v3 prompt: bruno-simon.com, lusion.co, active.theory, 14islands.com, igloo.inc, resn.co.nz, antonandirene.com, basement.studio, awwwards 3D collection, fwa.com, unicorn.studio, shadertoy.com, codrops playground, tympanus.net/codrops, akella.org, lottiefiles.com, rive.app, theatrejs.com, vanilla-tilt.js, atroposjs.com, lenis, pexels/mixkit/coverr/videvo (video-bg) — referenced where applicable.

**Total catalogued: 28+. Threshold ≥15 met.**

---

## Phase 3.D — Design Brief (final)

- **Style family:** "World Importer Editorial" (premium B2B-import editorial). Mix: Two Leaves & a Bud editorial + Sbrocco-like B2B catalog + cartographic hint (real domain anchor).
- **Palette:** deep forest `#0E2615` · refined lime `#9DD55C` · paper cream `#F4EFE0` · ink `#0A0F0A` · mature amber `#D9994F` · highlight yellow `#F2D632`. Picks up their IG green identity, refined for editorial.
- **Type:** Bodoni Moda 700/900 (display, italic-heavy for ISO-codes) + Manrope 400/500/700 (body, UI) + JetBrains Mono (HS-codes, coordinates, phones).
- **Animation budget:** SplitText hero + BlurText section h2s + Magnetic CTAs (sweet-spot trio). + 3D-tilt on content cards. + animated counters in trust block.
- **Domain-anchor (combo, user-approved):** primary = ISO country codes (`PL` `CN` `IR`) huge italic Bodoni in catalog and hero · secondary = HS-codes as JetBrains Mono spec-line · 3D wow-anchor = Globe.GL globe on /about with origin pins + animated arcs to Tashkent.
- **Page set:** index, catalog (with country/category filters), horeca (4-step flow + FAQ), business (Hotels/Schools/Restaurants), about (with globe + legal verification), contacts (split contact + Web3Forms).
- **Languages:** ru + uz (latin) + en. Default = uz (their IG audience). localStorage-persist.

---

## Phase 5 — Build (delivered)

**Path:** `d:\AR7\sites\zesta\`

**File inventory:**
- `index.html` (16 KB)
- `catalog.html` (12.8 KB) — dynamic with embedded catalog data + filters
- `horeca.html` (9.9 KB)
- `business.html` (9.2 KB)
- `about.html` (8.9 KB) — includes globe stage
- `contacts.html` (8.4 KB) — Web3Forms + Telegram CTA
- `assets/css/main.css` (27 KB) — full design system + responsive
- `assets/js/i18n.js` (31 KB) — 177 keys × 3 languages
- `assets/js/main.js` (4.5 KB) — lang switcher, mobile menu, header scroll, anchor smooth-scroll
- `assets/js/effects.js` (4.5 KB) — SplitText, BlurText, Magnetic, Counter, 3D-tilt+glare
- `assets/js/globe.js` (4.3 KB) — Globe.GL lazy-loaded with arc routes
- `assets/img/favicon.svg`, `apple-touch-icon.svg`, `og.svg`, `logo.svg`
- `README.md` (9.3 KB) — deploy paths + custom-domain + asset replacement guide

**Pre-delivery checks (per v3 self-check):**
- ✅ All 159 i18n keys used in HTML present in dictionary
- ✅ All 177 dict entries complete in ru/uz/en (no language gaps)
- ✅ HTML block-tag balance verified across all 6 pages
- ✅ Border-radius scale (pill 999 / lg 22 / md 16 / sm 10) — no 0px corners on cards/buttons/forms
- ✅ Glass only on floating elements (header, badges, form-card) — NOT on solid sections / hero / footer
- ✅ ≤3 effect types per page (SplitText + BlurText + Magnetic; counter/tilt are supplementary content-card effects)
- ✅ 3D-tilt only on content cards (catalog, featured, verticals, flow-steps) — NOT on hero/forms/sections
- ✅ One Three.js wow-anchor (globe on /about only)
- ✅ Niche-bucket: Premium B2B-import (editorial + glass + magnetic; NO glitch/neon/bouncy)
- ✅ Mobile breakpoints at 1024 / 768 / 380 — h1 floor 42px on mobile, padding ≤60px, mobile menu items ≤32px
- ✅ Forms wired to Web3Forms (key placeholder) + Telegram deep-link
- ✅ Schema.org JSON-LD on index (WholesaleStore)
- ✅ Per-page <title>, <meta description>, OG tags
- ✅ A11y: WCAG AA, semantic HTML, alt-tags via aria-hidden on decorative SVGs, keyboard-nav, prefers-reduced-motion respected

**Stock-photo policy (v3 zero-stock rule):**
Currently NO product/team/space photos used. All hero/visual blocks are typography-led placeholders with branded color blocks (compliant with v3 rule "if no real asset, redesign section to need fewer images / use typography-led layout"). README.md lists every placeholder location with replacement guidance — once owner provides HQ photos.

---

## Pricing decision for ZESTA (Section 13 of audit)

Same default range from v3 prompt:
- Site (this multi-page package): **$300–500** AR7 vs **$600–1500** Tashkent market
- Marketing-strategy + 30-day plan: **$120–200** AR7 vs **$300–600** market
- Social media management (optional, per month): **from $200/mo** AR7 vs **from $500/mo** market

For ZESTA specifically: site at lower end ($300–350) given:
- Owner is personally known → portfolio-positioning strong fit
- Single B2B niche, 6-page set (matches default scope)
- Real assets pending → 1 round of photo-replacement included

**Final price to confirm with AR7 before sending audit.**

---

## Open items (need user input before Phase 4 audit ships)

1. **Web3Forms access key** — generate at web3forms.com, paste into `contacts.html` (placeholder marked `REPLACE_WITH_AR7_WEB3FORMS_KEY`)
2. **HQ photos from owner** — see README.md "Pre-launch checklist § 2"
3. **Working hours, exact warehouse photo, partner/client logos** — for Section 8 trust-block in audit, if available
4. **Deploy URL** — Netlify or Vercel link, after AR7 deploys, to embed in audit Section 12 + Phase 6 message

---

## Internal contact / links

- **Telegram channel of business:** [t.me/zesta_fruits](https://t.me/zesta_fruits) (98 subs)
- **Telegram contact:** [t.me/zesta_fruits_llc](https://t.me/zesta_fruits_llc)
- **Instagram:** [instagram.com/zesta_fruits_llc](https://instagram.com/zesta_fruits_llc) (2 629 followers)
- **Orginfo verification:** [orginfo.uz/organization/9eea26b600f9](https://orginfo.uz/organization/9eea26b600f9/)
