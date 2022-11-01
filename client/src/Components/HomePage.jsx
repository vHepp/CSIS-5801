import React from 'react'
import { useState } from 'react'
import '../Styles/HomePage.css'
import Room from './Room.jsx'
import { RoomContext } from "../contexts/roomContext.js";

const HomePage = () => {
  const [roomCount, changeRoomCount] = useState(0);
  const [openRooms, changeOpenRooms] = useState(3);
  const [rooms, changeRooms] = useState([]);

  function addRoom() {
    if (rooms.length >= 3)
      return;

    let name = document.getElementById('addRoomBtn').value;
    changeRooms(rooms => [...rooms, name]);
    changeRoomCount(roomCount + 1);
    changeOpenRooms(openRooms - 1);
  }

  return (
    <div className='home-main'>
      <h1 className='home-title'>
        KeithBoard
      </h1>
      <div className='home-intro'>
        <p>
          Welcome to KeithBoard!
        </p>
        <p>
          We are an interractive virtual classroom designed for
          group communication.
        </p>
        <p>
          Use the box below to name on open room. There is a limit of 3 rooms.
        </p>
        <div>
          <input id="addRoomBtn" placeholder="Room Name" className='home-input'>
          </input>
          <p>
            <button class="button" onClick={addRoom}>
              Add Room
            </button>
          </p>
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
            <RoomContext.Provider value={{ rooms, changeRooms }}>
              <Room name={rooms[0]} number={1} />
              <Room name={rooms[1]} number={2} />
              <Room name={rooms[2]} number={3} />
            </RoomContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage