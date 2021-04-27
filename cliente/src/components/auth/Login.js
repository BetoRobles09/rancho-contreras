import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'

const Login = (props) => {
  const alertaContext = useContext(AlertaContext)
  const { alerta, mostrarAlerta } = alertaContext
  
  const authContext = useContext(AuthContext)
  const { mensaje, autenticado, iniciarSesion } = authContext
  // En caso de que el password o usuario no exista
  useEffect(() => {
    if(autenticado) {
      props.history.push('/inicio')
    }
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history])

  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  })

  const { email, password } = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault()
    // Validar que no haya campos vacios
    if(email.trim() === '' || password.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
    }
    // Pasarlo al action
    iniciarSesion({ email, password })
  }

  return (
    <div className="container">
      <div className="row">
      { alerta ? ( <div className='alert alert-danger'> {alerta.msg} </div> )  : null }
				<div className="col-md-6">
					<div className="card">
						<form onSubmit={onSubmit} className="box sombra sombra-dark">
              <h1>Iniciar Sesión</h1>
              <p className="text-muted"> Ingresa con tu correo y contraseña</p>
							<input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={onChange} /> 
							<input type="password" name="password" placeholder="Contraseña" value={password} onChange={onChange} />
							<input type="submit" name="submit" value="Iniciar Sesión" />
              <Link to='/nueva-cuenta' className='text-muted'>Nueva Cuenta</Link>
            </form>
          </div>
        </div>
    	</div>
		</div>
  )
}
 
export default Login
