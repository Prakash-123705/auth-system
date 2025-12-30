import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const { isLoggedIn, currentPage } = useAuth();

  // Show Login/Register pages
  if (!isLoggedIn) {
    return (
      <div className="auth-pages">
        {currentPage === "login" && <Login />}
        {currentPage === "register" && <Register />}
      </div>
    );
  }

  // Show Dashboard/Profile pages with layout
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "profile" && <Profile />}
        </main>
      </div>
    </div>
  );
}

export default App;