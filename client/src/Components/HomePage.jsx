import React from 'react'
import { useState } from 'react'
import '../Styles/HomePage.css'
import Room from './Room.jsx'
import InviteTest from './InviteTest.jsx'
import { RoomContext } from "../contexts/roomContext.js";

const HomePage = () => {
  const [roomCount, changeRoomCount] = useState(0);
  const [openRooms, changeOpenRooms] = useState(3);
  const [rooms, changeRooms] = useState([]);

  function addRoom() {
    if (rooms.length >= 3)
      return;

    console.log(rooms);

    let name = document.getElementById('addRoomBtn').value;
    if (name.length > 0) {
      document.getElementById("home-error").innerHTML = '';
      changeRooms(rooms => [...rooms, name]);
      changeRoomCount(roomCount + 1);
      changeOpenRooms(openRooms - 1);
    }
    else {
    document.getElementById("home-error").innerHTML = 'room name can not be blank';
      return;
    }
  }

  return (
    <div className='home-main'>
      <h1 className='home-title'>
        KeithBoard
      </h1>
      <div className='home-intro'>
        <p>
          Welcome to KeithBoard
        </p>
        <p>
          We are an interractive virtual classroom designed for
          group communication.
        </p>
        <p>
          Use the box below to name on open room, you have three rooms total
        </p>
        <div>
          <input id="addRoomBtn" placeholder="room name" className='home-input'>
          </input>
          <button className = "home-btn" onClick={addRoom}>
            Add
          </button>
          <p id="home-error"></p>
          <div>
            Room Count: {roomCount}
          </div>
          <div>
            Open Rooms: {openRooms}
          </div>
        </div>
        <div>
          <div className='home-OpenedRooms'>
            Opened Rooms:
            <RoomContext.Provider value={{ 
              rooms, changeRooms, 
              roomCount, changeRoomCount, 
              openRooms, changeOpenRooms 
              }}>
              {rooms[0] && <Room name={rooms[0]} number={1} LinkToWebex = {<InviteTest/>} />}
              {rooms[1] && <Room name={rooms[1]} number={2} LinkToWebex = {<InviteTest/>} />}
              {rooms[2] && <Room name={rooms[2]} number={3} LinkToWebex = {<InviteTest/>} />}
            </RoomContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage