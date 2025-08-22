import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: { black: '#0c0c0c', orange: '#ff6a00', blue: '#0f6db6' }
      },
      fontFamily: { sans: ['system-ui', 'Inter', 'Arial', 'sans-serif'] }
    }
  },
  plugins: []
}
export default config
