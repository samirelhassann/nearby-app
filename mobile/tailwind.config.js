/* eslint-disable import/no-import-module-exports */
/* eslint-disable global-require */

import { fontFamily, colors } from "./src/styles/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
};
