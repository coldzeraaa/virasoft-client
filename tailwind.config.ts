import fs from 'fs';
import type { Config } from 'tailwindcss';

import customThemes from './src/configs/colors.virasoft';

const presetSrc = `./src/configs/colors.${process.env.APP_INDEX}.ts`;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const customPreset = fs.existsSync(presetSrc) ? require(presetSrc) : require('./src/configs/colors.ts');

const config: Config = {
  presets: [customPreset],
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}', './node_modules/field-form/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tall: { raw: '(min-height: 800px)' },
        short: { raw: '(min-height: 400px)' },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
        center: true,
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    ...customThemes.daisyui,
  },
};

export default config;
