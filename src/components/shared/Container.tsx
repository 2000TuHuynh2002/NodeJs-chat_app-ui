import { Outlet } from "react-router";

const Container = () => {
  return (
    <div className="container mt-[2rem]">
      <Outlet />
    </div>
  );
};

export default Container;
