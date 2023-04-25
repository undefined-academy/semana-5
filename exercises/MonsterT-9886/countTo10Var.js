function imprimirNumeros() {
    for (var i = 1; i <= 10; i++) {
      (function (num) {
        setTimeout(function () {
          console.log(num);
        }, num * 1000);
      })(i);
    }
  }
  
  imprimirNumeros();

  
  // es necesario usar una funcion anonima para que tome la I global 