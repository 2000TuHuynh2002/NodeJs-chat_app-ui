import { Outlet } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Navbar from "@/components/shared/Navbar";

import { SocketContext, socket } from "@/contexts/socket.context";

const MainLayout = () => {
  const userId = useSelector((state: any) => state.auth.user.id);
  
  useEffect(() => {
    
    socket.on("connect", () => {
      console.log("Connected to socket");
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
    
    socket.connect();
    socket.emit("userID", userId);

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, [userId]);

  return (
    <SocketContext.Provider value={socket}>
      <Navbar />
      <Outlet />
    </SocketContext.Provider>
  );
};

export default MainLayout;
