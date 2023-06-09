import React from 'react'
import Participants from './Participants';
import DirectChat from './direactChat/DirectChat';
import { useSelector } from 'react-redux';

const ParticipantsSection = () => {


  const {activeConversation} = useSelector(state=>state.room)

  return (
    <div className="participants_section_container">
    <ParticipantsLabel />
    <Participants />
    {activeConversation && <DirectChat />}
  </div>
  )
}

export default ParticipantsSection


const ParticipantsLabel = () => {
  return (
    <div className="participants_label_container">
      <p className="participants_label_paragraph">PARTICIPANTS</p>
    </div>
  );
};