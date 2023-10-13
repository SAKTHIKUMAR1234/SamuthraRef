import React from 'react'
// import Logo from '../../img/logo.png'
import Chub from '../../img/chub.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
import { Button } from '../Button/Button'
const LogoSearch = () => {
  return (
   <div className="LogoSearch">
   <div className="logo-img">
       <img className='logoimg' src={Chub} alt="C-Hub"/>
       </div>
      
       <div className="Search">
        
           <input type="text" name="search" placeholder='#Explore' />
           
           <Button className={"search-button button"} icon={ <UilSearch/>}/>
       
       </div>

   </div>
  )
}

export default LogoSearch