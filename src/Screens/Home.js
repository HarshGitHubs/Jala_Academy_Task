import React from 'react'

export default function Home() {
    return (
        <div style={{ backgroundColor: '#D2D6DE', margin: 0, padding: 0, height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1>JALA Academy</h1>
                <div style={{ backgroundColor: 'yellow', margin: 5 }}>
                    <h4>Learn everything on Real-Time Scenarios. FREE for all.</h4>
                </div>
            </div>
            
            <div style={{ backgroundColor: '#3C8DBC', width: '80%', margin: 50 }}>
                <p>JALA Academy offers Job Guaranteed Programs for Freshers to 12 years’ experience on Full Stack Development / Automation Testing / Dev-Ops / QA/ SDET/Cyber Security / RPA / Cloud Technologies. Training would be completely on live Project scenarios Read our website JALA Academy for more details : https://jalaacademy.com/</p>
            </div>
        </div>
    )
}
