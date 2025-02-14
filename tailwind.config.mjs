/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_green: "#35797F",
        acc_green: "#B6D350",
        main_pink: {
          100: "#C32FD2",
          70: "#C32FD270",
        },
        bg_dark: "#1f1f1f",
        main_white: {
          100: "#fefffe",
          85: "#fefffe85",
          50: "#fefffe50",
          30: "#fefffe30",
        },
        main_blue: "#50B3B5",
        main_yellow: {
          100: "#CFBB41",
          50: "#CFBB4150",
        },
      },
      maxWidth: {
        container: "1480px", // Example custom width
      },
    },
  },
  plugins: [],
};
