import React from 'react';
import { Radio, Form } from 'antd';

const RadioField = ({ label, name, options = [], rules, ...props }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      {...props}
    >
      <Radio.Group>
        {options.map((option, index) => (
          <Radio key={index} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export default RadioField;
