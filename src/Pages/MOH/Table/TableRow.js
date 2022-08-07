import React from "react";

const TableRow = (props) => {
  return  <tr>
    <td>{props.id}</td>
    <td>{props.nic}</td>
    <td>{props.name}</td>
    <td>{props.address}</td>
    <td>{props.mobile}</td>
    <td >
        <button class='btn btn-primary mx-2'>View</button>
        <button class='btn btn-success  mx-2'>Approve</button>
        <button class='btn btn-danger  mx-2'>Reject</button>
    </td>
</tr>;
};

export default TableRow;
