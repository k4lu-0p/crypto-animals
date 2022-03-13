module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#090C11',
        white: '#EFEFEF',
        lightgray: '#DEDEDE',
        purple: {
          '10': '#6F4DC2',
          '20': '#543FAF',
          '30': '#5D379B',
        },
      },
      fontFamily: {
        'sans': ['Plex Sans'],
        'mono': ['Plex Mono'],
      },
      lineHeight: {
        tightness: 1.11,
      },
      spacing: {
        '42': '10.5rem',
        '98': '26rem',
        '100': '28rem',
        '102': '30rem',
        '104': '32rem',
      }
    },
  },
  plugins: [],
}
