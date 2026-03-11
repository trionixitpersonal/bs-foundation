import { Navigate, useLocation } from 'react-router';
import { isAuthenticated } from '../lib/auth';

function ProtectedRoute({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
