import { io } from "socket.io-client";

const API_URL = process.env.API_URL || "localhost:3000";

const socket = io(`http://${API_URL}/`);

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("sendMessage", (message: any) => {
  console.log(message);
});

export default socket;
