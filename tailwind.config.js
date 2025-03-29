/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffffff",
          75: "#0e0e16",
          100: "#000000",
          150: "#777777",
          200: "#4a4a4a",
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        circular: ["Circular Std", "sans-serif"],
      },
      spacing: {
        90: "1536px",
        55: "55rem",
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(90deg,#D2D2D2,#333333,#333333,#D2D2D2)",
        "white-noise":
          "linear-gradient(to bottom, #ffffff, #ffffff), url('/noise.webp')",
        "warm-flame":
          "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%),url('/noise.webp')",
        "night-fade":
          "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%),url('/noise.webp')",
        "winter-neva":
          " linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%),url('/noise.webp')",
        "grown-early":
          "linear-gradient(to top, #0ba360 0%, #3cba92 100%),url('/noise.webp')",

        "cold-evening":
          "linear-gradient(to right, #4facfe 0%, #00f2fe 100%),url('/noise.webp')",

        "premium-dark":
          "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",

        "gold-flame":
          "linear-gradient(120deg, #f093fb 0%, #f5576c 100%),url('/noise.webp')",

        "cyan-blue":
          "radial-gradient( circle 909px at 8.3% 51.5%,  rgba(45,165,229,1) 0%, rgba(126,199,239,1) 74.9% ),url('/noise.webp')",
      },

      backgroundSize: {
        "noise-pattern": "400px 400px",
      },
    },
  },
  plugins: [],
};
