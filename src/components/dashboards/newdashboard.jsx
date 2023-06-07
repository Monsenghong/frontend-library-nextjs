'use client'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  TeamOutlined,
  AuditOutlined,
  InfoCircleOutlined,
  UserAddOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme,Row,Col } from 'antd';
  import { useState } from 'react';
import BookList from './booklist';
import AvatarProfile from '../Avatar/avatar';
  const { Header, Sider, Content } = Layout;




  const card = {
    maxWidth: "100vw",
    maxHeight: "100vh",
    backgroundColor: "#22ffcc",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "",
    paddingLeft: "35px",
    paddingRight: "35px",
    paddingTop: "20px",
  };
  const statscard = {
    width: "250px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
  };
  
  const statcardTop = {
    width: "100%",
    height: "80%",
    alignItems: "center",
  };
  const booklist = {
    width: "100%",
    height: "100vh",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const bookslist = {
    height: "60vh",
    width: "100%",
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "20px",
    margin: "20px",
   
  };
  const listheader = {
    marginBottom: "10px",
  };


  const NewDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout>
        <Sider style={{backgroundColor:'white'}} trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
           
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems:"center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />


            <AvatarProfile />

          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              borderRadius: "30px 0 0 0",
              background: colorBgContainer,
              maxWidth: "100vw",
            }}
          >
           <Row style={card} gutter={[16, 16]}>
            <Col style={statscard} xs={24} sm={24} md={10} xl={5} xxl={5}>
              <Row style={statcardTop} justify={"space-between"}>
                <Col>
                  <h1>8992</h1>
                </Col>
                <Col>
                  <TeamOutlined style={{ fontSize: "36px", color: "#08c" }} />
                </Col>
              </Row>
              Total Visitors
            </Col>
            <Col style={statscard} xs={24} sm={24} md={10} xl={5} xxl={5}>
              <Row style={statcardTop} justify={"space-between"}>
                <Col>
                  <h1>8992</h1>
                </Col>
                <Col>
                  <AuditOutlined style={{ fontSize: "36px", color: "#08c" }} />
                </Col>
              </Row>
              Total Borrowed Books
            </Col>
            <Col style={statscard} xs={24} sm={24} md={10} xl={5} xxl={5}>
              <Row style={statcardTop} justify={"space-between"}>
                <Col>
                  <h1>8992</h1>
                </Col>
                <Col>
                  <InfoCircleOutlined
                    style={{ fontSize: "36px", color: "#08c" }}
                  />
                </Col>
              </Row>
              Total Overdues
            </Col>
            <Col style={statscard} xs={24} sm={24} md={10} xl={5} xxl={5}>
              <Row style={statcardTop} justify={"space-between"}>
                <Col>
                  <h1>8992</h1>
                </Col>
                <Col>
                  <UserAddOutlined
                    style={{ fontSize: "36px", color: "#08c" }}
                  />
                </Col>
              </Row>
              Total New members
            </Col>
          </Row>
       
          <Row style={booklist}>
            <Col style={bookslist}>
              <Row style={listheader} justify={"space-between"}>
                <Col>
                  <h2>User list</h2>
                </Col>
                <Col justifyContent="end">
                  <Button>Add new User</Button>
                </Col>
              </Row>
              <BookList />
            </Col>
          
          </Row>
    
          </Content>
         
        </Layout>
      </Layout>
    );
  };
  export default NewDashboard;