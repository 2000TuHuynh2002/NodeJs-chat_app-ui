import { Outlet } from "react-router";

const Container = () => {
  return (
    <div className="xl:mx-[15rem] lg:mx-[10rem] md:mx-[4rem] mx-[0rem] mt-[2rem]">
      <Outlet />
    </div>
  );
};

export default Container;
