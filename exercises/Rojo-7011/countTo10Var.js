/* Hacer una funcion que imprima los numeros del 1 al 10, 
un numero cada segundo,
pero usando un ciclo for con var en lugar de let
*/ 

const ONE_SECOND_IN_MILISECONDS = 1000

const consoleLog = x => console.log(`${x}`)

// Hacemos uso de closure para encapsular i

for(var i=1; i<=10; i ++){
    function showValue(i){
        return function() {
            consoleLog(i) 
        } 
    }
    setTimeout(showValue(i), ONE_SECOND_IN_MILISECONDS * i)
}