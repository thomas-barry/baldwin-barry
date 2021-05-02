import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/seo/Seo'
// import Gallery from '../components/gallery/Gallery'

const Gallery = ({ data }) => {
    return (
        <Layout>
            <SEO
                title="Photo Gallery"
                keywords={[`gatsby`, `application`, `react`]}
            />
            {/* <Gallery /> */}
        </Layout>
    )
}

export default Gallery

// export const pageQuery = graphql`
//   {
//     allS3Image {
//       edges {
//         node {
//           id
//           fields {
//             portfolioSection
//           }
//           file: localFile {
//             image: childImageSharp {
//               sizes(maxWidth: 1100, quality: 97) {
//                 ...GatsbyImageSharpSizes_withWebp_noBase64
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
