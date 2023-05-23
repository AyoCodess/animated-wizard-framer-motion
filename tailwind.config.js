import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}'
];
export const theme = {
  extend: {
    colors: {
      // brand: "#242526",
      // brand: "#282A2F",
      brand: '#222322'
    },
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans]
    }
  }
};
// eslint-disable-next-line no-undef
export const plugins = [require('@tailwindcss/forms'), addVariablesForColors];

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}
