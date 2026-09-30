/**
 * Leftover SubTerra Shell design tokens — until Luna OS / `packages/open-ui` fold-in.
 *
 * Color: Powerline four-color system. Purple `#400080` is primary fill
 * (replaces amber seed `#e8a54b`). Pink is the on-dark accent — purple is too
 * dark to use as text on this background. Light blue and teal are live tokens;
 * leftover chrome keeps teal on integration tiles.
 * Type: INTERIM — no product font is locked; Material 3 type scale.
 * Space: 4dp grid (Material 3).
 */
export const colors = {
  background: {
    primary: "#0a0c10",
    secondary: "#12151c",
    tertiary: "#1a1f2a",
    elevated: "#222834",
  },
  accent: {
    /** Powerline primary. */
    purple: "#400080",
    pink: "#ED1CAD",
    lightBlue: "#1CEDC5",
    teal: "#008080",
  },
  text: {
    primary: "#f2f2f5",
    secondary: "#a0a4b0",
    tertiary: "#6b7080",
    muted: "#4a4f5a",
    inverse: "#0a0c10",
  },
  border: {
    default: "#2a3040",
    hover: "#3a4255",
    focus: "#ED1CAD",
  },
  status: {
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },
} as const;

/**
 * INTERIM typography until Luna OS names a product family.
 * Live CSS stack is Inter / SF Pro Display / system sans (see `globals.css`).
 * Scale is Material 3 (sp / px at 1:1).
 */
export const typography = {
  status: "interim" as const,
  fontFamily: {
    sans: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  scale: {
    displayLarge: { size: "57px", lineHeight: "64px", weight: 400 },
    displayMedium: { size: "45px", lineHeight: "52px", weight: 400 },
    displaySmall: { size: "36px", lineHeight: "44px", weight: 400 },
    headlineLarge: { size: "32px", lineHeight: "40px", weight: 400 },
    headlineMedium: { size: "28px", lineHeight: "36px", weight: 400 },
    headlineSmall: { size: "24px", lineHeight: "32px", weight: 400 },
    titleLarge: { size: "22px", lineHeight: "28px", weight: 400 },
    titleMedium: { size: "16px", lineHeight: "24px", weight: 500 },
    titleSmall: { size: "14px", lineHeight: "20px", weight: 500 },
    bodyLarge: { size: "16px", lineHeight: "24px", weight: 400 },
    bodyMedium: { size: "14px", lineHeight: "20px", weight: 400 },
    bodySmall: { size: "12px", lineHeight: "16px", weight: 400 },
    labelLarge: { size: "14px", lineHeight: "20px", weight: 500 },
    labelMedium: { size: "12px", lineHeight: "16px", weight: 500 },
    labelSmall: { size: "11px", lineHeight: "16px", weight: 500 },
  },
} as const;

/** Material 3 4dp spacing grid (values in px). */
export const spacing = {
  unit: 4,
  scale: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
  },
} as const;

export const layout = {
  topBarHeight: "56px",
  bottomNavHeight: "64px",
  titleBarHeight: "40px",
} as const;
