import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui-shadcn/carousel";

interface ActiveFriendProps {
  allRooms: Array<object>;
  setRoom: any;
}

const ActiveFriend = ({ allRooms, setRoom }: ActiveFriendProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto mt-[1rem]"
    >
      <CarouselContent className={`-ml-3 h-[4rem]`}>
        {allRooms.map((room: any, index: number) => (
          <CarouselItem key={index} className={`pl-3 my-auto basis-1/6`}>
            <div className="pl-1">
              <Avatar
                className="w-[3.5rem] h-[3.5rem] ring-[3px] cursor-pointer"
                onClick={() => setRoom(room)}
              >
                <AvatarImage src="" />
                <AvatarFallback>{index}</AvatarFallback>
              </Avatar>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ActiveFriend;
