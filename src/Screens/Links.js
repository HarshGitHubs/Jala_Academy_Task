import React from 'react'
import { Tabs } from 'antd';

export default function Links() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'WorkingLinks',
      children: <WorkingLinks/> ,
    },
    {
      key: '2',
      label: 'Broken Links',
      children: <BrokenLinks/> ,
    },
    {
      key: '3',
      label: 'Image Links',
      children: <ImageLinks/> ,
    },
    {
      key: '4',
      label: 'Status Codes',
      children: <StatusCodes/> ,
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
      <a target='_blank' href='https://jalatechnologies.com/' style={{padding:10 , fontSize:20 , color:'green'}}>Link</a>
    </div>
  )
}

const BrokenLinks =()=>{
  return (
    <div style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <a target='_blank' href='https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/' style={{padding:10 , fontSize:20 , color:'blue'}}>Link</a>
      <a target='_blank' href='https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/' style={{padding:10 , fontSize:20 , color:'red'}}>Link</a>
      <a target='_blank' href='https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/' style={{padding:10 , fontSize:20 , color:'green'}}>Link</a>
    </div>
  )
}

const ImageLinks =()=>{
  return (
    <div style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <a target='_blank' href='https://www.growictech.com/' style={{padding:10 , fontSize:20 , color:'blue'}}><img src={require('../Assets/40453_11923916_2257285_d380a978_image.jpg')} style={{width:150}}/></a>
      <a target='_blank' href='https://www.google.com' style={{padding:10 , fontSize:20 , color:'blue'}}><img src={require('../Assets/7123025_logo_google_g_icon.png')} style={{width:150}}/></a>
      <a target='_blank' href='https://jalatechnologies.com/' style={{padding:10 , fontSize:20 , color:'blue'}}><img src={require('../Assets/jala.png')} style={{width:150}}/></a>
      <a target='_blank' href='https://www.linkedin.com/feed/' style={{padding:10 , fontSize:20 , color:'blue'}}><img src={require('../Assets/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930587.png')} style={{width:150}}/></a>
      
    </div>
  )
}

const StatusCodes =()=>{
  return (
    <div style = {{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <a target='_blank' href='https://www.restapitutorial.com/httpstatuscodes.html' style={{padding:10 , fontSize:20 , color:'blue'}}>200</a>
      <a target='_blank' href='https://magnus.jalatechnologies.com/ErrorHandler/RedirectPermanently' style={{padding:10 , fontSize:20 , color:'red'}}>301</a>
      <a target='_blank' href='https://magnus.jalatechnologies.com/ErrorHandler/NotFound' style={{padding:10 , fontSize:20 , color:'green'}}>404</a>
      <a target='_blank' href='https://magnus.jalatechnologies.com/ErrorHandler/InternalServerError' style={{padding:10 , fontSize:20 , color:'pink'}}>500</a>
    </div>
  )
}
