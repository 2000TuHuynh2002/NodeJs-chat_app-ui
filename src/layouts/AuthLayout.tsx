import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="h-screen flex">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
