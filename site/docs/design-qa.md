# Design QA — AS Nutri

## Evidence

- Source visual truth: `/Users/usuario/Library/CloudStorage/GoogleDrive-daniel.leao@gmail.com/Outros computadores/Meu laptop/Documentos/02_Docs e arquivos pessoais/35 - Alcione/Nutri +/impresso/WhatsApp Image 2026-09-21 at 19.36.29.jpeg`
- Source pixels: 854 x 1281, portrait printed-card composition.
- Rendered implementation: `http://localhost:5173/`, captured in Codex in-app Browser tab 2. The browser capture is retained as the deliverable tab; this environment did not expose a filesystem path for the screenshot.
- Comparison capture: source card and browser-rendered desktop hero shown together at a 1440 x 900 CSS viewport, device density 1.
- Responsive capture: 390 x 844 CSS viewport, device density 1.
- State: initial landing-page view; mobile services anchor also tested at `#servicos`.

## Full-view comparison evidence

The side-by-side comparison confirmed that the web adaptation preserves the defining visual system from the printed card: deep emerald surfaces, metallic-gold accents, a high-contrast editorial serif, organic script emphasis, the original AS Nutri logo, circular food-business imagery, generous white space, and the same core hierarchy of proposition, audiences, services, benefits, and contact.

The source is a portrait print card and the implementation is a responsive website, so section flow and proportions are intentionally adapted rather than copied one-to-one. The desktop viewport uses an asymmetric editorial hero; the 390 px mobile viewport stacks the same hierarchy without horizontal overflow.

## Focused-region comparison evidence

- Hero and navigation: logo, green/gold palette, headline emphasis and circular segment imagery remain visually coherent with the source.
- Service presentation: the source checklist becomes a legible numbered grid while retaining all nine services and the dark-green/gold system.
- Mobile hero: headline wraps cleanly, both primary actions remain visible, and the credential line is readable.
- Contact block: WhatsApp, Instagram and e-mail match the supplied material and are exposed as working links.

## Required fidelity surfaces

- Fonts and typography: `Playfair Display`, `DM Sans`, and `Marck Script` loaded successfully. Hierarchy, wrapping, line height and weights are readable on desktop and mobile.
- Spacing and layout rhythm: content uses consistent section spacing, generous inner margins, stable cards and responsive grids. No horizontal overflow was found at 1440 px or 390 px.
- Colors and visual tokens: emerald, gold, cream and white map closely to the supplied identity. Contrast remains strong across buttons, service surfaces and contact links.
- Image quality and asset fidelity: all logo and segment assets loaded successfully. The supplied logo is reused directly; sector imagery is derived from the clean supplied card and presented with the same circular treatment.
- Copy and content: all nine supplied services, four target segments, registration number and three contact channels are represented. Web copy expands the print content without changing its claims.

## Interaction and accessibility checks

- The `Conhecer os serviços` control navigates to `#servicos`.
- WhatsApp, Instagram and mail links resolve to the intended destinations.
- Semantic headings, navigation label, image alternative text and visible focus styles are present.
- Reduced-motion preferences are respected.
- Browser console: no errors or warnings during the final pass.

## Findings

No actionable P0, P1 or P2 mismatch remains. The difference in composition between the portrait print card and the responsive site is an intentional medium adaptation, not fidelity drift.

## Open Questions

None blocking. A future content pass could add verified client testimonials or a service-area statement if the business wants them, but neither was invented for this version.

## Implementation Checklist

- [x] Preserve AS Nutri brand assets and palette.
- [x] Include all supplied services and contact channels.
- [x] Verify desktop and mobile rendering.
- [x] Verify primary navigation and contact targets.
- [x] Confirm images and fonts load.
- [x] Confirm no console errors or horizontal overflow.

## Comparison history

- Pass 1: no P0/P1/P2 differences found after comparing the print source and rendered web hero side by side. Mobile and service-section checks also passed, so no corrective visual iteration was required.

## Follow-up polish

- P3: replace cropped sector imagery with original high-resolution photography if those source files become available.

final result: passed
