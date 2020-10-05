import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const frontmatter = {
    title: "Search Page",
    path: "/search/"
}

const SearchPage = () => (
  <Layout>
    <SEO title="search" />
    <h1>Search Page</h1>
    <p>Welcome to page "SearchPage"</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SearchPage
