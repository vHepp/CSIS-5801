import React from 'react'
import Tile from './Tile.jsx'
import '../../Styles/Board.css'
import { useContext, useState, useEffect } from 'react'
import { BoardContext } from '../../contexts/boardContext';

const Board = () => {

  const { roomUsers, setRoomUsers } = useContext(BoardContext);
  const horizontalAxis = [0, 1, 2, 3, 4];
  const verticalAxis = [0, 1, 2, 3, 4];
  // const [board, setBoard] = useState([]);
  let board = [];

  // useEffect (() => {
  //   renderBoard();
  //   console.log("useEffect");
  // }, [roomUsers])

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
  }

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
  }

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
  }

  function moveRight() {
    let i = roomUsers.i;
    if (i === 4) {
      return;
    } else {
      setRoomUsers({
        i: roomUsers.i + 1,
        j: roomUsers.j,
        name: roomUsers.name
      })
    }
  }

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      if ((i === 1 && j === 3) || (i === 3 && j === 1)) {
        board.push(<Tile key={`${i} ${j}`} i={i} j={j} isTable="true" />);
        //setBoard(board => [...board, <Tile key={`${i} ${j}`} i={i} j={j} isTable="true"/>])
      } else {
        board.push(<Tile key={`${i} ${j}`} i={i} j={j} isTable="false" />);
        //setBoard(board => [...board, <Tile key={`${i} ${j}`} i={i} j={j} isTable="false"/>])
      }
    }
  }

  // console.log("before change");
  // roomUsers.name = 'C';
  // console.log("after change");

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