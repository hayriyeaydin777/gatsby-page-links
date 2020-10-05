import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const frontmatter = {
    title: "Current Account Page",
    path: "/current-account/"
}

const CurrentAccountPage = () => (
  <Layout>
    <SEO title="current-account" />
    <h1>Current Account Page</h1>
    <p>Welcome to page "CurrentAccountPage"</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CurrentAccountPage
