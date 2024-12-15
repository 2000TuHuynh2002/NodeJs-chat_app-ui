import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";

const ConversationsHistory = () => {
  return (
    <div className="flex flex-col overflow-y-auto h-[35rem] no-scrollbar mt-[1rem]">
      {Array.from({ length: 15 }).map((_, index) => (
        <div className="flex w-full hover:bg-[#9dc0fa] dark:hover:bg-[#244986] px-[7px] py-[10px] cursor-pointer">
          <div className="ring-2">
            <Avatar className="w-[3.5rem] h-[3.5rem]">
              <AvatarImage src="" />
              <AvatarFallback>{index}</AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-[1rem] relative ring-2">
            <div className="flex justify-between">
              <div className="text-lg font-bold ring-2">Friend {index}</div>
              <div className="text-sm mr-0 text-gray-500 ring-2">12:00 PM</div>
            </div>
            <div className="text-sm text-gray-500 ring-2">
              Hello from the client Hello from the client Hello from the client Hello from the client Hello from the client Hello from the client Hello from the client
            </div>
          </div>
        </div>
      ))}
    </div>

);
};

export default ConversationsHistory;
