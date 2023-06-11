/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-mobile":
          "url('../public/images/home/background-home-mobile.jpg')",
        "home-tablet":
          "url('../public/images/home/background-home-tablet.jpg')",
        "home-desktop":
          "url('../public/images/home/background-home-desktop.jpg')",
        "destinations-mobile":
          "url('../public/images/destination/background-destination-mobile.jpg')",
        "destinations-tablet":
          "url('../public/images/destination/background-destination-tablet.jpg')",
        "destinations-desktop":
          "url('../public/images/destination/background-destination-desktop.jpg')",
        "technology-mobile":
          "url('../public/images/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('../public/images/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('../public/images/technology/background-technology-desktop.jpg')",
        "crew-mobile":
          "url('../public/images/crew/background-crew-mobile.jpg')",
        "crew-tablet":
          "url('../public/images/crew/background-crew-tablet.jpg')",
        "crew-desktop":
          "url('../public/images/crew/background-crew-desktop.jpg')",
      },
      screens: {
        sm: "640px",

        md: "600px",

        lg: "980px",

        xl: "1280px",

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        textPrimary: "#d0d6f9",
      },
      fontFamily: {
        mohave: "var(--font-mohaves)",
        roboto: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
