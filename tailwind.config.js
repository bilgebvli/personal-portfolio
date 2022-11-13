/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      brown: '#4e3229',
      beige: '#c8bfb5',
      alicia: '#f1f1ef',
      son: '#a4978b2b',
      puff: '#e8e6da2b',
      taupe: '#b0a197',
      'light-taupe': '#b4a194',
      'opal-beach': '#f5e4d7',
      mouth: '#d5bea7',
    },
    container: {
      center: true,
    },
    letterSpacing: {
      x: '1em',
      m: '0.1em',
    },
  },
  plugins: [],
};
