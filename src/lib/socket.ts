import { io } from "socket.io-client";

const API_URL = process.env.API_URL || "localhost:3000";

const socket = io(`http://${API_URL}/`, {
  autoConnect: false,
});

export default socket;
