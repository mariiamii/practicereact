import React from 'react';
import ShibaItem from './ShibaItem';

let ShibaContainer = (props) => { // arrow fn component
    console.log("THIS IS THE PROPS OF SHIBA CONTAINER:", props)
    return (
        <main>
            <p>{props.title}</p>
            <ul>
                <ShibaItem name="Lilo" gender="female"/>
                <ShibaItem name="Charlie" gender="male"/>
                <ShibaItem name="Eevee" gender="female"/>
                <ShibaItem name="Felix" gender="male"/>
            </ul>
        </main>
    )
} 

export default ShibaContainer;
