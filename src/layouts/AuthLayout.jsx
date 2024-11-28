import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      Auth Layouts
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
