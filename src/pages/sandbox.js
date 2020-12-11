import React from 'react'

import ThemedLayout from '../components/layout/ThemedLayout'
import SEO from '../components/seo/Seo'
import AnimatedGrid from '../components/sandbox/animated-grid/AnimatedGrid'

export default () => {
  return (
    <ThemedLayout>
      <SEO title="Sandbox" keywords={[`gatsby`, `application`, `react`]} />
      <AnimatedGrid />
    </ThemedLayout>
  )
}
