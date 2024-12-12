import { useSelector } from "react-redux";

import { Button } from "@/components/ui-shadcn/button";
import { Card, CardTitle } from "@/components/ui-shadcn/card";

import { HiOutlineUsers } from "react-icons/hi2";

const Profile = () => {
  const user = useSelector((state: any) => state.auth.user);
  const userFullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <div className="grid grid-cols-12 gap-[1.5rem]">
        <div className="col-span-3">
          <div className="flex justify-center">
            <img
              src="https://github.com/shadcn.png"
              alt="profile"
              className="mt-[2rem] w-full rounded-full ring-4 ring-primary-500"
            />
          </div>
          <div className="mt-[2rem]">
            <CardTitle className="text-2xl">{userFullName}</CardTitle>
            <p className="text-xl text-slate-500">{user.username}</p>
            <Button className="w-full mt-[1.5rem]">Edit Profile</Button>
            <div className="mt-[0.5rem]">
              <HiOutlineUsers className="inline-block mb-1" />
              <p className="inline-block">
                <span className="font-semibold">&nbsp;2&nbsp;</span>
                friends
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          <Card className="h-[600px] ring-1 ring-slate-500"></Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
