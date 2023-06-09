import { store } from "../store";
import { setActiveConversation } from "../store/reducers/roomReducer";
import { setDirectChatHistory } from "../store/reducers/roomReducer";

export const appendNewMessageToChatHistory = (data) => {
  const { activeConversation } = store.getState().room;

  if (!activeConversation) {
    const newDirectMessage = {
      isAuthor: data.isAuthor,
      messageContent: data.messageContent,
      username: data.username,
    };

    const activeConvarsationData = {
      username: data.username,
      socketId: data.authorSocketId,
    };

    store.dispatch(setActiveConversation(activeConvarsationData));
    store.dispatch(setDirectChatHistory(newDirectMessage));
  } else {
    const newDirectMessage = {
      isAuthor: data.isAuthor,
      messageContent: data.messageContent,
      username: data.username,
    };

    store.dispatch(setDirectChatHistory(newDirectMessage));
  }
};
