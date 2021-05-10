import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import caballoContext from '../../context/caballos/caballoContext'
import alertaContext from '../../context/alertas/alertaContext'

const NuevoRegistro = () => {
  const caballosContext = useContext(caballoContext)
  const alertasContext = useContext(alertaContext)

  const { alerta, mostrarAlerta } = alertasContext
  const { agregarCaballo } = caballosContext

  const [caballo, setCaballo] = useState({
    nombre: '',
    raza: '',
    capa: '',
    padre: '',
    madre: '',
    fechaNacimiento: '',
    descripcion: 'Descripcion',
    imageURL: ''
  });

  const { nombre, raza, capa, padre, madre, fechaNacimiento, descripcion, imageURL } = caballo

  const onChange = e => {
    setCaballo({
      ...caballo,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    if(nombre === '' || raza === '' || capa === '' || padre === '' || madre === '' || fechaNacimiento === '' || descripcion === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alert alert-danger')
      return
    }
    agregarCaballo(caballo)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El registro se creó correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    setCaballo({
      nombre: '',
      raza: '',
      capa: '',
      padre: '',
      madre: '',
      fechaNacimiento: '',
      descripcion: '',
      imageURL: ''
    })
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Agregar un nuevo registro</h2>
            { alerta ? ( <div className={`${alerta.categoria}`}> {alerta.msg} </div> )  : null }
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Nombre del caballo' name='nombre' value={nombre} onChange={onChange} />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Raza del caballo' name='raza' value={raza} onChange={onChange} />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Capa del caballo' name='capa' value={capa} onChange={onChange} />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Padre del caballo' name='padre' value={padre} onChange={onChange} />
              </div>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Madre del caballo' name='madre' value={madre} onChange={onChange} />
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
                <input type='file' className='form-control-file' name='imageURL' value={imageURL} onChange={onChange} aria-describedby='fileHelp' />
                <small id='fileHelp' className='form-text text-muted'>Selecciona una foto del caballo</small>
              </div>
              <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoRegistro
