import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/seo/Seo'
import BlogIndex from '../components/blog-index/BlogIndex'

const Blog = () => (
    <Layout>
        <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
        <BlogIndex />
    </Layout>
)

export default Blog
