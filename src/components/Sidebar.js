import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { currentPage, setCurrentPage } = useAuth();

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <button
            className={`sidebar-link ${currentPage === "dashboard" ? "active" : ""}`}
            onClick={() => setCurrentPage("dashboard")}
          >
            📊 Dashboard
          </button>
        </li>
        <li>
          <button
            className={`sidebar-link ${currentPage === "profile" ? "active" : ""}`}
            onClick={() => setCurrentPage("profile")}
          >
            👤 Profile
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
