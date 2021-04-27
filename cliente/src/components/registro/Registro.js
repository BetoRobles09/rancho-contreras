import { useContext} from 'react'
import caballoContext from '../../context/caballos/caballoContext'
import img from '../../img/51253934_10156997144684710_4766564450381594624_n.jpg'
import Swal from 'sweetalert2'

const Registro = ({caballo}) => {
  // Extrar proyectos de state inicial
  const caballosContext = useContext(caballoContext);
  const { eliminarCaballo } = caballosContext;
  // Array destructuring para extraer el proyecto actual
  const caballoActual  =  caballo;
  // Elimina un proyecto
  const onClickEliminar = () => {
    Swal.fire({
      title: '¿Seguro que deseas eliminar?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo'
    }).then((res) => {
      if (res.isConfirmed) {
        eliminarCaballo(caballoActual._id)
      }
    })
  }

  const { nombre, raza, capa, madre, padre, descripcion, fecha } = caballo

  return (
  <div className='card mb-3' style={{ max_width: '540px' }}>
    <div className='row g-0'>
      <div className='col-md-4'>
        <img src={img} className='img-fluid img-thumbnail' alt='...' />
      </div>
      <div className='col-md-8'>
        <div className='card-body'>
          <h3 className='card-title'>{nombre}</h3>
          <div className="row">
            <h5 className='card-title col-md-2'>Raza:</h5>
            <p className='card-text col-md-10 text-muted'>{raza}</p>
          </div>
          <div className="row">
            <h5 className='card-title col-md-2'>Capa:</h5>
            <p className='card-text col-md-10 text-muted'>{capa}</p>
          </div>
          <div className="row">
            <h5 className='card-title col-md-2'>Madre:</h5>
            <p className='card-text col-md-10 text-muted'>{madre}</p>
          </div>
          <div className="row">
            <h5 className='card-title col-md-2'>Padre:</h5>
            <p className='card-text col-md-10 text-muted'>{padre}</p>
          </div>
          <h5 className='card-title'>Descripción:</h5>
          <p className='card-text'>{descripcion}</p>
          <p className='card-text'><small className='text-muted'>{fecha}</small></p>
          <div className='d-flex justify-content-between'>
            <button type='button' className='btn btn-primary btn-sm col-md-4'>Editar</button>
            <button type='button' className='btn btn-danger btn-sm col-md-4' onClick={onClickEliminar}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Registro
