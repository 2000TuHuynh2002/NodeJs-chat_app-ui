import React from "react";
import NavbarBrand from "@/components/shared/NavbarBrand";
import NavbarMenu from "@/components/shared/NavbarMenu";
import NavbarUserPanel from "@/components/shared/NavbarUserPanel";
import { cn } from "@/lib/shadcn/shadcn";

const Navbar = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className={cn("", className)} {...props}>
      <div className={`flex h-[3.5rem] items-center`}>
        <NavbarBrand to="/" className="h-10 w-10 ml-2" />
        <NavbarUserPanel src="" className="ml-auto flex space-x-2 mr-2"/>
      </div>
      <div className={`h-[3rem]`}>
        <NavbarMenu className="h-full" />
      </div>
    </div>
  );
};

export default Navbar;
