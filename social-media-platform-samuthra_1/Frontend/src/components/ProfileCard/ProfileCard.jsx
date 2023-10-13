import React from "react";
import "./ProfileCard.css";
import { useSelector } from 'react-redux';


const ProfileCard = () => {
  
  const  user_data = useSelector((state) => {return state.userDetails.user_data});
  console.log("from-profilecard",user_data);
  
  const ProfilePage = true;
  return (
  
    <div className="ProfileCard">
  
      <div className="ProfileImages">

        <img src="http://localhost:8080/default_cover.jpg" alt="" />
        
        <img src={"http://localhost:8080/"+user_data.userProfile} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user_data.userName}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>100</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>60</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
