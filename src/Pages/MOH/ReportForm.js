import React from "react";
import classes from './ReportForm.module.css'
const ReportForm = () => {
  return  <section className={classes.section}>
 

  <form>
    <div className={classes.control}>
      <label htmlFor='date'>From Date</label>
      <input type='date' id='date' name='date'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='vaccine'>To Date</label>
      <input type='text' id='vaccine' name='vaccine'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='venue'>District</label>
      <input type='text' id='venue' name='venue'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='bNumber'>MOH</label>
      <input type='text' id='bNumber' name='bNumber'   required />
    </div>

    <div >
      <button

        type='submit'
        class="btn btn-warning mx-2 "
      >
       View
      </button>

      <button
        type='submit'
        class="btn btn-success  mx-2"
      >
       Clear
      </button>
    </div>
  </form>
</section>
};

export default ReportForm;
