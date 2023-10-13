import React, { useEffect ,useState } from 'react'
import './FollowersCard.css'
import { Button } from '../Button/Button'
import { Followers } from '../../Data/FollowersData'
import {  useDispatch,useSelector } from 'react-redux';
import {recommendedUser} from '../../Reducers/recommedationListsSlice'
const FollowersCard = () => {


    // const recommended_Users = useSelector((state)=>{return state.followSuggestion.user_suggestion}) 
    // console.log("from followers card",recommended_Users);

// const [rec_user,setRec_user] = useState([]);
// setRec_user(recommended_Users)

  return (
    <div className="FollowersCard">
        <h2>Recommendations for You...</h2>
        {/* {rec_user.map((recommended, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={recommended.userProfile} alt="" className='followerImage' />
                        <div className="name">
                            <span>@{recommended.userName}</span>
                        </div>
                    </div>
                    <Button className='button fc-button' text="Follow" />
                       
                </div>
            )
        })}  */}
    </div>
  )
}

export default FollowersCard