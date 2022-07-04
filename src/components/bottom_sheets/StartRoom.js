import React, { useState } from 'react'
import style from '../../style/BottomSheet.module.css'
import { FcGlobe } from 'react-icons/fc'

function StartRoom(props) {
    const [room, setRoom] = useState('open')
  return (
    <>
        <div className={style.switch_Line}></div>
        <div className={style.TopicBtn}>
            <button className={style.addTopicBtn}>
                + Add a topic 
            </button>
        </div>
        <div className={style.selectRoom}>
          <button 
          className={room == "open" ? style.active : ""}
          onClick={() => setRoom("open")}>
            <div>
              <FcGlobe />
            </div>
            Open
          </button>
          <button className={room == "social" ? style.active : ""}
          onClick={()=> setRoom("social")}>
            <div>
              <FcGlobe />
            </div>
            Social
          </button>
          <button className={room == "closed" ? style.active : ""}
          onClick={()=> setRoom("closed")}>
            <div>
              <FcGlobe />
            </div>
            Closed
          </button>
        </div>
        <p>Start a room
          <span>
          {room == "closed"
            ? "for people I choose"
            :room == "social"
            ? "with people I follow"
            : "open to everyone"}
          </span>
        </p>
        <div className="text-center">
          <button 
            className={style.letGoBtn}
            onClick={() => {
              props.setSheetCreateRoom(true);
              props.SheetCreateRoom(true);
            }}
            >
              🎉 Let's go
            </button>
        </div>
    </>
  )  
}

export default StartRoom