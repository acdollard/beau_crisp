/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Bebas Neue", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
      },
      backgroundImage: {
        "hero-image": "url('/images/barbell.jpg')",
        "hero-image-2": "url('/images/people-lifting-sepia.jpg')",
        "hero-image-3": "url('/images/paper.jpg')",
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
      };
      addUtilities(newUtilities);
    },
  ],
};
