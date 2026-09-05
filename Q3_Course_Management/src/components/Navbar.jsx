import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand">CampusHub</NavLink>
        <nav className="nav-links">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/courses" className={navClass}>Courses</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
