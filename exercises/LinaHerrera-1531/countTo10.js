function printNumbersWithDelay() {
    return new Promise((resolve, reject) => {
        let count = 1;

        const intervalId = setInterval(() => {
            console.log(count);

            if (count === 10) {
                clearInterval(intervalId);
                resolve();
            } else {
                count++;
            }
        }, 1000);
    });
}

printNumbersWithDelay()
    .then(() => console.log("Finalizado"))
    .catch((err) => console.error(err));

//otra forma 
    for(let i =1; i<=10; i++){
        function imprimir(){console.log(i)}
        setTimeout(imprimir, 1000*i)
    }