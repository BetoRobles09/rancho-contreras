import Registro from './Registro'
import React, { useContext, useEffect } from 'react'
import caballoContext from '../../context/caballos/caballoContext'
import AlertaContext from '../../context/alertas/alertaContext'

const ListaRegistros = () => {
  const caballosContext = useContext(caballoContext);
  const { mensaje, caballos, obtenerCaballos } = caballosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;
  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    // si hay un error
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerCaballos();
    // eslint-disable-next-line
  }, [mensaje]);

  return (
    <div>
      <h3 className='text-center'>Lista de registros</h3>
      { caballos.length === 0 ? <p>No hay registros para mostrar, comienza creando uno</p> :
      <ul className="listado-tareas">
      { alerta   ? ( <div className='alert alert-danger'>{alerta.msg}</div>  ) : null  }
        {caballos.map(caballo => (
          <Registro caballo={caballo} key={caballo._id} />
        ))}
      </ul>
      }
    </div>
  )
}

export default ListaRegistros
