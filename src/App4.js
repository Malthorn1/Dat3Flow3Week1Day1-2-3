// ONSDAGS OPGAVERNE

import React, { useState, useEffect, useInterval } from "react";


function App() {
  return (
    <div className="App">
      <h1>OnsdagsOpgave</h1>
      <input
        placeholder="Input increment amount"
        type="number"
        id="incrementValue"
      />

      <Counter startCount={0} increaseAmount={2} />
      <Time /> 
      <Jokes /> 
    </div>
  );
}

export default App;

function Counter(props) {
  const [count, setCount] = useState(
    Number(props.startCount) ? props.startCount : 0
  );
  const increase = Number(props.increaseAmount) ? props.increaseAmount : 1;

  function increaseCount() {
    setCount(count + increase);
  }

  function decreaseCount() {
    setCount(count - 1);
  }
  //    console.log (this.state.count)
  return (
    <div>
      <p>Click </p>
      {count} <br></br>
      <button onClick={increaseCount}>Click me to increment </button>
      <button onClick={decreaseCount}>Click me to dencrement </button>
    </div>
  );
}



function Time () {
    const[time, setTime]=useState();
  
    useEffect(()=>{
      setInterval(() => {setTime(new Date().toLocaleTimeString())}, 1000);
    });
  
    return(<>
      <p>The time is:  {time}</p>
    </>);
  }

  function Jokes () {
      const [joke, setJoke] = useState('Chucky boi'); 
      const[daddy, setdaddy] = useState();

       const getChuckyBoi = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {console.log(data.value);setJoke(data.value)});
      }

      useEffect(()=>{
        setInterval(()=>{
          let options = {
            method: 'GET',
            headers: {
              Accept: 'application/json'
            }
          }
          fetch('https://icanhazdadjoke.com/', options)
          .then(res => res.json())
          .then(data => {console.log(data.joke);setdaddy(data.joke)});
        },15000);
      },[]);



      return (<>
        <p>Get your Chuck Norris Joke here!</p>
        <button onClick={getChuckyBoi}>Get Chuck Joke</button><br/><br/>
        <i>{joke}</i><br/><br/><br/>
        <p>mmh dad jokes!</p>
    <i>{daddy}</i>

      </>);


  }



