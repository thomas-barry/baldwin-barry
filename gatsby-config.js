module.exports = {
    siteMetadata: {
        title: 'Thomas Baldwin Barry',
        description: 'Random musings',
        author: '@gatsbyjs',
        blogPath: 'blog'
    },
    proxy: {
        prefix: '/api',
        url: 'http://localhost:7071',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-no-sourcemaps',
        'gatsby-plugin-material-ui',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'BaldwinBarry',
                short_name: 'BaldwinBarry',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'browser',
                icon: 'src/images/gatsby-icon.png',
            }
        },
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: `src/typography/typography.js`,
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: { maxWidth: 1080 }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-embedded-codesandbox',
                        options: {
                            directory: `${__dirname}/src/_examples/`,
                            protocol: 'embedded-codesandbox://',
                            embedOptions: {
                                view: 'preview',
                                hidenavigation: 1
                            },
                            getIframe: url => `<iframe src="${url}" class="embedded-codesandbox"></iframe>`
                        }
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1080,
                            sizeByPixelDensity: false
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/blog`,
                name: 'blog'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/resume`,
                name: 'resume'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/about`,
                name: 'about'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/galleries`,
                name: 'gallery-images'
            }
        }
    ]
}
