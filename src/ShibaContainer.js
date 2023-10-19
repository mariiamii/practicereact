import { React, useState, useEffect } from 'react'; // declares a state variable
import ShibaItem from './ShibaItem'

let ShibaContainer = (props) => { // arrow fn component
  const [randomPerson, setRandomPerson] = useState(null);
  const [searchboxInput, setSearchboxInput] = useState("");

  // Fetching a random user from API:
  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json()) // .then is the promise
      .then((data) => {
        setRandomPerson(data.results[0].gender);
        // console.log("data from fetch", data.results[0].gender);
      })
      .catch((error) => console.log(error));
  }, []);

  // Event handler fn:
  let handleInput = (evt) => {
    // console.log(evt.target.value)
    let lowerCase = evt.target.value.toLowerCase();
    setSearchboxInput(lowerCase);
  }
  
  return (
    <div>
      <label>
        Search for a Shiba by name: 
        <input 
          name='myInput' 
          onChange={handleInput}
          />
      </label>
      <p>Random person gender: {randomPerson}</p>
      <ShibaItem input={searchboxInput}/>
    </div>
  )
} 

export default ShibaContainer;

// Exercise practice:
// let ShibaContainer= (props) => {
//   // Syntax: const [state, setState] = useState(initialState);
//   const [nameInput, setNameInput] = useState("");
//   const [difficultyInput, setDifficultyInput] = useState("");
//   const [equipmentInput, setEquipmentInput] = useState("");

//   let inputHandler = (e) => { // event.target
//     let lowerCase = e.target.value.toLowerCase();
//     setNameInput(lowerCase);
//     setDifficultyInput(lowerCase);
//     setEquipmentInput(lowerCase);
//   }
  
//   return (
//     <div>
//       <label>
//         Search for exercise by name: 
//         <input 
//           name='myInput' 
//           onChange={inputHandler}
//         />
//       </label>
//       <ShibaItem 
//         nameInput={nameInput}
//         difficultyInput={difficultyInput}
//         equipmentInput={equipmentInput}
//       />
//     </div>
//   )
// }

// export default ShibaContainer
