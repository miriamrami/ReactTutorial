import {useState} from 'react';

function Square({value}){
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
      //onClick = {handleClick} //calling function above
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
//squares defaults to an array of 9 squares
//the array has 9 squares initialized to null
//Filling the board later will look like the following:
// ['O','null','X','X','X','O','O','null','null'] 
const [squares, setSquares] = useState(Array(9).fill(null));

  return(
    <>
    <div className="board-row">
      <Square value = {squares[1]} />
      <Square value = {squares[2]} />
      <Square value = {squares[3]} />
    </div>
    <div className="board-row">
      <Square value = {squares[4]} />
      <Square value = {squares[5]} />
      <Square value = {squares[6]} />
    </div>
    <div className="board-row">
      <Square value = {squares[7]} />
      <Square value = {squares[8]} />
      <Square value = {squares[9]} />
    </div>
  </>
  );
}
