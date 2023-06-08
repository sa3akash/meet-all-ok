import React from 'react'
import JoinRoomInputs from './JoinRoomInputs'
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox'
import ErrorMessage from './ErrorMessage'
import JoinRoomButtons from './JoinRoomButtons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRoomExists } from '../utils/api'
import { setRoomId, setUsername } from '../store/reducers/roomReducer'
import { useDispatch } from 'react-redux'

const JoinRoomContent = ({isRoomHost}) => {

  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleJoinRoom = async () => {

    dispatch(setUsername(nameValue));
    if (isRoomHost) {
      createRoom();
    } else {
      await joinRoom();
    }
  };

  const joinRoom = async () => {
    const responseMessage = await getRoomExists(roomIdValue);

    const { roomExists, full } = responseMessage;

    if (roomExists) {
      if (full) {
        setErrorMessage("Meeting is full. Please try again later.");
      } else {
        // join a room !
        dispatch(setRoomId(roomIdValue));
        navigate("/room");
      }
    } else {
      setErrorMessage("Meeting not found. Check your meeting id.");
    }
  };

  const createRoom = () => {
    navigate("/room");
  };

  return (
    <>
    <JoinRoomInputs
      roomIdValue={roomIdValue}
      setRoomIdValue={setRoomIdValue}
      nameValue={nameValue}
      setNameValue={setNameValue}
      isRoomHost={isRoomHost}
    />
    <OnlyWithAudioCheckbox />
    <ErrorMessage errorMessage={errorMessage} />
    <JoinRoomButtons
      handleJoinRoom={handleJoinRoom}
      isRoomHost={isRoomHost}
    />
  </>
  )
}

export default JoinRoomContent