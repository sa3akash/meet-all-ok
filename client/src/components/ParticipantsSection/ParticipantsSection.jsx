import React from 'react'
import Participants from './Participants';

const ParticipantsSection = () => {
  return (
    <div className="participants_section_container">
    <ParticipantsLabel />
    <Participants />
    {/* <DirectChat /> */}
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