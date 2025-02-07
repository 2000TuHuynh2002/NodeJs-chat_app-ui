import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui-shadcn/dropdown-menu";
import { ModeToggle } from "@/components/ui-shadcn/mode-toggle";

import { cn } from "@/lib/shadcn";

import { BsBook } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

import { LOGOUT } from "@/store/slides/authSlice";
import { CLEAR_ROOMS } from "@/store/slides/roomSlice";
import { apiLogout } from "@/api/auth.api";

const Navbar: React.FC = ({ ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const curr_user = useSelector((state: any) => state.auth.user);

  const pathDict = {
    dashboard: { name: "Dashboard", path: "/dashboard", icon: BsBook },
    messages: { name: "Messages", path: "/chat/messages", icon: FaRegMessage },
  };

  const currentPath = useLocation().pathname;

  const isActive = (path: string) => path === currentPath;

  const handleLogout = async () => {
    await apiLogout();
    dispatch(LOGOUT());
    dispatch(CLEAR_ROOMS());
    navigate("/auth/login");
  };

  return (
    <div
      className="dark:bg-[#010409] border-b-2 border-black dark:border-slate-600"
      {...props}
    >
      <div className={`flex h-[3.5rem] items-center`}>
        <Link to="/" className="flex">
          <img src="/react.svg" alt="Logo" className="h-8 ml-2" {...props} />
          <h1 className="ml-4 mt-2 text-xl font-semibold font-serif">
            {`${curr_user.firstName} ${curr_user.lastName}`}
          </h1>
        </Link>
        <div className="ml-auto flex space-x-2 mr-2">
          <div className="my-auto">
            <ModeToggle />
          </div>
          <div className="my-auto">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-[0.5rem] mr-[0.5rem] w-[16rem]">
                <DropdownMenuLabel>{curr_user.username}</DropdownMenuLabel>
                <p className="ml-2 text-sm text-slate-500 truncate">
                  {`${curr_user.firstName} ${curr_user.lastName}`}
                </p>
                <DropdownMenuSeparator />
                <Link key="Profile" to="/profile">
                  <DropdownMenuItem>
                    <FaRegCircleUser className="mr-2" />
                    Profile
                  </DropdownMenuItem>
                </Link>
                <Link key="Settings" to="/settings">
                  <DropdownMenuItem>
                    <FiSettings className="mr-2" />
                    Settings
                    <DropdownMenuShortcut>"⇧P"</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={handleLogout}>
                  <TbLogout className="mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className={`h-[3rem]`}>
        <nav className="flex items-center h-full">
          {Object.entries(pathDict).map(([key, item]) => (
            <Link
              key={key}
              to={item.path}
              className={cn(
                "bg-inherit group inline-flex h-full items-center border-b-4 border-transparent justify-center px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive(item.path) && "border-b-4 border-blue-700"
              )}
            >
              <item.icon className="mr-2" strokeWidth="0.2" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
