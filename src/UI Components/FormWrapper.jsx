import React from 'react';
import { Form } from 'antd';

const FormWrapper = ({ children, onFinish, layout = 'vertical', ...props }) => {
  return (
    <Form
      layout={layout}
      onFinish={onFinish}
      {...props}
    >
      {children}
    </Form>
  );
};

export default FormWrapper;
