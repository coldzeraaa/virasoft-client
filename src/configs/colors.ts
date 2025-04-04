export const LIGHT_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require("daisyui/src/theming/themes")["[data-theme=light]"],
  primary: "#570df8",
  "primary-content": "#ffffff",
  secondary: "#f000b8",
  "secondary-content": "#ffffff",
  accent: "#37cdbe",
  "accent-content": "#163835",
  neutral: "#3d4451",
  "neutral-content": "#ffffff",
  "base-100": "#ffffff",
  "base-200": "#f9fafb",
  "base-300": "#d1d5db",
  "base-content": "#1f2937",
  info: "#3abff8",
  "info-content": "#002b3d",
  success: "#36d399",
  "success-content": "#003320",
  warning: "#fbbd23",
  "warning-content": "#382800",
  error: "#f87272",
  "error-content": "#470000",
};

export const DARK_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require("daisyui/src/theming/themes")["dark"],
  ...LIGHT_COLORS,
  secondary: "#a6adbb",
  "secondary-content": "#21272D",
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "base-100": require("daisyui/src/theming/themes")["dark"]["base-100"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "base-200": require("daisyui/src/theming/themes")["dark"]["base-200"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "base-300": require("daisyui/src/theming/themes")["dark"]["base-300"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "base-content": require("daisyui/src/theming/themes")["dark"]["base-content"],
};

const themes = {
  daisyui: {
    logs: false,
    themes: [{ dark: DARK_COLORS, light: LIGHT_COLORS }],
  },
};

export default themes;
