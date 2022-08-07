

import React from "react";
import classes from './Announcement.module.css'

const Announcement = () => {
  return <section className={classes.section}>

  <form>
    <div className={classes.control}>
      <label htmlFor='date'>Date</label>
      <input type='date' id='date' name='date'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='vaccine'>Vaccine</label>
      <input type='text' id='vaccine' name='vaccine'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='venue'>Vanue</label>
      <input type='text' id='venue' name='venue'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='age'>Age Group</label>
      <input type='text' id='age' name='age'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='vStatus'>No Of Dosage</label>
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

export default Announcement;
