//import React from 'react';
import React, { Component } from 'react';
import styledAnimals from './Animals.module.css'

class Animals extends Component {
  render() {
    const { animals } = this.props;

    return (
      <div>
        {animals.map((animal, index) => (
          <div key={index}>
            <h5>{animal.name}</h5>
            <img src={animal.image} width="300px" alt={animal.name} />
            <span>{animal.specie}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Animals;

// const Animals = ({ animals }) => {
//   return (
//     <div>
//       {
//         animals.map((animal,index) => {
//           return (
//             <div key={index}>
//               <h5>{animal.name}</h5>
//               <img src={animal.image} alt={animal.name} width='300px'></img>
//               <span>{animal.specie}</span>
//             </div>
//           )
//         })
//       }
//     </div>

//   );
// }

// export default Animals;