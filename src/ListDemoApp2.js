import React, {useState} from "react";
 
function MemberTable({ members }) {
  return (
   
    <table>
      <thead></thead>
      <tbody>
        {members.map (m => {
          return ( 
              <tr> 
                <td>{m.name} </td>
                <td>{m.age} </td>
              </tr>


          )
        })}


      </tbody>
    </table>
   
  );
}
 
function MemberDemo(props) {
  return (
    <div >
           <h1>Onsdags Opgave</h1>
      <h4>All Members</h4>
      <MemberTable members={props.members} />

    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
