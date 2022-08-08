import React, { useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../ReduxStore";
import {  peopleAction } from "../../ReduxStore/people-slice";
import classes from '../MOH/PersonHistory.module.css'

const PeopleSmartVaccination = () => {

  const dispatch = useDispatch()
  const nicRef = useRef()
  const emailRef = useRef()
  const ageRef = useRef()
  const documentRef = useRef()

  const formSubmitHandler = (e) =>{
    e.preventDefault()
    dispatch(peopleAction.smartVaccination({
      nic:nicRef.current.value,
      age:ageRef.current.value,
      email:emailRef.current.value,
      document:documentRef.current.value
    }))
  } 
  return <section className={classes.section}>
 

  <form onSubmit={formSubmitHandler}>
    <div className={classes.control}>
      <label htmlFor='nic'>Nic</label>
      <input type='text' id='nic' name='nic' ref={nicRef}  required />
    </div>

    <div className={classes.control}>
      <label htmlFor='age'>Age</label>
      <input type='number' id='age' name='age' ref={ageRef}   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' name='email' ref={emailRef}   required />
    </div>

    <div className={classes.control}>
      <label htmlFor='document'>Document</label>
      <input type='file' id='document' name='document' ref={documentRef}    />
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
