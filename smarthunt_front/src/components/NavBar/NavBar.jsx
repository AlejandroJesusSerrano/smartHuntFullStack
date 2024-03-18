import ButtonUser from "../ButtonUser/ButtonUser"

export const NavBar = () => {
  return (
    <nav className="navbar nav-underline navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid p-0">
        <a className="navbar-brand p-0 m-0" href="#">
          <img src="./logo.png" alt="SMART HUNT LOGO" width="166" height="45.03" className="ms-3"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mx-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-primary" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Consultas</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cargar Equipamiento
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Computadoras</a></li>
                <li><a className="dropdown-item" href="#">Monitores</a></li>
                <li><a className="dropdown-item" href="#">Impresoras & Scanners</a></li>
                <li><a className="dropdown-item" href="#">Perifericos</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Dependecias</a></li>
                <li><a className="dropdown-item" href="#">Oficinas</a></li>
                <li><a className="dropdown-item" href="#">Empleados</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cargas Base
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Marcas</a></li>
                <li><a className="dropdown-item" href="#">Tipos de Dispositivo</a></li>
                <li><a className="dropdown-item" href="#">Modelos</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Tecnicos</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Provincias</a></li>
                <li><a className="dropdown-item" href="#">Localidades</a></li>
                <li><a className="dropdown-item" href="#">Edificios</a></li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
        <div className='mx-5'>
          <ButtonUser/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
