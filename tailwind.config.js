module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)']
      },
      colors: {
        brand: {
          50: '#eef8f7',
          100: '#cdece8',
          500: '#0f766e',
          600: '#0d645d',
          900: '#073a37'
        },
        accent: '#f97316',
        night: '#111827'
      },
      boxShadow: {
        soft: '0 20px 35px -24px rgba(17, 24, 39, 0.35)'
      }
    }
  },
  plugins: []
};
