export const LIGHT_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require("daisyui/src/theming/themes")["light"],
  primary: "#102F31", // emerald green
  "primary-content": "#FFFFFF",
  secondary: "#C09049", // golden
  "secondary-content": "#FFFFFF",
  accent: "#FBFAEE", // bright orange
  "accent-content": "#000000",
  neutral: "#272727", // muted dark grey
  "neutral-content": "#FFFFFF",
  "base-100": "#ffffff", // off-white beige
  "base-200": "#F6F7F9",
  "base-300": "#E7EAEF",
  "base-content": "#000C38",
  info: "#00BFFF",
  "info-content": "#FFFFFF",
  success: "#32CD32",
  "success-content": "#FFFFFF",
  warning: "#FFA500",
  "warning-content": "#FFFFFF",
  error: "#B22222",
  "error-content": "#FFFFFF",
};

export const DARK_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require("daisyui/src/theming/themes")["dark"],
  primary: "#DAA520", // darker golden color
  "primary-content": "#FDF0EC", // grey with pinkish hue
  secondary: "#6B8E23", // olive green
  "secondary-content": "#EDF2F8", // neutral light grey
  accent: "#FF4500", // orange red
  "accent-content": "#222529", // black
  neutral: "#FFFFFF", // dark slate grey
  "neutral-content": "#6C707D", // muted grey with blue undertone
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "base-100": require("daisyui/src/theming/themes")["dark"]["base-100"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "base-200": require("daisyui/src/theming/themes")["dark"]["base-200"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "base-300": require("daisyui/src/theming/themes")["dark"]["base-300"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  "base-content": require("daisyui/src/theming/themes")["dark"]["base-content"],
  info: "#00BFFF", // deep sky blue
  "info-content": "#FFFFFF", // white
  success: "#32CD32", // lime green
  "success-content": "#FFFFFF", // white
  warning: "#FFA500", // orange
  "warning-content": "#FFFFFF", // white
  error: "#B22222", // firebrick
  "error-content": "#FFFFFF", // white
};

const themes = {
  daisyui: {
    logs: false,
    themes: [{ dark: DARK_COLORS, light: LIGHT_COLORS }],
  },
};

export default themes;
