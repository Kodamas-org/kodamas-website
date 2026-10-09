# Design tokens

Every visual value on the site is a token: a named CSS custom property defined once in `src/styles/tokens.css`. Components use only these names, so changing a token updates the whole site. In code, write `var(--token-name)`. Everything is rendered live at `/styleguide`.

## Colour palette

| Name | Hex | Token | Used for |
|---|---|---|---|
| midnight-navy | `#1A2231` | `--color-midnight-navy` | Page background, header, button text, text on light surfaces |
| aqua-glow | `#5CEFEC` | `--color-aqua-glow` | Aqua backgrounds, “-damas” in the hero, nav links, primary buttons, links on dark |
| deep-teal | `#0E7A94` | `--color-deep-teal` | Info band, footer card, glows in the animated background |
| bloom-pink | `#E864A0` | `--color-bloom-pink` | Footer link drops (decorative) |
| pink-deep | `#C64585` | `--color-pink-deep` | Offer and testimonial cards, inverse button text — darker than the original pink so white text passes contrast |
| drop-pink-light | `#D45D9F` | `--color-drop-pink-light` | Top of the drop gradient |
| drop-pink-dark | `#BF4689` | `--color-drop-pink-dark` | Bottom of the drop gradient |
| highlight-pink | `#FB6AAA` | `--color-highlight-pink` | Underline under highlighted phrases |
| glass-aqua | `#55C6C8` | `--color-glass-aqua` | Glass card fill (see-through) |
| glass-edge | `#66F4F2` | `--color-glass-edge` | Outline of the glass card and the statistic quote card |
| control-teal | `#1F5D62` | `--color-control-teal` | Pause/play button, photo placeholders |
| white | `#FFFFFF` | `--color-white` | Text on dark and pink surfaces, inverse button, testimonial quote mark |

### Contrast decisions

Pairs from the old design that failed WCAG AA (4.5:1 for normal text) were changed:

| Where | Old | Now | Ratio now |
|---|---|---|---|
| White text on pink cards | `#E864A0` / `#ED6FA8` | `pink-deep` `#C64585` | 4.6:1 |
| Testimonial author names | aqua on pink (2.0:1) | white, underlined | 4.6:1 |
| “What’s Covered” text on glass | white (2.0:1) | `midnight-navy` | 7.8:1 |
| “Book a call” button text | `#E864A0` on white (3.1:1) | `pink-deep` on white | 4.6:1 |
| Legal link on aqua strip | teal (3.6:1) | `midnight-navy` | 11.4:1 |

## Type scale

Seven sizes. Fluid sizes grow smoothly from mobile to desktop and mix `rem` with `vw`, so they still follow the reader’s browser zoom.

| Token | Mobile → desktop | Font | Line height | Used for | Component setting |
|---|---|---|---|---|---|
| `--font-size-display` | 72 → 200px | Funnel Display Bold | 1 | Hero wordmark only | Wordmark `xl` |
| `--font-size-h2` | 32 → 40px | Funnel Display Bold | 1.15 | Section titles | Heading `l` |
| `--font-size-h3` | 20 → 24px | Funnel Display Bold | 1.3 | Names | Heading `m` |
| `--font-size-lead` | 18 → 20px | Inter / Funnel Display | 1.5 | Intro paragraphs, card titles, statistic quote | Text `l`, Heading `s` |
| `--font-size-body` | 16 → 18px | Inter | 1.6 | Default text, testimonial quotes, button `l` | Text `m` |
| `--font-size-ui` | 16px | Inter | 1.25 | Nav links, button `m`, names in testimonials | — |
| `--font-size-small` | 14px | Inter | 1.5 | Captions, eyebrow, roles, copyright, legal, button `s` | Text `s` |

Logo sizes (`--font-size-logo-s` 22px, `--font-size-logo-m` 40px) are for the wordmark only and sit outside the type scale.

## Button sizes

| Size | Height | Side padding | Text | Use for |
|---|---|---|---|---|
| `s` | `--button-height-s` 40px | 16px | 14px semibold | Compact actions, desktop only |
| `m` | `--button-height-m` 48px (44 mobile) | 24px (16 mobile) | 16px semibold | Default: header and footer |
| `l` | `--button-height-l` 56px | 32px | 18px semibold (16 mobile) | The one main action per page |

`--size-tap-min` (44px) is the minimum touch target: mobile buttons, the menu button, footer links and the pause button all meet it.

## Spacing

Use the scale for gaps inside components and the **roles** for the big, repeated distances, so the rhythm stays consistent.

| Role | Desktop | Tablet | Mobile | Used for |
|---|---|---|---|---|
| `--space-section` | 96 | 80 | 64 | Space above and below every section |
| `--space-card` | 40 | 32 | 24 | Padding inside large cards (offer, glass, quote, testimonial) |
| `--space-card-s` | 24 | 24 | 20 | Padding inside small cards (offer items) |
| `--space-grid` | 24 | 24 | 16 | Gap between cards in a grid |
| `--layout-gutter` | 48 | 32 | 20 | Page side margin |

Sections on the same background share one `--space-section` gap instead of adding two.

## Layout

All sections use the shared `.container` class: max width `--layout-content-max` (1200px) plus the gutter on each side. Narrower widths: `--layout-narrow-max` 720px (offer), `--layout-text-max` 640px (paragraphs, about 65 characters per line).

## All tokens: Colour: roles

| Token | Value | Note |
|---|---|---|
| `--color-surface-page` | `var(--color-midnight-navy)` |  |
| `--color-surface-band` | `var(--color-deep-teal)` |  |
| `--color-surface-aqua` | `var(--color-aqua-glow)` |  |
| `--color-surface-pink` | `var(--color-pink-deep)` |  |
| `--color-text-on-dark` | `var(--color-white)` |  |
| `--color-text-on-light` | `var(--color-midnight-navy)` |  |
| `--color-focus-on-dark` | `var(--color-aqua-glow)` |  |
| `--color-focus-on-light` | `var(--color-midnight-navy)` |  |
| `--gradient-drop` | `linear-gradient(160deg, var(--color-drop-pink-light), var(--color-drop-pink-dark))` |  |
| `--color-glass-fill` | `color-mix(in srgb, var(--color-glass-aqua) 85%, transparent)` |  |
| `--color-glow` | `color-mix(in srgb, var(--color-deep-teal) 85%, transparent)` |  |
| `--color-shade` | `color-mix(in srgb, var(--color-midnight-navy) 25%, transparent)` |  |

## All tokens: Typography: families

| Token | Value | Note |
|---|---|---|
| `--font-display` | `'Funnel Display Variable', 'Helvetica Neue', Arial, sans-serif` |  |
| `--font-body` | `'Inter Variable', 'Helvetica Neue', Arial, sans-serif` |  |

## All tokens: Typography: weights

| Token | Value | Note |
|---|---|---|
| `--font-weight-regular` | `400` |  |
| `--font-weight-semibold` | `600` |  |
| `--font-weight-bold` | `700` |  |

## All tokens: Typography: type scale (7 sizes, mobile → desktop)

| Token | Value | Note |
|---|---|---|
| `--font-size-display` | `clamp(4.5rem, 2rem + 11vw, 12.5rem)` | 72 → 200, hero wordmark only |
| `--font-size-h2` | `clamp(2rem, 1.5rem + 1.1vw, 2.5rem)` | 32 → 40, section titles |
| `--font-size-h3` | `clamp(1.25rem, 1rem + 0.55vw, 1.5rem)` | 20 → 24, names |
| `--font-size-lead` | `clamp(1.125rem, 1rem + 0.3vw, 1.25rem)` | 18 → 20, intro paragraphs, card titles |
| `--font-size-body` | `clamp(1rem, 0.9rem + 0.25vw, 1.125rem)` | 16 → 18, default text |
| `--font-size-ui` | `1rem` | 16, nav, buttons m and l on mobile |
| `--font-size-small` | `0.875rem` | 14, captions, legal, buttons s |
| `--font-size-logo-s` | `1.375rem` | 22, header |
| `--font-size-logo-m` | `2.5rem` | 40, footer |

## All tokens: Typography: line heights

| Token | Value | Note |
|---|---|---|
| `--line-height-none` | `1` |  |
| `--line-height-heading` | `1.15` |  |
| `--line-height-ui` | `1.25` |  |
| `--line-height-snug` | `1.3` |  |
| `--line-height-lead` | `1.5` |  |
| `--line-height-body` | `1.6` |  |

## All tokens: Typography: letter spacing

| Token | Value | Note |
|---|---|---|
| `--letter-spacing-display` | `-0.02em` |  |
| `--letter-spacing-body` | `0.01em` |  |

## All tokens: Spacing scale

| Token | Value | Note |
|---|---|---|
| `--space-1` | `0.25rem` | 4 |
| `--space-2` | `0.5rem` | 8 |
| `--space-3` | `0.75rem` | 12 |
| `--space-4` | `1rem` | 16 |
| `--space-5` | `1.5rem` | 24 |
| `--space-6` | `2rem` | 32 |
| `--space-7` | `2.5rem` | 40 |
| `--space-8` | `3rem` | 48 |
| `--space-9` | `4rem` | 64 |
| `--space-10` | `6rem` | 96 |

## All tokens: Spacing roles (desktop / tablet / mobile)

| Token | Value | Note |
|---|---|---|
| `--space-section` | `var(--space-10)` | between sections: 96 / 80 / 64 |
| `--space-card` | `var(--space-7)` | inside large cards: 40 / 32 / 24 |
| `--space-card-s` | `var(--space-5)` | inside small cards: 24 / 24 / 20 |
| `--space-grid` | `var(--space-5)` | between cards in a grid: 24 / 24 / 16 |

## All tokens: Layout

| Token | Value | Note |
|---|---|---|
| `--layout-gutter` | `var(--space-8)` | page side margin: 48 / 32 / 20 |
| `--layout-content-max` | `75rem` | 1200, shared container |
| `--layout-narrow-max` | `45rem` | 720, offer |
| `--layout-text-max` | `40rem` | 640, about 65 characters per line |
| `--layout-team-column` | `22rem` | 352 |
| `--layout-container-max` | `calc(var(--layout-content-max) + 2 * var(--layout-gutter))` |  |

## All tokens: Buttons: three sizes

| Token | Value | Note |
|---|---|---|
| `--button-height-s` | `2.5rem` | 40 |
| `--button-height-m` | `3rem` | 48 |
| `--button-height-l` | `3.5rem` | 56 |
| `--button-padding-s` | `var(--space-4)` |  |
| `--button-padding-m` | `var(--space-5)` |  |
| `--button-padding-l` | `var(--space-6)` |  |
| `--size-tap-min` | `2.75rem` | 44, minimum touch target |

## All tokens: Sizes

| Token | Value | Note |
|---|---|---|
| `--size-avatar-team` | `15rem` | 240 |
| `--size-avatar-testimonial` | `3.5rem` | 56 |
| `--size-drop-s` | `1.25rem` | 20 |
| `--size-drop-m` | `4.5rem` | 72 |
| `--size-drop-l` | `7.75rem` | 124 |
| `--size-control` | `2rem` | visible pause button, inside a 44px tap area |
| `--size-control-icon` | `0.75rem` |  |
| `--size-icon` | `1.5rem` |  |
| `--size-underline` | `0.1875rem` |  |
| `--size-underline-offset` | `0.25rem` |  |

## All tokens: Overlaps

| Token | Value | Note |
|---|---|---|
| `--overlap-hero-drop` | `calc(var(--size-drop-l) * 0.45)` | drop peeks out above/left of the K |

## All tokens: Borders

| Token | Value | Note |
|---|---|---|
| `--border-width-thin` | `1px` |  |
| `--border-width-medium` | `2px` |  |
| `--border-width-focus` | `3px` |  |
| `--focus-offset` | `3px` |  |

## All tokens: Radii

| Token | Value | Note |
|---|---|---|
| `--radius-s` | `1rem` | 16, small cards |
| `--radius-m` | `1.5rem` | 24, testimonial and quote cards |
| `--radius-l` | `2rem` | 32, large cards |
| `--radius-pill` | `9999px` |  |
| `--radius-round` | `50%` |  |
| `--radius-drop` | `0 50% 50% 50%` | square top-left corner |

## All tokens: Shadows and effects

| Token | Value | Note |
|---|---|---|
| `--shadow-card` | `0 0.75rem 2rem color-mix(in srgb, var(--color-deep-teal) 30%, transparent)` |  |
| `--shadow-raised` | `0 1.5rem 4rem color-mix(in srgb, var(--color-deep-teal) 45%, transparent)` |  |
| `--shadow-glass` | `0 0.5rem 2rem color-mix(in srgb, var(--color-midnight-navy) 12%, transparent)` |  |
| `--blur-glass` | `12px` |  |

## All tokens: Motion

| Token | Value | Note |
|---|---|---|
| `--duration-fast` | `150ms` |  |
| `--duration-base` | `300ms` |  |
| `--duration-backdrop` | `24s` |  |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |  |
| `--ease-drift` | `ease-in-out` |  |

## All tokens: Layers

| Token | Value | Note |
|---|---|---|
| `--z-base` | `0` |  |
| `--z-raised` | `1` |  |
| `--z-header` | `100` |  |

## Responsive overrides

Breakpoints (the only fixed widths in component code, because media queries cannot read tokens): **tablet** 1024px and below (`max-width: 64rem`), **mobile** 768px and below (`max-width: 48rem`).

| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| `--button-height-m` | `3rem` | `—` | `var(--size-tap-min)` |
| `--button-padding-m` | `var(--space-5)` | `—` | `var(--space-4)` |
| `--layout-gutter` | `var(--space-8)` | `var(--space-6)` | `1.25rem` |
| `--radius-l` | `2rem` | `—` | `var(--radius-m)` |
| `--size-avatar-team` | `15rem` | `—` | `12.5rem` |
| `--size-drop-l` | `7.75rem` | `5rem` | `3.5rem` |
| `--size-drop-m` | `4.5rem` | `—` | `3.5rem` |
| `--space-card` | `var(--space-7)` | `var(--space-6)` | `var(--space-5)` |
| `--space-card-s` | `var(--space-5)` | `—` | `1.25rem` |
| `--space-grid` | `var(--space-5)` | `—` | `var(--space-4)` |
| `--space-section` | `var(--space-10)` | `5rem` | `var(--space-9)` |

## Exceptions

- **Animated background:** glow positions and drift in `AnimatedBackdrop` are the artwork’s shape and stay as percentages in the component; their colours and timing are tokens.
- **Icons:** SVG icons use their own drawing coordinates.

## Changing a token

1. Change it in `src/styles/tokens.css`.
2. Update this file and check `/styleguide` at mobile, tablet and desktop widths.
3. Commit both together.
