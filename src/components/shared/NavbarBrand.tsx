import React from "react";
import { Link } from "react-router";
import { cn } from "@/lib/shadcn/shadcn";

interface NavbarBrandProps extends React.HTMLAttributes<HTMLElement> {
  to: string;
}

const NavbarBrand = ({ className, to, ...props }: NavbarBrandProps) => {
  return (
    <Link to={to || "#"} className="flex">
      <img
        src="/react.svg"
        alt="Logo"
        className={cn("h-8 w-8", className)}
        {...props}
      />
    </Link>
  );
};

export default NavbarBrand;
