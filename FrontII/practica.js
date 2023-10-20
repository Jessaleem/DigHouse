function encontrarMultiplos(num, lim) {
  let arreglo = [];
  for (i = 1; i < lim; i++) {
    if (i % num === 0) {
      arreglo.push(i);
    }
  }
  return arreglo;
}
console.log(encontrarMultiplos(5, 50));
