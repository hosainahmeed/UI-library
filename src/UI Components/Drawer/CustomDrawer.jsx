import React from "react";
import { Drawer, Button } from "antd";

const CustomDrawer = ({ title, visible, onClose, content, footerButtons }) => {
  return (
    <Drawer
      title={title}
      placement="right"
      closable
      onClose={onClose}
      open={visible}
      footer={
        <div style={{ textAlign: "right" }}>
          {footerButtons.map((btn, index) => (
            <Button
              key={index}
              type={btn.type || "default"}
              onClick={btn.onClick}
              style={{ marginLeft: 8 }}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      }
    >
      {content}
    </Drawer>
  );
};

export default CustomDrawer;

// use

{
  /* <CustomDrawer
  title="Settings"
  visible={isDrawerOpen}
  onClose={() => setDrawerOpen(false)}
  content={<p>Here is some drawer content.</p>}
  footerButtons={[
    { label: 'Cancel', onClick: () => setDrawerOpen(false) },
    { label: 'Save', type: 'primary', onClick: () => console.log('Saved!') },
  ]}
/>
<Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button> */
}
