import React from "react";
import classes from './CreateMoh.module.css';
import Button from '../../UI/Button'
const CreateMoh = () => {




  return (
    <section className={classes.auth}>
      <h1>Create MOH</h1>

      <form>
        <div className={classes.control}>
            <label htmlFor='email'>MOH ID</label>
            <input type='text' id='id' name='id'   required />
          </div>  

          <div className={classes.control}>
            <label htmlFor='email'>Name Of Th MOH</label>
            <input type='text' id='email' name='moh'   required />
          </div>

          <div className={classes.control}>
            <label htmlFor='password'>Name</label>
            <input type='text' name='name'  required />
          </div>

          <div className={classes.control}>
            <label htmlFor='password'>Address</label>
            <input type='text' name='address'  required />
          </div>

          <div className={classes.control}>
            <label htmlFor='password'>Mobile No</label>
            <input type='text' name='mobile'  required />
          </div>

          <div className={classes.control}>
            <label htmlFor='password'>password</label>
            <input type='password' name='mobile'  required />
          </div>

          <div className={classes.actions}>
            <Button
              type='button'
              className={classes.toggle}
      
            >
              Submit
            </Button>
          </div>
      </form>
    </section>
  );
};

export default CreateMoh;
