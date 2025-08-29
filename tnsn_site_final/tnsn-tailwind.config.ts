
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0F0F0F',
          orange: '#FF6A00',
          blue: '#0F6DB6',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['IBM Plex Arabic', 'Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        xl: '16px'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { lg: '1200px' }
      }
    }
  },
  plugins: []
}
export default config
