// const sourceS3 = {
//   resolve: 'gatsby-source-s3',
//   options: {
//     aws: {
//       accessKeyId: process.env.ENV_AWS_ACCESS_KEY_ID,
//       secretAccessKey: process.env.ENV_AWS_ACCESS_KEY,
//       region: 'us-east-1'
//     },
//     buckets: [process.env.ENV_AWS_BUCKET_NAME]
//   }
// }

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
    // sourceS3,
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/typography/typography.js`
      }
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {}
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-PR18HF0HBB"
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"]
        }
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
    }
  ]
}
