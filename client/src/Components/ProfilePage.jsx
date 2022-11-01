import React, { useEffect, useState } from 'react'
import "../Styles/ProfilePage.css"

import Image from "../Images/istockphoto.jpeg"

const ProfilePage = () => {
  const [email, setEmail] = useState("Rob@KeithBoard.gov")
  const [name, setName] = useState("Robbie")
  const [picture, setPicture] = useState(Image)

  return (
    <div className="ProfilePage">

      <div className='user-image-container'>
        <img className='user-image' alt="" src={picture} />
      </div>

      <div className="user-data">
        Email: <b>{email}</b>
        <br></br>
        Name: <b>{name}</b>

      </div>

    </div >
  )
}

export default ProfilePage