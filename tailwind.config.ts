import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        background: '#d5d5d5',
        'background-con': '#ecf1f7',
        'text-primary': '#172554',
        'text-secondary': '#757575',
        'text-plain': '#f9f9f9',
        'text-disabled': '#bdbdbd',
         surface: '#ffffff',
        border: '#e0e0e0',
        button: "#573cff",
      }
    },
  },
  plugins: [],
};
export default config;
