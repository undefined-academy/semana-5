/**
 * Ejercicio
Hacer una función que imprima los números
del 1 al 10, un número cada segundo.
 */

const ONE_SEC_IN_MS = 1000;
let number = 1;

function printNumbers() {
  console.log(number)
  
  if (number === 10) {
    return;
  }

  number = number + 1

  setTimeout(function () {
    printNumbers();
  }, 1 * ONE_SEC_IN_MS);

}

printNumbers();