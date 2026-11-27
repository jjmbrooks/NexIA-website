# Product

<!-- impeccable:product-schema 1 -->

> NOTE — inferred from the owner's written brief (subagent session; no interview round was possible). Every fact below comes from that brief or from the shipped site's copy. The owner has not sat an init interview; confirm or correct these facts with him before treating them as settled.

## Platform

web

## Users

- **Local businesses** in Zihuatanejo, La Unión and Lázaro Cárdenas (Guerrero, Mexico) that want more clients — restaurants, hotels, shops. Their situation: they post on Facebook and almost nobody sees it; they answer the same messages all day; they track sales and expenses in a notebook.
- **Owners at a distance**: foreign owners of property in Troncones, Majahua and Saladita who rent it out remotely and need someone to look after the business while they are away.
- Explicitly NOT for: someone who only wants more posts without measuring whether they bring clients.

## Product Purpose

NexIA Digital is Jhonatan Jesús Martínez Brooks's marketing and applied-AI practice. The site exists to turn a visiting business owner into a WhatsApp conversation: the visitor tells their problem in their own words, NexIA answers with a proposal. Success is a qualified case arriving on WhatsApp, not a form submission stored anywhere.

## Positioning

Two results, not two products. The site sells what changes — more clients walking in, hours returned from repetitive work — and names the means only in small print (marketing campaigns; AI automations). Projects with a closed price, no mandatory monthly fee; NexIA operates everything, so the client needs no technology knowledge. A neighbouring agency could not truthfully copy the local, named-territory promise: Zihuatanejo · La Unión · Lázaro Cárdenas, plus Troncones, Majahua and Saladita.

## Operating Context

- Static site on GitHub Pages (jjmbrooks/NexIA-website, branch main). Mobile-first; ES/EN toggle; light/dark toggle.
- Both forms ("Cuéntanos tu caso", "Revisión gratuita") open WhatsApp with a prefilled message to NexIA's number. The closing button does the same. There is no backend and no stored submissions.
- The visitor's first contact is a short form on purpose: little is asked because there is no trust yet.

## Capabilities and Constraints

- 10 sections, in order: Hero, ¿Te suena familiar?, Lo que cambia, Así trabajamos, ¿Para quién es?, Resultados reales (3 casos), Quién te responde, Preguntas de siempre, Formularios, Cierre por WhatsApp.
- Hero headline (chosen by the owner): "Clientes que llegan. Horas que regresan." Hero sub unchanged.
- All section copy is fixed; clarify wording only, do not rewrite factual copy.
- Problems → results structure throughout. Services (campañas, automatizaciones con IA) only in small print.
- Wording rule: 'problema' / 'dificultad', NEVER 'dolor'.
- NO invented results, figures, or testimonials. The Resultados reales section now carries three real cases (Majahua Palms, Tronco Bay Inn, Catalina Beach Resort); per-video view figures are marked pending confirmation wherever Facebook does not return them, and no specific Facebook post is attributed to Jhonatan.
- WhatsApp: 56 5814 1504 (wa.me/525658141504) in both forms and the close button.
- Imagery must be REAL: the owner's own photos (e.g. a still from his 19 Nov La Unión drone footage) first, then verified free-license photos that actually depict this region. Never pass an image-model generation off as a real photo of a real business. Never stretch aspect ratios — reframe/crop instead. Brand colour grading applied as the final step on images.
- Accessibility baseline: WCAG AA 4.5:1 for text. Known defect to fix: white text on terracotta #c9785b at 3.3:1 (10 instances).
- ES/EN must stay complete (140 keys ES / 144 EN after v3; the 4 extra EN entries are the PAIN_MAP source strings, not i18n keys); light/dark must keep working.

## Brand Commitments

- Identity: JJMBrooks minimalista editorial. Palette: terracotta #C9785B, arena #E9DCC5, azul claro #AECEDB, carbón #3A3D40, blanco #FFFFFF.
- Typography: Playfair Display for headlines, Inter for body. Inter is the BRAND font — an overused-font detector finding against Inter is to be ignored with reason "Brand font", never fixed by changing the font.
- Finished NexIA logo (logo/ SVGs: horizontal colour, horizontal negative, isotipo colour, isotipo negative). Terracotta #c9735a, charcoal #3b3e44.
- Site: www.nexia.ing (DNS/production is a later step; the live site is jjmbrooks.github.io/NexIA-website).

## Evidence on Hand

- Three real cases (v3, 2026-11-27): Majahua Palms (owner's drone/GoPro footage, 60+ GB on the MSI, 12 finished clips in Drive; page 2,767 followers; top reels 31k/14k/11k views per browser check 2026-11-27, dates unverified; two lead campaigns Mar–Apr 2025 from his ad account, >18k reach combined, the March ad used the 11k reel), Tronco Bay Inn (monthly marketing proposal on file; page 13,276 followers; recent top reel 6,602 views; prior period 1.2 M page views unattributed; no footage located), Catalina Beach Resort (MSI inventory 2026-11-27: 64 files, 24 videos, 11 real takes — 4 drone May 2023, 4 GoPro Jul 2023, 3 verticals — + 12 campaign folders Oct–Dec 2023; per-video views pending; ⚠️ attribution pending: the 2022–2023 docs are branded "qweb", not JJMBrooks/NexIA — Jhonatan must confirm). No testimonials exist yet — this absence must not be fabricated.
- The owner's portrait: `assets/img/perfil-v2-1e-terracota-bordes.webp` (JJMBrooks brand profile photo, sand centre, terracotta edges, 1600×1600, grading already applied — do not regrade).
- Real imagery to source: owner's 19 Nov La Unión drone footage (DJI_0855 moving sweep) on the MSI; free-license photos of the Zihuatanejo / La Unión / Lázaro Cárdenas coast and local businesses, verified as actually depicting the region.
- Logo files: ~/workspace/nexia-sitio-cliente/logo/.

## Product Principles

1. Sell the result, not the product: the visitor buys clients arriving and hours returning.
2. Value and trust before any offer: short forms, honest empty results space, no filler numbers.
3. Real over rendered: real photos of the real place; nothing invented about the business.
4. Local and named: the territory is the credential — Zihuatanejo, La Unión, Lázaro Cárdenas, Troncones, Majahua, Saladita.
5. Quality over quantity: few clients who pay more, closed-price projects, no mandatory monthly fee.

## Accessibility & Inclusion

- WCAG AA text contrast (4.5:1) required. ES/EN must stay complete (112 keys each); light/dark must keep working.
