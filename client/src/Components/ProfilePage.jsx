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
  }, [state])

  const deleteUser = () => {
    dispatch({ type: "CLEAR", payload: null })
    localStorage.setItem('user', null);
    window.location.assign("/login")
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
        <div>
          <b>{name}</b>
        </div>
        <div>
          Email: <b>{email}</b>
        </div>
      </div>
      {/* <button type='submit' onClick={() => deleteUser()}>Logout</button> */}
    </div >
  )
}

export default ProfilePage