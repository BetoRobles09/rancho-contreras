import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <div className='container'>
        <h3><Link to='/inicio' className='text-light'>Rancho Los Contreras</Link></h3>
      </div>
      <Link className='btn btn-info nuevo-post d-block d-md-inline-block' to='/nuevo-registro'>Nuevo Registro &#43;</Link>
    </nav>
  )
}

export default NavBar
