// function tablaDeMultiplicar(numero) {
//   let i = 1;
//   let resultado = 1;
//   while (i <= 10) {
//     resultado = i * numero;
//     console.log(resultado);
//     i++;
//   }
// }
// console.log(tablaDeMultiplicar(5));

// let arrayFrase = [
//   'No',
//   'he',
//   'fracasado,',
//   'simplemente',
//   'me',
//   'he',
//   'topado',
//   'con',
//   'diez',
//   'mil',
//   'soluciones',
//   'equivocadas',
// ];

// let fraseNueva = arrayFrase.join(' ');

// console.log(fraseNueva);

let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio: 9,
    curso: 'Android',
  },
  {
    nombre: 'Daniel',
    promedio: 6,
    curso: 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio: 3,
    curso: 'iOS',
  },
];

estudiantes.push(
  {
    nombre: 'Juan',
    promedio: 5,
    curso: 'iOS',
  },
  {
    nombre: 'Miguel',
    promedio: 2,
    curso: 'Android',
  }
);

console.log(estudiantes);
