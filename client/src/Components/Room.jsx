import React from 'react'
import '../Styles/Room.css'
import { useContext } from 'react';
import { RoomContext } from '../contexts/roomContext';


const Room = (props) => {
  const { rooms, changeRooms } = useContext(RoomContext);

  function clearRoom(roomNumber) {
    console.log(roomNumber);
    console.log(rooms);
    const newArray = [...rooms];
    newArray.splice(roomNumber);
    console.log(newArray);
    changeRooms([
      ...rooms.slice(0, roomNumber),
      ...rooms.slice(roomNumber + 1)
    ]);
    console.log(rooms);
  }

  return (
    <div className="room-room">
      Room Name: {props.name}
      <div className="room-number">
        Room Number: {props.number}
      </div>
      <div className='room-link'>
        <a href="">Link:</a>
      </div>
      <button onClick={() => clearRoom(props.number - 1)}>
        Clear Room
      </button>
    </div>
  )
}

export default Room;