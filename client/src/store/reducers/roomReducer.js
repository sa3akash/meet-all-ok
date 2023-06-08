import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "",
  isRoomHost: false,
  connectOnlyWithAudio: false,
  roomId: null,
  showOverlay: true,
  participants: [],
  messages: [],
  activeConversation: null,
  directChatHistory: [],
  socketId: null
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setIsRoomHost: (state,action) => {
      state.isRoomHost = action.payload
    },
    setConnectOnlyWithAudio: (state) => {
      state.connectOnlyWithAudio = !state.connectOnlyWithAudio
    },
    setUsername: (state,action) => {
      state.username = action.payload
    },
    setRoomId: (state,action) => {
      state.roomId = action.payload
    },
    setActiveConversation: (state,action) => {
      state.activeConversation = action.payload
    },
    setShowOverlay: (state,action) => {
      state.showOverlay = action.payload
    },
    setSocketId: (state,action) => {
      state.socketId = action.payload
    },
    setParticipants: (state,action) => {
      state.participants = action.payload
    },
    setMessages: (state,action) => {
      state.messages = [...state.messages,action.payload]
    },
    
   
  },
})

// Action creators are generated for each case reducer function
export const { setIsRoomHost,setConnectOnlyWithAudio,setUsername,setRoomId,setActiveConversation,setShowOverlay,setSocketId,setParticipants,setMessages } = roomSlice.actions

export default roomSlice.reducer