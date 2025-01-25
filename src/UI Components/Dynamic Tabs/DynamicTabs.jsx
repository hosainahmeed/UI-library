import React, { useState } from 'react';
import { Tabs, Button } from 'antd';

const DynamicTabs = ({ initialTabs }) => {
  const [tabs, setTabs] = useState(initialTabs);

  const addTab = () => {
    const newTab = {
      key: `tab-${tabs.length + 1}`,
      label: `Tab ${tabs.length + 1}`,
      content: `Content for Tab ${tabs.length + 1}`,
    };
    setTabs([...tabs, newTab]);
  };

  const removeTab = (key) => {
    setTabs(tabs.filter((tab) => tab.key !== key));
  };

  return (
    <div>
      <Tabs
        type="editable-card"
        onEdit={(key, action) => action === 'remove' && removeTab(key)}
        items={tabs.map((tab) => ({
          label: tab.label,
          key: tab.key,
          children: tab.content,
        }))}
      />
      <Button onClick={addTab} style={{ marginTop: 16 }}>
        Add Tab
      </Button>
    </div>
  );
};

export default DynamicTabs;

//use 
{/* <DynamicTabs
  initialTabs={[
    { key: '1', label: 'Tab 1', content: 'Content of Tab 1' },
    { key: '2', label: 'Tab 2', content: 'Content of Tab 2' },
  ]}
/> */}
