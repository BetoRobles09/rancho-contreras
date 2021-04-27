import {
  OBTENER_CABALLOS,
  AGREGAR_CABALLO,
  CABALLO_ELIMINAR,
  ELIMINAR_CABALLO,
  VALIDAR_FORMULARIO,
  CABALLO_ERROR,
  ACTUALIZAR_CABALLO,
  CABALLO_ACTUALIZAR,
  LIMPIAR_CABALLOS
} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case OBTENER_CABALLOS:
      return {
        ...state,
        caballos: action.payload
      }
    case AGREGAR_CABALLO:
      return {
        ...state,
        caballos: [...state.caballos, action.payload]
      }
    case VALIDAR_FORMULARIO:
      return {
        ...state, 
        errorformulario: true
      }
    case CABALLO_ELIMINAR:
      return {
        ...state,
        caballo: state.caballo.filter(caballo => caballo._id === action.payload )
      }
    case ELIMINAR_CABALLO:
      return {
        ...state,
        caballos: state.caballos.filter(caballo => caballo._id !== action.payload ),
        caballo: null
      }
    case ACTUALIZAR_CABALLO:
      return {
        ...state,
        caballos: state.caballos.map(caballo => caballo._id === action.payload._id ? action.payload : caballo )
      }
    case CABALLO_ACTUALIZAR:
      return {
        ...state,
        caballoActualizar: action.payload
      }
    case LIMPIAR_CABALLOS:
      return {
        ...state,
        caballoActualizar: null
      }
    case CABALLO_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    default:
      return state;
  }
}