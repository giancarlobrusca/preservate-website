module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    minHeight: {
      64: '64px',
      full: '100%',
      screen: '100vh',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      highlighted: '100px',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#00c39d',
      primarydark: '#00987a',
      secondary: '#667eea',
      secondarydark: '#3b4c99',
      tertiary: '#d53f8c',
      tertiarydark: '#9d2e67',
    }),
    backgroundImage: (theme) => ({
      ...theme,
      'yellow-background-img': "url('/img/yellow-background.jpg')",
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#00c39d',
      primarydark: '#00987a',
      secondary: '#667eea',
      secondarydark: '#3b4c99',
      tertiary: '#d53f8c',
      tertiarydark: '#9d2e67',
    }),
  },
  variants: {},
  plugins: [],
};
