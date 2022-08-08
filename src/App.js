
import { Fragment, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
        {
          isLoggedIn
        }
        <Route path='/' element={<AdminDashboard/>}>
          <Route path='createMoh'  element={<CreateMoh/>}/>
          <Route path='admin'  element={<AdminDashboard  />}/>
        </Route>
      
        {/* moh */}
  
        <Route path='/moh'>
            <Route index  element={<MohDashboard/>}/>
            <Route path='smartVaccination'  element={<SmartVaccination/>}/>
            <Route path='personHistory'  element={<PersonHistory/>}/>
            <Route path='announcement'  element={<Announcement/>}/>
            <Route path='reports'  element={<Reports/>}/>
        </Route>
        {/* people */}
        
        <Route path='/people' >
            <Route index element={<PeopleDashboard/>} />
            <Route path='smartVaccination'  element={<CustomerSmartVaccination/>}/>
            <Route path='announcement'  element={<CustomerAnnouncement/>}/>
        </Route>
                     
        {/* default */}
        <Route path='/' element={<Navigate to='login' replace={true} />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
       

      </Routes>
    </Layout>
   </Fragment>
  );
}

export default App;
