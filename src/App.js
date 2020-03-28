//TIRSDAGS OPGAVERNE 

import React from 'react';
import './App.css';
import upper, { text1, text2, text3 } from "./File1";

function App() {
  return (
    <div className="App">
      <h1>Tirsdags opgave</h1>
      <p>{upper("please uppercase me test, test, test")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
  );
}

export default App;

