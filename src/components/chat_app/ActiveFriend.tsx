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
import { Card, CardContent } from "@/components/ui-shadcn/card"
const ActiveFriend = () => {
  const height = "5rem";
  const spacing = 6;
  const concurrent = 5;

  return (
    <>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[75%] mx-auto mt-[1rem] ring-2"
    >
      <CarouselContent className="-ml-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 basis-1/5">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  );
};

export default ActiveFriend;
