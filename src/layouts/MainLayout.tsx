import { Outlet } from "react-router";
import Navbar from "@/components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar className="border-b" />
      <div className="xl:mx-[15rem] lg:mx-[10rem] md:mx-[4rem] mx-[0rem] mt-[2rem]">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
