import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "photo-couch_2x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "photo-couch_2x.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2880, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 600px)`,
    },
  ]

  return <Img fluid={sources} />
}

export default HeroImage
