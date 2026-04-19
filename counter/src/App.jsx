import './App.css';
import {useState} from 'react';

function App() {
  // The count is the state variable here and Setcount is the function that updates the count variable
  const [count , Setcount] = useState(0);
 // useState is a hook and the value passed in it only renders once at the start 

  return(
    <div>
      <h1>Counter App</h1>
      <h1>Count : {count}</h1>

      <button onClick={() => Setcount(count + 1)}>

        Increment</button>
      <button onClick={() => Setcount(count - 1)}>

        Decrement</button>
      <button onClick={() => Setcount(0)}>

        Reset</button>
    </div>
  )

}

export default App;

/* setcount(count+1)
  setcount(count+1)
  setcount(count+1)
  Even if we write it three times the count will only increase by 1 because the value of count is 0 at the start and it will not change until the next render
  To update the value for next render we use arrow function in setcount like this
  setcount((prevCount) => prevCount + 1)
  setcount((prevCount) => prevCount + 1)
  setcount((prevCount) => prevCount + 1)
  Now the count will increase by 3 because we are using the previous value of count to update it */