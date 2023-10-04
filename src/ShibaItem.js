import React from 'react';

let ShibaItem = (props) => {
  let {name, image} = props // destructuring

  // let handleClick = () => { // callback fn
  //   console.log("❤️ for " + props.name)
  // }
  
  return(
    <div>
      <img src={image} alt="shiba" className="shiba-img"/>
      <li>Name: {name}</li>
      {/* <button onClick={handleClick}>❤️</button> */}
    </div>
  ) 
}

export default ShibaItem; 
