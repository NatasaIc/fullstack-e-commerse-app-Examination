import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  // Extracting 'userInfo' from the Redux store using 'useSelector'
  const { userInfo } = useSelector((state) => state.auth);
  // Conditional rendering based on the presence of user information in the Redux store
  // Rendering the child components (Outlet) if user information is available
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
  //'Navigate' if user information is not available
};

export default PrivateRoute;
