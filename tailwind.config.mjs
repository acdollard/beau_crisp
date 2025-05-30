/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
      },
      textShadow: {
        lg: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-lg": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
