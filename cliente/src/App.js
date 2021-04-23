import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/auth/Login'

import ContenedorApp from './components/layout/ContenedorApp'
import NavBar from './components/layout/NavBar'

import NuevoRegistro from './components/registro/NuevoRegistro'
import EditarRegistro from './components/registro/EditarRegistro'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/inicio' component={ContenedorApp} />
        <Route exact path='/nuevo-registro' component={NuevoRegistro} />
        <Route exact path='/editar-registro/:id' component={EditarRegistro} />
      </Switch>
    </Router>
  )
}

export default App;
