import React from 'react';
import { Card, Button } from 'antd';

const CardWithActions = ({ title, content, actions }) => {
  return (
    <Card
      title={title}
      extra={<Button type="link">More</Button>}
      actions={actions.map((action, index) => (
        <Button key={index} type={action.type || 'default'} onClick={action.onClick}>
          {action.label}
        </Button>
      ))}
    >
      {content}
    </Card>
  );
};

export default CardWithActions;

//use
{/* <CardWithActions
  title="Card Title"
  content={<p>This is some card content.</p>}
  actions={[
    { label: 'Edit', type: 'primary', onClick: () => console.log('Edit clicked') },
    { label: 'Delete', type: 'danger', onClick: () => console.log('Delete clicked') },
  ]}
/> */}
