# Chioary App Color Palette

This document contains the complete color palette used in the Chioary application.

## Primary Color Palette

The main color palette is defined in CSS variables located in `assets/css/style.css`:

### 1. **Base Color (Teal/Accent)**
- **Hex**: `#115E5C`
- **RGB**: `17, 94, 92`
- **Variable**: `--chioary-base`
- **Usage**: Primary accent color, links, buttons, highlights
- **Color Name**: Teal / Dark Cyan

### 2. **Primary Color (Teal)**
- **Hex**: `#17A6A2`
- **RGB**: `23, 166, 162`
- **Variable**: `--chioary-primary`
- **Usage**: Primary brand color, main actions, primary elements
- **Color Name**: Teal / Cyan

### 3. **Black (Text/Headings)**
- **Hex**: `#121D18`
- **RGB**: `18, 29, 24`
- **Variable**: `--chioary-black`
- **Usage**: Headings (h1-h6), primary text color, dark elements
- **Color Name**: Dark Charcoal / Almost Black

### 4. **Gray (Body Text)**
- **Hex**: `#6C6E76`
- **RGB**: `108, 110, 118`
- **Variable**: `--chioary-gray`
- **Usage**: Body text, secondary text, descriptions
- **Color Name**: Medium Gray / Slate Gray

### 5. **White**
- **Hex**: `#FFFFFF`
- **RGB**: `255, 255, 255`
- **Variable**: `--chioary-white`
- **Usage**: Backgrounds, text on dark backgrounds, contrast
- **Color Name**: Pure White

### 6. **Extra (Light Background)**
- **Hex**: `#F9F9F9`
- **RGB**: `249, 249, 249`
- **Variable**: `--chioary-extra`
- **Usage**: Light backgrounds, sections, cards
- **Color Name**: Off-White / Light Gray

### 7. **Border Color**
- **Hex**: `#E2E2E2`
- **RGB**: `226, 226, 226`
- **Variable**: `--chioary-bdr-color`
- **Usage**: Borders, dividers, separators
- **Color Name**: Light Gray / Silver

## Color Palette Summary

| Color Name | Hex Code | RGB | Variable | Usage |
|------------|----------|-----|----------|-------|
| **Base (Teal)** | `#115E5C` | `17, 94, 92` | `--chioary-base` | Accent, Links, Buttons |
| **Primary (Teal)** | `#17A6A2` | `23, 166, 162` | `--chioary-primary` | Brand, Primary Actions |
| **Black** | `#121D18` | `18, 29, 24` | `--chioary-black` | Headings, Dark Text |
| **Gray** | `#6C6E76` | `108, 110, 118` | `--chioary-gray` | Body Text |
| **White** | `#FFFFFF` | `255, 255, 255` | `--chioary-white` | Backgrounds, Light Text |
| **Extra** | `#F9F9F9` | `249, 249, 249` | `--chioary-extra` | Light Backgrounds |
| **Border** | `#E2E2E2` | `226, 226, 226` | `--chioary-bdr-color` | Borders, Dividers |

## Color Usage Guidelines

### Primary Colors
- **Teal (#17A6A2)**: Used for primary brand elements, main call-to-action buttons, and important highlights
- **Teal (#115E5C)**: Used for accents, links, secondary buttons, and interactive elements

### Neutral Colors
- **Black (#121D18)**: Used for all headings and primary text content
- **Gray (#6C6E76)**: Used for body text and secondary content
- **White (#FFFFFF)**: Used for backgrounds and text on dark backgrounds
- **Extra (#F9F9F9)**: Used for light section backgrounds and card backgrounds
- **Border (#E2E2E2)**: Used for borders, dividers, and subtle separations

## Visual Color Palette

```
┌─────────────────────────────────────────────────────────┐
│                    CHIOARY COLOR PALETTE                 │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🔵 Base (Teal)        #115E5C  RGB(17, 94, 92)         │
│  🔵 Primary (Teal)     #17A6A2  RGB(23, 166, 162)       │
│  ⬛ Black              #121D18  RGB(18, 29, 24)         │
│  ⬜ Gray               #6C6E76  RGB(108, 110, 118)      │
│  ⬜ White              #FFFFFF  RGB(255, 255, 255)      │
│  ⬜ Extra (Light)      #F9F9F9  RGB(249, 249, 249)      │
│  ⬜ Border             #E2E2E2  RGB(226, 226, 226)      │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Additional Notes

- All colors are defined as CSS custom properties (variables) in the `:root` selector
- RGB values are also provided as separate variables for use with rgba() functions
- The color scheme follows a nature/charity theme with teal as the primary brand color and darker teal as an accent
- The palette is designed for accessibility and readability

