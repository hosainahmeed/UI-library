import React, { useState } from "react";
import { Steps, Form, Input, Button } from "antd";

const { Step } = Steps;

const StepForm = ({ steps }) => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const next = () => {
    form
      .validateFields()
      .then(() => setCurrent(current + 1))
      .catch((error) => console.log(error));
  };

  const prev = () => setCurrent(current - 1);

  return (
    <div>
      <Steps current={current}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <Form form={form} layout="vertical" style={{ marginTop: 16 }}>
        {steps[current].content}
        <div style={{ marginTop: 16 }}>
          {current > 0 && <Button onClick={prev}>Previous</Button>}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next} style={{ marginLeft: 8 }}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" style={{ marginLeft: 8 }}>
              Submit
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default StepForm;

//use

// const steps = [
//     { title: 'Step 1', content: <Form.Item name="name" label="Name" rules={[{ required: true }]}>
//                                   <Input />
//                                 </Form.Item> },
//     { title: 'Step 2', content: <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
//                                   <Input />
//                                 </Form.Item> },
//     { title: 'Step 3', content: <p>Final Step Content</p> },
//   ];

//   <StepForm steps={steps} />;
