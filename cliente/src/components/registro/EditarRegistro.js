import { Link, useHistory } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import caballoContext from '../../context/caballos/caballoContext'

const EditarRegistro = () => {
  const history = useHistory()
  const caballosContext = useContext(caballoContext)
  const { caballoActualizar, actualizarCaballo } = caballosContext

  const [caballo, setCaballo] = useState({
    nombre: '',
    raza: '',
    capa: '',
    padre: '',
    madre: '',
    fechaNacimiento: '',
    descripcion: ''
  });

  const { nombre, raza, capa, padre, madre, fechaNacimiento, descripcion} = caballo

  useEffect(() => {
    setCaballo(caballoActualizar)
  }, [caballoActualizar])

  const onChange = e => {
    setCaballo({
        ...caballo,
        [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    actualizarCaballo(caballo)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El registro se actualizó correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    history.push('/inicio')
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Editar registro</h2>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label>Nombre</label>
                <input type='text' className='form-control' name='nombre' value={nombre} onChange={onChange} />
              </div>
              <div className='form-group'>
                <label>Raza</label>
                <input type='text' className='form-control' name='raza' value={raza} onChange={onChange} />
              </div>
              <div className='form-group'>
                <label>Capa</label>
                <input type='text' className='form-control' name='capa' value={capa} onChange={onChange} />
              </div>
              <div className='form-group'>
                <label>Padre</label>
                <input type='text' className='form-control' name='padre' value={padre} onChange={onChange} />
              </div>
              <div className='form-group'>
                <label>Madre</label>
                <input type='text' className='form-control' name='madre' value={madre} onChange={onChange} />
              </div>
              <div className='form-group'>
                <label>Fecha de nacimiento</label>
                <input type='date' className='form-control' name='fechaNacimiento' value={fechaNacimiento} onChange={onChange} />
              </div>
              <div className='form-group'>
                <label>Descripción</label>
                <textarea className='form-control' name='descripcion' rows='5' value={descripcion} onChange={onChange} />
              </div>
              <div className='form-group'>
                <label>Fotografía</label>
                <input type='file' className='form-control-file' name='foto' aria-describedby='fileHelp' />
                <small id='fileHelp' className='form-text text-muted'>Selecciona una foto del caballo</small>
              </div>
              <button type='submit' className='btn btn-info font-weight-bold text-uppercase'>Actualizar</button>
              <Link to='/inicio' className='btn btn-danger font-weight-bold text-uppercase ml-5'>Cancelar</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarRegistro
