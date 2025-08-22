import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-black": "#0f0f0f"
      }
    }
  },
  plugins: []
};
export default config;