import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'enjoyable-place-desktop': "url('/images/enjoyable-place-desktop.jpg')",
        'enjoyable-place-tablet': "url('/images/enjoyable-place-tablet.jpg')",
        'enjoyable-place-mobile': "url('/images/enjoyable-place-mobile.jpg')",
        'locally-sourced-desktop': "url('/images/locally-sourced-desktop.jpg')",
        'locally-sourced-tablet': "url('/images/locally-sourced-tablet.jpg')",
        'locally-sourced-mobile': "url('/images/locally-sourced-mobile.jpg')",
        'booking-mobile': "url('/images/booking-bg-mobile.jpg')",
        'booking-tablet': "url('/images/booking-bg-tablet.jpg')",
        'booking-desktop': "url('/images/booking-bg-desktop.jpg')",
        'booking-ready': "url('/images/booking.jpg')",
      },
      width: {
        plus: 'calc(100% + 28rem)',
      },
      spacing: {
        sm: '3rem',
        lg: '14rem',
      },
      maxWidth: {
        sm: '36rem',
      },
      colors: {
        lightBrown: '#9e8f5f',
        almostBlack: '#111111',
        darkCian: '#242b37;',
        mediumGray: '#888888',
        lightGray: '#888888',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
export default config
