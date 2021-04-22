import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto Slab', 'serif'],
  letterSpacing: '-0.0666667px',
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
