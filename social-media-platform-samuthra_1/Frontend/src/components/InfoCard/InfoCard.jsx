import React, { useState, useEffect } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from "../../Reducers/userDetailsSlice";

const InfoCard = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateUser(user_data));
  },[])

  const user_data = useSelector((state) => { return state.userDetails.user_data });
  console.log("from-infocard", user_data);

  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h2>Your Info</h2>
        <div>
          <UilPen size={20} onClick={() => setModalOpened(true)} />
          <ProfileModal
            old_data={user_data}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <h1>{user_data.firstName}</h1>

      <div className="info">
        <span>
          <b>@Username: </b>
          {user_data.userName}
        </span>
      </div>



      <div className="info">
        <span>
          <b>DOB: </b>
          {user_data.dateOfBirth}
        </span>
      </div>

      <Button className="button logout-button" text="LogOut" />
    </div>
  );
};

export default InfoCard;
