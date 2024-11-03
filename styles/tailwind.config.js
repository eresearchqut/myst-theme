const mystTheme = require('@myst-theme/styles');

module.exports = {
  darkMode: 'class',
  content: [
    // Look to the actual packages too works in development
    '../packages/myst-to-react/src/**/*.{js,ts,jsx,tsx}',
    '../packages/myst-demo/src/**/*.{js,ts,jsx,tsx}',
    '../packages/site/src/**/*.{js,ts,jsx,tsx}',
    '../packages/frontmatter/src/**/*.{js,ts,jsx,tsx}',
    '../docs/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...mystTheme.themeExtensions,
    // Extend theme with custom qut approved colours
    extend: {
      colors: {
        ...mystTheme.themeExtensions.colors,
        qutCorpBlue: '#124C7B',
        qutCyan: '#009FE3',
        qutNavy: '#012A4C',
        qutLightBlue: '#EFF6FB',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
