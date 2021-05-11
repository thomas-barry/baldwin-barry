import React from 'react'
import { graphql } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'

import Layout from '../components/layout/Layout'

const Photography = ({ data }) => {
    const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
    return (
        <Layout>
            <Gallery images={images} />
        </Layout>
    )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(filter: { sourceInstanceName: { eq: "gallery-images" }}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default Photography
