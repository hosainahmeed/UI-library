import React from 'react';
import { Steps } from 'antd';

const ProgressTracker = ({ steps, current }) => {
  return (
    <Steps current={current}>
      {steps.map((step, index) => (
        <Steps.Step key={index} title={step.title} description={step.description} />
      ))}
    </Steps>
  );
};

export default ProgressTracker;


//use
{/* <ProgressTracker
  current={1}
  steps={[
    { title: 'Step 1', description: 'First step description' },
    { title: 'Step 2', description: 'Second step description' },
    { title: 'Step 3', description: 'Final step description' },
  ]}
/> */}
