const mystTheme = require('@myst-theme/styles');

module.exports = {
  darkMode: 'class',
  content: mystTheme.content,
  theme: {
    extend: {
      ...mystTheme.themeExtensions,
      colors: {
        ...mystTheme.themeExtensions.colors, // Merge existing colors
        qutLightBlue: '#EFF6FB',
        qutCorpBlue: '#124C7B',
        qutCyan: '#009FE3',
        qutNavy: '#012A4C',
      },
    },
    fontFamily: {
      sans: ['"Proxima Nova"', 'Arial', 'sans-serif'],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: mystTheme.safeList,
};
