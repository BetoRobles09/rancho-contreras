import React, { useState, useEffect, useContext } from 'react'
import authContext from '../../context/autenticacion/authContext'
import alertaContext from '../../context/alertas/alertaContext'

const Login = (props) => {
  const authsContext = useContext(authContext)
  const alertasContext = useContext(alertaContext)

  const { alerta, mostrarAlerta } = alertasContext
  const { mensaje, autenticado, iniciarSesion } = authsContext

  useEffect(() => {
    if(autenticado) {
      props.history.push('/inicio')
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
    if(email.trim() === '' || password.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alert alert-danger')
    }
    iniciarSesion({ email, password })
  }

  return (
    <div className="container">
      <div className="row">
				<div className="col-md-6">
					<div className="card">
						<form onSubmit={onSubmit} className="box sombra sombra-dark">
              { alerta ? ( <div className={`${alerta.categoria}`}> {alerta.msg} </div> )  : null }
              <h1>Iniciar Sesión</h1>
              <p className="text-muted"> Ingresa con tu correo y contraseña</p>
							<input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={onChange} />
							<input type="password" name="password" placeholder="Contraseña" value={password} onChange={onChange} />
							<input type="submit" name="submit" value="Iniciar Sesión" />
            </form>
          </div>
        </div>
    	</div>
		</div>
  )
}
 
export default Login
