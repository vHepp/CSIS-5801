import React, { useEffect, useState } from 'react'
import "../Styles/ProfilePage.css"

import Image from "../Images/4479.jpeg"

const ProfilePage = () => {
  const [email, setEmail] = useState("Rob@KeithBoard.gov")
  const [name, setName] = useState("Robbie")
  const [picture, setPicture] = useState(Image)
  const [bio, setBio] = useState("I love pizza.")


  return (
    <div className="ProfilePage">

      <div>
        <img className='user-image' alt="" src={picture} />
      </div>

      <div className="user-data">
        Email: <b>{email}</b>
        <br></br>
        Name: <b>{name}</b>

        <div>
          <label for="bio">Your bio/description </label>

          <textarea id="bio" name="message" cols="50" value={bio} onChange={(e) => { setBio(e.target.value) }} placeholder="A little about"></textarea>

        </div>
        <button type="update">Update</button>
      </div>
    </div>
  )
}

export default ProfilePage