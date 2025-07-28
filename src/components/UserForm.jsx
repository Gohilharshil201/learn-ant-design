import React, { useState } from "react";
import {
  Button,
  Typography,
  Form,
  Input,
  Card,
  Select,
  Checkbox,
  Radio,
  message,
  Divider,
  Descriptions,
} from "antd";

const { Title } = Typography;

const UserForm = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);
  const [loading, isLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const onFinish = (values) => {
    console.log("✅ Submitted:", values);
    isLoading(true);
    setTimeout(() => {
      setFormData(values);
      setShowResult(true);
      isLoading(false);
      message.success("Registration Successful!");
    }, 3000);
  };

  const onReset = () => {
    form.resetFields();
    setShowResult(false);
  };

  return (
    <>
      <div style={{ padding: 40, backgroundColor: "#3F3E3EFF" }}>
        <Card style={{ borderRadius: 14, backgroundColor: "#8E8D8FFF" }}>
          <Title level={2}> User Registration </Title>
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter your name"></Input>
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input placeholder="Enter your email"></Input>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Password is required" },
                { min: 6, message: "Minimum 6 characters" },
              ]}
            >
              <Input.Password placeholder="Enter your Password"></Input.Password>
            </Form.Item>
            {/* Role */}
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please select your role" }]}
            >
              <Select placeholder="Select Role">
                <Select.Option value="admin">Admin</Select.Option>
                <Select.Option value="developer">Developer</Select.Option>
                <Select.Option value="designer">Designer</Select.Option>
                <Select.Option value="seo">SEO</Select.Option>
                <Select.Option value="marketing">Marketing</Select.Option>
              </Select>
            </Form.Item>

            {/* Gender */}
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "please select you gender" }]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="unknown">Unknown</Radio>
              </Radio.Group>
            </Form.Item>

            {/* T&C */}
            <Form.Item
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("You must accept terms"),
                },
              ]}
            >
              <Checkbox>I agree to the terms and conditions</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                // onClick={onFinish}
                type="primary"
                htmlType="submit"
                block
                loading={loading}
              >
                Register
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                onClick={onReset}
                block
                style={{ marginTop: 8, backgroundColor: "#FF0000FF" }}
              >
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {formData && (
          <>
            <Divider />
            <Card style={{ marginTop: 20, backgroundColor: "#f0f2f5" }}>
              <Title level={2}>Submitted User Info</Title>
              <Descriptions column={1}>
                <Descriptions.Item label="Name">
                  {formData.name}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {formData.email}
                </Descriptions.Item>
                <Descriptions.Item label="Role">
                  {formData.role}
                </Descriptions.Item>
                <Descriptions.Item label="Gender">
                  {formData.gender}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </>
        )}
      </div>
    </>
  );
};
export default UserForm;
