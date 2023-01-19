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
        'nav-bar-hover': 'var(--nav-bar-bg-hover)',
        'nav-bar-hover-dd': 'var(--nav-bar-bg-hover-dd)',
        'primary': 'var(--body-bg)',
        'alt': 'var(--card-bg)'
      },
      border: {
        'primary': 'var(--body-bg-alt)',
        'alt': 'var(--card-bg-alt)',
      },
      textColor: {
        'nav-bar': 'var(--nav-bar-color)',
        'nav-bar-hover': 'var(--nav-bar-color-hover)',
        'nav-bar-hover-dd': 'var(--nav-bar-color-hover-dd)',
      }
    },
  },
  plugins: [],
}
