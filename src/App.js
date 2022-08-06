
import { Fragment, useContext } from 'react';
import { Navigate, Redirect, Route, Routes, Switch } from 'react-router-dom';
import Layout from './Components/Layout';
import AuthContext from './ContextStore/auth-context';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import PageNotFound from './Pages/PageNotFound'
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import MohDashboard from './Components/Dashboard/MohDashboard';
import PeopleDashboard from './Components/Dashboard/PeopleDashboard';
import CreateMoh from './Pages/Admin/CreateMoh';
import SmartVaccination from './Pages/MOH/SmartVaccination';
import CustomerSmartVaccination from './Pages/People/PeopleSmartVaccination';
import CustomerAnnouncement from './Pages/People/PeopleAnnouncement';
import PersonHistory from './Pages/MOH/PersonHistory';
import Reports from './Pages/MOH/Reports';
import Announcement from './Pages/MOH/Announcement';
function App() {
  const authContext = useContext(AuthContext)
  const role = authContext.role
  const isLoggedIn = authContext.isLoggedIn

  return (
   <Fragment>
    
    <Layout>
      <Routes> 
        {/* admin */}
        <Route path='admin' element={<AdminDashboard/>}/>
         
        <Route path='createMoh'  element={<CreateMoh/>}/>
      
        {/* moh */}
  
        <Route path='moh' element={<MohDashboard/>}/>
          <Route path='smartVaccination'  element={<SmartVaccination/>}/>
          <Route path='personHistory'  element={<PersonHistory/>}/>
          <Route path='announcement'  element={<Announcement/>}/>
          <Route path='reports'  element={<Reports/>}/>
      
        {/* people */}
        
        <Route path='people' element={<PeopleDashboard/>}/>
          <Route path='smartVaccination'  element={<CustomerSmartVaccination/>}/>
          <Route path='announcement'  element={<CustomerAnnouncement/>}/>
                    
        {/* default */}
        <Route path='login' element={<LoginPage />}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
       

      </Routes>
    </Layout>
   </Fragment>
  );
}

export default App;
