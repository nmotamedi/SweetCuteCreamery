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
      colors: {
        brand: {
          red: "#FF0000",
          // Darker red for text under 24px; #FF0000 only passes contrast as large text.
          "red-text": "#C40000",
          yellow: "#FAE498",
          cream: "#FFF5C1",
          pink: "#FFB0AA",
          blue: "#7FBEF0",
          "blue-light": "#94CBF8",
          orange: "#FC4700",
          "badge-yellow": "#FEE38C",
          green: "#85D3A5",
          // Hover color for text and icons; passes 4.5:1 on every page background.
          "green-dark": "#0F5132",
          "green-bright": "#69D6A1",
        },
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
