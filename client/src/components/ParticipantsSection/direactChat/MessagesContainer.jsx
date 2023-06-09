import React, { useEffect, useRef } from "react";

const MessagesContainer = ({ messages }) => {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="direct_messages_container">
      {messages.map((message,index) => {
        return (
          <SingleMessage
            messageContent={message.messageContent}
            isAuthor={message.isAuthor}
            key={index}
          />
        );
      })}
      <div ref={scrollRef}></div>
    </div>
  );
};

export default MessagesContainer;




const SingleMessage = ({ isAuthor, messageContent }) => {
  const messageStyling = isAuthor
    ? "author_direct_message"
    : "receiver_direct_message";

  const containerStyling = isAuthor
    ? "direct_message_container_author"
    : "direct_message_container_receiver";

  return (
    <div className={containerStyling}>
      <p className={messageStyling}>{messageContent}</p>
    </div>
  );
};
