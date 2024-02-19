import { Slider, Tabs } from 'antd'
import React, { useState } from 'react'

export default function Silders() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Slider',
      children: <Slidding/>,
    }
  ];
  
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

const Slidding = ()=>{
  const [value, setValue] =useState(0)
  return(
    <div>
      <Slider defaultValue={0} onChange={(e)=>setValue(e)} />
      <h2>Current Value: {value}</h2>
    </div>
  )
}

