import React, { useEffect } from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css';
import {  useDispatch,useSelector } from 'react-redux';
import { getUser } from '../../Reducers/userDetailsSlice';
import {recommendedUser} from '../../Reducers/recommedationListsSlice'


const Home = () => {
 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser(100))
    dispatch(recommendedUser(100))

  },[]);
 

  const user_data = useSelector((state) => {return state.userDetails.user_data});
  console.log("from-profilecard",user_data);
  return (
    <div className="Home">
      
        <ProfileSide />
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home