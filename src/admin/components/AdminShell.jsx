import { NavLink, useNavigate } from 'react-router';
import { logout, getSession } from '../lib/auth';

function AdminShell({ children }) {
  const navigate = useNavigate();
  const session = getSession();

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <p className="admin-user">Signed in as {session?.username || 'admin'}</p>
        <nav className="admin-nav">
          <NavLink to="/admin">Dashboard</NavLink>
          <NavLink to="/admin/cms/home">CMS - Home</NavLink>
          <NavLink to="/admin/cms/about">CMS - About</NavLink>
          <NavLink to="/admin/cms/contact">CMS - Contact</NavLink>
          <NavLink to="/admin/cms/footer">CMS - Footer</NavLink>
          <NavLink to="/admin/blog">Blog Engine</NavLink>
          <NavLink to="/admin/services">Services Manager</NavLink>
        </nav>
        <button className="admin-btn danger" onClick={handleLogout} type="button">
          Logout
        </button>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}

export default AdminShell;
