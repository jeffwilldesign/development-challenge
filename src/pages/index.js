import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import HowItWorks from "../components/how-it-works"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <HowItWorks />
  </Layout>
)

export default IndexPage
