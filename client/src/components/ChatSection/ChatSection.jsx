import React from "react";
import NewMessage from "./NewMessage";
import Messages from "./Messages";

const ChatSection = () => {
  return (
    <div className="chat_section_container">
      <ChatLabel />
      <Messages />
      <NewMessage />
    </div>
  );
};

export default ChatSection;

const ChatLabel = () => {
  return (
    <div className="chat_label_container">
      <p className="chat_label_paragraph">CHAT</p>
    </div>
  );
};
