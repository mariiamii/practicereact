import React from 'react';
import data from './data.js'
import ShibaItem from './ShibaItem'

let ShibaContainer = (props) => { // arrow fn component
  return (
    <main>
      <label>
        Search for a Shiba by name: <input name="myInput" />
      </label>

      <ul>
        {data.map((shiba) => (
          <ShibaItem 
            name={shiba.name}
            image={shiba.img}
          />
        ))}
      </ul>
    </main>
  )
} 

export default ShibaContainer;
