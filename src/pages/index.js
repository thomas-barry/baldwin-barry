import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/seo/Seo'
import BlogIndex from '../components/blog-index/BlogIndex'

export default () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BlogIndex />
    </Layout>
  )
}