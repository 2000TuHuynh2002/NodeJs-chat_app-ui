import {
  Card,
} from "@/components/ui-shadcn/card";
const Profile = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Card className="h-dvh">
            <div className="flex justify-center">
              <img
                src="https://github.com/shadcn.png"
                alt="profile"
                className="mt-[2rem] h-[20rem] h-[20rem] rounded-full"
              />
            </div>
          </Card>
        </div>
        <div className="col-span-8">
          <Card className="h-dvh">
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
