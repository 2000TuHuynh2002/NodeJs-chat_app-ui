import ActiveFriend from "@/components/chat_app/ActiveFriend";
import ConversationsHistory from "@/components/chat_app/ConversationHistory";
import Conversations from "@/components/chat_app/Conversations";
import SearchBar from "@/components/chat_app/SearchBar";
import ProfilePanel from "@/components/chat_app/ProfilePanel";

const Chat = () => {
  return (
    <>
      <div className="grid xl:grid-cols-12 grid-cols-1">
        <div className="xl:col-span-3 border-r-2 border-black dark:border-slate-600 col-span-1 h-[calc(100vh-6.6rem)]">
          <SearchBar />
          <ActiveFriend />
          <ConversationsHistory />
        </div>
        <div className="xl:col-span-6 border-r-2 border-black dark:border-slate-600 xl:block hidden relative">
          <Conversations />
        </div>
        <div className="xl:col-span-3 xl:block hidden relative">
          <ProfilePanel />
        </div>
      </div>
    </>
  );
};

export default Chat;
