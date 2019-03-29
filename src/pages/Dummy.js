import React from 'react'
import Img from 'gatsby-image'

import ThemedLayout from '../components/layout/ThemedLayout'

const DummyPage = ({ data }) => {
  console.log(data)
  return (
    <ThemedLayout>
      <h1>Dummy</h1>
      <Img fluid={data.image.childImageSharp.fluid} />
    </ThemedLayout>
  )
} 

export default DummyPage

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "bella-coned.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`