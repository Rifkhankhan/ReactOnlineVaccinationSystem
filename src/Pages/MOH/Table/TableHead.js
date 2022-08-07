import React from "react";
import classes from './TableHead.module.css'
const TableHead = () => {
  return <thead  class="thead-dark">
    <tr>
        <th>#</th>
        <th>NIC</th>
        <th>Name</th>
        <th>Address</th>
        <th>Mobile</th>
        <th>Actions</th>
    </tr>
</thead>
};

export default TableHead;
