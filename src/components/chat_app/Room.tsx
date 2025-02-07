"use client";

import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui-shadcn/form";
import { Input } from "@/components/ui-shadcn/input";

import { IoIosSend } from "react-icons/io";
import { FaPaperclip } from "react-icons/fa6";

interface RoomsProps {
  messages: Array<object>;
  handleSendMessage: any;
}

const Rooms = ({ messages, handleSendMessage }: RoomsProps) => {
  const curr_user = useSelector((state: any) => state.auth.user);

  const formSchema = z.object({
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmitHandler = async (data: z.infer<typeof formSchema>) => {
    if (!data.message) {
      return;
    }
    await handleSendMessage(data.message);
    form.reset();
  };

  return (
    <>
      <div className="flex flex-col-reverse h-[calc(100vh-10rem)] overflow-y-auto">
        {messages?.map((message: any, index: number) =>
          message?.senderId === curr_user.id ? (
            <div key={index} className="flex justify-end">
              <div className="bg-blue-300 dark:bg-blue-700 text-slate-800 dark:text-slate-200 p-2 m-2 rounded-lg">
                {message?.content}
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-start">
              <div className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 p-2 m-2 rounded-lg">
                {message?.content}
              </div>
            </div>
          )
        )}
      </div>
      {/* Message input */}
      <Form {...form}>
        <form
          id="messageForm"
          method="POST"
          onSubmit={form.handleSubmit(onSubmitHandler)}
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Type a message"
                    className="absolute bottom-0 rounded-none h-[3rem]"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
        </form>
      </Form>
      {/* File input */}
      <label
        htmlFor="image_attach"
        className="absolute bottom-[0.25rem] right-[3rem]"
      >
        <FaPaperclip className="w-[2.5rem] h-[2.5rem] p-[0.6rem] rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer" />
        <Input id="image_attach" type="file" className="hidden" />
      </label>
      {/* Send button */}
      <button
        className="absolute bottom-[0.25rem] right-[0.5rem] rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer"
        type="submit"
        form="messageForm"
      >
        <IoIosSend className="w-[2.5rem] h-[2.5rem] p-2" />
      </button>
    </>
  );
};

export default Rooms;
