import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav ms-5 p-2">
            <li className="navbar-brand">
              <img src="images/logoBrand.png" alt="logo brand" />
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/almacenamiemto">
                Almacenamiento
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/memoria">
                Memoria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/monitor">
                Monitor
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                CONTACTO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                <CartWidget />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
