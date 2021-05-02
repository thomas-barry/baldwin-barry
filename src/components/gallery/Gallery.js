import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// const StyledContainer = styled.div`
//   border: 5px solid red;
//   opacity: 1;
//   transition: opacity 0.6s ease-in-out;
// `

const Gallery = () => {
  // const [index, setIndex] = useState(0)
  // const { allS3Image } = useStaticQuery(
  //   graphql`
  //     {
  //       allS3Image {
  //         edges {
  //           node {
  //             id
  //             fields {
  //               portfolioSection
  //             }
  //             file: localFile {
  //               image: childImageSharp {
  //                 sizes(maxWidth: 1100, quality: 97) {
  //                   ...GatsbyImageSharpSizes_withWebp_noBase64
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // const { node } = allS3Image.edges[index]

  return (
    <div>Gallery</div>
    // <StyledContainer onClick={() => setIndex(1)}>
    //   <Img sizes={node.file.image.sizes} />
    // </StyledContainer>
  )
}

export default Gallery
