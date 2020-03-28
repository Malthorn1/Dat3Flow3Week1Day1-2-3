//TIRSDAGS OPGAVERNE 
import React from "react";
import File2, { males, females } from "./File2";


const first = File2.firstName;

const email = File2.email;



function App() {
  return (
    <div className="App">
      <h1>Tirsdags opgave</h1>
      <p>
        {first}, {email}
      </p>
      {console.log(...males, first, "Helle", ...females, "Tina")}
    </div>
  );
}

export default App;
