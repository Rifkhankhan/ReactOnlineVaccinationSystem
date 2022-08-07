import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../ContextStore/auth-context';
const PeopleNavigation = () => {
 
    const authContext = useContext(AuthContext)
    const isLoggedIn = authContext.isLoggedIn;

    const logoutHandler =() =>{
      authContext.logout()
    }
  return (
    <header className={classes.header}>
      <Link to='/people'>
        <div className={classes.logo}>Customer</div>
      </Link>
      <nav>
        <ul>
        {
            isLoggedIn && 
            <>
                <li><NavLink activeClassName={classes.active} to='people/smartVaccination'>Smart Vaccination</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='people/announcement'>Announcement</NavLink></li>
                <li><button onClick={logoutHandler}>Logout</button></li>
            </>
          }
            {!isLoggedIn && <li ><Link to='/login'>Login</Link></li>}
        </ul>
      </nav>
    </header>
  );
};

export default PeopleNavigation;
