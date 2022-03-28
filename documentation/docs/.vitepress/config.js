const homeSidebar = []
const docsSidebar = [
  { text: 'Get Started', link: '/get-started' },
  { text: 'Base Styles', link: '/base-styles' },
]

module.exports = {
  title: 'MicronCSS',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/get-started' },
    ],
    sidebar: {
      '/get-started': docsSidebar,
      '/base-styles': docsSidebar,
      '/': homeSidebar,
    },
  },
}
