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

//If the square is already filled,
// you will return early before the board state gets updated.
//Call calculateWinner to check if a player has won.
  if (squares[i] || calculateWinner(squares)){
    return;
  }
//This function allows players to alternate between X and O as they click on squares
  const nextSquares = squares.slice();
  if (xIsNext){
    nextSquares[i] = "X";
  }else{
    nextSquares[i] = "O";
  }
//calling setSquares lets react know the state of the component has changed  
  setSquares(nextSquares);
  setXIsNext(!xIsNext);
}

const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = "Winner: " + winner;
  }else{
    status = "Next player:" + (xIsNext ? "X" : "O");
  }

  return(
    <>
    <div className='status'>{status}</div>
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

function calculateWinner(squares){
  //This function takes an array of 9 squares, checks for a winner and
  // returns X, O, or null. This function can be placed before or after the
  // Board function.

  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i=0; i < lines.length; i++) {
    const[a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}
