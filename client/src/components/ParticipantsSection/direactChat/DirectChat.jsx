import React, { useState } from "react";
import { useSelector } from "react-redux";
import MessagesContainer from "./MessagesContainer";
import NewMessage from "./NewMessage";

const DirectChat = () => {
  const { activeConversation, directChatHistory } = useSelector(
    (state) => state.room
  );

  return (
    <div className="direct_chat_container">
      <DirectChatHeader activeConversation={activeConversation} />
      <MessagesContainer messages={directChatHistory} />
      <NewMessage />
      {!activeConversation && <ConversationNotChosen />}
    </div>
  );
};

export default DirectChat;

const DirectChatHeader = ({ activeConversation }) => {
  return (
    <div className="direct_chat_header">
      <p className="direct_chat_header_paragraph">
        {activeConversation ? activeConversation.username : ""}
      </p>
    </div>
  );
};

const ConversationNotChosen = () => {
  return (
    <div className="conversation_not_chosen_overlay">
      <p className="conversation_not_chosen_overlay_text">
        Conversation not chosen
      </p>
    </div>
  );
};
