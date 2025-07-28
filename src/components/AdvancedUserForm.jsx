import React, { useState } from "react";
import {
  Button,
  Card,
  Typography,
  Form,
  Checkbox,
  Radio,
  Input,
  Space,
  Divider,
  message,
  Select,
} from "antd";

const { Title, Text } = Typography;

const AdvancedUserForm = () => {
  const { form } = Form.useForm();
  const [showGithub, setShowGithub] = useState(false);
  const [socialLink, setSocialLink] = useState([{ platform: "", url: "" }]);

  const addSocialLink = () => {
    setSocialLink([...socialLink, { platform: "", url: "" }]);
  };
  const onFinish = (values) => {
    console.table(values);
  };
  const removeSocialLink = (index) => {
    const updated = [...socialLink];
    updated.splice(index, 1);
    setSocialLink(updated);
  };

  return (
    <>
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
                    value && value.includes("admin")
                      ? Promise.reject("Username cannot include 'admin'")
                      : Promise.resolve,
                },
              ]}
            >
              <Input placeholder="Username"></Input>
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
              <Input placeholder="Email"></Input>
            </Form.Item>
            <Form.Item label="Enable Github Profile ?">
              <Checkbox onChange={(e) => setShowGithub(e.target.checked)}>
                Yes
              </Checkbox>
              {showGithub && (
                <Form.Item
                  label="Github URL"
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
            </Form.Item>
            <Divider>Social Links</Divider>
            {socialLinks.map((item, index) => (
              <Space
                key={index}
                direction="horizontal"
                style={{ display: "flex", marginBottom: 8 }}
              >
                <Form.Item
                  name={["social", index, "platform"]}
                  rules={[{ required: true, message: "Select a platform" }]}
                >
                  <Select placeholder="Platform" style={{ width: 150 }}>
                    <Option value="twitter">Twitter</Option>
                    <Option value="linkedin">LinkedIn</Option>
                    <Option value="dribbble">Dribbble</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name={["social", index, "url"]}
                  rules={[{ required: true, message: "Enter URL" }]}
                >
                  <Input placeholder="https://..." style={{ width: 240 }} />
                </Form.Item>
                <Button danger onClick={() => removeSocialLink(index)}>
                  Remove
                </Button>
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={addSocialLink}>
                ➕ Add Social Link
              </Button>
            </Form.Item>
            <Divider />
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};
export default AdvancedUserForm;
