/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: '#1A1B21',
        body: '#16171B',
      },
      boxShadow: {
        nav: '0px 0px 20px 4px rgba(0, 0, 0, 0.15)',
        navLight: '0px 0px 20px 4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
