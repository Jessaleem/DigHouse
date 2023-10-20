let matriz = [];
for (let i = 0; i <= 99; i = i + 10) {
  let filas = [];
  for (let j = 1; j <= 10; j++) {
    filas.push(i + j);
  }
  matriz.push(filas);
}

// console.table(matriz);
// a. Crear una función que retorne la suma de todos los elementos de la matriz

function sumarTodos(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
  }
  return suma;
}

console.log(sumarTodos(matriz));

//3. a. crear una función que nos retorne la sumatoria de la primer y última columna (sumar la primera Y y la última)
function sumas(matriz) {
  let sumatoria = 0;
  for (let i = 0; i < matriz.length; i++) {
    sumatoria += matriz[i][0];
    sumatoria += matriz[i][matriz[0].length - 1];
  }
  return sumatoria;
}
let resultado = sumas(matriz);
// console.log(resultado);

function sumarDiagonalRoja(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (i === j) {
        suma += matriz[i][j];
      }
    }
  }
  return suma;
}
