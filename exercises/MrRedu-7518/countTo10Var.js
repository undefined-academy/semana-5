// Clase 3, semana 5

// Función que imprima los números del 1 al 10, un número
// cada segundo, pero usando un ciclo for con un var.

let ONE_SEC_IN_MS = 1000;
function increment() {

    let number = 1;
      // ¿Esto es trampa? 🤔🙄 jajajaja
  
    for (var i = 1; i <= 10; i++) {
      let imprimir = () => console.log(number++)
      setTimeout(imprimir, ONE_SEC_IN_MS * i)
    }
  
}
increment()
  