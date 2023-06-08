import React from 'react'
import {useNavigate} from "react-router-dom"

const ConnectingButtons = () => {

    const navigate = useNavigate()

    const pushToJoinRoomPage = () => {
       navigate("/join-room");
      };
    
      const pushToJoinRoomPageAsHost = () => {
       navigate("/join-room?host=true");
      };

  return (
    <div className="connecting_buttons_container">
    <ConnectingButton
      buttonText="Join a meeting"
      onClickHandler={pushToJoinRoomPage}
    />
    <ConnectingButton
      createRoomButton
      buttonText="Host a meeting"
      onClickHandler={pushToJoinRoomPageAsHost}
    />
  </div>
  )
}

export default ConnectingButtons



const ConnectingButton = ({
    createRoomButton = false,
    buttonText,
    onClickHandler,
  }) => {
    const buttonClass = createRoomButton
      ? "create_room_button"
      : "join_room_button";
  
    return (
      <button className={buttonClass} onClick={onClickHandler}>
        {buttonText}
      </button>
    );
  };
  