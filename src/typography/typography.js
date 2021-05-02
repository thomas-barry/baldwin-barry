import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.45,
    headerFontFamily: ['Roboto', 'sans-serif'],
    bodyFontFamily: ['Roboto Slab', 'serif'],
    letterSpacing: '-0.0666667px',
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        button: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontWeight: 400,
            letterSpacing: '0.75px',
        },
    })

})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
