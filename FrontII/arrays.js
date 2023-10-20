// Ejercicio 1.

let peliculas = [
  'star wars',
  'totoro',
  'rocky',
  'pulp fiction',
  'la vida es bella',
];
console.log(peliculas[3]);

//Ejercicio 2.
let newArray = [];

function convertirMayusculas(array) {
  // let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }
  return newArray;
}
// console.log(convertirMayusculas(peliculas));

// Ejercicio 3.

let peliculasNuevas = [
  'toy story',
  'finding Nemo',
  'kung-fu panda',
  'wally',
  'fortnite',
];

const inicialesMayusc = convertirMayusculas(peliculas);

function agregar(array1, array2) {
  for (let pelicula of array2) {
    array1.push(pelicula.toUpperCase());
  }
  return array1;
}
// console.log(agregar(inicialesMayusc, peliculasNuevas));

// Ejercicio 4.

let todasPeliculas = agregar(inicialesMayusc, peliculasNuevas);
let eliminado = todasPeliculas.pop();
console.log(todasPeliculas, eliminado);

//Ejercicio 5.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function calificaciones(asia, euro) {
  for (let i = 0; i < asia.length; i++) {
    if (asia[i] === euro[i]) {
      console.log(
        `La calificación en Europa y Aisa es igual, tiene una puntuación de ${asia[i]} `
      );
    } else {
      console.log(
        `La calificación en Europa fue ${euro[i]}, mientras que en Asia fue ${asia[i]}`
      );
    }
  }
}

console.log(calificaciones(asiaScores, euroScores));

//Bonus - Array Inverso

let nums = [1, 2, 3, 4, 5];

function imprimirInverso(array) {
  let largo = array.length - 1;
  for (let i = largo; i >= 0; i--) {
    console.log(array[i]);
  }
}

// console.log(imprimirInverso(nums));

function inversor(array) {
  let largo = array.length - 1;
  let inverso = [];
  for (let i = largo; i >= 0; i--) {
    inverso.push(array[i]);
  }
  return inverso;
}
console.log(inversor(nums));

//Bonus - suma Array

function sumaArray(arreglo) {
  let suma = 0;
  for (let item of arreglo) {
    suma = suma + item;
  }
  return suma;
}

console.log(sumaArray([10, 2, 3]));

//Bonus Array.join

function join(array) {
  let string = '';
  for (let i = 0; i <= 3; i++) {
    string += array[i];
  }
  return string;
}

console.log(join(['h', 'o', 'l', 'a']));
