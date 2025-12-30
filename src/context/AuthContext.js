import React, { createContext, useState, useCallback } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [apiUsers, setApiUsers] = useState([]);
  const [apiPosts, setApiPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users from JSONPlaceholder API
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setApiUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch posts from JSONPlaceholder API
  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setApiPosts(data.slice(0, 12)); // Limit to 12 posts
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const register = (name, email, password) => {
    if (!name || !email || !password) {
      return { success: false, message: "All fields are required" };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, message: "Invalid email format" };
    }

    if (password.length < 6) {
      return { success: false, message: "Password must be at least 6 characters" };
    }

    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    return { success: true, message: "Registration successful" };
  };

  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, message: "Email and password are required" };
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      return { success: false, message: "No user found. Please register first." };
    }

    if (storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      setIsLoggedIn(true);
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage("login");
    localStorage.removeItem("user");
  };

  const value = {
    user,
    isLoggedIn,
    currentPage,
    setCurrentPage,
    apiUsers,
    apiPosts,
    loading,
    register,
    login,
    logout,
    fetchUsers,
    fetchPosts,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
