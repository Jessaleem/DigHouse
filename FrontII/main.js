const prompt = require('prompt-sync')({ sigint: true });

// let nombre = prompt('escriba su nombre ');
// function saludar(nomb) {
//   console.log(`Hola ${nomb}`);
// }

// saludar(nombre);

//Datos cuenta Bancaria

/*let id = prompt('Ingrese su número de identificación');
let nombre = 'Daniel';
let edad = 37;
let numeroDeCuenta = 4785639623;
let saldo = 10369789;
let moneda = 'COP';
let cuentaActiva = true;

//La diferencia es que en la línea 2 se envía un valor fijo y en la línea 3 se imprime una variable. Mejor opción es guardar el número en una variable, más acorde a los casos de uso cotidianos.

//Se podría utilizar una variable auxiliar para almacenar los valores de una de las variables y así no perder la información

let cajonRemeras = 'pantalones';
let cajonPantalones = 'remeras';
let variableAux = cajonRemeras;
cajonRemeras = cajonPantalones;
cajonPantalones = variableAux; */

function saludar(nombre) {
  return 'Hola, ' + nombre + '!';
}

// let saludar = (nombre) => nombre;

// console.log('hola mi nombre es ' + saludar('Jess'));
