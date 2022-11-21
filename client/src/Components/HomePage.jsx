import React from 'react'
import { useState } from 'react'
import '../Styles/HomePage.css'
import Room from './Room.jsx'
import InviteTest from './InviteTest.jsx'
import Board from './classroom/Board.jsx'
import { RoomContext } from "../contexts/roomContext.js";

const HomePage = () => {
  const [roomCount, changeRoomCount] = useState(0);
  const [openRooms, changeOpenRooms] = useState(3);
  const [rooms, changeRooms] = useState([]);
  const [homeError, setHomeError] = useState([]);
  const [roomOneUsers, changeRoomOneUsers] = useState([]);
  const [roomTwoUsers, changeRoomTwoUsers] = useState([]);
  const [roomThreeUsers, changeRoomThreeUsers] = useState([]);

  function addRoom() {
    if (rooms.length >= 3) {

      setHomeError('Maximum number of rooms reached.');
      return;
    }

    let name = document.getElementById('addRoomBtn').value;
    if (name.length > 0 && !rooms.includes(name)) {
      setHomeError();
      changeRooms(rooms => [...rooms, name]);
      changeRoomCount(roomCount + 1);
      changeOpenRooms(openRooms - 1);
    }
    else {
      if (name.length <= 0) {

        setHomeError('Room name cannot be blank.');
      }
      else {
        setHomeError('That room name is already used.');
      }
      return;
    }
  }

  return (
    <div className='home-main'>
      <div className='home-intro'>
        <p>
          Welcome to KeithBoard!
        </p>
        <p>
          A interactive virtual classroom designed for
          group communication.
        </p>
        <p>
          Use the box below to name on open room. There is a limit of 3 rooms.
        </p>
        <div>
          <input id="addRoomBtn" placeholder="Room Name" className='home-input'>
          </input>
          <p>
            <button className="button" onClick={addRoom}>
              Add Room
            </button>
          </p>
          <p id="home-error">{homeError}</p>
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
              openRooms, changeOpenRooms,
              roomOneUsers, changeRoomOneUsers,
              roomTwoUsers, changeRoomTwoUsers,
              roomThreeUsers, changeRoomThreeUsers
            }}>
              {rooms[0] && <Room name={rooms[0]} number={1} /*LinkToWebex={<InviteTest name={rooms[0]} />}*/ />}
              {rooms[1] && <Room name={rooms[1]} number={2} /*LinkToWebex={<InviteTest name={rooms[1]} />}*/ />}
              {rooms[2] && <Room name={rooms[2]} number={3} /*LinkToWebex={<InviteTest name={rooms[2]} />}*/ />}
            </RoomContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage