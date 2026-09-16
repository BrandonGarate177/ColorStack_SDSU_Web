# ColorStack @ SDSU — Style Reference
> A midnight-precision instrument wearing Aztec red and ColorStack gold, with a Duolingo pulse

**Theme:** dark

This system fuses three references into one voice: Linear's hairline-thin, glow-lit dark UI for structure and density; Duolingo's illustration-led, high-energy component language for personality; and the ColorStack + SDSU palettes for identity. The canvas is a deep navy-black — not a pure void — so the darkness feels like ColorStack's own navy rather than a generic dark mode. Structure stays quiet: thin graphite-navy hairlines, tight spacing, small radii on functional elements. Energy is concentrated where it counts — a single vibrant Cardinal-red primary action, a soft colored glow instead of a hard drop shadow, and Duolingo-style pill buttons and mascot-adjacent illustration panels for hero moments and empty states. Teal and gold (shared by both ColorStack and SDSU) carry links, info, badges, and gamified/community touches — chapter streaks, event RSVPs, board-member highlights — so the fun stays purposeful instead of decorative.

> **Sources:** Palette values for San Diego State University are drawn from the official SDSU brand guidelines (brand.sdsu.edu/identity/design-elements/colors). Official ColorStack hex values are not publicly published; the Navy / Off-White / Yellow / Teal tokens below are a reasonable approximation of that stated palette — swap in the exact values from ColorStack's own logo files if/when you get them. Structural and typographic patterns are adapted from the supplied Linear and Duolingo references, not copied verbatim.

## Tokens — Colors

### Base surfaces (Linear-derived, navy-tinted)

| Name | Value | Token | Role |
|------|-------|-------|------|
| Deep Navy | `#0A0E1A` | `--color-bg` | Page background |
| Navy Surface | `#0F1420` | `--color-surface` | Raised cards, panels, nav bar |
| Navy Surface Alt | `#161C2C` | `--color-surface-alt` | Inputs, secondary panels, code blocks |
| Hairline | `#262E42` | `--color-hairline` | Borders, dividers, card outlines |
| Hairline Soft | `#1B2233` | `--color-hairline-soft` | Faint separators, table rows |

### Text

| Name | Value | Token | Role |
|------|-------|-------|------|
| Cream | `#F5F1E8` | `--color-text-primary` | Headings, primary body text |
| Fog | `#A8ACC0` | `--color-text-secondary` | Secondary text, descriptions |
| Mute | `#6B7086` | `--color-text-muted` | Placeholder text, disabled labels, captions |

### Brand — SDSU

| Name | Value | Token | Role |
|------|-------|-------|------|
| SDSU Bright Red | `#D41736` | `--color-sdsu-red` | Primary action, active states, key highlights |
| SDSU Dark Red | `#A6192E` | `--color-sdsu-red-dark` | Hover/pressed state for primary red |
| SDSU Charcoal | `#2D2828` | `--color-sdsu-charcoal` | Warm-black accent, used sparingly in illustration |
| SDSU Bright Teal | `#00A39D` | `--color-sdsu-teal` | Links, info states, secondary highlights |
| SDSU Dark Teal | `#008080` | `--color-sdsu-teal-dark` | Hover state for teal elements |

### Brand — ColorStack (approximate — verify against official logo)

| Name | Value | Token | Role |
|------|-------|-------|------|
| ColorStack Navy | `#14213D` | `--color-cs-navy` | Secondary surfaces, badge fills, footer |
| ColorStack Cream | `#F5F1E8` | `--color-cs-cream` | Shared with Text/Cream — light surfaces on inverted sections |
| ColorStack Yellow | `#FFC93C` | `--color-cs-yellow` | Streak/XP-style badges, highlight accents, warning |
| ColorStack Teal | `#14D6C4` | `--color-cs-teal-bright` | Brightened teal for dark-mode links/skill highlights |

### System states

| Name | Value | Token | Role |
|------|-------|-------|------|
| Success | `#22C55E` | `--color-success` | Confirmation, RSVP success |
| Error | `#FF5C5C` | `--color-error` | Form errors, destructive actions (kept distinct from SDSU Red) |

## Tokens — Decorative / Glow

| Name | Value | Token | Role |
|------|-------|-------|------|
| Primary Glow | `0 0 0 1px rgba(212,23,54,0.4), 0 0 24px rgba(212,23,54,0.35)` | `--glow-primary` | Ambient glow behind the primary CTA, intensifies on hover |
| Teal Glow | `0 0 24px rgba(20,214,196,0.25)` | `--glow-teal` | Hover glow for links, skill nodes, info highlights |
| Hero Gradient | `radial-gradient(120% 120% at 20% -10%, rgba(212,23,54,0.18) 0%, rgba(20,33,61,0.4) 45%, #0A0E1A 100%)` | `--gradient-hero` | Hero section background wash |
| Warm Action Gradient | `linear-gradient(135deg, #D41736 0%, #FFC93C 100%)` | `--gradient-warm-action` | Occasional celebratory CTA (e.g. "Join Us"), used once per view |
| Navy–Teal Gradient | `linear-gradient(135deg, #14213D 0%, #00A39D 100%)` | `--gradient-navy-teal` | Board/event feature cards, premium-feeling panels |

## Tokens — Typography

### Display / Headings — rounded geometric sans · `--font-heading`
- **Family:** Poppins (or Nunito as fallback)
- **Weights:** 600, 700, 800
- **Sizes:** 24px, 32px, 40px
- **Line height:** 1.15, 1.2
- **Letter spacing:** -0.01em
- **Role:** Section titles, hero headlines. Keeps a friendly, rounded edge inside an otherwise precise UI — the one place Duolingo's warmth shows through structurally.

### UI / Body — precision grotesque · `--font-body`
- **Family:** Inter Variable
- **Weights:** 400, 500, 600
- **Sizes:** 13px, 14px, 15px, 16px, 18px
- **Line height:** 1.4, 1.5, 1.6
- **Letter spacing:** -0.005em
- **Role:** Body copy, navigation, buttons, form labels, table content. This is the Linear-derived workhorse — dense, legible, unobtrusive.

### Monospace / Metadata · `--font-mono`
- **Family:** Berkeley Mono (or ui-monospace fallback)
- **Weights:** 400, 500
- **Sizes:** 12px, 13px
- **Role:** Timestamps, chapter codes, technical labels (e.g. event IDs).

### Type Scale

| Role | Size | Line Height | Font | Token |
|------|------|-------------|------|-------|
| display | 40px | 1.15 | heading | `--text-display` |
| heading-lg | 32px | 1.2 | heading | `--text-heading-lg` |
| heading | 24px | 1.2 | heading | `--text-heading` |
| body-lg | 18px | 1.5 | body | `--text-body-lg` |
| body | 15px | 1.5 | body | `--text-body` |
| body-sm | 14px | 1.5 | body | `--text-body-sm` |
| caption | 13px | 1.4 | body | `--text-caption` |
| mono | 12px | 1.5 | mono | `--text-mono` |

## Tokens — Spacing & Shapes

**Density:** compact (Linear-derived — this is what keeps the UI feeling professional rather than sprawling)

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Name | Value | Token |
|------|-------|-------|
| xs | 4px | `--radius-xs` |
| sm | 6px | `--radius-sm` |
| md | 8px | `--radius-md` |
| lg | 12px | `--radius-lg` |
| xl | 16px | `--radius-xl` |
| pill | 9999px | `--radius-pill` |

| Element | Value |
|---------|-------|
| cards | 12px |
| feature/illustration panels | 16px |
| buttons (primary) | 9999px (pill) |
| buttons (secondary/ghost) | 6px |
| inputs | 8px |
| badges | 9999px (pill) |

### Layout

- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 12px
- **Max content width:** 1120px

## Components

### Primary Action Button
**Role:** Filled button — main CTA (e.g. "Join ColorStack")

Background: SDSU Bright Red (#D41736), text: Cream (#F5F1E8). Full pill shape. Padding: 12px 24px. Font: 15px/600/body. Border: none. Ambient glow: `--glow-primary` at rest. Hover: background shifts to SDSU Dark Red (#A6192E), glow intensifies (`0 0 32px rgba(212,23,54,0.5)`), transform translateY(-1px). Active: glow flattens, transform translateY(0).

### Secondary Action Button
**Role:** Outlined button

Background: transparent, text: Cream (#F5F1E8), border: 1px solid Hairline (#262E42). Radius: 6px. Padding: 11px 22px. Font: 15px/600/body. Hover: border-color brightens to Fog (#A8ACC0), background rgba(245,241,232,0.04).

### Ghost / Link Button
**Role:** Text-only button

Background: transparent, text: ColorStack Teal Bright (#14D6C4). Padding: 6px 10px. Font: 14px/600. Hover: `--glow-teal`, text-decoration underline.

### Card (Chapter / Event)
**Role:** Interactive content tile

Background: Navy Surface (#0F1420). Border: 1px solid Hairline (#262E42). Radius: 12px. Padding: 24px. No drop shadow at rest — separation comes from the hairline border, not elevation. Hover: border-color shifts to SDSU Bright Teal (#00A39D), subtle `--glow-teal` appears behind the card.

### Feature Panel (Illustration-led)
**Role:** Hero/empty-state panel carrying mascot-style illustration

Background: `--gradient-navy-teal` or `--gradient-hero`. Radius: 16px. Padding: 32px. Illustration sits on a semi-transparent glass layer (`background: rgba(255,255,255,0.04)`, `backdrop-filter: blur(12px)`) so flat-vector artwork reads as native to the dark UI rather than pasted on top.

### Progress Bar
**Role:** Membership/event progress, application steps

Background track: Hairline Soft (#1B2233). Fill: `--gradient-warm-action` or solid SDSU Bright Teal. Height: 6px. Radius: pill. Animated fill transition, subtle glow on the fill edge.

### Navigation Bar
**Role:** Top navigation

Background: Navy Surface (#0F1420) at 92% opacity with `backdrop-filter: blur(10px)`. Height: 60px. Bottom border: 1px solid Hairline (#262E42) — no shadow. Logo left, nav items center, CTA right. Nav items: 14px/500/Fog, active: Cream with a 2px SDSU Red underline.

### Input Field
**Role:** Text input (RSVP forms, applications)

Background: Navy Surface Alt (#161C2C). Border: 1px solid Hairline (#262E42). Radius: 8px. Padding: 12px 14px. Font: 15px/400/body. Text: Cream. Placeholder: Mute (#6B7086). Focus: border-color SDSU Bright Teal, box-shadow `0 0 0 3px rgba(0,163,157,0.18)`.

### Badge
**Role:** Status / gamification indicator (streaks, roles, "New Chapter")

Background: varies — ColorStack Yellow for highlights, SDSU Bright Red for "featured," ColorStack Navy for neutral tags. Text: Deep Navy on Yellow, Cream elsewhere. Full pill shape. Padding: 4px 12px. Font: 12px/600.

### Skill / Board Node
**Role:** Interactive circular avatar or role marker (board page, chapter map)

Circular container, 64px diameter. Background: `--gradient-navy-teal` for active/filled, Navy Surface Alt with Hairline border for inactive. Hover: scale(1.04) plus `--glow-teal`.

## Do's and Don'ts

### Do
- Reserve SDSU Bright Red exclusively for the single primary action per view — it should read as unmistakably "the" button, the way Duolingo treats its green.
- Use the colored glow (`--glow-primary`, `--glow-teal`) instead of a flat drop shadow for elevation — this is what keeps the UI feeling like a "midnight instrument" rather than a card-heavy dashboard.
- Keep structural elements (nav, cards, inputs) separated with 1px hairlines, not shadows — reserve shadow/glow for interactive or celebratory moments.
- Apply the full pill radius to primary buttons and badges only — this is the one deliberate nod to Duolingo's soft, playful geometry inside an otherwise precision-radius system.
- Use ColorStack Yellow and Teal for gamified or community-facing elements (streaks, board highlights, event badges), not for structural UI chrome.
- Keep the Poppins/Nunito heading font confined to headings — body copy stays on Inter for density and legibility.
- Maintain compact spacing (12–24px component gaps) to preserve the high-density, low-clutter feel; save the larger 64–96px gaps for section breaks only.

### Don't
- Do not use SDSU Bright Red for large background fills — it's a signal color, not a surface color.
- Do not add a hard, opaque drop shadow to cards — this breaks the hairline-and-glow language borrowed from Linear.
- Do not use sharp 0px corners anywhere — even the smallest functional elements (badges, inputs) carry at least 4–8px of radius.
- Do not apply the pill radius to secondary/ghost buttons or cards — pill is reserved for primary CTAs and badges so it keeps its signal value.
- Do not let illustration panels sit flat against the navy background without the glass layer — they will look pasted rather than native to the UI.
- Do not mix ColorStack Navy and Deep Navy background as if interchangeable — Deep Navy is the page canvas, ColorStack Navy is a component/gradient color.
- Do not introduce a light-mode-only white canvas as the default theme — this system is dark-first; a light variant, if needed later, should be treated as a separate pass.

## Imagery

Illustration follows Duolingo's flat, vector-forward language — bold shapes, limited palette (Navy, Teal, Yellow, Red, Cream), no photorealism — but is recolored for the dark canvas and placed on semi-transparent glass panels rather than flat white cards. Use illustration for hero sections, empty states (e.g. "No events yet"), and achievement/milestone moments (e.g. a new chapter member, an event RSVP confirmed), with the confetti/sparkle treatment from Duolingo reserved for genuine milestones rather than routine actions. Avoid photography in the core product UI; save real photography (chapter events, board members) for dedicated media sections where it can be given its own frame rather than competing with the illustration system.

## Layout

- Hero sections use `--gradient-hero` as the background wash with a single illustration panel and one primary CTA.
- Content sections alternate between Deep Navy (default) and Navy Surface (for contrast blocks), never introducing a light section.
- Max content width of 1120px keeps text-dense sections (About, event descriptions) from stretching past a comfortable line length, while cards can span full-bleed within that container in a grid.
