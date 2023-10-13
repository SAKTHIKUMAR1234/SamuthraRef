import React, { useState, useEffect } from "react";
import "./RightSide.css";
import Comment from "../../img/comment.png";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import Chats from "../chats/Chats";
import { GrSettingsOption } from "react-icons/gr";
import { useSelector } from 'react-redux';

const RightSide = () => {
  const user_data = useSelector((state) => { return state.userDetails.user_data });
  console.log("from-infocard", user_data);

  const flag = false;
  if (user_data.accountType == "Private") {
    flag = true;
  }

  const [modalOpened, setModalOpened] = useState(false);
  const [chatpop, setChatPopup] = useState(false);
  const chatpopUp = () => {
    setChatPopup(!chatpop)
  }
  const closeChats = () => {
    setChatPopup(false)
  }
  const [settingPop, setSetting] = useState(false);
  const setPopup = (e) => {
    e.preventDefault();
    setSetting(!settingPop)
  }
  const closeSetting = () => {
    setSetting(false);
  }

  return (
    <div className="RightSide">
      <div className="navIcons">
        <button className="settingButton" onClick={setPopup}><GrSettingsOption size={30} className="grSetting" /></button>
        <div>
          {settingPop ?
            <div className="mainsetting">
              <div className="settingpopup">
                <div className="settinghead">
                  <h2>Settings</h2>
                  <h1 className="closeSetting" onClick={closeSetting}>X</h1>
                </div>
                <div>
                  <input type="radio" id="check" name="check" value="Private" checked={flag} />
                  <label for='check'>Private</label>
                  <input type="radio" id="check" name="check" value="Public" checked={!flag} />
                  <label for='check'>Public</label>
                </div>
              </div>
            </div> : ''}
        </div>
        <button className="chatButton" onClick={chatpopUp}><img src={Comment} alt="" /></button>
        <div>
          {chatpop ?
            <div className="mainchats">
              <div className="chatpopup">
                <div className="chatHeader">
                  <h1>Chats</h1>
                  <h1 className="closeChats" onClick={closeChats}>X</h1>
                </div>
                <div>
                  <p><Chats /></p>
                </div>
              </div>
            </div> : ''}
        </div>
      </div>
      <TrendCard />
      <div>
      </div>

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

    </div>

  );
};

export default RightSide;
