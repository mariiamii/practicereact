import React from 'react';
// import { shibas } from './shibas.js'

export default function Profile() {
  const shibas = [
    {
        id: 1,
        img: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_620/MTk2MzA1MDEwMTg5OTM1OTIw/strong-and-feminine-shiba-inu-names.webp",
        gender: "Female"
    },
    {
        id: 2,
        img: "https://i.pinimg.com/1200x/67/5a/8e/675a8e274eaea3ba80200c0979386eab.jpg",
        gender: "Female"
    },
    {
        id: 3,
        img: "https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-puppy-standing-outdoors.jpg",
        gender: "Male"
    },
    {
        id: 4,
        img: "https://everylittlename.com/wp-content/uploads/2022/07/shiba-inu-standing-grass.jpg",
        gender: "Male"
    }
]

  let listItems = shibas.map(shiba =>
    <ul key={shiba.id}>
      <img class="img"
        src={shiba.img}
        alt={shiba.gender}
      />
    </ul>
  )

  return (
    <>
      {listItems}
    </>
    // Option 1: return 3 dif Shiba imgs & return Profile component once in Gallery
    // <> 
    //   <img
    //     src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_620/MTk2MzA1MDEwMTg5OTM1OTIw/strong-and-feminine-shiba-inu-names.webp"
    //     alt="Shiba 1"
    //   />
    //   <img 
    //     src="https://i.pinimg.com/1200x/67/5a/8e/675a8e274eaea3ba80200c0979386eab.jpg"
    //     alt="Shiba 2"
    //   />
    // </>
  )
}


