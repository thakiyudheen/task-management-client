// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    styled: false,
    // ...other daisyui config
  },
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Titillium: ['"Titillium Web"', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        monoko: ["Source Code Pro", 'monospace']
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: false,
  },
}