/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          'dark-bg': '#1A202C', // Primary dark background
          'dark-secondary': '#2D3748', // Secondary elements (navbar, cards)
          'accent-blue': '#3B82F6', // Vibrant blue for buttons, links
          'text-primary': '#E2E8F0', // Off-white text
          'text-secondary': '#A0AEC0', // Muted gray text
          'hover-blue': '#60A5FA', // Lighter blue for hover
        },
      },
    },
    plugins: [],
  }