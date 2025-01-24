import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const DynamicForm = () => {
  return (
    <Form onFinish={(values) => console.log(values)} layout="vertical">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <div key={key} className="flex items-center gap-4">
                <Form.Item
                  {...restField}
                  name={[name, 'username']}
                  fieldKey={[fieldKey, 'username']}
                  rules={[{ required: true, message: 'Missing username' }]}
                  label="Username"
                >
                  <Input placeholder="Enter username" />
                </Form.Item>

                <Button
                  type="link"
                  icon={<MinusCircleOutlined />}
                  onClick={() => remove(name)}
                />
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add User
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
