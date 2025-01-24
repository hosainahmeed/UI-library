import React, { useState } from 'react';
import { Form, Input, Button, Steps } from 'antd';

const { Step } = Steps;

const MultiStepForm = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: 'Step 1',
      content: (
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
      ),
    },
    {
      title: 'Step 2',
      content: (
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter your email' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
      ),
    },
    {
      title: 'Step 3',
      content: (
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
      ),
    },
  ];

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  return (
    <Form onFinish={(values) => console.log(values)} layout="vertical">
      <Steps current={current}>
        {steps.map((item, index) => (
          <Step key={index} title={item.title} />
        ))}
      </Steps>

      <div className="my-4">{steps[current].content}</div>

      <div className="flex justify-between">
        {current > 0 && (
          <Button onClick={prev}>Previous</Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
};

export default MultiStepForm;
