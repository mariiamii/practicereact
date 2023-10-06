import { React, useState } from 'react'; // declares a state variable
import ShibaItem from './ShibaItem'

// Exercise practice:
let ShibaContainer= (props) => {
  // Syntax: const [state, setState] = useState(initialState);
  const [nameInput, setNameInput] = useState("");
  const [difficultyInput, setDifficultyInput] = useState("");
  const [equipmentInput, setEquipmentInput] = useState("");

  let inputHandler = (e) => { // event.target
    let lowerCase = e.target.value.toLowerCase();
    setNameInput(lowerCase);
    setDifficultyInput(lowerCase);
    setEquipmentInput(lowerCase);
  }
  
  return (
    <div>
      <label>
        Search for exercise by name: 
        <input 
          name='myInput' 
          onChange={inputHandler}
        />
      </label>
      <ShibaItem 
        nameInput={nameInput}
        difficultyInput={difficultyInput}
        equipmentInput={equipmentInput}
      />
    </div>
  )
}

export default ShibaContainer




















// let ShibaContainer = (props) => { // arrow fn component
//   const [inputText, setInputText] = useState("");

//   let inputHandler = (e) => {
//     let lowerCase = e.target.value.toLowerCase();
//     setInputText(lowerCase);
//   }
  
//   return (
//     <div>
//       <label>
//         Search for a Shiba by name: 
//         <input 
//           name='myInput' 
//           onChange={inputHandler}
//         />
//       </label>
//       <ShibaItem input={inputText}/>
//     </div>
//   )
// } 

// export default ShibaContainer;