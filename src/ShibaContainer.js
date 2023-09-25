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
                        <ShibaItem name="Charlie" gender="male"/>
                        <ShibaItem name="Felix" gender="male"/> 
                    </>
                    ) : (
                    <>
                        <ShibaItem name="Lilo" gender="female"/>
                        <ShibaItem name="Eevee" gender="female"/>
                    </>
                    )
                }
            </div>
        </main>
    )
} 

export default ShibaContainer;
