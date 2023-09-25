import React, { useState} from 'react';
import ShibaItem from './ShibaItem';

let ShibaContainer = (props) => { // arrow fn component
  // console.log("THIS IS THE PROPS OF SHIBA CONTAINER:", props)
  let [changeText, setChangeText] = useState(true);

  const handleChange = () => {
    return setChangeText(!changeText);
  }

  return (
    <main>
      <p>{props.title}</p>
      <button onClick={() => handleChange()}>Click me</button>
      <div>
        {changeText ? (
          <>
            <ShibaItem 
              id={1} 
              name="Charlie" 
              gender="male"
              imgURL= "https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-puppy-standing-outdoors.jpg"
            />
            <ShibaItem 
              id={2} 
              name="Felix" 
              gender="male"
              imgURL="https://everylittlename.com/wp-content/uploads/2022/07/shiba-inu-standing-grass.jpg"
            /> 
          </>
          ) : (
          <>
            <ShibaItem 
              id={3} 
              name="Lilo" 
              gender="female"
              imgURL="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_620/MTk2MzA1MDEwMTg5OTM1OTIw/strong-and-feminine-shiba-inu-names.webp"
            />
            <ShibaItem 
              id={4} 
              name="Eevee" 
              gender="female"
              imgURL="https://i.pinimg.com/1200x/67/5a/8e/675a8e274eaea3ba80200c0979386eab.jpg"
            />
          </>
          )
        }
      </div>
    </main>
  )
} 

export default ShibaContainer;
