import './App.css';
import Welcome from './pages/welcome'
import PlanLayout from './pages/Layouts/PlanLayout.js'
import { BrowserRouter, Route} from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation'
import CodeConfirm from './pages/CodeConfirm'
import AllowNotification from './pages/AllowNotification'


function App() {
  return (
    <BrowserRouter>
      <PlanLayout> 
          <Route exact path='/' component={Welcome } /> 
          <Route exact path='/get_username' component={PhoneConfirmation} /> 
          <Route exact path='/confirm' component={CodeConfirm}/> 
          <Route exact path='/allow_notification' component={AllowNotification} /> 
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
