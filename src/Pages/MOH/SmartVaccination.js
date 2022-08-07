import React, { Fragment } from "react";
import VaccinationTable from "./VaccinationTable";
import classes from './SmartVaccination.module.css'
const SmartVaccination = () => {
  return <Fragment>
    <div className={classes.table} class="container-fluid">
      <VaccinationTable/>
    </div>
  </Fragment>
};

export default SmartVaccination;
