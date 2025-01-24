import React from 'react';
import { Select, Form } from 'antd';

const { Option } = Select;

const SelectField = ({ label, name, rules, options = [], placeholder, ...props }) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      {...props}
    >
      <Select placeholder={placeholder}>
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectField;
