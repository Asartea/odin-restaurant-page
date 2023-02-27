const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      red: colors.red,
      green: colors.green,
      orange: colors.orange,
      emerald: colors.emerald,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
