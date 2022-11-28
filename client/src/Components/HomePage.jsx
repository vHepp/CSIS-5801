import React from 'react'
import { useState, useContext, useReducer, useMemo } from 'react'
import '../Styles/HomePage.css'
import Room from './Room.jsx'
import InviteTest from './InviteTest.jsx'
import Board from './classroom/Board.jsx'
import { roomContext } from "../contexts/roomContext.js";
import { userContext } from "../contexts/userContext.js";
import { RoomReducer, RoomInitialState } from '../reducers/roomReducer';

const HomePage = () => {
  // reducer
  const [roomState, roomDispatch] = useReducer(RoomReducer, RoomInitialState);
  const RoomValue = useMemo(() => ({ roomState, roomDispatch }), [roomState, roomDispatch]);

  //state variables
  const [roomCount, changeRoomCount] = useState(0);
  const [openRooms, changeOpenRooms] = useState(3);
  const [rooms, changeRooms] = useState([]);
  const [roomIDs, setRoomIDs] = useState([]);
  const [homeError, setHomeError] = useState([]);
  const [roomOneUsers, changeRoomOneUsers] = useState([]);
  const [roomTwoUsers, changeRoomTwoUsers] = useState([]);
  const [roomThreeUsers, changeRoomThreeUsers] = useState([]);

  //context variables
  const { state, disbatch } = useContext(userContext);

  // grab displayName and create greeting NOT WORKING
  let name;
  let greeting;
  if (state) {
    name = state.displayName;
    greeting = <span>Hi {name},</span>
  } else {
    name = "";
    greeting = <span>Hi, </span>
  }

  function getID() {
    let newID;
    let unique = false;
    while (!unique) {
      newID = ((Math.random() * 3) + 1);
      newID = newID.toFixed(3);
      if (roomIDs.includes(newID)) {
        continue;
      } else {
        setRoomIDs(roomIDs => [...roomIDs, newID])
        unique = true
      }
    }
    return newID;
  }

  function addRoom() {
    console.log("adding room");
    //if the rooms array is full then do not add
    if (rooms.length >= 3) {
      setHomeError('Maximum number of rooms reached.');
      return;
    }

    //get the input name and then empty the input field
    let name = document.getElementById('addRoomBtn').value;
    document.getElementById('addRoomBtn').value = "";

    //if there is a name and it is not already in the array, add
    if (name.length > 0 && (rooms.findIndex(e => e.name === name) === -1)) {
      setHomeError();
      let id = getID();
      console.log(id);
      changeRooms(rooms => [...rooms, { id: id, name: name, /* room: <Room name={name} id = {id}/> */ }]);
      changeRoomCount(roomCount + 1);
      changeOpenRooms(openRooms - 1);
    } else {
      if (name.length <= 0) {
        setHomeError('Room names can not be blank.');
      } else {
        setHomeError('That room name is already in use.');
      }
      return;
    }
  }

  return (
    <div className='home-main'>
      <div className='home-intro'>
        <p>
          {greeting} welcome to KeithBoard!
        </p>
        <p>
          An interactive virtual classroom designed for
          group communication.
        </p>
        <p>
          Use the box below to name an open room. There is a limit of 3 rooms.
        </p>
        <div>
          <input
            id="addRoomBtn"
            placeholder="Room Name"
            className="home-input"
          ></input>
          <p>
            <button className="button" onClick={() => addRoom()}>
              Add Room
            </button>
          </p>
          <p id="home-error">{homeError}</p>
          <div>
            Room Count: {roomCount}
          </div>
          <div>
            Available Rooms: {openRooms}
          </div>
        </div>
        <div>
          <div className="home-OpenedRooms">
            Opened Rooms:
            <roomContext.Provider value={{
              rooms, changeRooms,
              roomCount, changeRoomCount,
              openRooms, changeOpenRooms,
              roomOneUsers, changeRoomOneUsers,
              roomTwoUsers, changeRoomTwoUsers,
              roomThreeUsers, changeRoomThreeUsers
            }}>
              {/* {rooms.map(room => {
                return (
                  room.room
                );
              })} */}
              {rooms.map(room => {
                return (
                  <Room name={room.name} id={room.id} key={room.id} />
                );
              })}
            </roomContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
