/* Importo la constante PI, y las funciones sumar y
multiplicar del módulo matematica y las utilizo. */
// La siguiente línea importa una constante y dos funciones para luego utilizarlas.
import {PI, sumar, multiplicar, dividir, restar} from './modules/matematica.js';

let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.

let suma = sumar(numero1, numero2); // Uso la función sumar importada.
let resta = restar(numero1, numero2);
let division = dividir(numero1, numero2);
let multiplicacion = multiplicar(numero1, numero2); 

console.log(`sumar(${numero1}, ${numero2}) = ${suma}`);
console.log(`resta(${numero1}, ${numero2}) = ${resta}`);
console.log(`division(${numero1}, ${numero2}) = ${division}`);
console.log(`multiplicacion(${numero1}, ${numero2}) = ${multiplicacion}`);