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
    },
  },
  plugins: [],
};
