import { Link } from 'react-router-dom';
import React from 'react';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
 
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Vaccination</div>
      </Link>
      <nav>
        <ul>
            <li ><Link to='/login'>Login</Link></li>
            <li><button >Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
