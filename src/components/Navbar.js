import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout, setCurrentPage } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h3 onClick={() => setCurrentPage("dashboard")} style={{ cursor: "pointer" }}>
            📊 Dashboard
          </h3>
        </div>
        <div className="navbar-user">
          {user && (
            <>
              <span className="user-name">Welcome, {user.name}</span>
              <button className="btn-logout" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
