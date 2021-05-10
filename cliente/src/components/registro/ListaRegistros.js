import Registro from './Registro'
import React, { useContext, useEffect } from 'react'
import caballoContext from '../../context/caballos/caballoContext'
import AlertaContext from '../../context/alertas/alertaContext'

import Pagination from '../layout/Pagination'

const ListaRegistros = () => {
  const caballosContext = useContext(caballoContext)
  const { mensaje, caballos, currentPage, postPerPage, obtenerCaballos, paginate } = caballosContext

  const alertaContext = useContext(AlertaContext)
  const { alerta, mostrarAlerta } = alertaContext

  const indexLastPost = currentPage * postPerPage
  const indexFirstPost = indexLastPost - postPerPage
  const currentPosts = caballos.slice(indexFirstPost, indexLastPost)
  const totalPosts =  caballos.length

  // const pageNumbers = [1, 2]

  // Obtener proyectos cuando carga el componente
  useEffect(() => {
    // si hay un error
    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    obtenerCaballos()
    // eslint-disable-next-line
  }, [mensaje]);

  return (
    <div>
      <h3 className='text-center'>Lista de registros</h3>
      { totalPosts === 0 ? <p>No hay registros para mostrar, comienza creando uno</p> :
      <ul className="listado-tareas">
      { alerta   ? ( <div className='alert alert-danger'>{alerta.msg}</div>  ) : null  }
        {currentPosts.map(caballo => (
          <Registro caballo={caballo} key={caballo._id} />
        ))}
      <Pagination totalPosts={totalPosts} postPerPages={postPerPage} paginate={paginate} />
      </ul>
      }
    </div>
  )
}

export default ListaRegistros
