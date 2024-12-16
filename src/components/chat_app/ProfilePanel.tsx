import { useSelector } from "react-redux";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";

const ProfilePanel = () => {
  const friendName = useSelector((state: any) => state.conversation.friend);
  const friendId = useSelector((state: any) => state.conversation.id);

  return (
    <>
      <Avatar className="h-[6rem] w-[6rem] ring-4 mx-auto mt-[4rem]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl text-center font-semibold mt-[1rem] tracking-tight">
        {friendName}
      </h1>
      <p className="text-xl text-center text-slate-500">@friend{friendId}</p>
      <hr className="rounded mt-[2rem]"></hr>
      <p className="text-lg font-semibold mt-[1rem] ml-[1rem] tracking-tight">Shared Photos</p>
    </>
  );
};

export default ProfilePanel;
