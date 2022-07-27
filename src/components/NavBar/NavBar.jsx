
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav ms-5 p-2">
            <li className="navbar-brand"><img src="images/logoBrand.png" alt="logo brand"/></li>
            <li className="nav-item active"><a className="nav-link" href=" ">INICIO</a></li>
            <li className="nav-item"><a className="nav-link" href=" ">NUESTROS PRODUCTOS</a></li>
            <li className="nav-item"><a className="nav-link" href=" ">CONTACTO</a></li>        
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
          