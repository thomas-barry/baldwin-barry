import React from 'react'

import ThemedLayout from '../components/layout/ThemedLayout'
import SEO from '../components/seo/Seo'
import BlogIndex from '../components/blog/blog-index/BlogIndex'

export default () => {
  return (
    <ThemedLayout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <BlogIndex />
    </ThemedLayout>
  )
}
