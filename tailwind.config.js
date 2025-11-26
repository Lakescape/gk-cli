/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "Manrope", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        background: "#1a1a2e",
        surface: "#16213e",
        primary: {
          DEFAULT: "#667eea",
          dark: "#764ba2"
        },
        water: "#0ea5e9",
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
        info: "#3b82f6"
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        glow: "0 0 0 1px rgba(102,126,234,0.35), 0 10px 45px rgba(118,75,162,0.35)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at 20% 20%, rgba(102,126,234,0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(118,75,162,0.1), transparent 32%)",
        "gradient-mesh": "linear-gradient(135deg, rgba(102,126,234,0.08) 0%, rgba(14,165,233,0.04) 35%, rgba(22,33,62,0.8) 100%)"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem"
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
