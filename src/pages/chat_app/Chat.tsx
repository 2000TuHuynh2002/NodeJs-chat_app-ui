import { Conversations } from "@/components/chat_app/Conversations";
import { SearchBar } from "@/components/chat_app/SearchBar";

const Chat = () => {
  return (
    <>
      <div className="grid xl:grid-cols-12 grid-cols-1">
        <div className="xl:col-span-3 border-r-2 border-black col-span-1 h-[calc(100vh-6.6rem)]">
          <SearchBar />
          <Conversations />
        </div>
        <div className="xl:col-span-9 hidden"></div>
      </div>
    </>
  );
};

export default Chat;
