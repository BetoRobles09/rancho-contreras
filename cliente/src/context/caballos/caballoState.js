import React, { useReducer } from 'react'
import caballoContext from './caballoContext'
import caballoReducer from './caballoReducer'

import {
  OBTENER_CABALLOS,
  AGREGAR_CABALLO,
  CABALLO_ACTUAL,
  ELIMINAR_CABALLO,
  VALIDAR_FORMULARIO,
  CABALLO_ERROR
} from '../../types'

import clienteAxios from '../../config/axios'

const CaballoState = props => {
  const initialState = {
    caballos : [],
    caballo: null,
    errorformulario: false,
    mensaje: null
  }

  const [state, dispatch] = useReducer(caballoReducer, initialState)

  const obtenerCaballos = async () => {
    try {
      const resultado = await clienteAxios.get('/api/caballos');
      dispatch({
        type: OBTENER_CABALLOS,
        payload: resultado.data.caballos
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error al obtener los caballos',
        categoria: 'alerta-error'
      }
      dispatch({
        type: CABALLO_ERROR,
        payload: alerta
      })
    }
  }
  // Agregar nuevo proyecto
  const agregarCaballo = async caballo => {
    try {
      const resultado = await clienteAxios.post('/api/caballos', caballo)
      dispatch({
        type: AGREGAR_CABALLO,
        payload: resultado.data
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error al agregar el caballo',
        categoria: 'alerta-error'
      }
      dispatch({
        type: CABALLO_ERROR,
        payload: alerta
      })
    }
  }
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }
  // Selecciona el Proyecto que el usuario dio click
  const caballoActual = caballoId => {
    dispatch({
      type: CABALLO_ACTUAL,
      payload: caballoId
    })
  }
  // Elimina un proyecto
  const eliminarCaballo = async caballoId => {
    try {
      await clienteAxios.delete(`/api/caballos/${caballoId}`);
      dispatch({
        type: ELIMINAR_CABALLO,
        payload: caballoId
      })
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error al eliminar el caballo',
        categoria: 'alerta-error'
      }
      dispatch({
        type: CABALLO_ERROR,
        payload: alerta
      })
    }
  }
  
  return (
  <caballoContext.Provider
    value={{
      caballos: state.caballos,
      caballo: state.caballo,
      errorformulario: state.errorformulario,
      mensaje: state.mensaje,
      obtenerCaballos,
      agregarCaballo,
      caballoActual,
      mostrarError,
      eliminarCaballo
    }}
  >
    {props.children}
  </caballoContext.Provider>
        
    )
}

export default CaballoState
