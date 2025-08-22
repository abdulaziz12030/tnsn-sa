import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx,mdx}", "./components/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: { "brand-black": "#0f0f0f", "brand-orange": "#ff6a00", "brand-blue": "#0f6db6" }
    }
  },
  plugins: []
};
export default config;