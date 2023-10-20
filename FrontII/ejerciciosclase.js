Integración de contenido:

1) Crear un array llamado misMascotas 

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.

*/

/* Similar String

Debés crear una función llamada `split`
que reciba un `string` 
y simule el comportamiento de la función original, Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

El método split(), separa un String y lo convierte en un Arreglo con sus distintas posiciones.

Ejemplo: 

split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
 */
/* 
Sumatoria
    Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo: 
sumattion(3) debe retornar 6 porque hace (1 +2 +3)
sumattion(8) debe retornar 36

Equipo 7

Xochitl Avila
Jessica Martínez Alee
Diana Alderete
Dalia Barranc Giles
Jean Franco Tineo Atunca
Liceth Paola Trejos Suarez
Luisa Fernanda Paredes Erazo
Bryan López
Paola Trejos

*/



const misMascotas = [
    { nombre: "Firulais", raza: "Doberman", edad: 2, sonido: "woof", retornarSonido: function () {return this.sonido +' '+ this.sonido }},
    { nombre: "Pancho", raza: "Chihuahua", edad: 7, sonido: "woof", retornarSonido: function () {return this.sonido +' '+ this.sonido }},
    { nombre: "Luna", raza: "Persa", edad: 5, sonido: "miaw", retornarSonido:  function() {return this.sonido +' '+ this.sonido}},
    { nombre: "Laika", raza: "Pastor Alemán", edad: 3, sonido: "woof", retornarSonido: function() { return this.sonido +' '+ this.sonido}},
];

console.log("misMascotas", misMascotas[0].retornarSonido())

function aumentarEdad() {
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].edad++;
    }
    return misMascotas;
}

console.log("aumentaredad", aumentarEdad())

function aumentarEdad2() {
    for (let i = 0; i < misMascotas.length; i++) {
        if (misMascotas[i].edad < 6) {
            misMascotas[i].edad++;
        }
        else if (misMascotas[i].edad <= 10 && misMascotas[i].edad >= 6) {
            misMascotas[i].edad = misMascotas[i].edad + 2;
        }
        else if (misMascotas[i].edad > 10) {
            misMascotas[i].edad = misMascotas[i].edad + misMascotas[i].edad / 2;
        }

    }
    return misMascotas;

}

console.log("Aumentar edad 2", aumentarEdad2())

const generadorId = () => {
    let id = 1;
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].id = id;
        id++;
    }
    return misMascotas;
}

console.log("generadorID", generadorId())
const split = (pm_string) => {
    let result = [];

    for (var i = 0; i < pm_string.length; i++) {
        result.push(pm_string[i]);
    }

    return result;
}
console.log("split", split("Equipo 7"))


const summation = (pm_number) => {
    let suma = 0;

    for (let i = 1; i <= pm_number; i++) {
        suma += i;
    }
    return suma;
}
// const prueba3 = summation(6):
console.log("summation", summation(3));





//Loop de impares ¿de donde salio este ejercicio? => estaba en los mensajes :)

function loopDeImpares(numero, palabra) {
    for (let i = 0; i <= 100; i++) {
        const suma = numero + i;

        console.log(i);

        if (suma % 2 !== 0){
            console.log(palabra);
        }
    }
}