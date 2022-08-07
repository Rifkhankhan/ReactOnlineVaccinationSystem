import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../ContextStore/auth-context';
import { NavLink } from 'react-router-dom';
const AdminNavigation = () => {
 
    const authContext = useContext(AuthContext)
    const isLoggedIn = authContext.isLoggedIn;

    const logoutHandler =() =>{
      authContext.logout()
    }
  return (
    <>
      <header className={classes.header}>
        <Link to="/admin">
          <div className={classes.logo}>Admin</div>
        </Link>
        <nav>
          <ul>
          {/* {
              isLoggedIn && 
              <> */}
                  <li ><NavLink to='/admin/creatMoh'>Create MOH</NavLink></li>
                  <li><button onClick={logoutHandler}>Logout</button></li>
              {/* </>
            } */}
          </ul>
        </nav>
      </header>
    
    </>
  );
};

export default AdminNavigation;
