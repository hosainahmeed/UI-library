import React from 'react';
import { Alert } from 'antd';

const NotificationBanner = ({ type = 'info', message, description, closable = false }) => {
  return (
    <Alert
      type={type}
      message={message}
      description={description}
      closable={closable}
    />
  );
};

export default NotificationBanner;


//use

// <NotificationBanner
//   type="success"
//   message="Success!"
//   description="Your operation was completed successfully."
//   closable
// />
