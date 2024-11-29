import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate to={'/auth/login'}></Navigate>;
  }
};

export default PrivetRoute;
