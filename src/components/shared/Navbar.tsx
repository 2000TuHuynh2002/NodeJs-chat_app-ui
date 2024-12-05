import React from "react";
import NavbarBrand from "@/components/shared/NavbarBrand";
import NavbarMenu from "@/components/shared/NavbarMenu";
import NavbarUserPanel from "@/components/shared/NavbarUserPanel";
import { cn } from "@/lib/shadcn/shadcn";

const Navbar = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const side_spacing = "1rem";
  return (
    <div className={cn("", className)} {...props}>
      <div className={`flex h-[3.5rem] items-center px-[${side_spacing}]`}>
        <NavbarBrand to="/" className="h-10 w-10" />
        <NavbarUserPanel src="" className="ml-auto flex space-x-2" spacing={side_spacing} />
      </div>
      <div className={`h-[3rem] px-[${side_spacing}]`}>
        <NavbarMenu className="h-full space-x-2" />
      </div>
    </div>
  );
};

export default Navbar;
