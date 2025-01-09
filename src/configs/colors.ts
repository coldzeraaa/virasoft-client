export const LIGHT_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require('daisyui/src/theming/themes')['light'],
  primary: '#102F31', //emerald green
  'primary-content': '#FDF0EC', //grey with pinkish hue
  secondary: '#C09049', //golden yellow
  'secondary-content': '#EDF2F8', //neutral light grey
  accent: '#17DDDD', //teel
  'accent-content': '#222529', //black
  neutral: '222529', //black
  'neutral-content': '#6C707D', //muted grey with blue undertone
  'base-100': '#ffffff', //off-white
  'base-200': '#F6F7F9', //light grey
  'base-300': '#E7EAEF', //light grey
  'base-content': '#BBBBBB', //dark grey
  info: '#0060F0',
  'info-content': '#FFFFFF',
  success: '#09A557',
  'success-content': '#FFFFFF',
  warning: '#E98F03',
  'warning-content': '#FFFFFF',
  error: '#DD382C',
  'error-content': '#FFFFFF',
};

export const DARK_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require('daisyui/src/theming/themes')['dark'],
  ...LIGHT_COLORS,
  secondary: '#a6adbb',
  'secondary-content': '#21272D',
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  'base-100': require('daisyui/src/theming/themes')['dark']['base-100'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  'base-200': require('daisyui/src/theming/themes')['dark']['base-200'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  'base-300': require('daisyui/src/theming/themes')['dark']['base-300'],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  'base-content': require('daisyui/src/theming/themes')['dark']['base-content'],
};

const themes = {
  daisyui: {
    logs: false,
    themes: [{ dark: DARK_COLORS, light: LIGHT_COLORS }],
  },
};

export default themes;
