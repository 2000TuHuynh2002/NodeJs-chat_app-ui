import { Conversations } from "@/components/chat_app/Conversations";

const Messages = () => {
  return (
    <>
      <div className="grid xl:grid-cols-12 grid-cols-1">
        <div className="xl:col-span-3 pl-6 pt-6 pr-4 border-r col-span-1 h-[calc(100vh-6.6rem)]">
          <Conversations />
        </div>
        <div className="xl:col-span-9 hidden"></div>
      </div>
    </>
  );
};

export default Messages;
