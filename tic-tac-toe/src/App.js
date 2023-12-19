import {useState} from 'react';

function Square({value, onSquareClick}){
  //const [value, setValue] = useState(null); //REMOVED
  //value stores the value
  //setValue is a function that can be used to change the value
  //the null passed to useState is used as the initial value for this state variable

  //function handleClick(){
    //console.log('clicked');
    //setValue('X');
  //} REMOVED

  return(
    <button
      className = "square"
      //onClick = {handleClick} //calling function above //REMOVED
      onClick = {onSquareClick} //onClick calling a new function
    >
      {value}
    </button>
  );
}

//IMPORTANT
//To collect data from multiple children or to have two child components communicate w/each other,
// declare the shared state in their parent component instead.
//The parent component can pass that state back to the children via props. Keeping children & parent in sync.

export default function Board(){
//Set the first move to be of "X" by default. 
  const [xIsNext, setXIsNext] = useState[true];

//squares defaults to an array of 9 squares
//the array has 9 squares initialized to null
//Filling the board later will look like the following:
// ['O','null','X','X','X','O','O','null','null'] 
const [squares, setSquares] = useState(Array(9).fill(null));

function handleClick(i){ //NEW handeClick function
//This function creates a copy of the squares array(nextSquares) with the slice array method
//handleClick updates the nextSquares array to add X to the squares
//calling setSquares lets react know the state of the component has changed
  const nextSquares = squares.slice();
  if (xIsNext){
    nextSquares[i] = "X";
  }else{
    nextSquares[i] = "O";
  }
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
}

  return(
    <>
    <div className="board-row">
      <Square value = {squares[1]} onSquareClick={() => handleClick(0)}/>
      <Square value = {squares[2]} onSquareClick={() => handleClick(1)}/>
      <Square value = {squares[3]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value = {squares[4]} onSquareClick={() => handleClick(3)}/>
      <Square value = {squares[5]} onSquareClick={() => handleClick(4)}/>
      <Square value = {squares[6]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value = {squares[7]} onSquareClick={() => handleClick(6)}/>
      <Square value = {squares[8]} onSquareClick={() => handleClick(7)}/>
      <Square value = {squares[9]} onSquareClick={() => handleClick(8)}/>
    </div>
  </>
  );
}
