import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  Form,
  Checkbox,
  Input,
  Divider,
  message,
  Select,
  Row,
  Col,
} from "antd";

const { Title } = Typography;

const AdvancedUserForm = () => {
  const [form] = Form.useForm();
  const [showGithub, setShowGithub] = useState(false);
  const [socialLink, setSocialLink] = useState([{ platform: "", url: "" }]);

  const addSocialLink = () => {
    setSocialLink([...socialLink, { platform: "", url: "" }]);
  };

  const removeSocialLink = (index) => {
    const updated = [...socialLink];
    updated.splice(index, 1);
    setSocialLink(updated);
  };

  const onFinish = (values) => {
    console.log("Submitted:", values);
    console.table(values);
    message.success("Form submitted successfully!");
  };

  return (
    <div style={{ padding: 50 }}>
      <Card>
        <Title level={2}>🧠 Advanced User Form</Title>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Username is required" },
              {
                validator: (_, value) =>
                  (value && value.includes("admin")) || value.includes("Admin")
                    ? Promise.reject(
                        `Username cannot include 'admin': ${value}`
                      )
                    : Promise.resolve(),
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Enter a valid email address",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Enable GitHub Profile?">
            <Checkbox onChange={(e) => setShowGithub(e.target.checked)}>
              Yes
            </Checkbox>
          </Form.Item>

          {/* GitHub URL if enabled */}
          {showGithub && (
            <Form.Item
              label="GitHub URL"
              name="github"
              rules={[
                {
                  required: true,
                  message: "GitHub profile required if enabled",
                },
              ]}
            >
              <Input placeholder="https://github.com/username" />
            </Form.Item>
          )}

          {/* Social Links */}
          <Divider>Social Links</Divider>
          {socialLink.map((item, index) => (
            <Row key={index} gutter={[16, 16]} align="middle">
              <Col xs={24} sm={8}>
                <Form.Item
                  name={["social", index, "platform"]}
                  rules={[{ required: false, message: "Select a platform" }]}
                >
                  <Select placeholder="Platform">
                    <Select.Option value="twitter/ X">
                      Twitter / X
                    </Select.Option>
                    <Select.Option value="linkedin">LinkedIn</Select.Option>
                    <Select.Option value="Instagram">Instagram</Select.Option>
                    <Select.Option value="dribbble">Dribbble</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name={["social", index, "url"]}
                  rules={[{ required: true, message: "Enter URL" }]}
                >
                  <Input placeholder="https://..." />
                </Form.Item>
              </Col>
              <Col xs={24} sm={4}>
                <Form.Item>
                  <Button danger onClick={() => removeSocialLink(index)} block>
                    Remove
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          ))}
          <Row>
            <Form.Item>
              <Button type="dashed" onClick={addSocialLink}>
                ➕ Add Social Link
              </Button>
            </Form.Item>
          </Row>
          <Divider />
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AdvancedUserForm;
