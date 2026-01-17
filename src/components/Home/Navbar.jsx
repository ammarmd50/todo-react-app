import { Link } from "react-router-dom";

function Navbar({ auth }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">TodoApp</div>

      <div className="nav-links">
        <Link className="active" to="/">
          Home
        </Link>
        {auth ? (
          ""
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
