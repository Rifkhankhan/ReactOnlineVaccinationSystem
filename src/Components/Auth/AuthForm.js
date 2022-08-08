import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../ContextStore/auth-context';
import classes from './AuthForm.module.css';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isFormSubmit,setFormIsSubmitted] = useState(false)
  const authContext = useContext(AuthContext)
  const role = JSON.stringify(authContext.role)
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  console.log(role);
  console.log(typeof(role));

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitFormHandler = (e) =>{
    e.preventDefault()
    
    const enteredemailRef = emailRef.current.value
    const enteredpasswordRef = passwordRef.current.value

    if(isLogin)
    {
      authContext.login({
        email:enteredemailRef,
        password:enteredpasswordRef
      })
    }

    setFormIsSubmitted(true)
  }

  if(isFormSubmit)
  {
    
    if(role === 'admin')
    {
      console.log('admin');
        navigate('admin',{replace:true})
    }
    else if(role === 'employee')
    {
      console.log('employee');
        navigate('moh',{replace:true})
    }
    else{
      console.log(typeof(role));
        navigate('customer',{replace:true})
    }
  }

  
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' name='email' ref={emailRef}  required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' name='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
