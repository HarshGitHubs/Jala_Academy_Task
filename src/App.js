import React, { useState } from 'react';
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Slider, theme } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Silders from './Screens/Silders';
import Autocomplete from './Screens/Autocomplete';
import CollapsibleContent from './Screens/CollapsibleContent';
import Tooltips from './Screens/Tooltips';
import Menus from './Screens/Menu';
import MultipleTabs from './Screens/MultipleTabs';
import CSSProperties from './Screens/CSSProperties';
import Frames from './Screens/Frames';
import Links from './Screens/Links';
import Popups from './Screens/Popups';
import CreateEmployee from './Screens/CreateEmployee';
import Search from './Screens/Search';
import Home from './Screens/Home';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('More', 'More', <UserOutlined />, [
    getItem('Multiple Tabs', '/multipletabs'),
    getItem('Menu', '/menu'),
    getItem('Autocomplete', '/autocomplete'),
    getItem('Collapsible Content', '/collapsible'),
    getItem('Slider', '/slider'),
    getItem('Tooltips', '/tooltip'),
    getItem('Popups', '/popups'),
    getItem('Links', '/links'),
    getItem('CSS Properties', '/css'),
    getItem('iFrames', '/frames'),
  ]),
  getItem('Employee', 'sub2', <TeamOutlined />, [getItem('Create Employee', '/createEmployee'), getItem('Search', '/search')]),

];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate()
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={({ key, keyPath }) => {
            navigate(key)
            console.log(keyPath)
          }} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#3C8DBC',
            display:'flex',
            justifyContent:'center', alignItems:'center'
          }}
        ><h1 style={{color:'white'}}>Magnus</h1></Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Contents />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Task ©{new Date().getFullYear()} Created by Harsh Chaturvedi
        </Footer>
      </Layout>
    </Layout>
  );
};

const Contents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/multipletabs" element={<MultipleTabs />}></Route>
        <Route path="/menu" element={<Menus />}></Route>
        <Route path="/autocomplete" element={<Autocomplete />}></Route>
        <Route path="/collapsible" element={<CollapsibleContent />}></Route>
        <Route path="/slider" element={<Silders />}></Route>
        <Route path="/tooltip" element={<Tooltips />}></Route>
        <Route path="/popups" element={<Popups />}></Route>
        <Route path="/links" element={<Links />}></Route>
        <Route path="/css" element={<CSSProperties />}></Route>
        <Route path="/frames" element={<Frames />}></Route>
        <Route path="/createEmployee" element={<CreateEmployee />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </div>
  )
}
export default App;
