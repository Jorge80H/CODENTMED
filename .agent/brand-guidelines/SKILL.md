---
name: brand-guidelines
description: Applies CODENTMED IPS official brand colors, typography, and visual identity to any artifact. Use when creating medical/clinical research documents, presentations, marketing materials, or any content that should reflect CODENTMED's professional healthcare identity.
license: Proprietary - CODENTMED IPS
---

# CODENTMED IPS Brand Styling

## Overview

Official brand identity and style guidelines for CODENTMED IPS - Centro de Investigación Clínica.

**Keywords**: branding, corporate identity, visual identity, medical branding, clinical research, healthcare design, CODENTMED colors, professional medical styling

## Company Identity

**Full Name:** CODENTMED IPS - Centro de Investigación Clínica
**Tagline ES:** "Investigación Clínica de Clase Mundial"
**Tagline EN:** "World-Class Clinical Research"
**Location:** Bogotá, Colombia
**Industry:** Clinical Research, Rheumatology, Internal Medicine, Dentistry

## Brand Guidelines

### Primary Colors

| Color | HEX | HSL | Usage |
|-------|-----|-----|-------|
| **Medical Blue** | `#1d8cd7` | `210 85% 48%` | Primary brand, CTAs, links |
| **Deep Navy** | `#2a3f52` | `215 25% 20%` | Headings, primary text |
| **Clean White** | `#f8fafc` | `210 20% 98%` | Backgrounds |
| **Light Gray** | `#f1f5f9` | `210 15% 94%` | Card backgrounds, sections |

### Secondary Colors

| Color | HEX | HSL | Usage |
|-------|-----|-----|-------|
| **Trust Blue** | `#1565c0` | `210 85% 45%` | Dark mode primary |
| **Soft Gray** | `#e2e8f0` | `210 15% 92%` | Borders, dividers |
| **Muted Text** | `#64748b` | `215 15% 45%` | Secondary text, captions |

### Accent Colors (for visual variety)

| Color | HEX | Usage |
|-------|-----|-------|
| **Success Green** | `#22c55e` | Positive actions, checkmarks |
| **Warning Amber** | `#f59e0b` | Alerts, important notes |
| **Error Red** | `#ef4444` | Errors, destructive actions |
| **Info Cyan** | `#06b6d4` | Information, tooltips |

### Dark Mode Colors

| Element | HEX | HSL |
|---------|-----|-----|
| Background | `#1a1f27` | `220 15% 12%` |
| Card BG | `#242b35` | `220 15% 18%` |
| Primary Text | `#f1f5f9` | `210 15% 95%` |
| Primary Blue | `#3b9fe8` | `210 85% 45%` |

## Typography

### Font Stack

```css
/* Primary - Headlines and UI */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Secondary - Body text alternative */
font-family: 'Roboto', 'Helvetica Neue', sans-serif;

/* Fallback */
font-family: Georgia, serif; /* For quotes/testimonials */
```

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 3rem (48px) | 700 | 1.1 |
| H2 | 2.25rem (36px) | 600 | 1.2 |
| H3 | 1.875rem (30px) | 600 | 1.25 |
| H4 | 1.5rem (24px) | 600 | 1.3 |
| Body | 1rem (16px) | 400 | 1.5 |
| Small | 0.875rem (14px) | 400 | 1.25 |
| Caption | 0.75rem (12px) | 400 | 1 |

## Design Principles

### 1. Professional & Trustworthy
- Use Medical Blue as primary accent
- Clean white/light gray backgrounds
- Generous whitespace
- Subtle shadows for depth

### 2. Scientific Credibility
- Clear typography hierarchy
- Data-driven layouts
- Structured information presentation
- Minimalist aesthetic

### 3. Patient-Centric
- Accessible contrast ratios (WCAG AA minimum)
- Readable font sizes (16px minimum body)
- Clear navigation
- Warm, approachable tone

## Component Styling

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: hsl(210, 85%, 48%);  /* Medical Blue */
  color: white;
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  border: 2px solid hsl(210, 85%, 48%);
  color: hsl(210, 85%, 48%);
  padding: 10px 30px;
  border-radius: 12px;
}
```

### Cards

```css
.card {
  background: white;
  border-radius: 12px;
  border: 1px solid hsl(210, 15%, 92%);
  box-shadow: 0 4px 6px rgba(42, 63, 82, 0.07);
  padding: 32px;
}
```

### Shadows

| Level | CSS Value |
|-------|-----------|
| sm | `0 2px 4px rgba(42,63,82,0.06)` |
| md | `0 4px 6px rgba(42,63,82,0.07)` |
| lg | `0 10px 15px rgba(42,63,82,0.10)` |
| xl | `0 20px 25px rgba(42,63,82,0.12)` |

## Logo Usage

### Logo Files
- Primary: `/public/images/logo-codentmed.svg`
- White variant: `/public/images/logo-codentmed-white.svg`
- Icon only: `/public/images/icon-codentmed.svg`

### Minimum Size
- Full logo: 120px width minimum
- Icon only: 32px minimum

### Clear Space
- Maintain padding equal to the logo height on all sides

## Application Examples

### Document Headers
- Use Medical Blue (#1d8cd7) for headers and accents
- Deep Navy (#2a3f52) for body text
- White background with subtle blue accent lines

### Presentations
- Cover slides: Medical Blue background, white text
- Content slides: White background, Navy text
- Accent charts with brand color palette

### Marketing Materials
- Hero sections: Blue gradient or clean white
- CTAs: Medical Blue buttons with white text
- Photography: Use professional medical/laboratory imagery

## Accessibility

### Color Contrast Ratios
- Primary text on white: 11.2:1 ✓
- Medical Blue on white: 4.5:1 ✓ (AA compliant)
- White on Medical Blue: 4.5:1 ✓

### Focus States
- Use visible focus rings (2px Medical Blue)
- Ensure keyboard navigation works

## CSS Variables Reference

```css
:root {
  --codentmed-blue: hsl(210, 85%, 48%);
  --codentmed-navy: hsl(215, 25%, 20%);
  --codentmed-white: hsl(210, 20%, 98%);
  --codentmed-gray: hsl(210, 15%, 94%);
  --codentmed-border: hsl(210, 15%, 92%);
  --codentmed-muted: hsl(215, 15%, 45%);
}
```

## Related Resources

- **Website:** [codentmed.com](https://codentmed.com)
- **Tailwind Config:** `codentmed-ips/tailwind.config.js`
- **Global CSS:** `codentmed-ips/src/styles/globals.css`
