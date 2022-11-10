import React from 'react'
import {useState, useContext} from 'react'
import '../../Styles/Tile.css'
import { BoardContext } from '../../contexts/boardContext';

const Tile = (props) => {
  const {roomUsers, setRoomUsers} = useContext(BoardContext);
  let i = props.i;
  let j = props.j;
  let occupied = false;
  if(roomUsers.i === i && roomUsers.j === j) {
    occupied = true;
  }
  let link = '';
  let isTable = props.isTable;
  if (isTable === 'true') {
    if (occupied) {
      return(<div className = 'Tile-Table'>{roomUsers.name} Join</div>)
    } else {
      return(<div className = 'Tile-Table'></div>)
    }
  } else {
    if(occupied) {
      return (<div className = 'Tile'>{roomUsers.name}</div>)
    } else {
      return (<div className = 'Tile'></div>)
  }
}
}

export default Tile