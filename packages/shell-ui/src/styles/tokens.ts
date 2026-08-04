/**
 * SubTerra Shell design tokens — underground dark theme.
 * Accent is amber/gold (brand), not Blocks magenta.
 */
export const colors = {
  background: {
    primary: "#0a0c10",
    secondary: "#12151c",
    tertiary: "#1a1f2a",
    elevated: "#222834",
  },
  accent: {
    amber: "#e8a54b",
    amberLight: "#f0b96a",
    amberDark: "#c4892e",
    teal: "#3d9b8f",
    tealLight: "#56b3a7",
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
    focus: "#e8a54b",
  },
  status: {
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },
} as const;

export const layout = {
  topBarHeight: "56px",
  bottomNavHeight: "64px",
  titleBarHeight: "40px",
} as const;
