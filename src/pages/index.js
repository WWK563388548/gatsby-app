import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Head">
        <div className="HeadGroup">
          <h1>Learn to create React app with Gatsby</h1>
          <p>Welcome to your new Gatsby site.</p>
          <Link to="/#">This is a button</Link>
        </div>
    </div>
  </Layout>
)

export default IndexPage
