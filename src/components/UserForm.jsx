import React from "react";
import { Button, Typography, Form, Input, Card, Select, Checkbox, Radio, message } from "antd";

const { Title } = Typography;

const UserForm = () => {
    const onFinish = (values) => {
        console.log(`✅ Form Submitted`, values);
        message.success("Registration Successful!");
    }
    return (
        <>
            <div style={{ padding: 40, }}>
                <Card style={{ borderRadiusL: 12 }}>
                    <Title level={2}> User Registration </Title>
                    <Form layout="vertical" onFinish={onFinish}>

                        <Form.Item
                            label='Full Name'
                            name='Name'
                            rules={[{ required: true, message: "Name is required" }]}
                        >
                            <Input placeholder="Enter your name"></Input>
                        </Form.Item>

                        <Form.Item
                            label='Email'
                            name='email'
                            rules={[{ required: true, message: "Email is required" }]}
                        >
                            <Input placeholder="Enter your email"></Input>
                        </Form.Item>

                        <Form.Item
                            label='Password'
                            name='password'
                            rules={[{ required: true, message: "Password is required" }, { min: 6, message: "Minimum 6 characters" }]}
                        >
                            <Input.Password placeholder="Enter your Password"></Input.Password>
                        </Form.Item>
                        {/* Role */}
                        <Form.Item
                            label='Role'
                            name='role'
                            rules={[{ require: true, message: "Please select your role" }]}
                        >

                            <Select placeholder='Select Role'>
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
                                            : Promise.reject('You must accept terms')

                                }]}
                        >
                            <Checkbox>I agree to the terms and conditions</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>Register</Button>
                        </Form.Item>
                    </Form>
                </Card>


            </div >
        </>);
}
export default UserForm;