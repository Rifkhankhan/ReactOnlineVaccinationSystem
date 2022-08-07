import React, { Fragment } from "react";
import TableBody from "./Table/TableBody";
import TableHead from "./Table/TableHead";

import classes from './VaccinationTable.module.css'
const VaccinationTable = (props) => {
  return <Fragment>
    <table class="table table-hover text-center m-0 p-0" >
        <TableHead />
        <TableBody body={props.body}/>
    </table>
  </Fragment>
};

export default VaccinationTable;
