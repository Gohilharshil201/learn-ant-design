import React from "react";
import { Button, Card, Space, Typography } from "antd";
const { Title, Text } = Typography;

const WelcomeCard = () => {
    return (
        <>
            <div style={{ padding: 40 }} >
                <div style={{ padding: 50, width: 400, height: 300, backgroundColor: "#484a4cff", borderRadius: 20 }}>
                    <Title level={3} style={{ textAlign: "center", color: "white" }}>Welcome to FuryWorld </Title>
                    <Text style={{ color: "#f0f0f0" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Eius repudiandae enim quo laboriosam fugiat vitae explicabo at consectetur,
                        et fuga placeat cumque modi! Expedita nemo harum commodi tenetur fugit recusandae?
                    </Text>
                    <Space>
                        <Button type="primary" style={{ marginTop: 10 }}>Learn More</Button>
                    </Space>
                </div >
            </div >
        </>
    );
}

export default WelcomeCard;