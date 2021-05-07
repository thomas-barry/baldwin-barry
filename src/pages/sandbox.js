import React, { useState } from 'react'

import Button from '../components/button/Button'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo/Seo'

// import SnapScroll from '../components/sandbox/snap-scroll/SnapScroll'
// import AnimatedGrid from '../components/sandbox/animated-grid/AnimatedGrid'
// import FocusState from '../components/sandbox/focus-state/FocusState'

const url = 'https://baldwinbarry-functions.azurewebsites.net/api/weather-history'

const Sandbox = () => {
    const [weatherData, setWeatherData] = useState('')

    const onClick = async () => {
        const response = await fetch(url, { method: 'GET' })
        console.log('R', response)
        const data = await response.json()
        setWeatherData(data)
    }

    console.log('D', weatherData)

    return (
        <Layout>
            <SEO title="Sandbox" keywords={[`gatsby`, `application`, `react`]} />
            <Button onClick={onClick}>Submit</Button>
            {weatherData && <div>{JSON.stringify(weatherData)}</div>}
        </Layout>
    )
}

export default Sandbox
