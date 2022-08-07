import React from "react";
import Button from "../../../UI/Button";
import TableRow from "./TableRow";

const TableBody = (props) => {
  return <tbody >
   <TableRow {...props}/>
  </tbody>;
};

export default TableBody;
