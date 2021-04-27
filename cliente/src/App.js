import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/auth/Login'

import ContenedorApp from './components/layout/ContenedorApp'

import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import CaballoState from './context/caballos/caballoState'
import tokenAuth from './config/token';

const token = localStorage.getItem('token')
if(token) {
  tokenAuth(token)
}

function App() {
  return (
    <CaballoState>
      <AlertaState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <ContenedorApp />
            </Switch>    
          </Router>
        </AuthState>
      </AlertaState>
   </CaballoState>
  )
}

export default App;
