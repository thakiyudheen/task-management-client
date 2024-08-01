// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
    daisyui: {
      styled: false,
      themes: false, // Disable DaisyUI themes
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