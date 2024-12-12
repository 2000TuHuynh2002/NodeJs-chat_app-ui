import { createContext } from "react";
import { io } from "socket.io-client";

const API_URL = process.env.API_URL || "localhost:3000";

const socket = io(`http://${API_URL}/`);

const SocketContext = createContext(socket);

export { socket, SocketContext };
