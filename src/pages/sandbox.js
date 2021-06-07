import React, { useState } from 'react'

import Button from '../components/button/Button'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo/Seo'

import ReactKnob from '@baldwinbarry/react-knob'

// import SnapScroll from '../components/sandbox/snap-scroll/SnapScroll'
// import AnimatedGrid from '../components/sandbox/animated-grid/AnimatedGrid'
// import FocusState from '../components/sandbox/focus-state/FocusState'

const url = 'https://baldwinbarry-functions.azurewebsites.net/api/weather-history'

const GridDemo1 = () => {
    return (
        <div className="bb-grid-demo-1">
            <div className="container">
                <div className="header">
                    Header
                </div>
                <div className="main-content">
                    Main content
                </div>
                <div className="sidebar">
                    Sidebar
                </div>
                <div className="left">
                    Left
                </div>
                <div className="right">
                    Right
                </div>
            </div>
        </div>
    )
}

const GridDemo2 = () => {
    return (
        <div className="bb-container2">
            <h1>Our Team</h1>
            <div className="teamMember member-1"></div>
        </div>
    )
}

const Sandbox = () => {
    const [weatherData, setWeatherData] = useState('')
    const [value, setValue] = useState(0)

    const onClick = async () => {
        console.log('Got click')
        // const response = await fetch(url, { method: 'GET' })
        // const data = await response.json()
        // setWeatherData(data)
    }

    return (
        <React.Fragment>
            <ReactKnob value={value} onChange={setValue} />
        </React.Fragment>
    )

    // return (
    //     <React.Fragment>
    //         <Layout>
    //             {/* <SEO title="Sandbox" keywords={[`gatsby`, `application`, `react`]} />
    //             <Button onClick={onClick}>Submit</Button> */}
    //             {/* {weatherData && <div>{JSON.stringify(weatherData)}</div>} */}
    //             <GridDemo1 />
    //         </Layout>
    //     </React.Fragment>
    // )
}

export default Sandbox
