import { createContext } from "react";

import socket from "@/lib/socket";

const SocketContext = createContext(socket);

export { socket, SocketContext };
