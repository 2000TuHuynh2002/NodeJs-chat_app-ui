import React from "react";
import { BsBook } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { navigationMenuTriggerStyle } from "@/components/ui-shadcn/navigation-menu";
import { cn } from "@/lib/shadcn";

const NavbarMenu = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav className={cn("flex items-center", className)} {...props}>
      <Link to="/dashboard" className={cn("", navigationMenuTriggerStyle())}>
        <BsBook className="mr-2" strokeWidth="0.2" />
        Overview
      </Link>
      <Link to="/chat/messages" className={cn("", navigationMenuTriggerStyle())}>
        <FaRegMessage className="mr-2" strokeWidth="0.2" />
        Messages
      </Link>
    </nav>
  );
};

export default NavbarMenu;
