import React from 'react';
import { Tag } from 'antd';

const TagList = ({ tags, color = 'blue' }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Tag key={index} color={color}>
          {tag}
        </Tag>
      ))}
    </>
  );
};

export default TagList;

//use
{/* <TagList tags={['React', 'JavaScript', 'Ant Design']} /> */}
