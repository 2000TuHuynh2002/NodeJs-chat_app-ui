import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/chat">Dashboard</Link>
    </div>
  );
};

export default Navbar;
