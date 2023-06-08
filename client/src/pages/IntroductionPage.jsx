import "../styles/IntroductionPage.css";
import logo from "../assets/logo.png";
import ConnectingButtons from "../components/ConnectingButtons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsRoomHost } from "../store/reducers/roomReducer";

const IntroductionPage = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setIsRoomHost(false))
  },[])

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image"></img>
        <ConnectingButtons />
      </div>
    </div>
  )
};

export default IntroductionPage;
