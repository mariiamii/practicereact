import React from 'react';
import data from './data.js'

let ShibaItem = (props) => {
  // let {name, image} = props // destructuring

  // let handleClick = () => { // callback fn
  //   console.log("❤️ for " + props.name)
  // }
  
  console.log(props.input)
  let filteredData = data.filter((shibaItem) => {
    if (props.input === '') {
      return shibaItem
    } else {
      return shibaItem.name.toLowerCase().includes(props.input)
    }
  })

  return (
    <div className='shiba-container'>
      {filteredData.map((shiba) => (
        <ul className='shiba-ul'>
            <li>
              <img key={shiba.id} src={shiba.img} alt="shiba" className="shiba-img"/>
              <p>Name: {shiba.name}</p>
            </li>
        </ul>
      ))}
    </div>
  ) 
}
  
  export default ShibaItem; 
  
  // <div>
  //   <img src={image} alt="shiba" className="shiba-img"/>
  //   <p>Name: {name}</p>
  //   {/* <button onClick={handleClick}>❤️</button> */}
  // </div>
  