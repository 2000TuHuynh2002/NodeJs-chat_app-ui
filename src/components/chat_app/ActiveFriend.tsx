import { useDispatch } from "react-redux";

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

import { currentConversation } from "@/store/slides/conversationSlice";

const ActiveFriend = () => {
  const dispatch = useDispatch();

  const handleClick = (friend_id: number) => {
    dispatch(currentConversation({ conversation_id: friend_id, friend: `Friend ${friend_id}` }));
  }

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto mt-[1rem]"
    >
      <CarouselContent className={`-ml-3 h-[4rem]`}>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className={`pl-3 my-auto basis-1/6`}>
            <div className="pl-1">
              <Avatar className="w-[3.5rem] h-[3.5rem] ring-[3px] cursor-pointer" onClick={() => handleClick(index)}>
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
