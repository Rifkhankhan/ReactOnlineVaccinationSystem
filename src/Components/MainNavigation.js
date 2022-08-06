import { Link } from 'react-router-dom';
import React from 'react';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../ContextStore/auth-context';
import { NavLink } from 'react-router-dom';
const MainNavigation = () => {
 
    const authContext = useContext(AuthContext)
    const isLoggedIn = authContext.isLoggedIn;
  
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Vaccination System</div>
      </Link>
      <nav>
        <ul>
            {!isLoggedIn && <li ><NavLink to='/login'>Login</NavLink></li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
