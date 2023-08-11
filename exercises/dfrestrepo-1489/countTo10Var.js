var number = 1;
function contarDiez() {
  for (var i = number; i <= 10; i = i + 1) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}
//contarDiez();

// solución real
function contarDiezBien() {
  for (var i = number; i <= 10; i = i + 1) {
    function imprimir(i) {
      return function () {
        console.log(i);
      };
    }

    setTimeout( imprimir(i), 1000 * i);
  }
}
contarDiezBien();
