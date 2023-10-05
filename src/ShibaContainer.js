import { React, useState } from 'react';
import ShibaItem from './ShibaItem'

let ShibaContainer = (props) => { // arrow fn component
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }
  
  return (
    <div>
      <label>
        Search for a Shiba by name: 
        <input 
          name='myInput' 
          onChange={inputHandler}
        />
      </label>
      <ShibaItem input={inputText}/>
    </div>
  )
} 

export default ShibaContainer;
