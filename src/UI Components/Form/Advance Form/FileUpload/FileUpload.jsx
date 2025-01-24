import React from 'react';
import { Upload, Button, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FileUpload = () => {
  return (
    <Form onFinish={(values) => console.log(values)} layout="vertical">
      <Form.Item
        name="upload"
        label="Upload File"
        valuePropName="fileList"
        getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
      >
        <Upload name="file" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FileUpload;
