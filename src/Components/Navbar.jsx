import {Link} from "react-router-dom";
import logo from "../Assets/img/brands/logo-daurtechno.png";

function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3"
        id="mainNav"
      >
        <div class="container">
          <img src={logo} width="100" alt="daur techno" />
          <Link to="/" class="navbar-brand d-flex align-items-center">
            <span>Daur Techno</span>
          </Link>
          <button
            data-bs-toggle="collapse"
            class="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/News" class="nav-link" >
                  News
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Profile" class="nav-link">
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/About" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Contacts" class="nav-link">
                  Contacts
                </Link>
              </li>
            </ul>
            <Link to="/Signup" class="btn btn-primary shadow" role="button">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
