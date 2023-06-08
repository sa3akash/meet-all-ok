import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import IntroductionPage from "./pages/IntroductionPage";
import JoinRoomPage from "./pages/JoinRoomPage";
import { useEffect } from "react";
import { connectWithSocketIOServer } from "./utils/wss";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<IntroductionPage/>),
  },
  {
    path: "room",
    element: (<RoomPage/>),
  },
  {
    path: "join-room",
    element: (<JoinRoomPage/>),
  },
]);

function App() {
  useEffect(()=>{
    connectWithSocketIOServer()
  },[])
  return <RouterProvider router={router} />;
}

export default App;
