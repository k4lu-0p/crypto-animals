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
        },
      },
      fontFamily: {
        'sans': ['Plex Sans'],
        'mono': ['Plex Mono'],
      }
    },
  },
  plugins: [],
}
