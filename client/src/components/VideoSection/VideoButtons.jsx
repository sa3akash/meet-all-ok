import React from 'react'
import MicButton from './MicButton'
import CameraButton from './CameraButton'
import SwitchToScreenSharingButton from './SwitchToScreenSharingButton'
import { useSelector } from 'react-redux'
import LeaveRoomButton from './LeaveRoomButton'

const VideoButtons = () => {
    const {connectOnlyWithAudio} = useSelector(state=>state.room)
  return (
    <div className="video_buttons_container">
      <MicButton />
      {!connectOnlyWithAudio && <CameraButton />}
      <LeaveRoomButton />
      {!connectOnlyWithAudio && <SwitchToScreenSharingButton />}
    </div>
  )
}

export default VideoButtons