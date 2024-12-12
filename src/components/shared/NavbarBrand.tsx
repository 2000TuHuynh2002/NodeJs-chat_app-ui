import { Link } from "react-router";
import { useSelector } from "react-redux";

interface NavbarBrandProps {
  to: string;
}

const NavbarBrand = ({ to, ...props }: NavbarBrandProps) => {
  const userFirstName = useSelector((state: any) => state.auth.user.firstName);
  const userLastName = useSelector((state: any) => state.auth.user.lastName);
  const userFullName = `${userFirstName} ${userLastName}`;

  return (
    <Link to={to || "#"} className="flex">
      <img src="/react.svg" alt="Logo" className="h-8 ml-2" {...props} />
      <h1 className="ml-4 mt-2 text-xl font-semibold font-serif">
        {userFullName}
      </h1>
    </Link>
  );
};

export default NavbarBrand;
