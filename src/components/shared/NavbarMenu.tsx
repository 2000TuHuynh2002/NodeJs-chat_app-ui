import React from "react";
import { BsBook } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router";
import { cn } from "@/lib/shadcn/shadcn";

const NavbarMenu = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const isActive = (path: string) => location.pathname === path;

  const pathDict = {
    dashboard: { name: "Dashboard", path: "/dashboard", icon: BsBook },
    messages: { name: "Messages", path: "/chat/messages", icon: FaRegMessage },
  };

  return (
    <nav className={cn("flex items-center", className)} {...props}>
      {Object.entries(pathDict).map(([key, { name, path, icon: Icon }]) => (
        <Link
          key={key}
          to={path}
          className={cn(
            "bg-inherit group inline-flex h-full items-center border-b-2 border-transparent justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
            isActive(path) && "border-b-2 border-blue-500"
          )}
        >
          <Icon className="mr-2" strokeWidth="0.2" />
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarMenu;
