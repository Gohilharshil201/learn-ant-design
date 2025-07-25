import React from "react";
import { Button, Card, Space, Typography } from "antd";

const { Title, Text } = Typography;
const Basic = (user) => {
    return (
        <>
            <div style={{ padding: 40 }}>
                <Title level={2} style={{ color: "white" }}>🚀 Welcome to Ant Design</Title>
                <Space direction="vertical" size={"small"}>
                    <Card title="Basic Card" style={{ width: 400, border: "none", backgroundColor: "#9363ddff", color: "#ffffff" }} >
                        <Text size="30">Ant Design + Vite is ready to go!</Text>
                    </Card>
                    <Space>
                        <Button type="primary" style={{ backgroundColor: "#7323b5ff" }}> Primary Button </Button>
                        <Button type="default"> default Button </Button>
                        <Button type="dashed">Dashed Button</Button>
                        <Button type="text" style={{ color: "white" }}>Text Button</Button>
                        <Button type="link">Link Button</Button>
                    </Space>
                </Space>
            </div>
        </>
    );
}

export default Basic;