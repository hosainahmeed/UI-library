import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = () => {
  const onFinish = (values) => {
    console.log("Login Submitted:", values);
    // Add login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 h-auto rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-4">
          Login to Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please enter your email and password to continue
        </p>
        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-6"
        >
          <Form.Item
            name="email"
            label="Email address"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="example@gmail.com"
              className="h-12 text-gray-700"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <div className="flex justify-between items-center">
            <Checkbox className="text-sm">Remember Password</Checkbox>
            <a
              href="/login/email-confirm"
              className="text-sm text-blue-500 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full h-12 bg-[#00b0f2] hover:bg-[#00b0f2]/70 text-white text-lg font-bold"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <h1 className="text-black mt-6">
          Dont have an account?
          <a
            href="/register"
            className="text-[#00B0F2] underline text-sm md:text-base ml-2"
          >
            Go to Sign up
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Login;
