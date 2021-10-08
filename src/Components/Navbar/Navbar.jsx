import React from "react";
import "./Navbar.css";


export default function Navbar() {
  return (
    <>
      <div>
        <nav class="navbar navbar-light bg-#2C7F5C">
          <a class="navbar-brand" href="#">
            <p className="topbar">Get your Cannaby product by Black Friday. {" "}<a href="#" className="topbarhr"> Holiday Shipping Deaadlines</a></p>

          </a>
        </nav>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-align-center test">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <i class="fas fa-cannabis"></i>
            <a className="navbar-brand" href="#">
              This is Header
            </a>
          </div>
          <a className="navbar-brand" href="#"><i class="fas fa-cannabis"></i>
            Cannaby
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brands
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}







// const Navbar = () => {



//     {/* Navlink uses [ to ] to route to page click */}
//     {/* use exact in order to match same component */}

//     return (
//         <p>hello to nav bar v3</p>
        
//     )
// }

// export default Navbar;
