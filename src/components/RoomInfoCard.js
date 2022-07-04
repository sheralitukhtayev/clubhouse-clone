import React, {useState, useEffect} from 'react'
import style from '../style/RoomCard.module.css'
import {  BsFillPersonFill, BsChatDotsFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai"
import data from '../data/roomCard.json'

function RoomInfoCard(props) {
  return (
    <>
        {data.map((item) => 
            <div>
                <div>
                    <div className={style.roomCardContainer}>
                        <h6>{item.title}</h6>
                        <h2>{item.sub_title}</h2>
                        <div className={style.roomMembers}>
                            <div>
                                <img src="/images/user_image_1.jpg" alt="" />
                                <img src="/images/user_image_2.jpg" alt="" />
                            </div>
                            <div>
                                {item.members.map((person) => (
                                    <p>
                                        {person.first_name} {person.last_name} <AiOutlineMessage />
                                    </p>
                                ))}
                                <p className="d-flex align-items-center">
                                    <span className='mr-2'>1.8</span>
                                    <BsFillPersonFill />
                                    <span className="mx-2"></span>{" "}
                                    <span className="mr-2">5</span> <BsChatDotsFill />
                                </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default RoomInfoCard