import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import authContext from '../../context/autenticacion/authContext'
import alertaContext from '../../context/alertas/alertaContext'

const NuevaCuenta = () => {
  const alertasContext = useContext(alertaContext)
  const { alerta, mostrarAlerta } = alertasContext

  const authsContext = useContext(authContext)
  const { mensaje, autenticado, registrarUsuario } = authsContext

  useEffect(() => {
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado])

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
      mostrarAlerta('Todos los campos son obligatorios', 'alert alert-danger')
      return
    }
    if(password.length < 6) {
      mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alert alert-danger')
      return
    }
    // Los 2 passwords son iguales
    if(password !== confirmar) {
      mostrarAlerta('Los passwords no son iguales', 'alert alert-danger')
      return
    }
    registrarUsuario({
      nombre,
      email,
      password
    })
    setUsuario({
      nombre: '',
      email: '',
      password: '',
      confirmar: ''
    })
  }

  return (
    <div className="container">
      <div className="row">
				<div className="col-md-6">
					<div className="card">
						<form className="box sombra sombra-dark" onSubmit={onSubmit}>
              { alerta ? ( <div className={`${alerta.categoria}`}> {alerta.msg} </div> )  : null }
              <h1>Nueva cuenta</h1>
              <p className="text-muted">Ingresa tus datos para registrarte</p>
              <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={onChange} /> 
							<input type="email" name="email" placeholder="Correo electrónico" value={email} onChange={onChange} />
							<input type="password" name="password" placeholder="Password" value={password} onChange={onChange} />
              <input type="password" name="confirmar" placeholder="Repita tu password" value={confirmar} onChange={onChange} />
							<input type="submit" name="submit" value="Crear cuenta" />
              <Link to='/inicio' className='text-muted'>Regresar</Link>
            </form>
          </div>
        </div>
    	</div>
		</div>
  )
}

export default NuevaCuenta
