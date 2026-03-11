import { Navigate, Route, Routes } from 'react-router';
import './admin.css';
import AdminShell from './components/AdminShell';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLogin from './pages/AdminLogin';
import DashboardHome from './pages/DashboardHome';
import CmsEditor from './pages/CmsEditor';
import BlogManager from './pages/BlogManager';
import ServicesManager from './pages/ServicesManager';

function AdminApp() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminShell>
              <Routes>
                <Route path="/admin" element={<DashboardHome />} />
                <Route path="/admin/cms/:section" element={<CmsEditor />} />
                <Route path="/admin/blog" element={<BlogManager />} />
                <Route path="/admin/services" element={<ServicesManager />} />
                <Route path="*" element={<Navigate to="/admin" replace />} />
              </Routes>
            </AdminShell>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AdminApp;
