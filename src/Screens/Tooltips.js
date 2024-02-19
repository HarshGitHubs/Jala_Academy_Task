import React, { useState } from 'react'
import { Button, Tooltip, ConfigProvider } from 'antd';

export default function Tooltips() {
    
    const [text, setText] = useState("You have not clicked this BUTTON yet. Please click me to check the tooltip")
    const clicked = ()=>{
        setText("Thank you for being here!")
    }
  return (
  <div style={{height:'100%', width:'100%' , display:'flex', justifyContent:'center', alignItems:'center' }}>
    <ConfigProvider
    button={{
      style: { width: 280, margin: 4, background:'#367FA9', color:'white' },
    }}
  >
    <Tooltip placement="bottom" title={text}>
          <Button onClick={clicked}>Check the Tooltip Before You Click</Button>
    </Tooltip>

  </ConfigProvider>
  </div>
  )
}
