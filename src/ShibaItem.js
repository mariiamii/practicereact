import React from 'react';
// import { shibas } from './shibas.js'

let ShibaItem = (props) => {
    // console.log("PROPS OF SHIBA ITEM:", props)
    let {name, gender, imgURL} = props // destructuring
    
  return(
    <div>
      <li>Name: {name}</li>
      <li>Gender: {gender}</li>
      <img src={imgURL} alt="shiba"/>
    </div>
  ) 
}

export default ShibaItem; 
