import React from 'react'
import '../Styles/Room.css'
import Board from "./classroom/Board.jsx"
import { useContext, useState } from 'react';
import { roomContext } from '../contexts/roomContext';
import { boardContext } from '../contexts/boardContext';

const Room = (props) => {
  // state variables
  const [roomUsers, setRoomUsers] = useState({ i: 2, j: 2, name: (props.id) });
  const [roomID, setRoomID] = useState(props.id);

  // context variables
  const { rooms, changeRooms,
    openRooms, changeOpenRooms,
    roomCount, changeRoomCount,
    } = useContext(roomContext);

  // clear individual room
  function clearRoom() {
    let index = rooms.findIndex(e => e.id === roomID);
    console.log(`clearing room ${roomID} at ${index}`);
    let newArray1 = rooms.slice(0, index);
    let newArray2 = rooms.slice(index + 1);
    let newArray3 = newArray1.concat(newArray2);
    console.log(newArray3)
    changeRooms(newArray3);
    console.table(roomUsers);
    changeOpenRooms(openRooms + 1);
    changeRoomCount(roomCount - 1);

  }

  // add user based on input
  function addUser() {
    let name = document.getElementById('username').value;
  }

  return (
    <div className="room-room">
      Room Name: {props.name}
      <div className="room-number">
        Room Number: { }
      </div>
      <div className="room-number">
      </div>
      <div className='room-link'>
        {props.LinkToWebex}
      </div>
      <boardContext.Provider value={{
        roomUsers, setRoomUsers
      }}>
        <Board roomID={roomID} />
      </boardContext.Provider>
      <button className='clear-button' onClick={() => clearRoom()}>
        Clear Room
      </button>
    </div>
  )
}

export default Room;