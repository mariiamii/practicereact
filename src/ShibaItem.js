import React from 'react';
// import { shibas } from './shibas.js'

let ShibaItem = (props) => {
    // console.log("PROPS OF SHIBA ITEM:", props)
  return(
    <div>
      <li>Name: {props.name}</li>
      <li>Gender: {props.gender}</li>
    </div>
  ) 
}

export default ShibaItem; 
