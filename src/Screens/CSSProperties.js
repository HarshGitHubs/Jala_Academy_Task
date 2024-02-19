import { Button, Progress, Tabs } from 'antd';
import React, { useState } from 'react'

export default function CSSProperties() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Links',
      children: <WorkingLinks/> ,
    },
    {
      key: '2',
      label: 'Labels',
      children: <Labels/> ,
    },
    {
      key: '3',
      label: 'Buttons',
      children: <Buttons/> ,
    },
    {
      key: '4',
      label: 'Alerts',
      children: <Alerts/> ,
    },
    {
      key: '5',
      label: 'Progress Bars',
      children: <ProgressBar/> ,
    }

  ];

  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

const WorkingLinks =()=>{
  return (
    <div style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <a target='_blank' href='https://www.w3schools.com' style={{padding:10 , fontSize:20 , color:'blue'}}>Link</a>
      <a target='_blank' href='https://www.google.com' style={{padding:10 , fontSize:20 , color:'red'}}>Link</a>
      <a target='_blank' href='https://jalatechnologies.com/' style={{paddingLeft:10 , fontSize:20 , color:'green'}}>Link</a>
    </div>
  )
}

const Labels =()=>{
  return (
    <div style = {{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
      <span style={{backgroundColor:'lightgray', paddingLeft:8, paddingRight:8, borderRadius:5 }}>Deafult</span>
      <span style={{backgroundColor:'navy', paddingLeft:8, paddingRight:8, color:'white' , width:80, display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', borderRadius:5 }}>Primary</span>
      <span style={{backgroundColor:'lightgreen', paddingLeft:8, paddingRight:8, color:'white' , width:80, display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', borderRadius:5 }}>Success</span>
      <span style={{backgroundColor:'skyblue', paddingLeft:8, paddingRight:8, color:'white' , width:80, display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', borderRadius:5 }}>Info</span>
      <span style={{backgroundColor:'orange', paddingLeft:8, paddingRight:8, color:'white' , width:80, display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', borderRadius:5 }}>Warning</span>
      <span style={{backgroundColor:'red', paddingLeft:8, paddingRight:8, color:'white' , width:80, display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', borderRadius:5 }}>Danger</span>
    </div>
  )
}

const Buttons =()=>{
  return (
    <div style = {{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
      <Button type="primary" style={{color:'black' , backgroundColor:'#E7E7E7'}}>Default</Button>
      <Button type="primary" style={{color:'white' , backgroundColor:'#3C8DBC'}}>Primary</Button>
      <Button type="primary" style={{color:'white' , backgroundColor:'#008D4C'}}>Success</Button>
      <Button type="primary" style={{color:'white' , backgroundColor:'orange'}}>Warning</Button>
      <Button type="primary" style={{color:'white' , backgroundColor:'#D73925'}}>Danger</Button>
    </div>
  )
}

const Alerts = ()=>{
  const dataSet = [
    {id:0 , color:'green', statement:'Success! Indicates a successful or positive action.'},
    {id:1 , color:'skyblue', statement:'Info! Indicates a neutral informative change or action.'},
    {id:2 , color:'orange', statement:'Warning! Indicates a warning that might need attention.'},
    {id:3 , color:'red', statement:'Danger! Indicates a dangerous or potentially negative action.'}
  ]

  const [data, setData] = useState(dataSet)
  const removeData = (id)=>{
    const newData = data.filter(item => {
      return item.id!=id
    })

    setData(newData)
  }
  return (
    <div>
      {data.map((item)=>(
        <div style={{display:'flex', backgroundColor:item.color, borderRadius:5, justifyContent:'space-between' , alignItems:'center', paddingLeft:30, paddingRight: 30 , marginBottom:10}}>
        <h3 style={{color:'white'}}>{item.statement}</h3><h2 style={{cursor:'pointer'}} onClick={()=>removeData(item.id)}>x</h2>
      </div>
      ))}
    </div>
  )
}

const ProgressBar =()=>{
  return(
    <div>
      <Progress strokeColor={'green'} percent={40} />
      <Progress strokeColor={'skyblue'} percent={20} />
      <Progress strokeColor={'orange'} percent={50} />
      <Progress strokeColor={'red'} percent={70} />
    </div>
  )
}
