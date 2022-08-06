import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import AuthContext from '../ContextStore/auth-context'
import AdminNavigation from './AdminNavigation'
import MainNavigation from './MainNavigation'
import MohNavigation from './MohNavigation'
import PeopleNavigation from './PeopleNavigation'

const Layout = (props) => {
  const authContext = useContext(AuthContext)
  const role = authContext.role
  let menu;


    // if(role === 'admin')
    // {
      menu = <MohNavigation/>
    // }
    // else if(role === 'employee')
    // {
    //   menu = <MohNavigation />
    // }
    // else if(role === 'customer'){
    //   menu =  <PeopleNavigation />
    // }
    // else{
    //   menu =  <MainNavigation />
    // }
  
  return (
    <div>
      {menu}
      <main>{props.children}</main>
      <Outlet />
    </div>
  )
}

export default Layout
