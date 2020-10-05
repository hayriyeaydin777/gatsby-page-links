import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const frontmatter = {
    title: "Home Page",
    path: "/"
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/tecdata/">TecData Page</Link> <br />
    <Link to="/search/">Search Page</Link> <br />
    <Link to="/current-account/">Current Account Page</Link> <br />
  </Layout>
)

export default IndexPage
