const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento,incrementoImpar } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
let store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
let valor = document.querySelector('#valor');


// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let counter = store.getState().contador

  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = counter;
}

// Ejecutamos la función 'renderContador':
renderContador()
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:

store.subscribe(renderContador)

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

let buttonInc = document.querySelector("#incremento");
buttonInc.addEventListener('click', () =>
store.dispatch(incremento))

let buttonDec = document.querySelector("#decremento");
buttonDec.addEventListener("click", () =>
  store.dispatch(decremento)
)

let buttonIncImpar = document.querySelector('incrementoImpar');
buttonIncImpar.addEventListener('click',()=> store.dispatch(incrementoImpar))