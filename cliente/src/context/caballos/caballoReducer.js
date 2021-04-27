import {
  OBTENER_CABALLOS,
  AGREGAR_CABALLO,
  CABALLO_ACTUAL,
  ELIMINAR_CABALLO, 
  CABALLO_ERROR,
  VALIDAR_FORMULARIO,
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
    case CABALLO_ACTUAL:
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
    case CABALLO_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    default:
      return state;
  }
}