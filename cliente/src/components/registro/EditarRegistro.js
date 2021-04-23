import { Link } from 'react-router-dom'

const EditarRegistro = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Editar registro</h2>
            <form>
              <div className='form-group'>
                <label>Nombre</label>
                <input type='text' className='form-control' name='nombre' />
              </div>
              <div className='form-group'>
                <label>Raza</label>
                <input type='text' className='form-control' name='raza' />
              </div>
              <div className='form-group'>
                <label>Capa</label>
                <input type='text' className='form-control' name='capa' />
              </div>
              <div className='form-group'>
                <label>Padre</label>
                <input type='text' className='form-control' name='padre' />
              </div>
              <div className='form-group'>
                <label>Madre</label>
                <input type='text' className='form-control' name='madre' />
              </div>
              <div className='form-group'>
                <label>Fecha de nacimiento</label>
                <input type='date' className='form-control' name='fecha' />
              </div>
              <div className='form-group'>
                <label>Descripción</label>
                <textarea className='form-control' name='descripcion' rows='5' />
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
