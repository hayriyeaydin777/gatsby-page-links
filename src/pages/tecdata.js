import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const frontmatter = {
    title: "Tecdata Page",
    path: "/tecdata/"
}

const TecdataPage = () => (
  <Layout>
    <SEO title="tecdata" />
    <h1>Tecdata Page</h1>
    <p>Welcome to page "TecdataPage"</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TecdataPage
