import { React, useState } from 'react'; // declares a state variable
import ShibaItem from './ShibaItem'

// Jokes:
let ShibaContainer= (props) => {
  // Syntax: const [state, setState] = useState(initialState);
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => { // event.target
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
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
      <ShibaItem input={inputText}/>
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