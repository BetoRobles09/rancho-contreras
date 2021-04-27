import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'

const NuevaCuenta = (props) => {
  const alertaContext = useContext(AlertaContext)
  const { alerta, mostrarAlerta } = alertaContext

  const authContext = useContext(AuthContext)
  const { mensaje, autenticado,  registrarUsuario } = authContext

  useEffect(() => {
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history])

  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })

  const { nombre, email, password, confirmar } = usuario
  const onChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault()
    if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '' ) {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
      return
    }
    if(password.length < 6) {
      mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error')
      return
    }
    if(password !== confirmar) {
      mostrarAlerta('Los passwords no son iguales', 'alerta-error')
      return
    }
    registrarUsuario({
      nombre,
      email,
      password
    })
  }

  return (
    <div className="container">
      { alerta ? ( <div className='alert alert-danger'> {alerta.msg} </div> )  : null }
      <div className="row">
				<div className="col-md-6">
					<div className="card">
						<form className="box sombra sombra-dark" onSubmit={onSubmit}>
              <h1>Nueva cuenta</h1>
              <p className="text-muted">Ingresa tus datos para registrarte</p>
              <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={onChange} /> 
							<input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={onChange} />
							<input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
              <input type="password" name="confirmar" placeholder="Repita tu password" value={confirmar} onChange={onChange} />
							<input type="submit" name="submit" value="Crear cuenta" />
              <Link to='/' className='text-muted'>Regresar</Link>
            </form>
          </div>
        </div>
    	</div>
		</div>
  )
}

export default NuevaCuenta
