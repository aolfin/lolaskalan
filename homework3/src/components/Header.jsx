import { NavLink } from 'react-router-dom';

function Header({ cartCount, onCartToggle }) {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-warning sticky-top shadow-sm navbar-orange">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white d-flex align-items-center gap-2" to="/">
          <img src="https://files.idyllic.app/files/static/100504?width=80&optimizer=image" alt="Lola's Kalan Logo" style={{ height: '40px', width: 'auto' }} />
          Lola's Kalan Bistro
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item ms-3">
              <button type="button" className="btn btn-dark position-relative cart-toggle" onClick={onCartToggle}>
                <span role="img" aria-label="cart">
                  🛒
                </span>
                <span className="badge bg-warning text-dark position-absolute top-0 start-100 translate-middle rounded-pill">
                  {cartCount}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
