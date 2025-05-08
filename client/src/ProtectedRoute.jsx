import { Navigate } from 'react-router-dom';

function ProtectedRoute ({ children }) {
  const token = localStorage.getItem("token"); 
  if (!token) {
    alert("you are not logged in!")
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
