import React, { useState } from 'react'
import style from '../../style/roomDetail.module.css'
import { AiOutlineFile } from 'react-icons/ai'
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs'
import { AiOutlinePlus } from "react-icons/ai";

function NewRoom(props) {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const [itemsVisible, setItemVisible] = useState(true);
    const card = props.cardDetail;
  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className={"d-flex align-items-center"}>
            <a href="#" onClick={() => {props.setSheetVisible(false);
            }}
            >
              <img src="/images/back-arrow.png" 
              alt="" 
              className={style.arrow_icon}
              />
            </a>
            <span>HallWay</span>
          </div>
          <div>
            <AiOutlineFile />
            <img 
            src="/images/user_image_1.jpg" 
            alt=""  
            className={style.profile_img}
            />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div className='d-flex align-items-center justify-content-between' 
          style={{padding: "0.5em 1em"}}
          >
            {card.members.map((item) => (
              <div className={style.memberContainer}>
                {micMuteVisible ? (
                      <div className={style.audio_icon}>
                        <BsMicMuteFill />
                      </div> 
                    ) : (
                      ""
                    )}
                    <img src="/images/user_image_1.jpg" alt="" />
                    <p>
                      <span>*</span>
                      {item.first_name}
                    </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <button onClick={() => {
            props.setSheetVisible(false);
          }}
        >
          <img src="/images/hand-peace.png" alt="" />
            Leave Quietly
        </button>
        <div>
          <button>
            <AiOutlinePlus />
          </button>
          <button>
            <img src="/images/hand-stop.png" alt="" />
          </button>
          <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
            {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
          </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default NewRoom