module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'sans-serif'],
      'mono': ['Courier New', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        marqueeFast: 'marquee 8s linear infinite',
        marquee2Fast: 'marquee2 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeFast: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee2Fast: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        'black': '#000000',
        'off-black': '#494949',
        'white': '#FFFFFF',
        'blue': '#00206e',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}