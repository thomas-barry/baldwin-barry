import React, { useState } from 'react'
import axios from 'axios'

import ThemedLayout from '../components/layout/ThemedLayout'
import SEO from '../components/seo/Seo'
import SnapScroll from '../components/sandbox/snap-scroll/SnapScroll'
// import AnimatedGrid from '../components/sandbox/animated-grid/AnimatedGrid'

const url = 'https://baldwinbarry-functions.azurewebsites.net/api/weather-history'

const Sandbox = () => {
  const [message, setMessage] = useState('')

  const onClick = async () => {
    const { data } = await axios.get(url)
    setMessage(data.message)
  }

  return (
    <ThemedLayout>
      <SEO title="Sandbox" keywords={[`gatsby`, `application`, `react`]} />
      {/* <AnimatedGrid /> */}
      <SnapScroll />
      <button onClick={onClick}>Hello</button>
      {message && <div>{message}</div>}
    </ThemedLayout>
  )
}

export default Sandbox
