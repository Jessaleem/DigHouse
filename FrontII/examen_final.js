//Ejercicio 1.

let paises = [
  {
    nombre: 'Argentina',
    continente: 'Sudamérica',
    poblacion: 40000000,
  },
  {
    nombre: 'Colombia',
    continente: 'Sudamérica',
    poblacion: 50372000,
  },

  {
    nombre: 'Brasil',
    continente: 'Sudamérica',
    poblacion: 300000000,
  },
  {
    nombre: 'Etiopía',
    continente: 'África',
    poblacion: 15000000,
  },
  {
    nombre: 'Chile',
    continente: 'Sudamérica',
    poblacion: 10000000,
  },
];

function filtrarPaises(paises, continente, poblacion) {
  let resultado = [];
  for (let i = 0; i < paises.length; i++) {
    if (
      paises[i].continente === continente &&
      paises[i].poblacion >= poblacion
    ) {
      resultado.push(paises[i]);
    } else {
      return 'Párametros no encontrados';
    }
  }
  return resultado;
}

console.log(filtrarPaises(paises, 'Sudamérica', 20000000));

//Ejercicio 2.

let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

function bubbleSort(arreglo, orden) {
  if (orden === 'ASC') {
    for (let i = 0; i < arreglo.length; i++) {
      for (let j = 0; j < arreglo.length - 1; j++) {
        if (arreglo[j] > arreglo[j + 1]) {
          let aux = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = aux;
        }
      }
    }
  } else if (orden === 'DESC') {
    for (let i = 0; i < arreglo.length; i++) {
      for (let j = 0; j < arreglo.length - 1; j++) {
        if (arreglo[j] < arreglo[j + 1]) {
          let aux = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = aux;
        }
      }
    }
  } else {
    return 'No se encontró la opción';
  }

  return arreglo;
}

console.log(bubbleSort(arrayDeNumeros, 'DESC'));

// Ejercicio 3.

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

//a.

function sumarMatriz(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz[0].length; i++) {
    suma += matriz[0][i];
  }
  return suma;
}

console.log(sumarMatriz(matriz));

//b.

function paresMatriz(matriz) {
  let newArray = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        newArray.push(matriz[i][j]);
      }
    }
  }
  return newArray;
}

console.log(paresMatriz(matriz));
