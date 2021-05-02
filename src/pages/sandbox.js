import React, { useState } from 'react'
import axios from 'axios'

import Layout from '../components/layout/Layout'
import SEO from '../components/seo/Seo'
// import SnapScroll from '../components/sandbox/snap-scroll/SnapScroll'
// import AnimatedGrid from '../components/sandbox/animated-grid/AnimatedGrid'
import FocusState from '../components/sandbox/focus-state/FocusState'

const url = 'https://baldwinbarry-functions.azurewebsites.net/api/weather-history'

const Sandbox = () => {
    const [message, setMessage] = useState('')

    const onClick = async () => {
        const { data } = await axios.get(url)
        setMessage(data.message)
    }

    return (
        <Layout>
            <SEO title="Sandbox" keywords={[`gatsby`, `application`, `react`]} />
            {/* <AnimatedGrid /> */}
            {/* <SnapScroll /> */}
            <FocusState />
            {/* <button onClick={onClick}>Hello</button>
      {message && <div>{message}</div>} */}
        </Layout>
    )
}

export default Sandbox
