import React,{useState} from 'react'
import "../Styles/ProfilePage.css"

import image from "../Images/4479.jpeg"

const ProfilePage = () => {
  const[email, setEmail]= useState("Rob@gmail.com")
  const[name, setName]= useState("Rob DiDomenico")
  const[bio, setBio]= useState("I love pizza.")




  return (
    <div className="ProfilePage"> 
        
    <h1>Profile Picture </h1>
   
    <img src={image} width="200px" height="250px" picture="picture" />

    <h2><label for="email">Your Email </label>
    <input email="email" value={email} onChange={
    (e)=>{setEmail(e.target.value)}
    } placeholder= "Rob@gmail.com" /></h2>

    <h2><label for="name">Your Name </label>
    <input name="name"
    value={name} onChange={(e)=>{setName(e.target.value)}} placeholder= "Rob DiDomenico" /></h2>

    <h2><label for="bio">Your bio/description </label>
    
    <textarea id="bio" name="message" rows="1" cols="50" value={bio} onChange={(e)=>{setBio(e.target.value)}} placeholder="I love pizza"></textarea></h2>

    <button type="update">Update</button>

    
    <h1>{email}</h1>
    <h1>{name}</h1>
    <h1>{bio}</h1>


     </div>
  )
}

export default ProfilePage