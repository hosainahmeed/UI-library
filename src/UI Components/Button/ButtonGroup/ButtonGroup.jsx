import React from "react";
import { Button, Space } from "antd";

const ButtonGroup = ({ buttons }) => {
  return (
    <Space>
      {buttons.map((button, index) => (
        <Button
          key={index}
          type={button.type || "default"}
          onClick={button.onClick}
          danger={button.danger || false}
          icon={button.icon || null}
        >
          {button.label}
        </Button>
      ))}
    </Space>
  );
};

export default ButtonGroup;

//use

{
  /* <ButtonGroup
  buttons={[
    { label: 'Submit', type: 'primary', onClick: () => console.log('Submit clicked') },
    { label: 'Cancel', type: 'default', onClick: () => console.log('Cancel clicked'), danger: true },
  ]}
/> */
}
