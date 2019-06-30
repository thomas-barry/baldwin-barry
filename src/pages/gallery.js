import React from 'react'

import ThemedLayout from '../components/layout/ThemedLayout'
import SEO from '../components/seo/Seo'
import Gallery from '../components/gallery/Gallery'

export default ({ data }) => {
  return (
    <ThemedLayout>
      <SEO
        title="Photo Gallery"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Gallery />
    </ThemedLayout>
  )
}

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
