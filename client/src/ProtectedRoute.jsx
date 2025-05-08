import { Navigate } from 'react-router-dom';

function ProtectedRoute ({ children }) {
  console.log("protected route got called");
  const token = localStorage.getItem("access_token"); 
  console.log("token from the protected route = ",token);
  if (!token) {
    alert("you are not logged in!")
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
