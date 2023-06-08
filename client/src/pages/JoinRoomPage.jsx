import React, { useEffect, useState } from 'react'
import JoinRoomContent from "../components/JoinRoomContent";
import "../styles/JoinRoomPage.css"
import { useLocation } from 'react-router-dom';
import { setIsRoomHost } from '../store/reducers/roomReducer';
import {useDispatch,useSelector} from "react-redux"

const JoinRoomPage = () => {

  const dispatch = useDispatch()
  const search = useLocation().search;

  const {isRoomHost} = useSelector(state=>state.room)

  useEffect(() => {
    const roomHost = new URLSearchParams(search).get("host");
    if (roomHost) {
      dispatch(setIsRoomHost(true))
    }
  },[]);
  
  return (
    <div className="join_room_page_container">
    <div className="join_room_page_panel">
      <JoinRoomTitle isRoomHost={isRoomHost} />
      <JoinRoomContent 
        isRoomHost ={isRoomHost}
      />
    </div>
  </div>
  )
}

export default JoinRoomPage



const JoinRoomTitle = ({ isRoomHost }) => {
  const titleText = isRoomHost ? "Host meeting" : "Join meeting";

  return <p className="join_room_title">{titleText}</p>;
};
