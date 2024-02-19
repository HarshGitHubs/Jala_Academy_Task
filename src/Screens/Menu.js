import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Tabs } from 'antd';
import React, { useState } from 'react'

export default function Menus() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Single Menus',
      children: <SingleMenu />,
    },
    {
      key: '2',
      label: 'Sub Menus',
      children: <MultipleMenu />,
    }

  ];

  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  )
}


const SingleMenu = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Testing', '1', <PieChartOutlined />),
    getItem('Java', '2', <DesktopOutlined />),
    getItem('.Net', '3', <ContainerOutlined />),
    getItem('Data Base', '4', <ContainerOutlined />)
  ]

  const course = ["", 'Testing', 'Java', '.Net', 'Data Base']

  const [selected, setSelected] = useState("")

  return (

    <div style={{ display: 'flex' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        style={{ width: "30%" }}
        items={items}
        onClick={({ key }) => {
          setSelected(course[parseInt(key)])
        }}
      />
      {selected && <h3>You Have Selected {selected} Menu Option</h3>}
    </div>
  )
}

const MultipleMenu = () => {
  const [course, selectedCourse] = useState("")
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const courses=["Selenium","Manual Testing", "DB Testing", "Unit Testing","Adv Java", "Core Java", "Spring", "Hibernate", "C#", "ASP.NET", "ADO.NET", "MVC", "SQL", "My SQL", "Oracle", "H2"]
  const items = [
    getItem('Testing', 'sub2', <AppstoreOutlined />, [
      getItem('Selenium', '0'),
      getItem('Manual Testing', '1'),
      getItem('DB Testing', '2'),
      getItem('Unit Testing', '3'),
    ]),
    getItem('JAVA', 'sub3', <AppstoreOutlined />, [
      getItem('Adv Java', '4'),
      getItem('Core Java', '5'),
      getItem('Spring', '6'),
      getItem('Hibernate', '7'),
      
    ]),
    getItem('.Net', 'sub4', <AppstoreOutlined />, [
      getItem('C#', '8'),
      getItem('ASP.NET', '9'),
      getItem('ADO.NET', '10'),
      getItem('MVC', '11'),
      
    ]),
    getItem('Database', 'sub5', <AppstoreOutlined />, [
      getItem('SQL', '12'),
      getItem('My SQL', '13'),
      getItem('Oracle', '14'),
      getItem('H2', '15'),
      
    ]),
  ];

  const onClick = (e) => {
    selectedCourse(courses[parseInt(e.key)])
  };

  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        mode="vertical"
        items={items}
      />
      <div>{course && <h3>You Have Selected {course} Menu Option</h3>}</div>
    </div>
  )
}