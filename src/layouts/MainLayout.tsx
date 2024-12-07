import { Outlet } from "react-router";
import Navbar from "@/components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar className="border-b" />
      <div className="container mt-[2rem]">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
