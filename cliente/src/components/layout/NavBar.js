import { Link } from 'react-router-dom'
import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';


const NavBar = () => {
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion  } = authContext;

  useEffect(() => {
      usuarioAutenticado();
      // eslint-disable-next-line
  }, []);
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link to='/inicio' className="navbar-brand">Rancho Los Contreras</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to='/inicio'>Inicio</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to='/nuevo-registro'>Nuevo registro</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to='/nueva-cuenta'>Nueva cuenta</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to='' onClick={() => cerrarSesion() }>Cerrar Sesión</Link>
        </li>
      </ul>
      {usuario ? <p className="my-2 my-lg-0">Hola, <span>{usuario.nombre} </span> </p> : null}
    </nav>
  )
}

export default NavBar
