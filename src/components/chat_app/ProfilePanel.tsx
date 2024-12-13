import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";

const ProfilePanel = () => {
  return (
    <>
      <Avatar className="h-[8rem] w-[8rem] ring-4 mx-auto mt-[4rem]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl text-center font-semibold mt-[1rem] tracking-tight">
        User Name
      </h1>
      <p className="text-xl text-center text-slate-500">@username</p>
      <hr className="rounded mt-[2rem]"></hr>
      <p className="text-xl mt-[1rem] ml-[1rem] tracking-tight">Shared Photos</p>
    </>
  );
};

export default ProfilePanel;
