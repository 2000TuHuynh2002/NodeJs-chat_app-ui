import React from "react";
import { useLocation } from "react-router";
import { BsBook } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router";
import { cn } from "@/lib/shadcn/shadcn";

const NavbarMenu: React.FC = () => {
  const pathDict = {
    dashboard: { name: "Dashboard", path: "/dashboard", icon: BsBook },
    messages: { name: "Messages", path: "/chat/messages", icon: FaRegMessage },
  };

  const currentPath = useLocation().pathname;

  const isActive = (path: any) => path === currentPath;

  return (
    <nav className="flex items-center h-full">
      {Object.entries(pathDict).map(([key, item]) => (
        <Link
          key={key}
          to={item.path}
          className={cn(
            "bg-inherit group inline-flex h-full items-center border-b-2 border-transparent justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
            isActive(item.path) && "border-b-2 border-blue-500"
          )}
        >
          <item.icon className="mr-2" strokeWidth="0.2" />
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarMenu;
