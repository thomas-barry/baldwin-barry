import React from 'react'

import ThemedLayout from '../components/layout/ThemedLayout'
import SEO from '../components/seo/Seo'

const NotFoundPage = () => (
  <ThemedLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ThemedLayout>
)

export default NotFoundPage
