import React, {useState} from "react";
 
const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {
      console.log(event.target.value)
      setName(event.target.value)

  }
  function handleSubmit(event) {
      event.preventDefault(); 
      console.log('You wrote the name: ' + name);
      alert('You wrote the name: ' + name)
  }
 
  return (
    <div>
             <h1>Torsdags Opgave</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
