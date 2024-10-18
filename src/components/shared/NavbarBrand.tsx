import { Link } from "react-router-dom";
import { cn } from "@/lib/shadcn";

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
      <h2 className="my-auto mx-2 font-semibold">Username</h2>
    </Link>
  );
};

export default NavbarBrand;
