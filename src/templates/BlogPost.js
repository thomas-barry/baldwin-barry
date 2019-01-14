import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts/Layout'
import rehypeReact from "rehype-react"
import Name from '../components/Name'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 
    'name': Name 
  }
}).Compiler

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet title={`BaldwinBarry- ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div>{renderAst(post.htmlAst)}</div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
