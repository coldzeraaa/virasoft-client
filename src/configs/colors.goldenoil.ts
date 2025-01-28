export const LIGHT_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require('daisyui/src/theming/themes')['light'],
  primary: '#6B8E23', // darker golden color
  'primary-content': '#a9a9ac', // grey with pinkish hue
  secondary: '#DAA520', // olive green
  'secondary-content': '#EDF2F8', // neutral light grey
  accent: '#FF4500', // orange red
  'accent-content': '#222529', // black
  neutral: '#000', // black
  'neutral-content': '#6C707D', // muted grey with blue undertone
  'base-100': '#FFFFFF', // off-white
  'base-200': '#F6F7F9', // light grey
  'base-300': '#E7EAEF', // light grey
  'base-content': '#222529', // dark grey
  info: '#00BFFF', // deep sky blue
  'info-content': '#FFFFFF', // white
  success: '#32CD32', // lime green
  'success-content': '#FFFFFF', // white
  warning: '#FFA500', // orange
  'warning-content': '#FFFFFF', // white
  error: '#B22222', // firebrick
  'error-content': '#FFFFFF', // white
};

export const DARK_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require('daisyui/src/theming/themes')['dark'],
  primary: '#DAA520', // darker golden color
  'primary-content': '#FDF0EC', // grey with pinkish hue
  secondary: '#6B8E23', // olive green
  'secondary-content': '#EDF2F8', // neutral light grey
  accent: '#FF4500', // orange red
  'accent-content': '#222529', // black
  neutral: '#2F4F4F', // dark slate grey
  'neutral-content': '#6C707D', // muted grey with blue undertone
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  'base-100': require('daisyui/src/theming/themes')['dark']['base-100'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  'base-200': require('daisyui/src/theming/themes')['dark']['base-200'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  'base-300': require('daisyui/src/theming/themes')['dark']['base-300'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  'base-content': require('daisyui/src/theming/themes')['dark']['base-content'],
  info: '#00BFFF', // deep sky blue
  'info-content': '#FFFFFF', // white
  success: '#32CD32', // lime green
  'success-content': '#FFFFFF', // white
  warning: '#FFA500', // orange
  'warning-content': '#FFFFFF', // white
  error: '#B22222', // firebrick
  'error-content': '#FFFFFF', // white
};

const themes = {
  daisyui: {
    logs: false,
    themes: [{ dark: DARK_COLORS, light: LIGHT_COLORS }],
  },
};

export default themes;
