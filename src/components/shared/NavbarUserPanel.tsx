import React from "react";
import { Link, useNavigate } from "react-router";
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

import { FaRegCircleUser } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

import { ModeToggle } from "@/components/ui-shadcn/mode-toggle";
import { logout } from "@/store/auth/authSlice";
import { apiLogout } from "@/utils/axios.utils";

interface NavbarUserPanelProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
}

const NavbarBrand = ({
  className,
  src,
  ...props
}: NavbarUserPanelProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const [status, response] = await apiLogout();
    if (status === 200) {
      dispatch(logout());
      navigate("/auth/login");
    } else {
      console.error(response.error);
    }
  };

  const username = useSelector((state: any) => state.auth.user.username);

  const userFistName = useSelector((state: any) => state.auth.user.firstName);
  const userLastName = useSelector((state: any) => state.auth.user.lastName);
  const userFullName = `${userFistName} ${userLastName}`;

  return (
    <div className={className} {...props}>
      <div className="my-auto">
        <ModeToggle />
      </div>
      <div className="my-auto">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={src || "https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-[0.5rem] mr-[0.5rem] w-[16rem]">
            <DropdownMenuLabel>{username}</DropdownMenuLabel>
            <p className="ml-2 text-sm text-slate-500 truncate">
              {userFullName}
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
  );
};

export default NavbarBrand;
