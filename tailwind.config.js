module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  mode: 'jit',
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: { colors: { 'accent-1': '#333' }, width: { '40rem': '40rem' } }
  },
  variants: { extend: {} },
  plugins: []
}
