function printNumbers() {
  for (var i = 1; i <= 10; i++) {
    delay(i);
  }
}

function delay(i) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

printNumbers();
