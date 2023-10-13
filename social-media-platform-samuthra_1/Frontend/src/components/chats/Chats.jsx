import React from 'react'
// import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
const Chats = () => {
  return (
    <div className="FollowersCard">
        <h3>Chats...</h3>
        {Followers.map((follower, id)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Chats