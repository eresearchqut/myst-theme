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
        qutWebPrimaryBlue500: '#0066B9',
      },
    },
    fontFamily: {
      sans: ['"Proxima Nova"', 'Arial', 'sans-serif'],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
      addBase({
        '.light h1, .light h2, .light h3, .light h4, .light h5, .light h6': {
          color: theme('colors.qutWebPrimaryBlue500'),
        },
      });
    },
  ],
  safelist: mystTheme.safeList,
};
