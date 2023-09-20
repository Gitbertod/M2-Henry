import React from 'react';
import styledAnimals from './Animals.module.css'

// export default class Animals extends React.Component {
//   constructor(props) {
//     super();
//   }

//   render() {
//     return <div></div>
//   }
// }

const Animals = ({ animals,index }) => {
  return (
    <div key={index}>
      {
        animals.map((animal) => {

          return (
            <div>
              <h5>{animal.name}</h5>
              <img src={animal.image} alt={animal.name} width='300px'></img>
              <span>{animal.specie}</span>
            </div>
          )
        })
      }
    </div>

  );
}

export default Animals;