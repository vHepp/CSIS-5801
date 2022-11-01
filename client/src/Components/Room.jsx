import React from 'react'
import '../Styles/Room.css'
import { useContext } from 'react';
import { RoomContext } from '../contexts/roomContext';


const Room = (props) => {
  const { rooms, changeRooms, openRooms, changeOpenRooms, roomCount, changeRoomCount } = useContext(RoomContext);

  function clearRoom(roomNumber) {
    const newArray = [...rooms];
    newArray.splice(roomNumber);
    changeRooms([
      ...rooms.slice(0, roomNumber),
      ...rooms.slice(roomNumber + 1)
    ]);
    changeOpenRooms(openRooms + 1)
    changeRoomCount(roomCount - 1)
  }

  return (
    <div className="room-room">
      Room Name: {props.name}
      <div className="room-number">
        Room Number: {props.number}
      </div>
      <div className='room-link'>
        {props.LinkToWebex}
      </div>
      <button onClick={() => clearRoom(props.number - 1)}>
        Clear Room
      </button>
    </div>
  )
}

export default Room;