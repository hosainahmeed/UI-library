import React from 'react';
import { Table } from 'antd';

const TableWithFilters = ({ columns, dataSource, rowKey }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey={rowKey || 'id'}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default TableWithFilters;

//use 

// const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       sorter: (a, b) => a.name.localeCompare(b.name),
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       filters: [
//         { text: 'Below 30', value: 30 },
//         { text: 'Above 30', value: 31 },
//       ],
//       onFilter: (value, record) => record.age < value,
//     },
//   ];
  
//   const data = [
//     { id: 1, name: 'John Doe', age: 28 },
//     { id: 2, name: 'Jane Smith', age: 34 },
//   ];
  
//   <TableWithFilters columns={columns} dataSource={data} />;
  