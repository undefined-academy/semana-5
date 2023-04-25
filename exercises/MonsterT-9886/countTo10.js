function imprimirNumeros() {
    let i = 1;
    const intervalId = setInterval(() => {
      console.log(i);
      i++;
      if (i > 10) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  imprimirNumeros();