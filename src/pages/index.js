import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/seo/Seo'
import BlogIndex from '../components/blog/blog-index/BlogIndex'

const Index = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BlogIndex />
    </Layout>
)

export default Index
