import React from 'react';
import data from './data.js'

// Exercise practice:
let ShibaItem = (props) => {
  let filteredData = data.filter((exercisePOJO) => {
    let name = exercisePOJO.name.toLowerCase().includes(props.nameInput);
    let difficulty = exercisePOJO.difficulty.toLowerCase().includes(props.difficultyInput);
    let equipment = exercisePOJO.equipment.toLowerCase().includes(props.equipmentInput);

    if (props.nameInput === '' || props.difficultyInput === '' || props.equipmentInput === '') { 
      return exercisePOJO;
    } else if(name) {
      return name;
    } else if(difficulty) {
      return difficulty;
    } else{
      return equipment;
    }
  });

  return (
    <div className='shiba-container'>
      {filteredData.map((exercise) => (
        <ul className='shiba-ul'>
            <li>
              <p>Name: {exercise.name}</p>
              <p>Difficulty: {exercise.difficulty}</p>
              <p>Equipment: {exercise.equipment}</p>
            </li>
        </ul>
      ))}
    </div>
  ) 
}
  
export default ShibaItem; 



















// Shibas:
// let ShibaItem = (props) => {
//   // let {name, image} = props // destructuring

//   // let handleClick = () => { // callback fn
//   //   console.log("❤️ for " + props.name)
//   // }
  
//   // console.log(props.input)
//   let filteredData = data.filter((shibaItem) => {
//     if (props.input === '') {
//       return shibaItem
//     } else {
//       return shibaItem.name.toLowerCase().includes(props.input)
//     }
//   })

//   return (
//     <div className='shiba-container'>
//       {filteredData.map((shiba) => (
//         <ul className='shiba-ul'>
//             <li>
//               <img key={shiba.id} src={shiba.img} alt="shiba" className="shiba-img"/>
//               <p>Name: {shiba.name}</p>
//             </li>
//         </ul>
//       ))}
//     </div>
//   ) 
// }
  
// export default ShibaItem; 
  
// <div>
//   <img src={image} alt="shiba" className="shiba-img"/>
//   <p>Name: {name}</p>
//   {/* <button onClick={handleClick}>❤️</button> */}
// </div>

// Jokes practice:
// let ShibaItem = (props) => {
//   let filteredData = data.filter((jokePOJO) => {
//     if (props.input === '') {
//       return jokePOJO
//     } else {
//       return jokePOJO.joke.toLowerCase().includes(props.input)
//     }
//   })

//   return (
//     <div className='shiba-container'>
//       {filteredData.map((jokes) => (
//         <ul className='shiba-ul'>
//             <li>
//               <p>{jokes.joke}</p>
//             </li>
//         </ul>
//       ))}
//     </div>
//   ) 
// }
  
// export default ShibaItem; 