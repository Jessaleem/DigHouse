//1.
function mostrarNumeros(valor) {
  let limite = valor + 10;

  for (let i = valor + 1; i <= limite; i++) {
    console.log(i);
  }
}
console.log(mostrarNumeros(6)); 5 8 11 14 17 20

//2.
function imprimirNumeros() {
  for (let i = 5; i <= 20; i = i + 3) {
    console.log(i);
  }
}
console.log(imprimirNumeros());

//3.
function sumarNumeros() {
  let suma = 0;
  for (let i = 0; i <= 100; i++) {
    suma = suma + i;
  }
  return suma;
}

console.log(sumarNumeros());

//4.
function factorial(num) {
  if (Number.isInteger(num) && num > 0) {
    let factorialN = 1;
    for (let i = 1; i <= num; i++) {
      factorialN = factorialN * i;
    }
    return factorialN;
  } else {
    console.log('ingrese numero entero y mayor que 0');
  }
}
console.log(factorial(-5));

//5.
function fibonacci(num) {
  let j = 1;
  let k = 1;
  for (let i = 2; i <= num; i++) {
    if (k <= num) {
      console.log(k);
      let l = j + k;
      j = k;
      k = l;
    }
  }
}
console.log(fibonacci(13));
