import { Link } from "react-router";

interface NavbarBrandProps {
  to: string;
}

const NavbarBrand = ({ to, ...props }: NavbarBrandProps) => {
  return (
    <Link to={to || "#"} className="flex">
      <img src="/react.svg" alt="Logo" className="h-8 ml-2" {...props} />
    </Link>
  );
};

export default NavbarBrand;
