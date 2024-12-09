export const LIGHT_COLORS = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require('daisyui/src/theming/themes')['light'],
  primary: '#FF5A2D',
  'primary-content': '#FDF0EC',
  secondary: '#21272D',
  'secondary-content': '#EDF2F8',
  accent: '#17DDDD',
  'accent-content': '#222529',
  neutral: '222529',
  'neutral-content': '#6C707D',
  'base-100': '#FFFFFF',
  'base-200': '#F6F7F9',
  'base-300': '#E7EAEF',
  'base-content': '#222529',
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
