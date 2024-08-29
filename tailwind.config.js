/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      }
    },
    extend: {
      colors: {
        "primary": "#5FD7A5",
        "n":
        {
          "1": "#1b1e1d",
          "2": "#F3F6F7",
          "3": "#0A0B0B"
        }

      },
      fontFamily: {
        sans: ['var(--font-cairo)'],
        poppins: ['var(--font-poppins)']
      }
    },
  },
  plugins: [],
};
