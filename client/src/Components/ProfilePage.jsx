import React,{useState} from 'react'
import "../Styles/ProfilePage.css"

const ProfilePage = () => {
  const[email, setEmail, name, setName]= useState("Rob@Steveware.com")


  return (
    <div className="ProfilePage"> 
        
    <a href= "react" >ProfilePage</a>

    <h2><label for="picture">Profile Picture </label>
   
    <img src="" picture="picture" /> </h2>

    <h2><label for="email">Your Email </label>
    <input email="email" value={email} onChange={
    (e)=>{setEmail(e.target.value)}
    } placeholder= "Rob@Steveware.com" /></h2>

    <h2><label for="name">Your Name </label>
    <input name="name"
    value={name} onChange={(e)=>{setName(e.target.value)}} placeholder= "Rob DiDomenico" /></h2>

    <button type="update">Update </button>
    
    <h1>{email}</h1>
    <h1>{name}</h1>


     </div>
  )
}

export default ProfilePage