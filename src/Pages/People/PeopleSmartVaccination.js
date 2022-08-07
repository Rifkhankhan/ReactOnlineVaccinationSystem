import React from "react";
import classes from '../MOH/PersonHistory.module.css'

const PeopleSmartVaccination = () => {
  return <section className={classes.section}>
 

  <form>
    <div className={classes.control}>
      <label htmlFor='nic'>Nic</label>
      <input type='text' id='nic' name='nic'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='age'>Age</label>
      <input type='number' id='age' name='age'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' name='email'   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='document'>Document</label>
      <input type='file' id='document' name='document'   required />
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

export default PeopleSmartVaccination;
