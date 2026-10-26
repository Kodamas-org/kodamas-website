# Design tokens

Every visual value on the site — colours, fonts, sizes, spacing, corners, timing, layers — is a token: a named CSS custom property defined once in `src/styles/tokens.css`. Components use only these names, never raw values, so changing a token updates the whole site.

The values come from the approved homepage design (formerly Test Home). All values are rendered live at `/styleguide`. In code, write `var(--token-name)`.

## Contrast

Checked pairings (WCAG AA: 4.5:1 normal text, 3:1 large):

| Text | Background | Ratio |
|---|---|---|
| white | midnight-navy | 15.9:1 |
| aqua-glow | midnight-navy | 11.4:1 |
| glass-aqua (muted) | midnight-navy | 7.8:1 |
| highlight-pink | midnight-navy | 5.9:1 |
| midnight-navy | aqua-glow | 11.4:1 |
| pink-ink (numbers on aqua) | aqua-glow | 4.8:1 |
| white | navy button | 15.9:1 |


## Colour: palette

| Token | Value | Note |
|---|---|---|
| `--color-midnight-navy` | `#1a2231` | The canvas: page background, header, text on aqua |
| `--color-aqua-glow` | `#5cefec` | The one bright surface, accents, key phrases, buttons, focus on navy |
| `--color-pink-ink` | `#a03269` | Numbers on the aqua surface (4.8:1) |
| `--color-drop-pink-light` | `#d45d9f` | Top of the drop gradient |
| `--color-drop-pink-dark` | `#bf4689` | Bottom of the drop gradient |
| `--color-highlight-pink` | `#fb6aaa` | Section numbers and icons on navy, pink underlines, the final “s” on Our Story |
| `--color-glass-aqua` | `#55c6c8` | Muted text on navy (captions, meta, counters) |
| `--color-control-teal` | `#1f5d62` | Photo placeholders |
| `--color-white` | `#ffffff` | Text on navy |

## Colour: roles

| Token | Value | Note |
|---|---|---|
| `--color-surface-page` | `var(--color-midnight-navy)` |  |
| `--color-surface-bright` | `var(--color-aqua-glow)` | the one bright moment per page |
| `--color-text-on-dark` | `var(--color-white)` |  |
| `--color-text-on-light` | `var(--color-midnight-navy)` |  |
| `--color-text-muted` | `var(--color-glass-aqua)` |  |
| `--color-accent` | `var(--color-aqua-glow)` |  |
| `--color-number` | `var(--color-highlight-pink)` | section numbers, list numbers, icons |
| `--color-number-on-light` | `var(--color-pink-ink)` | 4.8:1 on aqua |
| `--color-placeholder` | `var(--color-control-teal)` |  |
| `--color-focus-on-dark` | `var(--color-aqua-glow)` |  |
| `--color-focus-on-light` | `var(--color-midnight-navy)` |  |
| `--color-rule` | `color-mix(in srgb, currentColor 18%, transparent)` | hairlines, follow the text colour |
| `--color-button-glow` | `color-mix(in srgb, var(--color-aqua-glow) 18%, transparent)` |  |
| `--gradient-drop` | `linear-gradient(160deg, var(--color-drop-pink-light), var(--color-drop-pink-dark))` |  |

## Typography: families

| Token | Value | Note |
|---|---|---|
| `--font-display` | `'Funnel Display Variable', 'Helvetica Neue', Arial, sans-serif` |  |
| `--font-body` | `'Inter Variable', 'Helvetica Neue', Arial, sans-serif` |  |

## Typography: weights

| Token | Value | Note |
|---|---|---|
| `--font-weight-light` | `300` |  |
| `--font-weight-regular` | `400` |  |
| `--font-weight-medium` | `500` |  |
| `--font-weight-semibold` | `600` |  |
| `--font-weight-bold` | `700` |  |
| `--font-weight-heavy` | `800` |  |

## Typography: sizes (fluid)

| Token | Value | Note |
|---|---|---|
| `--font-size-mark` | `22.6cqi` | "Kodamas" fills its container exactly |
| `--font-size-marquee` | `clamp(5rem, 2rem + 12vw, 14rem)` |  |
| `--font-size-stat` | `clamp(4rem, 2rem + 7vw, 9rem)` |  |
| `--font-size-statement` | `clamp(2rem, 1.1rem + 3.4vw, 4.25rem)` |  |
| `--font-size-statement-fit` | `3.3cqi` | one-line statement sized to its container (desktop) |
| `--font-size-heading-2` | `clamp(2rem, 1.25rem + 2.6vw, 3.5rem)` |  |
| `--font-size-footer-link` | `clamp(1.75rem, 1rem + 2.6vw, 3.5rem)` |  |
| `--font-size-quote` | `clamp(1.625rem, 1rem + 2vw, 2.75rem)` |  |
| `--font-size-quote-long` | `clamp(1.375rem, 0.95rem + 1.4vw, 2.125rem)` |  |
| `--font-size-intro` | `clamp(1.375rem, 1.05rem + 1.1vw, 2.125rem)` |  |
| `--font-size-heading-3` | `clamp(1.25rem, 1.05rem + 0.6vw, 1.625rem)` |  |
| `--font-size-lead` | `clamp(1.125rem, 1rem + 0.3vw, 1.25rem)` |  |
| `--font-size-body` | `clamp(1rem, 0.9rem + 0.25vw, 1.125rem)` |  |
| `--font-size-ui` | `1rem` |  |
| `--font-size-small` | `0.875rem` |  |
| `--font-size-nav` | `1.1875rem` |  |
| `--font-size-wordmark-s` | `1.375rem` |  |

## Typography: line heights

| Token | Value | Note |
|---|---|---|
| `--line-height-mark` | `0.8` |  |
| `--line-height-none` | `1` |  |
| `--line-height-heading` | `1.15` |  |
| `--line-height-tight` | `1.25` |  |
| `--line-height-snug` | `1.3` |  |
| `--line-height-ui` | `1.4` |  |
| `--line-height-lead` | `1.5` |  |
| `--line-height-body` | `1.6` |  |

## Typography: letter spacing

| Token | Value | Note |
|---|---|---|
| `--letter-spacing-tight` | `-0.035em` |  |
| `--letter-spacing-display` | `-0.02em` |  |
| `--letter-spacing-body` | `0.01em` |  |
| `--letter-spacing-label` | `0.14em` |  |

## Spacing

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

## Layout

| Token | Value | Note |
|---|---|---|
| `--layout-max` | `80rem` | 1280, the 12-column grid |
| `--layout-gutter` | `clamp(1.25rem, 0.5rem + 3.5vw, 3rem)` |  |
| `--layout-header-gutter` | `var(--space-8)` |  |
| `--layout-section` | `clamp(4rem, 2.5rem + 4.5vw, 7.5rem)` | 64 → 120: the one gap between sections |
| `--layout-col-gap` | `clamp(1rem, 0.5rem + 2vw, 2rem)` |  |
| `--layout-text-max` | `40rem` |  |
| `--layout-team-column` | `22rem` |  |
| `--layout-sticky-top` | `var(--space-10)` |  |

## Sizes

| Token | Value | Note |
|---|---|---|
| `--size-button-l` | `3.5rem` |  |
| `--size-tap-min` | `2.75rem` |  |
| `--size-drop-xs` | `1rem` |  |
| `--size-drop-s` | `1.25rem` |  |
| `--size-drop-m` | `4.5rem` |  |
| `--size-drop-equation` | `var(--size-drop-m)` | The + and = drops in `NameHero` |
| `--size-wisp` | `2.25rem` | Base width of a wisp flame (WispField) |
| `--size-wisp-s` | `1.5rem` | Smaller wisps where space is tight (Blogfolio on mobile) |
| `--size-wisp-blur` | `0.1rem` | Softness of a wisp flame’s edge |
| `--size-spark` | `0.1875rem` | A twinkling spark beside the wisps |
| `--size-drop-cluster` | `clamp(7.5rem, 3rem + 15vw, 17rem)` |  |
| `--size-og-width` | `75rem` | 1200px: width of the share image (`/og-image`) |
| `--size-og-height` | `39.375rem` | 630px: height of the share image |
| `--size-avatar-s` | `3.5rem` |  |
| `--size-avatar-m` | `6rem` | Author block |
| `--size-avatar-l` | `15rem` |  |
| `--size-icon-s` | `var(--space-3)` |  |
| `--size-icon-m` | `var(--space-4)` |  |
| `--size-icon-l` | `var(--space-5)` |  |
| `--size-underline-offset` | `0.25rem` |  |
| `--size-highlight-thickness` | `0.09em` |  |
| `--size-highlight-offset` | `0.14em` |  |

## Borders

| Token | Value | Note |
|---|---|---|
| `--border-width-thin` | `1px` |  |
| `--border-width-medium` | `2px` |  |
| `--border-width-focus` | `3px` |  |
| `--focus-offset` | `3px` |  |

## Radii

| Token | Value | Note |
|---|---|---|
| `--radius-s` | `1.25rem` |  |
| `--radius-pill` | `9999px` |  |
| `--radius-round` | `50%` |  |
| `--radius-drop` | `0 50% 50% 50%` | square top-left corner |

## Texture and effects

| Token | Value | Note |
|---|---|---|
| `--texture-grain` | `SVG fractal noise (data URI)` |  |
| `--opacity-grain` | `0.05` |  |
| `--texture-grain-photo` | `SVG high-contrast fractal noise (data URI)` | Rough film grain over photos (Avatar) |
| `--opacity-grain-photo` | `0.5` | Strength of the photo grain |
| `--position-portrait` | `50% 25%` | Default crop of photos: keeps faces |
| `--opacity-dim` | `0.55` |  |

## Motion

| Token | Value | Note |
|---|---|---|
| `--duration-fast` | `150ms` |  |
| `--duration-base` | `300ms` |  |
| `--duration-reveal` | `800ms` |  |
| `--duration-rise` | `1.1s` |  |
| `--duration-count` | `1600ms` |  |
| `--duration-float` | `9s` |  |
| `--duration-grain` | `0.6s` | One cycle of the moving film grain on photos |
| `--duration-flicker` | `2.2s` | A wisp flame changing shape |
| `--duration-wisp-drift` | `8s` | A wisp rising and swaying |
| `--duration-wisp-fade` | `2.4s` | A wisp fading in when scrolled into view |
| `--duration-marquee` | `40s` |  |
| `--stagger` | `60ms` |  |
| `--duration-beat` | `450ms` | Time between the steps of a sequence that reads in order (the NameHero equation) |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |  |
| `--ease-drift` | `ease-in-out` |  |

## Layers

| Token | Value | Note |
|---|---|---|
| `--z-base` | `0` |  |
| `--z-raised` | `1` |  |
| `--z-header` | `100` |  |
| `--z-grain` | `101` |  |

## Responsive overrides

At the bottom of `tokens.css`:

| Breakpoint | Token | Value |
|---|---|---|
| Tablet (≤ 64rem) | `--layout-header-gutter` | `var(--space-6)` |
| Mobile (≤ 48rem) | `--layout-header-gutter` | `var(--space-4)` |
| Mobile (≤ 48rem) | `--size-avatar-l` | `12.5rem` |
| Mobile (≤ 48rem) | `--size-drop-m` | `3.5rem` |
| Mobile (≤ 48rem) | `--size-drop-equation` | `2.75rem` |

Most sizes are fluid (`clamp()`), so they need no overrides.

## Surfaces

`Section tone="bright"` switches the role tokens for the aqua surface: `--color-number` → `--color-number-on-light`, `--color-accent` → navy, `--focus-color` → `--color-focus-on-light`. Components that read the role tokens adapt without variants. `--color-rule` uses `currentColor`, so hairlines follow the text colour on any surface.

