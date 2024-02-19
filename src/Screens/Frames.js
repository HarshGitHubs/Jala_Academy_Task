import React from 'react'

export default function Frames() {
  return (
    <div>
        <h2>Frame 1</h2>
        <iframe 
        src='https://www.tutorialrepublic.com' 
        title="google"
        style={{width:'100%', height:400}}>
        </iframe>

        <h2>Frame 2</h2>
        <iframe 
        src='www.google.com' 
        title="google"
        style={{width:'100%', height:400}}>
        </iframe>
    </div>
  )
}
