import { Outlet } from "react-router";
import Navbar from "@/components/shared/Navbar";
import { SocketContext, socket } from "@/contexts/socket.context";

const MainLayout = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Navbar />
      <Outlet />
    </SocketContext.Provider>
  );
};

export default MainLayout;
