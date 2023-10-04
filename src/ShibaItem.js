import React from 'react';
// import { shibas } from './shibas.js'

let ShibaItem = (props) => {
  // console.log("PROPS OF SHIBA ITEM:", props)
  let {name, gender, imgURL} = props // destructuring

  let handleClick = () => { // callback fn
    console.log("❤️ for " + props.name)
  }
  
  return(
    <div>
      <img src={imgURL} alt="shiba" className="shiba-img"/>
      <li>Name: {name}</li>
      <li>Gender: {gender}</li>
      <button onClick={handleClick}>❤️</button>
    </div>
  ) 
}

export default ShibaItem; 
