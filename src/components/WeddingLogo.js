import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'




const WeddingLogo = () => (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "Promising.png" }) {
            childImageSharp {
              fixed(width: 420, height: 520, quality: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
    />
  )

  export default WeddingLogo