/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'nav-bar': 'var(--nav-bar-bg)',
        'nav-bar-admin': 'var(--nav-bar-bg-admin)',
      },
      textColor: {
        'nav-bar': 'var(--nav-bar-color)',
      }
    },
  },
  plugins: [],
}
