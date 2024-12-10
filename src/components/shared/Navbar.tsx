import React from "react";
import NavbarBrand from "@/components/shared/NavbarBrand";
import NavbarMenu from "@/components/shared/NavbarMenu";
import NavbarUserPanel from "@/components/shared/NavbarUserPanel";

const Navbar: React.FC = ({ ...props }) => {
  return (
    <div
      className="dark:bg-[#010409] border-b-2 border-black dark:border-white"
      {...props}
    >
      <div className={`flex h-[3.5rem] items-center`}>
        <NavbarBrand to="/" />
        <NavbarUserPanel src="" className="ml-auto flex space-x-2 mr-2" />
      </div>
      <div className={`h-[3rem]`}>
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;
