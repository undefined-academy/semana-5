/* Hacer una funcion que imprima los numeros del 1 al 10, 
un numero cada segundo,
pero usando un ciclo for con var en lugar de let
*/ 

const ONE_SECOND_IN_MILISECONDS = 1000

function printNumber(number) {
    console.log(`${number}`)
}

for(var i=1; i<=10; i++){
    setTimeout(printNumber, ONE_SECOND_IN_MILISECONDS * i)
}

/*Arroja esto
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
*/