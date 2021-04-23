import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import AlertaContext from '../../context/alertas/alertaContext'
// import AuthContext from '../../context/autenticacion/authContext'

const Login = (props) => {
  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  })
  // extraer de usuario
  const { email, password } = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }
  // Cuando el usuario quiere iniciar sesión
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <div className="row">
				<div className="col-md-6">
					<div className="card">
						<form onsubmit={onSubmit} className="box sombra sombra-dark">
              <h1>Iniciar Sesión</h1>
              <p className="text-muted"> Ingresa con tu correo y contraseña</p>
							<input type="email" name="email" placeholder="Username" value={email} onChange={onChange} /> 
							<input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
							<input type="submit" name="submit" value="Login" />
            </form>
          </div>
        </div>
    	</div>
		</div>
  )
}
 
export default Login
