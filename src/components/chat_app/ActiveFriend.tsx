import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui-shadcn/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui-shadcn/carousel";

const ActiveFriend = () => {
  const concurent = 4;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[18rem] mx-auto mt-[1rem]"
    >
      <CarouselContent className={`-ml-${concurent + 1} h-[4rem] `}>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className={`my-auto pl-${concurent + 1} basis-1/${concurent}`}
          >
            <div className="pl-2">
              <Avatar className="w-[3.5rem] h-[3.5rem] ring-[3px]">
                <AvatarImage src="" />
                <AvatarFallback>{index}</AvatarFallback>
              </Avatar>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ActiveFriend;
