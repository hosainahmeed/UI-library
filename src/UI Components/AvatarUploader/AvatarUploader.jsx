import React from "react";
import { Upload, Avatar, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AvatarUploader = ({ onUpload }) => {
  const props = {
    name: "file",
    showUploadList: false,
    beforeUpload(file) {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      return isImage || Upload.LIST_IGNORE;
    },
    customRequest({ file, onSuccess }) {
      setTimeout(() => {
        onUpload(file);
        onSuccess("ok");
      }, 1000);
    },
  };

  return (
    <Upload {...props}>
      <Avatar size={128} icon={<UserOutlined />} />
    </Upload>
  );
};

export default AvatarUploader;

//use
{
  /* <AvatarUploader
  onUpload={(file) => console.log('Uploaded File:', file)}
/> */
}
