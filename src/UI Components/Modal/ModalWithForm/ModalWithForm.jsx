import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

const ModalWithForm = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values);
        form.resetFields();
        onClose();
      })
      .catch((info) => console.log("Validation Failed:", info));
  };

  return (
    <Modal
      title="Form Modal"
      visible={visible}
      onOk={handleOk}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input />
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
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalWithForm;

// use

// const [visible, setVisible] = useState(false);

// <ModalWithForm
//   visible={visible}
//   onClose={() => setVisible(false)}
//   onSubmit={(data) => console.log('Form Data:', data)}
// />
// <Button onClick={() => setVisible(true)}>Open Modal</Button>
