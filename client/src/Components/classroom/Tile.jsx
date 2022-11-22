import React from 'react'
import { useState, useContext } from 'react'
import '../../Styles/Tile.css'
import { BoardContext } from '../../contexts/boardContext';

const Tile = (props) => {

  const handleClick = () => {
    console.log("On Click")
    if (window.confirm('Click \'OK\' to be redirected to a Webex room')) {
      window.open('https://ysu.webex.com/meet/vuhepola', '_blank');
    };
  }


  const { roomUsers, setRoomUsers } = useContext(BoardContext);
  let i = props.i;
  let j = props.j;
  let occupied = false;
  if (roomUsers.i === i && roomUsers.j === j) {
    occupied = true;
  }
  let link = '';
  let isTable = props.isTable;
  if (isTable === 'true') {
    if (occupied) {
      return (

        <div>
          <div className='Tile-Table' style={{ display: "flex", flexFlow: "column nowrap" }}>
            {roomUsers.name}
            <button style={{ fontSize: "20px" }} onClick={() => handleClick()}>Join</button>
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