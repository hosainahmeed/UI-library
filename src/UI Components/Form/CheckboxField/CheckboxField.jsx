import React from 'react';
import { Checkbox, Form } from 'antd';

const CheckboxField = ({ label, name, rules, ...props }) => {
  return (
    <Form.Item
      name={name}
      valuePropName="checked"
      rules={rules}
      {...props}
    >
      <Checkbox>{label}</Checkbox>
    </Form.Item>
  );
};

export default CheckboxField;
