// Ejercicio 1.

function datoTipo(valor1, valor2) {
  if (typeof valor1 === 'number' && typeof valor2 === 'number') {
    return valor1 * valor2;
  }
  if (typeof valor1 === 'string' && typeof valor2 === 'string') {
    return `${valor1} ${valor2}`;
  }
  if (typeof valor1 === 'boolean' && typeof valor2 === 'boolean') {
    return false;
  }
}

console.log(datoTipo(10, 5));
console.log(datoTipo('Hola', 'Mundo'));
console.log(datoTipo(true, false));

// Ejercicio 2.
const persona = {
  nombre: 'Lucía',
  apellido: 'Molina',
  edad: 7,
  esArgentino: false,
};

function validaciones(persona) {
  if (persona.edad >= 18) {
    if (persona.esArgentino === true) {
      return `${persona.nombre} ${persona.apellido} vive en Argentina y es mayor de edad`;
    } else {
      return `${persona.nombre} ${persona.apellido} No vive en Argentina y es mayor de edad`;
    }
  }
  if (persona.edad < 18) {
    if (persona.esArgentino === true) {
      return `${persona.nombre} ${persona.apellido} vive en Argentina y NO es mayor de edad`;
    } else {
      return `${persona.nombre} ${persona.apellido} NO vive en Argentina y NO es mayor de edad`;
    }
  }
}

console.log(validaciones(persona));

//Ejercicio 2.
function verificacionDeTiposDeDatos(dato1, dato2) {
  if (
    (dato1 === true || dato1 === false) &&
    (dato2 === true || dato2 === false)
  ) {
    return `Son del mismo tipo (boolean)`;
  } else if (
    dato1 !== true &&
    dato1 !== false &&
    dato2 !== true &&
    dato2 !== false
  ) {
    return `Son del mismo tipo (string)`;
  } else {
    return `No son del mismo tipo`;
  }
}

console.log(verificacionDeTiposDeDatos('false', false));

//Ejercicio 3.
let destinos = [];

let brasil = {
  cantidadDeVisitas: 3,
  clima: 'soleado',
  habitantes: '212 millones',
};

let rusia = {
  cantidadDeVisitas: 4,
  clima: 'frío',
  habitantes: '144 millones',
};

let estadosUnidos = {
  cantidadDeVisitas: 1,
  clima: 'nublado',
  habitantes: '329 millones',
};

destinos.push(brasil);
destinos.push(rusia);
destinos.push(estadosUnidos);
console.log(destinos);

function siguienteViaje(destinos) {
  for (let destino of destinos) {
    destino.cantidadDeVisitas = destino.cantidadDeVisitas + 1;
  }
  return destinos;
}

console.log(siguienteViaje(destinos));
