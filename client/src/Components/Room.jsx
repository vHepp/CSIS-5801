import React from 'react'
import '../Styles/Room.css'
import Board from "./classroom/Board.jsx"
import { useContext, useState } from 'react';
import { RoomContext } from '../contexts/roomContext';
import { BoardContext } from '../contexts/boardContext';


const Room = (props) => {
  const { rooms, changeRooms, 
          openRooms, changeOpenRooms, 
          roomCount, changeRoomCount,
          roomOneUsers, changeRoomOneUsers,
          roomTwoUsers, changeRoomTwoUsers,
          roomThreeUsers, changeRoomThreeUsers} = useContext(RoomContext);
  const [roomUsers, setRoomUsers] = useState({i: 2, j: 2, name: "B"});

  function clearRoom(roomNumber) {
    const newArray = [...rooms];
    newArray.splice(roomNumber);
    changeRooms([
      ...rooms.slice(0, roomNumber),
      ...rooms.slice(roomNumber + 1)
    ]);
    changeOpenRooms(openRooms + 1);
    changeRoomCount(roomCount - 1);
  }

  function addUser() {
    let name = document.getElementById('username').value;
    const roomNumber = props.number;
    console.log(name);
    // if (roomNumber === 1) {
    //   changeRoomOneUsers(roomOneUsers => [...roomOneUsers, name]);
    // }
    // else if(roomNumber === 2) {
    //   changeRoomTwoUsers(roomTwoUsers => [...roomTwoUsers, name]);
    // }
    // else if(roomNumber === 3) {
    //   changeRoomThreeUsers(roomThreeUsers => [...roomThreeUsers, name]);
    // }
  }

  return (
    <div className="room-room">
      Room Name: {props.name}
      <div className="room-number">
        Room Number: {props.number}
      </div>
      <div className="room-number">
        Users:{props.number}
      </div>
      <div>
      <input id="username" placeholder="Username" className='home-input'></input>
      <div>
        <button className="button" onClick={() => addUser()}>Add User</button>
      </div>
      </div>
      <div className='room-link'>
        {props.LinkToWebex}
      </div>
        <BoardContext.Provider value={{
          roomUsers, setRoomUsers
        }}>
        <Board/>
        </BoardContext.Provider>
      <button className='clear-button' onClick={() => clearRoom(props.number - 1)}>
        Clear Room
      </button>
    </div>
  )
}

export default Room;