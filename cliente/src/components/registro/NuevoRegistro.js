import React, { useState, useContext } from 'react'
import caballoContext from '../../context/caballos/caballoContext'

const NuevoRegistro = () => {
  const caballosContext = useContext(caballoContext)
  const { agregarCaballo } = caballosContext

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

  const onChange = e => {
    setCaballo({
      ...caballo,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    // Validar el proyecto
    if(nombre === '' || raza === '' || capa === '' || padre === '' || madre === '' || fechaNacimiento === '' || descripcion === '') {
      return
    }
    // agregar al state
    agregarCaballo(caballo)
    // Reiniciar el form
    setCaballo({
      nombre: '',
      raza: '',
      capa: '',
      padre: '',
      madre: '',
      fechaNacimiento: '',
      descripcion: ''
    })
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Agregar un nuevo registro</h2>
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
                <input type='file' className='form-control-file' name='foto' aria-describedby='fileHelp' />
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
