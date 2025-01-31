"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ActiveFriend from "@/components/chat_app/ActiveFriend";
import ConversationsHistory from "@/components/chat_app/RoomHistory";
import Conversations from "@/components/chat_app/Room";
import SearchBar from "@/components/chat_app/SearchBar";
import ProfilePanel from "@/components/chat_app/ProfilePanel";

import { apiGetMessagesByRoomId } from "@/api/message.api";
import { apiSendMessage } from "@/api/message.api";
import { apiGetRecent } from "@/api/room.api";
import { socket } from "@/contexts/socket.context";
import { SET_ROOMS, SET_MESSAGES_TO_ROOM } from "@/store/slides/roomSlice";

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
  const roomsMessages = useSelector((state: any) => state.room.roomsMessages);

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([] as Array<object>);
  const [messageSend, setMessageSend] = useState("");
  const [room, setRoom] = useState(null as Room | null);

  const handleSendMessage = async (message: string) => {
    if (room && message) {
      const newMessage = {
        senderId: curr_user.id,
        recipientId: room.friend.id,
        content: message,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setMessageSend("");
      setMessages([newMessage, ...messages]);
      dispatch(
        SET_MESSAGES_TO_ROOM({
          roomId: room.id,
          messages: [newMessage, ...messages],
        })
      );

      const updatedRooms = allRooms.filter((r: Room) => r.id !== room.id);
      updatedRooms.unshift({ ...room, messages: [newMessage] });

      dispatch(SET_ROOMS(updatedRooms));

      setRoom({ ...room, messages: [newMessage] });
      socket.emit("sendMessage", room.friend.id, newMessage);
      await apiSendMessage(room.id, room.friend.id, message);
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

  // Request recent conversations every time the page is loaded
  useEffect(() => {
    const fetchConversations = async () => {
      const [status, response] = await apiGetRecent();
      if (status !== 200 && status !== 304) return;
      dispatch(SET_ROOMS(response.data));
    };
    fetchConversations();
  }, []);

  // Fetch messages when loading a conversation
  useEffect(() => {
    if (!room) {
      return;
    }

    const fetchMessages = async () => {
      if (!roomsMessages[room.id]) {
        const [status, response] = await apiGetMessagesByRoomId(room.id);
        if (status !== 200 && status !== 304) return;
        dispatch(
          SET_MESSAGES_TO_ROOM({ roomId: room.id, messages: response.data })
        );
        setMessages(response.data);
      }
    };
    fetchMessages();
    setMessages(roomsMessages[room.id]);
    setMessageSend("");
  }, [room]);

  return (
    <>
      <div className="grid xl:grid-cols-12 grid-cols-1">
        <div className="xl:col-span-3 border-r-2 border-black dark:border-slate-600 col-span-1 h-[calc(100vh-6.6rem)]">
          <SearchBar allRooms={allRooms} setRoom={setRoom} />
          <ActiveFriend allRooms={allRooms} setRoom={setRoom} />
          <ConversationsHistory allRooms={allRooms} setRoom={setRoom} />
        </div>
        {room ? (
          <>
            <div className="xl:col-span-6 border-r-2 border-black dark:border-slate-600 xl:block hidden relative">
              <Conversations
                messages={messages}
                messageSend={messageSend}
                setMessageSend={setMessageSend}
                handleSendMessage={handleSendMessage}
              />
            </div>
            <div className="xl:col-span-3 xl:block hidden relative">
              <ProfilePanel friendInfo={room.friend} />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Chat;
