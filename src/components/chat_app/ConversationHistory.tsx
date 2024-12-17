import { useDispatch } from "react-redux";
import { openDB } from "idb";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";

import { currentConversation } from "@/store/slides/conversationSlice";

const db = await openDB("chat_app", 1);
const tx = db.transaction("messages", "readonly");
const store = tx.objectStore("messages");
const allConversations = await store.getAll();

const getFriendInfo = (conversation: any) => {
  return conversation.members.filter(
    (member: { username: string }) => member.username !== "admin"
  )[0];
};

const ConversationsHistory = () => {
  const dispatch = useDispatch();

  const handleClick = (conversation: any) => {
    const user = getFriendInfo(conversation);
    dispatch(
      currentConversation({
        conversation_id: conversation.id,
        friend_username: user.username,
        friend_fullName: `${user.firstName} ${user.lastName}`,
      })
    );
  };

  return (
    <div className="flex flex-col overflow-y-auto h-[calc(100%-10rem)] no-scrollbar mt-[1rem] border-t">
      {allConversations.map((conversation, index) => (
        <div
          className="flex hover:bg-[#9dc0fa] dark:hover:bg-[#244986] px-[7px] py-[10px] cursor-pointer border-b"
          onClick={() => handleClick(conversation)}
          key={index}
        >
          <div className="">
            <Avatar className="w-[3.5rem] h-[3.5rem]">
              <AvatarImage src="" />
              <AvatarFallback>{index}</AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-[1rem] h-[5rem] relative">
            <div className="flex justify-between">
              <div className="text-lg font-bold">
                {
                  getFriendInfo(conversation).firstName +
                    " " +
                  getFriendInfo(conversation).lastName || "Friend"
                }
              </div>
              <div className="text-sm mr-0 text-gray-500">12:00 PM</div>
            </div>
            <div className="text-sm text-gray-500 line-clamp-2 text-base leading-relaxed overflow-hidden text-ellipsis">
              Hello from the client Hello from the client Hello from the client
              Hello from the client Hello from the client Hello from the client
              Hello from the client Hello from the client Hello from the client
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationsHistory;
