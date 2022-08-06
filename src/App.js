
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
   <Fragment>
    <Layout>
      <Switch>
        <Route path='/'>
          <LoginPage />
        </Route>

        <Route path='register'>
          <RegisterPage />
        </Route>
      </Switch>
    </Layout>
   </Fragment>
  );
}

export default App;
