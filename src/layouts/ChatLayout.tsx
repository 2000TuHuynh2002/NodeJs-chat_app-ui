import { Outlet } from "react-router";
import Navbar from "@/components/shared/Navbar";

const ChatLayout = () => {
  return (
    <>
      <Navbar className="border-b" />
      <Outlet />
    </>
  );
};

export default ChatLayout;
