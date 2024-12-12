import { useContext } from "react";

import { Input } from "@/components/ui-shadcn/input";
import { IoIosSend } from "react-icons/io";
import { FaPaperclip } from "react-icons/fa6";

import { SocketContext } from "@/contexts/socket.context";

const Conversations = () => {
  const socket = useContext(SocketContext);

  const sendMessage = () => {
    socket.emit("message", "Hello from the client");
  };

  return (
    <>
      {/* Message input */}
      <Input
        placeholder="Type a message"
        className="absolute bottom-0 rounded-none h-[3rem]"
      />
      {/* File input */}
      <label
        htmlFor="image_attach"
        className="absolute bottom-[0.25rem] right-[3rem]"
      >
        <FaPaperclip className="w-[2.5rem] h-[2.5rem] p-[0.6rem] rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer" />
        <Input id="image_attach" type="file" className="hidden" />
      </label>
      {/* Send button */}
      <button
        className="absolute bottom-[0.25rem] right-[0.5rem] rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer"
        onClick={sendMessage}
      >
        <IoIosSend className="w-[2.5rem] h-[2.5rem] p-2" />
      </button>
    </>
  );
};

export default Conversations;
