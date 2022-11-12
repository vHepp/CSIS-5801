import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import "../Styles/ProfilePage.css"

import Image from "../Images/4479.jpeg"

import { userContext } from "../contexts/userContext"

const ProfilePage = () => {
  const { state, dispatch } = useContext(userContext)

  const [email, setEmail] = useState("Rob@KeithBoard.gov")
  const [name, setName] = useState("Robbie")
  const [pictureURL, setPictureURL] = useState("4479.jpeg")
  const [picture, setPicture] = useState(Image)
  const [bio, setBio] = useState("")


  const getImage = () => {
    fetch('/api/register/getImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    }).then(data => data.blob())
      .then((blob) => {
        console.log(blob)
        setPicture(URL.createObjectURL(blob))
      })
    console.log(picture)
  }

  useEffect(() => {
    console.log(state)
    if (state) {
      console.log("state exists")


      if (state.email && state.email.length > 0) {
        console.log(state.email)
        setEmail(state.email)
      }
      if (state.displayName && state.displayName.length > 0) {
        console.log(state.displayName)
        setName(state.displayName)
      }
      if (state.profileImage && state.profileImage.length > 0) {
        console.log(state.profileImage)
        setPictureURL(state.profileImage)
        getImage()
      }

    }

    return () => {
      //second
    }
  }, [])


  const handleUpdate = () => {
    console.log("handleUpdate")
  }


  return (
    <div className="ProfilePage">

      <div>
        <img className='user-image' alt="you" src={picture} />
      </div>

      <div className="user-data">
        {/* <p>
          Image URL: <b>{pictureURL}</b>
        </p> */}
        <p>
          <b>{name}</b>
        </p>
        <p>
          Email: <b>{email}</b>
        </p>
        <div>

          <textarea id="bio" name="message" rows="5" cols="50" value={bio} onChange={(e) => { setBio(e.target.value) }} placeholder="A little about yourself..."></textarea>
        </div>


        <button type="update" onClick={() => { handleUpdate() }} >Update Bio (doesn't do anything yet)</button>
      </div>
    </div >
  )
}

export default ProfilePage