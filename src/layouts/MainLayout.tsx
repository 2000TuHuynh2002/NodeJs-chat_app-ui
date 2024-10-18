import { Outlet } from "react-router-dom";
import Navbar from "@/components/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar className="border-b" />
      <Outlet />
    </div>
  );
};

export default MainLayout;
