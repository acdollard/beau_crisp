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
        "hero-image-2": "url('/images/hero2.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
