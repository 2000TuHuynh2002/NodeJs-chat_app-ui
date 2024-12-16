import { useDispatch } from "react-redux";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";

import { currentConversation } from "@/store/conversation/conversationSlice.ts";

const ConversationsHistory = () => {
  const dispatch = useDispatch();
  
  const handleClick = (friend_id: number) => {
    dispatch(currentConversation({ conversation_id: friend_id, friend: `Friend ${friend_id}` }));
  }

  return (
    <div className="flex flex-col overflow-y-auto h-[calc(100%-10rem)] no-scrollbar mt-[1rem] border-t">
      {Array.from({ length: 15 }).map((_, index) => (
        <div className="flex hover:bg-[#9dc0fa] dark:hover:bg-[#244986] px-[7px] py-[10px] cursor-pointer border-b" onClick={() => handleClick(index)} key={index}>
          <div className="">
            <Avatar className="w-[3.5rem] h-[3.5rem]">
              <AvatarImage src="" />
              <AvatarFallback>{index}</AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-[1rem] h-[5rem] relative">
            <div className="flex justify-between">
              <div className="text-lg font-bold">Friend {index}</div>
              <div className="text-sm mr-0 text-gray-500">12:00 PM</div>
            </div>
            <div className="text-sm text-gray-500 line-clamp-2 text-base leading-relaxed overflow-hidden text-ellipsis">
              Hello from the client Hello from the client Hello from the client Hello from the client Hello from the client Hello from the client Hello from the client Hello from the client Hello from the client
            </div>
          </div>
        </div>
      ))}
    </div>

);
};

export default ConversationsHistory;
