import {useState} from 'react';

function Square(){
  const [value, setValue] = useState(null);
  //value stores the value
  //setValue is a function that can be used to change the value
  //the null passed to useState is used as the initial value for this state variable

  function handleClick(){
    //console.log('clicked');
    setValue('X');
  }

  return(
    <button
      className = "square"
      onClick = {handleClick} //calling function above
    >
      {value}
    </button>
  );
}

export default function Board(){
  return(
    <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </>
  );
}
