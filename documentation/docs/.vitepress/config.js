const homeSidebar = []
const docsSidebar = [
  { text: 'Get Started', link: '/get-started' },
  { text: 'Styles', link: '/micron-styles/' },
]
const stylesSidebar = [
  { text: 'Get Started', link: '/get-started' },
  { text: 'Styles', link: '/micron-styles/' },
  { text: 'Typography', link: '/micron-styles/typography' },
  { text: 'Spacing', link: '/micron-styles/spacing' },
  { text: 'Sizing', link: '/micron-styles/sizing' },
  { text: 'Layout', link: '/micron-styles/layout' },
  { text: 'Borders', link: '/micron-styles/border' },
  { text: 'Backgrounds', link: '/micron-styles/background' },
  { text: 'Interactive', link: '/micron-styles/interactive' },
  { text: 'Effects & Animations', link: '/micron-styles/effects' },
  { text: 'Hover, Focus, & Active States', link: '/micron-styles/states' },
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
      '/micron-styles/': stylesSidebar,
      '/': homeSidebar,
    },
  },
}
