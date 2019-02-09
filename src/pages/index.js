import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/Layout'
import Image from '../components/Image'
import SEO from '../components/seo'

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage