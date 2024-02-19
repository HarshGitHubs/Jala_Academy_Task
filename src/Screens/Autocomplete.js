import { Tabs } from 'antd';
import React from 'react'

export default function Autocomplete() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Single Values',
      children: <AutoCompOne/> ,
    },
    {
      key: '2',
      label: 'Multiple Values',
      children: <AutoCompOne/> ,
    }

  ];

  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

const AutoCompOne = () => {
  return (
  <>
    <h3>Tags</h3>
    <input placeholder='Hello' style={{width:'100%', height:40}} />
  </>
  )
}
