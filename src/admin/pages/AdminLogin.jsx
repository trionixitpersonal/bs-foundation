import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { login, isAuthenticated } from '../lib/auth';

function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (isAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(username.trim(), password);
    if (!result.ok) {
      setError(result.message);
      return;
    }

    const next = location.state?.from || '/admin';
    navigate(next, { replace: true });
  };

  return (
    <div className="admin-login-page">
      <form className="admin-card" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <p>Secure access for CMS and content management.</p>

        <label htmlFor="admin-username">Username</label>
        <input
          id="admin-username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="admin-password">Password</label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error ? <p className="admin-error">{error}</p> : null}

        <button className="admin-btn" type="submit">
          Sign In
        </button>
        <small>Default local login: admin / Admin@123</small>
      </form>
    </div>
  );
}

export default AdminLogin;
