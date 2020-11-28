import React from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'

import ThemedLayout from '../components/layout/ThemedLayout'
import SEO from '../components/seo/Seo'
import BlogIndex from '../components/blog/blog-index/BlogIndex'

const Foo = () => <div>
  <Link to="/blog/20201119-reunion/">Blog</Link>
  <Typography>Hello</Typography>
</div>

export default () => {
  return (
    <ThemedLayout>
      <SEO title="Welcome" keywords={[`gatsby`, `application`, `react`]} />
      <Router basepath="/app">
        <Foo path="/foo" />
      </Router>
    </ThemedLayout>
  )
}
