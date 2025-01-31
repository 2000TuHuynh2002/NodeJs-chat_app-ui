"use client";

import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui-shadcn/form";
import { Input } from "@/components/ui-shadcn/input";
import { Toaster } from "@/components/ui-shadcn/sonner";

import { FaSearch } from "react-icons/fa";

import { apiCreateRoom } from "@/api/room.api";
import { apiFindByUsername } from "@/api/user.api";
import { ADD_ROOM } from "@/store/slides/roomSlice";
import store from "@/store/store";

interface SearchBarProps {
  allRooms: Array<object>;
  setRoom: any;
}

const SearchBar = ({ allRooms, setRoom }: SearchBarProps) => {
  const formSchema = z.object({
    findUser: z.string().max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      findUser: "",
    },
  });

  const onSubmitHandler = async (data: z.infer<typeof formSchema>) => {
    if (!data.findUser) {
      return;
    }

    if (data.findUser === store.getState().auth.user.username) {
      toast.error("Why you find yourself?");
      return;
    }

    const [status, response] = await apiFindByUsername(data.findUser);
    if (status === 404) {
      toast.error("User not found!");
      return;
    }

    if (status === 200) {
      form.reset();
      const [status, response] = await apiCreateRoom(data.findUser);

      if (response.room.roomId) {
        const existingRoom = allRooms.find(
          (room: any) => room.id === response.room.roomId
        );
        if (existingRoom) {
          setRoom(existingRoom);
          return;
        }
      }

      const room = {
        id: response.room.roomId,
        membersCount: 2,
        memberID: response.room.memberId,
        friend: response.room.friend,
        updatedAt: response.updatedAt,
        messages: [],
      };

      store.dispatch(ADD_ROOM(room));
      setRoom(room);
    }
    toast.success("User found!");

    return;
  };

  return (
    <>
      <Toaster />
      <div className="mt-[1.5rem] mx-4 relative">
        <Form {...form}>
          <form method="GET" onSubmit={form.handleSubmit(onSubmitHandler)}>
            <FormField
              control={form.control}
              name="findUser"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="py-2 px-10 h-[2.5rem] text-sm rounded-full"
                        placeholder="Find user by username"
                        {...field}
                      />
                      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </form>
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
