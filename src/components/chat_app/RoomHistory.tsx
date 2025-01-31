import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";

interface RoomHistoryProps {
  allRooms: Array<object>;
  setRoom: any;
}

const RoomsHistory = ({ allRooms, setRoom }: RoomHistoryProps) => {
  const lastMessage = (room: any) => {
    return room.messages[0];
  };

  return (
    <div className="flex flex-col overflow-y-auto h-[calc(100%-10rem)] no-scrollbar mt-[1rem] border-t">
      {allRooms.map((room: any, index: number) =>
        room.messages.length === 0 ? null : (
          <div
            className="flex hover:bg-[#9dc0fa] dark:hover:bg-[#244986] px-[7px] py-[10px] cursor-pointer border-b"
            onClick={() => {
              setRoom(room);
            }}
            key={index}
          >
            <div className="">
              <Avatar className="w-[3.5rem] h-[3.5rem]">
                <AvatarImage src="" />
                <AvatarFallback>{index}</AvatarFallback>
              </Avatar>
            </div>
            <div className="ml-[1rem] h-[5rem] w-full">
              <div className="flex justify-between w-full">
                <div className="text-lg font-bold">
                  {`${room.friend.firstName} ${room.friend.lastName}`}
                </div>
                <div className="text-sm my-auto text-gray-500">
                  {lastMessage(room)?.createdAt
                    ? new Date(lastMessage(room).createdAt).toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        }
                      )
                    : "Not have any message"}
                </div>
              </div>
              <div className="text-sm text-gray-500 line-clamp-2 text-base leading-relaxed overflow-clip text-ellipsis">
                <p className="break-all">{lastMessage(room)?.content}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RoomsHistory;
