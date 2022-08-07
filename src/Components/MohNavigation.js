import { Link } from 'react-router-dom';
import React from 'react';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../ContextStore/auth-context';
import { NavLink } from 'react-router-dom';
const MohNavigation = () => {
 
    const authContext = useContext(AuthContext)
    const isLoggedIn = authContext.isLoggedIn;

    const logoutHandler =() =>{
      authContext.logout()
    }
  return (
    <header className={classes.header}>
      <Link to='/moh'>
        <div className={classes.logo}>MOH</div>
      </Link>
      <nav>
        <ul>
          {
            isLoggedIn && 
            <>
                <li><NavLink to='moh/smartVaccination' >Smart Vaccination</NavLink></li>
                <li><NavLink to='moh/personHistory'>Person History</NavLink></li>
                <li><NavLink to='moh/announcement'>Announcement</NavLink></li>
                <li><NavLink to='moh/reports'>Reports</NavLink></li>
                <li><button onClick={logoutHandler}>Logout</button></li>
            </>
          }
            {!isLoggedIn && <li ><NavLink to='/login'>Login</NavLink></li>}
        </ul>
      </nav>
    </header>
  );
};

export default MohNavigation;
