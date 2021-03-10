module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        pulseborg:
          'slowborg 7s cubic-bezier(0.1, .8, 0.5, .5) 1s infinite backwards',
      },
      keyframes: {
        slowborg: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      fontFamily: {
        headline: 'rexlia, sans-serif',
        mono:
          'ocr-a-std, Monaco, Consolas, Liberation Mono, Courier New, monospace',
        title: 'schwager-sans, sans-serif',
        script: 'Bayshore, sans-serif',
        serif: 'modesto-condensed, Cambria, Times New Roman, Times, serif',
      },
      maxWidth: {
        'sh-1/3': '33.333333vh',
      },
      opacity: {
        85: '.85',
        90: '.90',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
