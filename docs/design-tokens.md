# Design tokens

Every visual value on the site — colours, fonts, sizes, spacing, corners, shadows, timing — is a token: a named CSS custom property defined once in `src/styles/tokens.css`. Components use only these names, never raw values, so changing a token updates the whole site.

All values are rendered live at `/styleguide`. In code, write `var(--token-name)`.

## Colour palette

| Name | Hex | Token | Used for |
|---|---|---|---|
| midnight-navy | `#1A2231` | `--color-midnight-navy` | Page background, header, button text, text on light surfaces |
| aqua-glow | `#5CEFEC` | `--color-aqua-glow` | Aqua backgrounds, “-damas” in the hero, nav links, primary buttons, inline links on dark |
| deep-teal | `#0E7A94` | `--color-deep-teal` | Info band, footer card, glows in the animated background |
| bloom-pink | `#E864A0` | `--color-bloom-pink` | Footer link drops (decorative) |
| pink-deep | `#C64585` | `--color-pink-deep` | Offer and testimonial cards, “Book a call” text. Darker than the original pink so white text passes contrast |
| drop-pink-light | `#D45D9F` | `--color-drop-pink-light` | Top of the drop gradient |
| drop-pink-dark | `#BF4689` | `--color-drop-pink-dark` | Bottom of the drop gradient |
| highlight-pink | `#FB6AAA` | `--color-highlight-pink` | Underline under highlighted phrases |
| glass-aqua | `#55C6C8` | `--color-glass-aqua` | Glass card fill (see-through), muted labels in the styleguide |
| glass-edge | `#66F4F2` | `--color-glass-edge` | Outline of the glass card and the statistic quote card |
| control-teal | `#1F5D62` | `--color-control-teal` | Pause/play button, photo placeholders |
| white | `#FFFFFF` | `--color-white` | Text on dark and pink surfaces, inverse button |

### Contrast decisions

The reference design had a few text/background pairs below the WCAG AA minimum (4.5:1 for normal text). These were adjusted with your approval:

| Where | Reference | Now | Ratio now |
|---|---|---|---|
| White text on offer and testimonial cards | `#E864A0` / `#ED6FA8` | `pink-deep` `#C64585` | 4.6:1 |
| Testimonial author names | aqua on pink (2.0:1) | white, underlined | 4.6:1 |
| “What’s Covered” text on glass | white (2.0:1) | `midnight-navy` | 7.8:1 |
| “Book a call” button text | `#E864A0` on white (3.1:1) | `pink-deep` on white | 4.6:1 |
| Legal link on aqua strip | teal (3.6:1) | `midnight-navy` | 11.4:1 |

Muted (semi-transparent) white text on pink was replaced by full white, because transparency lowered contrast further.

## Colour roles (what a colour is for)

| Token | Value | Note |
|---|---|---|
| `--color-surface-page` | `var(--color-midnight-navy)` |  |
| `--color-surface-band` | `var(--color-deep-teal)` |  |
| `--color-surface-aqua` | `var(--color-aqua-glow)` |  |
| `--color-surface-pink` | `var(--color-pink-deep)` |  |
| `--color-text-on-dark` | `var(--color-white)` |  |
| `--color-text-on-light` | `var(--color-midnight-navy)` |  |
| `--color-accent` | `var(--color-aqua-glow)` |  |
| `--color-focus-on-dark` | `var(--color-aqua-glow)` |  |
| `--color-focus-on-light` | `var(--color-midnight-navy)` |  |
| `--gradient-drop` | `linear-gradient(160deg, var(--color-drop-pink-light), var(--color-drop-pink-dark))` |  |
| `--color-glass-fill` | `color-mix(in srgb, var(--color-glass-aqua) 85%, transparent)` |  |
| `--color-glow` | `color-mix(in srgb, var(--color-deep-teal) 85%, transparent)` |  |
| `--color-shade` | `color-mix(in srgb, var(--color-midnight-navy) 25%, transparent)` |  |

## Typography: families

| Token | Value | Note |
|---|---|---|
| `--font-display` | `'Funnel Display Variable', 'Helvetica Neue', Arial, sans-serif` |  |
| `--font-body` | `'Inter Variable', 'Helvetica Neue', Arial, sans-serif` |  |

## Typography: weights

| Token | Value | Note |
|---|---|---|
| `--font-weight-regular` | `400` |  |
| `--font-weight-medium` | `500` |  |
| `--font-weight-semibold` | `600` |  |
| `--font-weight-bold` | `700` |  |

## Typography: sizes (fluid between mobile and 1440px)

| Token | Value | Note |
|---|---|---|
| `--font-size-display-xl` | `clamp(4.5rem, 16.5vw, 15rem)` |  |
| `--font-size-display-l` | `clamp(3rem, 6.7vw, 6rem)` |  |
| `--font-size-heading-1` | `clamp(2rem, 3.4vw, 3rem)` |  |
| `--font-size-heading-2` | `clamp(1.75rem, 2.5vw, 2.25rem)` |  |
| `--font-size-heading-3` | `clamp(1.25rem, 1.8vw, 1.625rem)` |  |
| `--font-size-quote-s` | `clamp(1.25rem, 1.8vw, 1.625rem)` |  |
| `--font-size-body-xl` | `clamp(1.125rem, 1.8vw, 1.625rem)` |  |
| `--font-size-body-l` | `clamp(1.125rem, 1.7vw, 1.5rem)` |  |
| `--font-size-body-m` | `1.125rem` |  |
| `--font-size-body-s` | `1rem` |  |
| `--font-size-nav` | `1.1875rem` |  |
| `--font-size-wordmark-s` | `1.375rem` |  |

## Typography: line heights

| Token | Value | Note |
|---|---|---|
| `--line-height-none` | `1` |  |
| `--line-height-tight` | `1.05` |  |
| `--line-height-snug` | `1.15` |  |
| `--line-height-heading` | `1.2` |  |
| `--line-height-ui` | `1.4` |  |
| `--line-height-body` | `1.55` |  |
| `--line-height-relaxed` | `1.65` |  |

## Typography: letter spacing

| Token | Value | Note |
|---|---|---|
| `--letter-spacing-display` | `-0.02em` |  |
| `--letter-spacing-body` | `0.01em` |  |

## Spacing

| Token | Value | Note |
|---|---|---|
| `--space-1` | `0.25rem` | 4 |
| `--space-2` | `0.5rem` | 8 |
| `--space-3` | `0.75rem` | 12 |
| `--space-4` | `1rem` | 16 |
| `--space-5` | `1.5rem` | 24 |
| `--space-6` | `2rem` | 32 |
| `--space-7` | `3rem` | 48 |
| `--space-8` | `3.5rem` | 56 |
| `--space-9` | `4rem` | 64 |
| `--space-10` | `6rem` | 96 |
| `--space-11` | `8rem` | 128 |

## Layout

| Token | Value | Note |
|---|---|---|
| `--layout-gutter` | `var(--space-10)` |  |
| `--layout-header-gutter` | `var(--space-7)` |  |
| `--layout-section-padding` | `var(--space-11)` |  |
| `--layout-content-max` | `77.5rem` | 1240 |
| `--layout-text-max` | `70rem` | hero paragraph |
| `--layout-card-max` | `49rem` | offer + glass cards |
| `--layout-narrow-text` | `32rem` | short centred lines |
| `--layout-page-max` | `90rem` | 1440, hero |
| `--layout-team-column` | `28rem` |  |
| `--layout-container-max` | `calc(var(--layout-content-max) + 2 * var(--layout-gutter))` |  |

## Sizes

| Token | Value | Note |
|---|---|---|
| `--size-avatar-team` | `24rem` |  |
| `--size-avatar-testimonial` | `17rem` |  |
| `--size-drop-s` | `1.75rem` |  |
| `--size-drop-m` | `6.5rem` |  |
| `--size-drop-l` | `9.25rem` |  |
| `--size-control` | `1.875rem` |  |
| `--size-control-icon` | `0.75rem` |  |
| `--size-underline` | `0.1875rem` |  |
| `--size-underline-offset` | `0.25rem` |  |

## Overlaps (how far shapes tuck under or over each other)

| Token | Value | Note |
|---|---|---|
| `--overlap-hero-drop` | `calc(var(--size-drop-l) * 0.45)` | drop peeks out above/left of the K |
| `--indent-hero-intro` | `calc(var(--size-drop-l) * 0.75)` | intro paragraph indent |
| `--overlap-testimonial-card` | `calc(var(--size-avatar-testimonial) * 0.42)` | card starts under the photo |
| `--indent-testimonial-text` | `calc(var(--size-avatar-testimonial) * 0.58 + var(--space-9))` |  |

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
| `--radius-s` | `1.25rem` | 20 |
| `--radius-m` | `2rem` | 32 |
| `--radius-l` | `3rem` | 48 |
| `--radius-pill` | `9999px` |  |
| `--radius-round` | `50%` |  |
| `--radius-drop` | `0 50% 50% 50%` | square top-left corner |

## Shadows and effects

| Token | Value | Note |
|---|---|---|
| `--shadow-card` | `0 1rem 2.5rem color-mix(in srgb, var(--color-deep-teal) 35%, transparent)` |  |
| `--shadow-glow` | `0 0 12rem 6rem var(--color-glow)` |  |
| `--shadow-glass` | `0 0.5rem 2rem color-mix(in srgb, var(--color-midnight-navy) 12%, transparent)` |  |
| `--blur-glass` | `12px` |  |

## Motion

| Token | Value | Note |
|---|---|---|
| `--duration-fast` | `150ms` |  |
| `--duration-base` | `300ms` |  |
| `--duration-backdrop` | `24s` |  |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |  |
| `--ease-drift` | `ease-in-out` |  |

## Layers

| Token | Value | Note |
|---|---|---|
| `--z-base` | `0` |  |
| `--z-raised` | `1` |  |
| `--z-header` | `100` |  |

## Responsive changes

Some tokens take different values on smaller screens, so components adapt without their own breakpoints for sizes.

**Breakpoints** (CSS media queries cannot use tokens, so these two numbers are the only fixed widths in component code):

- **Tablet:** 1024px and below (`max-width: 64rem`)
- **Mobile:** 768px and below (`max-width: 48rem`)

Type sizes are fluid (`clamp`): they scale smoothly between their mobile and 1440px values.

| Token | Desktop | Tablet (≤1024px) | Mobile (≤768px) |
|---|---|---|---|
| `--layout-gutter` | `var(--space-10)` | `var(--space-7)` | `var(--space-5)` |
| `--layout-header-gutter` | `var(--space-7)` | `var(--space-6)` | `var(--space-4)` |
| `--layout-section-padding` | `var(--space-11)` | `var(--space-10)` | `var(--space-9)` |
| `--radius-l` | `3rem` | `—` | `2rem` |
| `--size-avatar-team` | `24rem` | `18rem` | `16rem` |
| `--size-avatar-testimonial` | `17rem` | `12rem` | `8rem` |
| `--size-drop-l` | `9.25rem` | `6rem` | `3.5rem` |
| `--size-drop-m` | `6.5rem` | `—` | `4.5rem` |

## Exceptions

- **Animated background:** the position, size and drift of the glows in `AnimatedBackdrop` are the shape of that artwork, so they stay as percentages inside the component. Their colours and timing are tokens (`--color-glow`, `--color-shade`, `--duration-backdrop`).
- **Icons:** the pause/play SVG icons use their own drawing coordinates.

## Adding or changing a token

1. Change it in `src/styles/tokens.css`.
2. Update this file (the tables above) and check `/styleguide`.
3. Commit both together.
