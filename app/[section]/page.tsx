import React from "react";
import Asidebar from "@/components/chat/asidebar";
import Chats from "@/components/chat/chats";
import ChatEntorno from "@/components/chat/chatEntorno";

const page = () => {
  return (
    <div className="chat-layout-items">
      <Asidebar />
      <Chats />
      <ChatEntorno />
    </div>
  );
};

export default page;
