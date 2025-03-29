/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-text': 'gradient-text 4s linear infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
      colors: {
        'primary-blue': '#0066cc',
        'secondary-blue': '#0099ff',
        'dark-blue': '#001833',
        'light-blue': '#e6f3ff',
        'accent-blue': '#00bfff',
        'blue-gradient-start': '#0066cc',
        'blue-gradient-end': '#00bfff',
      },
    },
  },
  plugins: [],
};



