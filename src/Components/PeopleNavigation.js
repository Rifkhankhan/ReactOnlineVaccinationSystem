import { Link } from 'react-router-dom';
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
                <li><Link to='people/smartVaccination'>Smart Vaccination</Link></li>
                <li><Link to='people/announcement'>Announcement</Link></li>
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
