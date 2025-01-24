/* eslint-disable no-unused-vars */
import React from "react";
import { Form, Input, Button, notification } from "antd";
import { post } from "./apiHandler";

const SubmitForm = () => {
  const onFinish = async (values) => {
    try {
      const result = await post("/submit-form", values);
      notification.success({
        message: "Success",
        description: result.message || "Form submitted successfully!",
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message || "Something went wrong!",
      });
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "Please enter your username" }]}
      >
        <Input placeholder="Enter username" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SubmitForm;
