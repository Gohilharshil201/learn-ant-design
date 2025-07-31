import React from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  message,
  Card,
  Typography,
  DatePicker,
  Upload,
  Radio,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;

const UserNewForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("✅ Form Submitted:", values);
    message.success("Profile saved successfully!");
  };

  return (
    <Card style={{ maxWidth: 600, margin: "0 auto", marginTop: 40 }}>
      <Title level={3}>📝 User Profile Form</Title>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Full Name is required" }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="email@example.com" />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please select a role" }]}
        >
          <Select placeholder="Select role">
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="editor">Editor</Select.Option>
            <Select.Option value="viewer">Viewer</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select gender" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Birthdate"
          name="birthdate"
          rules={[{ required: true, message: "Please select birthdate" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Profile Image"
          name="avatar"
          valuePropName="file"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Upload
            name="avatar"
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("You must agree to terms"),
            },
          ]}
        >
          <Checkbox>I agree to the terms and conditions</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save Profile
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UserNewForm;
