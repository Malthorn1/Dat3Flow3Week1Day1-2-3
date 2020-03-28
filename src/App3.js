//TIRSDAGS OPGAVERNE 

import React from "react";
import File2, {  names } from "./File2";

function Welcome(props) {
  return <h1> Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <h1>Tirsdags Opgave: </h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson names= {names[0]} /> 
    </div>
  );
}

function WelcomePerson(props) {
return <h2>Hej, {props.names.firstName} {props.names.lastName}, {props.names.email}</h2>;
}

export default App;
