let total = 0;

function calculandoCuadrado(numero) {
  return new Promise(function (resolve) {
    const result = numero + 1;

    setTimeout(function () {
      //se reempla
      resolve(result);
    }, 1000);
  });
}

// Intento 1
// async function main() {
//     console.log(0)
//     const result = await calculandoCuadrado(0);
//     console.log(result)
//     const result2 = await calculandoCuadrado(result);
//     console.log(result2)
//     const result3 = await calculandoCuadrado(result2);
//     console.log(result3)
//     const result4 = await calculandoCuadrado(result3);
//     console.log(result4)
//     const result5 = await calculandoCuadrado(result4);
//     console.log(result5)
//     const result6 = await calculandoCuadrado(result5);
//     console.log(result6)
// }

// main()

// intento 2
// for (let i = total; i < 10; i++) {
//   async function main() {
//     const result = await calculandoCuadrado(total);
//     console.log(result);
//   }
//   main()
// }


// intento 3
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i); 
}

