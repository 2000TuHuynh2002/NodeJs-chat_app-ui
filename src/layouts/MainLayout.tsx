import { Outlet } from "react-router";
import Navbar from "@/components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar className="border-b" />
      <Outlet />
    </>
  );
};

export default MainLayout;
