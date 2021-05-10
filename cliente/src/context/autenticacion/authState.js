import React, { useReducer } from 'react'
import Swal from 'sweetalert2'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO, 
  LOGIN_EXITOSO, 
  LOGIN_ERROR, 
  CERRAR_SESION 
} from '../../types'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null, 
    mensaje: null, 
    cargando: true
  }
  const [ state, dispatch ] = useReducer(AuthReducer, initialState)

  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/usuarios', datos)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se registró al usuario correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data
      })
    } catch (error) {
      console.error(error.response.data.msg)
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alert alert-danger'
      }
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al momento de crear el usuario'
      })
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      })
    }
  }
  // Retorna el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token')
    if(token) {
      tokenAuth(token)
    }
    try {
      const respuesta = await clienteAxios.get('/api/auth')
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario
      })
    } catch (error) {
      console.error(error.response)
      dispatch({
        type: LOGIN_ERROR
      })
    }
  }
  // Cuando el usuario inicia sesión
  const iniciarSesion = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/auth', datos)
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data
      })
      // Obtener el usuario
      usuarioAutenticado()
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alert alert-danger'
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      })
    }
  }
  // Cierra la sesión del usuario
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION
    })
  }
  return(
  <AuthContext.Provider
    value={{
      token: state.token,
      autenticado: state.autenticado,
      usuario: state.usuario,
      mensaje: state.mensaje,
      registrarUsuario,
      iniciarSesion,
      usuarioAutenticado,
      cerrarSesion
    }}>
      {props.children}
  </AuthContext.Provider>
    )
}
export default AuthState
