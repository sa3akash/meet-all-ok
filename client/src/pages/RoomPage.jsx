import "../styles/RoomPage.css";
import ParticipantsSection from "../components/ParticipantsSection/ParticipantsSection";
import VideoSection from "../components/VideoSection/VideoSection";
import ChatSection from "../components/ChatSection/ChatSection";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as webrtcHandler from "../utils/webrtcHandler";
import Overlay from "../components/VideoSection/Overlay";

const RoomPage = () => {
  const { roomId, username, isRoomHost, connectOnlyWithAudio, showOverlay } =
    useSelector((state) => state.room);

  useEffect(() => {
    if (!isRoomHost && !roomId) {
      window.location.href = window.location.origin;
    }

    webrtcHandler.getLocalPreviewAndInitRoomConnection(
      isRoomHost,
      username,
      roomId,
      connectOnlyWithAudio
    );
  }, []);

  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
      <RoomLabel roomId={roomId} />
      {showOverlay && <Overlay />}
    </div>
  );
};

export default RoomPage;

const RoomLabel = ({ roomId }) => {
  return (
    <div className="room_label">
      <p className="room_label_paragraph">ID: {roomId} </p>
    </div>
  );
};
