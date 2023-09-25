import React from 'react';
// import { shibas } from './shibas.js'

class ShibaItem extends React.Component { // class component
  render() {
    console.log("PROPS OF SHIBA ITEM:", this.props)
    return(
      <div>
        <li>Name: {this.props.name}</li>
        <li>Gender: {this.props.gender}</li>
      </div>
    ) 
  }
}

export default ShibaItem; 
