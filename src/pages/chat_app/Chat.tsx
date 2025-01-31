"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ActiveFriend from "@/components/chat_app/ActiveFriend";
import RoomsHistory from "@/components/chat_app/RoomHistory";
import Rooms from "@/components/chat_app/Room";
import SearchBar from "@/components/chat_app/SearchBar";
import ProfilePanel from "@/components/chat_app/ProfilePanel";

import { apiSendMessage } from "@/api/message.api";
import { apiGetRecent } from "@/api/room.api";
import { socket } from "@/contexts/socket.context";
import {
  SET_ROOMS,
  SET_MESSAGES_TO_ROOM,
  ADD_MESSAGE_TO_ROOM,
} from "@/store/slides/roomSlice";

interface Room {
  id: string;
  membersCount: number;
  memberID: Array<string>;
  friend: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
  };
  createdAt: string;
  updatedAt: string;
  messages: Array<{
    senderId: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

const Chat = () => {
  const curr_user = useSelector((state: any) => state.auth.user);
  const allRooms = useSelector((state: any) => state.room.rooms);

  const dispatch = useDispatch();

  const [selectedRoom, setSelectedRoom] = useState(null as Room | null);
  const [messageSend, setMessageSend] = useState("");

  const curr_messages = selectedRoom
    ? allRooms.find((r: Room) => r.id === selectedRoom.id)?.messages
    : [];

  // Request recent conversations every time the page is loaded
  useEffect(() => {
    const fetchConversations = async () => {
      const [status, response] = await apiGetRecent();
      if (status !== 200 && status !== 304) return;
      dispatch(SET_ROOMS(response.data));
      dispatch(
        SET_MESSAGES_TO_ROOM({
          roomId: response.data[0].id,
          messages: response.data[0].messages,
        })
      );
    };
    fetchConversations();
  }, []);

  const handleSendMessage = async (message: string) => {
    if (selectedRoom && message) {
      const newMessage = {
        senderId: curr_user.id,
        recipientId: selectedRoom.friend.id,
        content: message,
        status: "SENT",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setMessageSend("");

      const updatedRooms = allRooms.filter(
        (r: Room) => r.id !== selectedRoom.id
      );
      updatedRooms.unshift(selectedRoom);

      dispatch(SET_ROOMS(updatedRooms));

      dispatch(
        ADD_MESSAGE_TO_ROOM({
          roomId: selectedRoom.id,
          message: newMessage,
        })
      );

      socket.emit("sendMessage", selectedRoom.friend.id, newMessage);
      await apiSendMessage(selectedRoom.id, selectedRoom.friend.id, message);
    }
  };

  useEffect(() => {
    socket.on("receiveMessage", (message: any) => {
      console.log("Received message", message);
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-12 grid-cols-1">
        <div className="xl:col-span-3 border-r-2 border-black dark:border-slate-600 col-span-1 h-[calc(100vh-6.6rem)]">
          <SearchBar allRooms={allRooms} setRoom={setSelectedRoom} />
          <ActiveFriend allRooms={allRooms} setRoom={setSelectedRoom} />
          <RoomsHistory allRooms={allRooms} setRoom={setSelectedRoom} />
        </div>
        {selectedRoom ? (
          <>
            <div className="xl:col-span-6 border-r-2 border-black dark:border-slate-600 xl:block hidden relative">
              <Rooms
                messages={curr_messages}
                messageSend={messageSend}
                setMessageSend={setMessageSend}
                handleSendMessage={handleSendMessage}
              />
            </div>
            <div className="xl:col-span-3 xl:block hidden relative">
              <ProfilePanel friendInfo={selectedRoom.friend} />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Chat;
