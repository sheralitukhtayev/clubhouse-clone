import './App.css';
import Welcome from './pages/welcome'
import PlanLayout from './pages/Layouts/PlanLayout.js'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation'
import CodeConfirm from './pages/CodeConfirm'
import AllowNotification from './pages/AllowNotification'
import AppLayout from './pages/Layouts/AppLayout'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Route exact
      path={[
        '/',
        '/get_username',
        '/confirm',
        '/allow_notification',
      ]}
      >
        <PlanLayout>
          <Switch>
            <Route exact path='/' component={Welcome } /> 
            <Route exact path='/get_username' component={PhoneConfirmation} /> 
            <Route exact path='/confirm' component={CodeConfirm}/> 
            <Route exact path='/allow_notification' component={AllowNotification} /> 
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={['/home', '/explore']}>
        <AppLayout>
          <Switch>
             <Route exact path='/home' component={() => <Home />} />
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
