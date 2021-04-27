import NavBar from './NavBar'
import ListaRegistros from '../registro/ListaRegistros'
import NuevoRegistro from '../registro/NuevoRegistro'
import EditarRegistro from '../registro/EditarRegistro'
import NuevaCuenta from '../auth/NuevaCuenta'

import RutaPrivada from '../rutas/RutaPrivada'


const ContenedorApp = () => {
  return (
    <>
      <NavBar />
      <div className='container mt-3 p-2' >
        <RutaPrivada exact path="/inicio" component={ListaRegistros} />
        <RutaPrivada exact path="/nuevo-registro" component={NuevoRegistro} />
        <RutaPrivada exact path="/editar-registro/:id" component={EditarRegistro} />
        <RutaPrivada exact path="/nueva-cuenta" component={NuevaCuenta} />
      </div>
    </>
  )
}

export default ContenedorApp
