let estudiantes = [
  {
    nombre: 'Cecilia',
    notas: [90, 80, 100, 70],
    aprobado: true,
  },
  {
    nombre: 'Alberto',
    notas: [50, 90, 90, 80],
    aprobado: true,
  },
  {
    nombre: 'Jessica',
    notas: [0, 5, 100, 100],
    aprobado: true,
  },
  {
    nombre: 'Carlos',
    notas: [90, 80, 100, 70],
    aprobado: true,
  },
];
// console.log(estudiantes[0].promedio());

function aprobacion(estudiante) {
  let aprobado = false;
  let promedio = calculaPromedio(estudiante);

  if (promedio > 70) {
    aprobado = true;
  } else {
    aprobado = false;
  }
  return aprobado;
}

// console.log(aprobacion(estudiantes[0]));

function calculaPromedio(estudiante) {
  let sum = 0;
  let prom = 0;
  for (i = 0; i < estudiante.notas.length; i++) {
    sum += estudiante.notas[i];
  }
  prom = sum / estudiante.notas.length;
  return prom;
}
console.log(calculaPromedio(estudiantes[0]));

function aprobacion(prom) {
  let aprobo = true;
  if (prom > 70) {
    aprobo = true;
  } else {
    aprobo = false;
  }
  return aprobo;
}

console.log('aprobacion', aprobacion(calculaPromedio(estudiantes[0])));

function estadoAprobacion(estudiantes) {
  for (const estudiante of estudiantes) {
    console.log(estudiante.aprobado);
  }
}
console.log(estadoAprobacion(estudiantes));

// 3. Arreglos y Bucles - Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

let arregloNums = [2, 10, 35, 4, 9, 6, 7, 15];
let suma = 0;

while (i < arregloNums.length) {
  i++;
  if (arregloNums[i] % 2 === 0) {
    suma += arregloNums[i];
  }
}
console.log(suma);

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

function producto(array2) {
  let multiplicacion = 1;
  for (const number of array2) {
    if (number % 2 != 0) {
      multiplicacion = multiplicacion * number;
    }
  }
  return multiplicacion;
}

console.log(producto([2, 3, 2]));

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

let vehiculo = {
  marca: 'Hyundai',
  modelo: 'Tucson',
  anio: 2009,
  precio: 5000,
  impuesto: function () {
    let valorImpuesto = 0;
    if (this.anio < 2010) {
      valorImpuesto = this.precio * 0.1;
    } else {
      valorImpuesto = this.precio * 0.05;
    }
    return valorImpuesto;
  },
};

console.log(vehiculo.impuesto());
