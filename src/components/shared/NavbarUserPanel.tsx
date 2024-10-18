import { Link } from "react-router-dom";
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

interface NavbarUserPanelProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: string;
  src?: string;
}

const NavbarBrand = ({
  className,
  spacing,
  src,
  ...props
}: NavbarUserPanelProps) => {
  const menuItems = {
    profile: { label: "Profile", path: "/profile" },
    settings: { label: "Setting", path: "/settings", shortcut: "⇧P" },
    logout: { label: "Logout", path: "#" },
  };

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
          <DropdownMenuContent className={`mr-[${spacing}]`}>
            <DropdownMenuLabel>My username</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.values(menuItems).map((item) => (
              <Link key={item.label} to={item.path}>
                <DropdownMenuItem>
                  {item.label}
                  {"shortcut" in item && (
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavbarBrand;
