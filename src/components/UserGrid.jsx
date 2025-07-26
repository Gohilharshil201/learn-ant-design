// FOR MOBILE VIEW
import React from "react";
import { Card, Col, Row, Avatar, Typography } from "antd";

const { Title, Text } = Typography;

const users = [
  {
    id: 1,
    name: "Bob Smith",
    email: "bob@antd.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "developer",
    location: "london",
  },
  {
    id: 2,
    name: "Charli Brown",
    email: "charli@antd.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    role: "Designer",
    location: "New York",
  },
  {
    id: 3,
    name: "Dian Prince",
    email: "dian@antd.com",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    role: "Product Manager",
    location: "San Francisco",
  },
];

const UserGrid = () => {
  return (
    <>
      <div style={{ padding: 40 }}>
        <Title level={3}>👥 User List</Title>
        <Row gutter={[16, 16]}>
          {users.map((user) => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <Card style={{ borderRadius: 12, backgroundColor: "#f9f9f9" }}>
                <Card.Meta
                  avatar={<Avatar size={64} src={user.avatar} />}
                  title={<Text strong>{user.name}</Text>}
                  description={
                    <>
                      <Text type="secondary">{user.email}</Text>
                      <div style={{ marginTop: 4 }}>
                        <Text>{user.role}</Text>
                        <br />
                        <Text>📍 {user.location}</Text>
                      </div>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default UserGrid;
