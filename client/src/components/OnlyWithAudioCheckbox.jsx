import React from "react";
import { setConnectOnlyWithAudio } from "../store/reducers/roomReducer";
import { useDispatch, useSelector } from "react-redux";
import CheckImg from "../assets/check.png";

const OnlyWithAudioCheckbox = () => {
  const { connectOnlyWithAudio } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const handleConnectionTypeChange = () => {
    dispatch(setConnectOnlyWithAudio());
  };
  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img className="checkbox_image" src={CheckImg}></img>
        )}
      </div>
      <p className="checkbox_container_paragraph">Only audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;
