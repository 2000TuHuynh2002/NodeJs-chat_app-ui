import { createContext } from "react";
import { io } from "socket.io-client";


const API_URL = process.env.API_URL || "localhost:3000";

const socket = io(`http://${API_URL}/`);

socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

socket.on("error", (error) => {
  console.error(error);
});

socket.on("message", () => {
  socket.emit("message", "Hello from the client");
});

const SocketContext = createContext(socket);

export {socket, SocketContext};

