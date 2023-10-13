import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profilepic.png";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
// import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { Button } from "../Button/Button";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [popup,setPopup]= useState(false);
  const handleclickopen= () =>{
    setPopup(!popup)
  }
  const closepopup= () =>{
    setPopup(false);
  }
  const [data,setData]=useState({
    date:'',
  })
  const{date}=data;
  const onChange= e =>{

    setData(e.target.value)
  }
  const clickSubmit= e =>{
    console.log(data)
  }
  const [content,setContent]=useState({
    cont:'',
  })
  const {cont}=content;
  const onChangeContent=e=>{
    e.preventDefault()
    setContent({...content,[e.target.name]:[e.target.value]})
  }
  const whatHappen = (e) =>{
    e.preventDefault();
    console.log(content)
  }


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" name="cont" value={cont} onChange={onChangeContent} />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          {/* <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "} */}
          <div className="option" style={{ color: "var(--shedule)" }}>
          <div className='calendar'>
            <button onClick={handleclickopen}> <UilSchedule value="schedule"/></button>
          </div>
          {popup?
            <div className='mainpopup'>
              <div className="popup">
                <div className='popupheader'>
                  <h1>DateAndTime</h1>
                  <h1 onClick={closepopup}>X</h1>
                </div>
                <div className="submiButton">
                  <input type='datetime-local' name='date' value={date} onChange={onChange} id="date-time"/>
                  <Button type='button' className="date-timebutton" onClick={clickSubmit} text="Submit"></Button>
              </div>
            </div>
           </div>:""}
          </div>
          <Button className="button ps-button" onClick={whatHappen} text="Submit"></Button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
              accept="image/png, image/gif, image/jpeg"
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
  );
};

export default PostShare;
