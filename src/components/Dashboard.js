import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { apiUsers, apiPosts, loading, fetchUsers, fetchPosts } = useAuth();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    activeUsers: 0,
  });

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, [fetchUsers, fetchPosts]);

  useEffect(() => {
    if (apiUsers.length > 0 && apiPosts.length > 0) {
      setStats({
        totalUsers: apiUsers.length,
        totalPosts: apiPosts.length,
        activeUsers: Math.floor(apiUsers.length * 0.85),
      });
    }
  }, [apiUsers, apiPosts]);

  return (
    <div className="dashboard-main">
      <h2>Dashboard</h2>

      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h4>Total Users</h4>
            <p className="stat-number">{stats.totalUsers}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h4>Total Posts</h4>
            <p className="stat-number">{stats.totalPosts}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h4>Active Users</h4>
            <p className="stat-number">{stats.activeUsers}</p>
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="dashboard-section">
        <h3>Recent Users</h3>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : apiUsers.length > 0 ? (
          <div className="users-grid">
            {apiUsers.slice(0, 6).map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-card-header">
                  <h5>{user.name}</h5>
                  <span className="user-badge">ID: {user.id}</span>
                </div>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No users available</p>
        )}
      </div>

      {/* Posts Grid */}
      <div className="dashboard-section">
        <h3>Recent Posts</h3>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : apiPosts.length > 0 ? (
          <div className="posts-grid">
            {apiPosts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <span className="post-id">Post #{post.id}</span>
                  <span className="post-user">by User {post.userId}</span>
                </div>
                <h5 className="post-title">{post.title}</h5>
                <p className="post-body">{post.body.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;