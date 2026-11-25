# Design

<!-- impeccable:design-schema 1 -->

## World

**El chinchorro** (the fishing net) — assigned direction 4 of the grounded list (seed:dbb270678ab8b18e; roll key e3393fd22e1c266ca8340d0fca51ece0).

- **Thesis:** the net catches clients and returns hours. Every result on the page is a knot in the same net.
- **Ground:** arena (sand) — the page ground is white/cream (#FFFFFF, #FDFaf2, #F6EEDC), never grey. The sea is the second ground: azul claro #AECEDB as one solid band behind "¿Para quién es?". Terracotta is the buoy-knot: #C9785B for rope, knots and icons; the darker #A34A2E wherever white text sits on terracotta.
- **Type:** Playfair Display headlines at full strength (the editorial voice), Inter body (brand font; an overused-font detector finding against Inter is ignored with reason "Brand font", never fixed by changing the font).
- **Composition:** a new layout, not the v1 page recolored — full-bleed coast photo first, headline on sand, pains as three knot panels, two tracks side by side (one with a real beach photo, one with an authored SVG net illustration), the process as three knots on one rope, the territory as one solid water band, an honestly empty results space, two short forms, and a closing surf photo with the WhatsApp action. The primary action (Cuéntanos tu caso → WhatsApp) is unmistakable at every scroll depth (header CTA, hero CTA, sticky mobile bar, closing).
- **Signature:** rope and knots. The logo's diamond IS the net's mesh diamond: it marks every section title, sits on the top edge of the net panels and form cards (a knot on the border, never a bar), numbers the three process steps, and tiles faintly as the mesh pattern behind the "Lo que cambia" and FAQ sections. One authored motion moment: the rope draws itself in under the hero photo and the photo settles (scale 1.045 → 1); everything else is reveal-on-scroll and hover lift.

## Translation (named, per the roll)

The photos are **his own drone frames of Majahua beach** (MSI, `E:\SMM\Majahua Palms\Videos\Drone\Majahua\`), not stock coast photos: the brief pins real, verifiable photos of the actual coast, and no stock beach can be verified as this region. The net world is therefore carried by **material, not by a literal fishing picture**: sand ground, water band, rope and knots, terracotta buoys, real coast photos in net-framed windows. No photo shows an identifiable business, identifiable people, or Prepa 42 material. No 360 panorama is shown flat anywhere (the v1 hero panorama DJI_0849 and a Majahua 360 frame DJI_0461 were both removed for that reason); no 360 viewer is implemented, per the brief.

## First viewport

- **Mobile:** the photo leads — a 16:10 window of the Majahua bay, full-bleed, then the rope with its buoy-knot, the headline "Clientes que llegan. Horas que regresan.", the sub, the two CTAs, then the two result panels stacked.
- **Desktop:** split — copy left on sand (headline, sub, CTAs, the two result panels), the same photo as a full-bleed band breaking the right edge of the grid, the mesh running diagonally behind the copy, and the rope as the vertical seam between sea and sand with its buoy-knot at mid-height. The headline and the primary action are above the fold at 800px viewport height.

## Visitor path

Photo → headline → pains (three familiar lines, each a knot panel with its own icon) → Lo que cambia: two tracks side by side, each with its "Cómo:" recipe pill in small print and a ruled pain→result list; track 1 carries the beach photo (the coast the clients walk along), track 2 carries the authored SVG net catching messages and a clock → Así trabajamos as three knots on one rope (horizontal on desktop, vertical on mobile) → ¿Para quién es? as one solid water band under the town aerial (the territory), with two asymmetric cards (1.35fr / 1fr) → Resultados reales, kept as an honest reserved space with the empty-net SVG → FAQ with knot markers → two short forms → closing as a full-bleed surf photo with a darkened scrim and the WhatsApp button → footer.

## Signature interaction

- The rope with buoy-knots: hero rope draws in on load (horizontal on mobile, the vertical seam on desktop); the process rope threads the three step knots; knots sit on panel top edges.
- **The continuous thread:** a fixed terracotta rail in the left gutter (`.page-thread`, 2px, 0.28 opacity) runs the whole page — the v1 signature, restored. Section-title diamonds travel along it as you scroll.
- Mesh diamond pattern (the logo diamond tiled faintly) behind "Lo que cambia" and FAQ, and in the footer.
- Own SVG illustrations, drawn for this brand: the net catching messages and hours (track 2), the empty net (results). Own drawn icons everywhere (no icon font, no stock icons).
- Reveal-on-scroll with small stagger delays; hover lifts on cards; button press feedback; theme and language toggles with logo swap in dark mode.
- Forms to WhatsApp with inline confirmation and a no-JS fallback to wa.me; the WhatsApp number is visible as text in the closing and footer.

## Cross-surface reach

The same world carries future surfaces: a thank-you page after the WhatsApp handoff, a WhatsApp landing, case-study pages when real results exist (photos of the real business, same windows, same rope).

## Honest risk

The net world is quiet: it depends on the photos carrying the warmth. If the photos read cold, the page reads as a real-estate listing. Mitigation: warm brand grade on every photo (final step), terracotta rope and knots, human copy throughout. The reserved results space is deliberately empty — honesty over filler.

## Raises (from declined challengers)

- **Horizontal course bands** (coiled earth tower): the page reads as stacked bands — sea, sand, mesh, water — each section its own ground.
- **Motif from many small units** (jacquard brocade): the mesh diamond pattern tiled faintly behind sections.
- **One face-out item** (pulp rack): the hero photo and the track photo are the only face-out photographs; everything else is drawn.
- **The frame is the grid** (starship panel): photographs sit in net-framed windows with rounded corners and real depth.
- **Measurement as visible marks** (darkroom exposure record): the "Cómo:" recipe pills and the ruled pain→result lists measure each track.
- **Fixed rail crossing the page** (film cutting bench): the rope is the fixed rail — hero rope, process rope, knots on panel edges.

## Challengers (all declined)

Coiled earth tower, jacquard brocade, pulp rack, starship panel, darkroom exposure record, film cutting bench — each fused with the product facts, each losing on audience identification and/or product clarity to the assigned direction for a Guerrero business audience. No challenger won; the raises above are what the assigned direction kept from each.

## Tokens

- Palette (pinned): terracotta #C9785B, arena #E9DCC5, azul claro #AECEDB, carbón #3A3D40, blanco #FFFFFF.
- **Contrast fixes (v2, computed):** filled controls with white text use `--accent-deep` #A34A2E (5.87:1 vs white); #C9785B stays for decorative accents, rope, knots, icons, and large display text only. Dim text #6F6A5E passes on white (5.39:1), sand (5.16:1) and surface (4.66:1); dark dim #B9B2A2 passes on dark grounds (5.18–7.20:1). Closing scrim raised to 0.68 so the closing paragraph passes 4.5:1 even over the brightest foam in the photo (5.20:1 worst case). Track-art chat bubbles use `currentColor` so they stay visible in dark mode (hard-coded #3A3D40 was invisible there). Step numbers sit in a nested span so the counter-rotation keeps them upright.
- Fonts (pinned): Playfair Display 700/800/900, Inter 400/500/600/700.
- Logo: logo/ SVGs (horizontal colour/negative, isotipo colour/negative; the header swaps to the negative version in dark mode).
- Images: assets/img/ (local, graded last with the v1 `grade()`: R×1.045, B×0.955, contrast 0.93, brightness 1.02, color 0.93; reference work/color-grading.webp). Hero: `hero-bahia-majahua.jpg` (1600×1000 + `-800`, from "Playa Majahua - Panorámica.MP4" t=30, owner's drone). Track 1: `playa-oleaje.jpg` (1200×675 + `-800`, from "Playa Majahua - Levantamiento panorámica.MP4" t=12). Closing: `oleaje-cierre.jpg` (1600×685 21:9 + `-800`, from "Playa Majahua - Diagonal.MP4" t=33). Who: `la-union-aerea.jpg` (kept from v1, DJI_0848 t=25, owner's drone, 19 Nov). Deleted in v2: `hero-la-union-panorama.jpg` (+ `-800`, flat 360 panorama, no viewer) and `calle-desfile.jpg` (+ `-800`, Prepa 42 material — banned from this site). Never use DJI_0460/0461/0259.JPG as flat images (8192×4096 360 panos).
- i18n: 114 keys in ES and EN (105 used in HTML, 9 JS-side), verified present in both dictionaries. No "dolor" anywhere; wording is "problema"/"dificultad".
- Detector: `impeccable detect` clean (`[]`) after the v2 fixes (border-accent-on-rounded fixed by the knot-on-border treatment; overused-font Inter suppressed with reason "Brand font"). Known detector limit: it resolves any `calc()` in this padding as 0 (false cramped-padding), so the hero alignment uses fixed padding values per breakpoint (120px @1120, 280px @1600, 440px @1920) instead of calc.
- Critique v2 (dual-agent, 2026-11-25): Nielsen 20/32 (Acceptable). Post-critique fixes applied and verified in captures: desktop hero split (contract promise), continuous thread rail, nav order = page order, 4th pain option (notebook) in the form select + PAIN_MAP, `<noscript>` note (no-JS fallback no longer silently discards data), trust line under the forms ("Tu número solo se usa para responderte. Te responde Jhonatan, de NexIA."), who-cards separated from the water band in dark mode, lang-toggle at 44px touch target, track-art ARIA contradiction removed, `pattern` on tel inputs. Open items for Jhonatan (not decided unilaterally): no photo/name beyond the trust line, no response-time promise, no mobile hamburger nav, twin forms kept as designed, no draft persistence, EN "Tell us your case" wording kept.

## Decision-round note

No decision page was served: this run is a subagent with no channel to the user, so the roll's presentation step could not run. Proceeded unattended with the assigned direction (index 4, the chinchorro), per the skill's fallback and the v1 precedent; assumptions stated in the delivery report.
