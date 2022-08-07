import React from "react";
import classes from './PersonHistory.module.css'

const PersonHistory = () => {
  return <section className={classes.section}>
 

  <form>
    <div className={classes.control}>
      <label htmlFor='date'>Date</label>
      <input type='date' id='date' name='date'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='nic'>NIC</label>
      <input type='text' id='nic' name='nic'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='vProduct'>Vaccine Product</label>
      <input type='text' id='vProduct' name='vProduct'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='bNumber'>Batch Number</label>
      <input type='text' id='bNumber' name='bNumber'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='vStatus'>Vaccination Status</label>
      <input type='number' id='vStatus' name='vStatus'   required />
    </div>

    <div >
      <button
        type='submit'
        class="btn btn-success"
      >
       Submit
      </button>
    </div>
  </form>
</section>;
};

export default PersonHistory;
