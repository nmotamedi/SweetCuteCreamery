/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FaroVariable: ["FaroVariableDisplay", "sans-serif"],
        PoppinsBlack: ["PoppinsBlack", "sans-serif"],
        PoppinsBold: ["PoppinsBold", "sans-serif"],
        PoppinsLight: ["PoppinsLight", "sans-serif"],
        MyriadPro: ["MyriadPro", "sans-serif"],
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".transform-style-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
