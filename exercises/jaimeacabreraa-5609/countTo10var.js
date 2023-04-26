function cuentaProgresiva() {
  for (var i = 1; i <= 10; i++) {
    (function (j) {
      setTimeout(() => console.log(j), j * 1000);
    })(i);
  }
}

cuentaProgresiva();
