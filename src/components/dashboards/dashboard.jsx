"use client";
import React from "react";
import { Space, Row, Col, Button } from "antd";
import {
  UnorderedListOutlined,
  TeamOutlined,
  AuditOutlined,
  InfoCircleOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import Search from "../BookSearch/booksearch";
import AvatarProfile from "../Avatar/avatar";
import DropdownComponent from "../dropdown/page";
import BookList from "./booklist";
const container = {
  width: "100vw",
  backgroundColor: "#563a3a",
  height: "100vh",
};

const leftrow = {
  backgroundColor: "white",
  height: "100vh",
  width: "100px",
};
const subcontainer = {
  marginTop: "20px",
  backgroundColor: "grey",
  marginLeft: "70px",
  width: "100%",
  height: "92vh",
  borderRadius: "30px 0 0 0",
};

const nav = {
  width: "100%",
  height: "9%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "white",
  height: "10vh",
  borderRadius: "30px 0 0 0",
};

const rightcol = {};
const leftcol = {
  backgroundColor: "grey",
  width: "100",
  height: "100%",
};

const leftheader = {
  display: "flex",
  paddingLeft: "50px",
  alignItems: "center",
};

const rightheader = {
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  paddingRight: "20px",
};

const card = {
  width: "100vw",
  minHeight: "200px",
  backgroundColor: "#22ffcc",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "",
  paddingLeft: "35px",
  paddingRight: "35px",
  paddingTop: "20px",
};
const overdue = {
  width: "100%",
  height: "30%",
  backgroundColor: "black",
};

const booklist = {
  maxWidth: "100%",
  height: "100vh",
  backgroundColor: "#22ffcc",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const issues = {
  width: "100%",
  height: "30%",
  backgroundColor: "#22ffcc",
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

const bookslist = {
  height: "100vh",
  maxWidth: "100%",
  borderRadius: "20px",
  backgroundColor: "white",
  padding: "20px",
  

};
const listheader = {
  marginBottom: "10px",
};

const rightrow = { backgroundColor: "white" };

const Dashboards = () => {
  return (
    <div>
      <Row style={container}>
        {/* navigation */}
        <Row style={nav} align={"middle"}>
          {/* <Col>LOGO</Col> */}
          <Col style={{ marginLeft: "20px" }}>
            LOGO{" "}
            <UnorderedListOutlined
              style={{ marginLeft: "15px", fontSize: "20px" }}
            />
          </Col>

          <Col>
            <Search />
          </Col>
          <Col>
            <AvatarProfile />
          </Col>
        </Row>

        <Row style={subcontainer}>
          <Row style={header}>
            <Col style={leftheader} xl={12} xs={24}>
              <h1>Hello Senghong</h1>
            </Col>
            <Col style={rightheader} xl={12} xs={24}>
              <DropdownComponent />
            </Col>
          </Row>

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
            <Col style={bookslist} span={12} >
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
            <Col style={bookslist} span={12}>
              <Row style={listheader} justify={"space-between"}>
                <Col>
                  <h2>Book list</h2>
                </Col>
                <Col justifyContent="end">
                  <Button>Add new Book</Button>
                </Col>
              </Row>
              <BookList />
            </Col>
          </Row>
          <Row style={card}>Top Choice</Row>
          <Row style={overdue}>Overdue books list</Row>
          <Row style={issues}>Visitor and Issues list</Row>
        </Row>
      </Row>
    </div>
  );
};

export default Dashboards;
