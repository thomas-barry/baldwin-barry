import React, { useState } from 'react'
import axios from 'axios'

import ThemedLayout from '../components/layout/ThemedLayout'
import SEO from '../components/seo/Seo'
// import AnimatedGrid from '../components/sandbox/animated-grid/AnimatedGrid'

const Sandbox = () => {
  const [message, setMessage] = useState('')

  const onClick = async () => {
    const { data } = await axios.get('/api/hello-world/thomas')
    setMessage(data.message)
  }

  return (
    <ThemedLayout>
      <SEO title="Sandbox" keywords={[`gatsby`, `application`, `react`]} />
      {/* <AnimatedGrid /> */}
      <button onClick={onClick}>Hello</button>
      {message && <div>{message}</div>}
    </ThemedLayout>
  )
}

export default Sandbox
