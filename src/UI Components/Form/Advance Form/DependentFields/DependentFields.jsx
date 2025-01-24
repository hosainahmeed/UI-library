import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const DependentFields = () => {
  return (
    <Form onFinish={(values) => console.log(values)} layout="vertical">
      <Form.Item
        name="userType"
        label="User Type"
        rules={[{ required: true, message: 'Please select user type' }]}
      >
        <Select placeholder="Select user type">
          <Option value="admin">Admin</Option>
          <Option value="user">User</Option>
        </Select>
      </Form.Item>

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.userType !== currentValues.userType
        }
      >
        {({ getFieldValue }) =>
          getFieldValue('userType') === 'admin' ? (
            <Form.Item
              name="adminCode"
              label="Admin Code"
              rules={[{ required: true, message: 'Admin code is required' }]}
            >
              <Input placeholder="Enter admin code" />
            </Form.Item>
          ) : null
        }
      </Form.Item>

      <Form.Item>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default DependentFields;
