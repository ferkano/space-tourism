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
        "home-tablet": "url('../images/home/background-home-tablet.jpg')",
        "home-desktop": "url('../images/home/background-home-desktop.jpg')",
        "destinations-mobile":
          "url('../public/images/destination/background-destination-mobile.jpg')",
        "destinations-tablet":
          "url('../images/destination/background-destination-tablet.jpg')",
        "destinations-desktop":
          "url('../images/destination/background-destination-desktop.jpg')",
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
