import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login, setCurrentPage } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const result = login(email, password);
    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => {
        setCurrentPage("dashboard");
      }, 500);
    } else {
      setError(result.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account?{" "}
          <button
            type="button"
            className="link-button"
            onClick={() => setCurrentPage("register")}
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;