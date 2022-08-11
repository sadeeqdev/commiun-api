/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'purple': '#750550',
      'purple-bg': '#2D132C',
      'sub-white': '#999',
      'dark': '#191919',
      'darker': '#111',
      'footer-bg': '#273444',
      'sub-dark': '#26282B',
      'intro': '#2D4263',
      'green':'#4E9F3D',
      'orange':'#F39422',
      'blue':'#3D2C8D',
    },
    extend: {
      backgroundImage: {
        'welcome-img': "url('./assets/img-6.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    }
  },
  plugins: [],
}
