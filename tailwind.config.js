/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#212121',
      brown: '#4e3229',
      mouth: '#f5e4d7',
      white: '#c8bfb5',
      finish: '#f1f1ef',
      oyy: '#585450',
      son: '#a4978b2b',
      den: '#a4978b',
      renk: '#b4a194',
      puff: '#e8e6da2b',
      ana: '#b0a197',
    },
    fontFamily: {
      sans: 'IBM Plex Mono, monospace',
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
