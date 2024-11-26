import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen flex">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
