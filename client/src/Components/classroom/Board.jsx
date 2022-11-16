import React from 'react'
import Tile from './Tile.jsx'
import '../../Styles/Board.css'
import { useContext, } from 'react'
import { boardContext } from '../../contexts/boardContext';

const Board = (props) => {
  //context variables
  const { roomUsers, setRoomUsers } = useContext(boardContext);

  //board axis
  const horizontalAxis = [0, 1, 2, 3, 4];
  const verticalAxis = [0, 1, 2, 3, 4];
  let board = [];
  let roomID = props.roomID;

  //upbtn 
  function moveUp() {
    let j = roomUsers.j;
    if (j === 4) {
      return;
    } else {
      setRoomUsers({
        i: roomUsers.i,
        j: roomUsers.j + 1,
        name: roomUsers.name
      });
    }
    console.log(roomID)
    console.log(" is moving")
  }

  //down btn
  function moveDown() {
    let j = roomUsers.j;
    if (j === 0) {
      return;
    } else {
      setRoomUsers({
        i: roomUsers.i,
        j: roomUsers.j - 1,
        name: roomUsers.name
      });
    }
    console.log(roomID)
    console.log(" is moving")
  }

  //left btn
  function moveLeft() {
    let i = roomUsers.i;
    if (i === 0) {
      return;
    } else {
      setRoomUsers({
        i: roomUsers.i - 1,
        j: roomUsers.j,
        name: roomUsers.name
      });
    }
    console.log(roomID)
    console.log(" is moving")
  }

  //right btn
  function moveRight() {
    let i = roomUsers.i;
    if (i === 4) {
      return;
    } else {
      setRoomUsers({
        i: roomUsers.i + 1,
        j: roomUsers.j,
        name: roomUsers.name
      });
    }
    console.log(roomID)
    console.log(" is moving")
  }

  //push one tile per unique index
  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      if ((i === 1 && j === 3) || (i === 3 && j === 1)) {
        board.push(<Tile key={`${i} ${j}`} i={i} j={j} isTable="true" />);
      } else {
        board.push(<Tile key={`${i} ${j}`} i={i} j={j} isTable="false" />);
      }
    }
  }

  return (
    <div className='Board-wrapper'>
      <div className="Board">{board}</div>
      <div>
        <div className='button-top'>
          <button onClick={() => moveUp()}>Up</button>
        </div>
        <div className='button-bottom'>
          <button onClick={() => moveLeft()}>Left</button>
          <button onClick={() => moveDown()}>Down</button>
          <button onClick={() => moveRight()}>Right</button>
        </div>
      </div>
    </div>
  )
}

export default Board