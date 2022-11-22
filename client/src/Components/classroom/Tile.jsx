import React from 'react'
import { useState, useContext } from 'react'
import '../../Styles/Tile.css'
import { boardContext } from '../../contexts/boardContext';

const Tile = (props) => {
  // context variables
  const { roomUsers, setRoomUsers } = useContext(boardContext);

  // user index
  let i = props.i;
  let j = props.j;
  let occupied = false;

  //onlick function to create webex room
  const onClick = () => {
    if (window.confirm('Click \'OK\' to be redirected to a Webex room')) {
      window.open('https://ysu.webex.com/meet/vuhepola', '_blank');
    };
  }

  // if there is a user on this tile occumpied = true
  if (roomUsers.i === i && roomUsers.j === j) {
    occupied = true;
  }

  // if it is a table, render a join btn
  if (props.isTable === 'true') {
    if (occupied) {
      return (

        <div>
          <div className='Tile-Table' style={{ display: "flex", flexFlow: "column nowrap" }}>
            {roomUsers.name}
            <button style={{ fontSize: "20px" }} onClick={() => onClick()}>Join</button>
          </div>
        </div>

      )
    } else {
      return (<div className='Tile-Table'></div>)
    }
  } else {
    if (occupied) {
      return (<div className='Tile' >
        <div >
          {roomUsers.name}
        </div>
      </div>)
    } else {
      return (<div className='Tile'></div>)
    }
  }
}

export default Tile