//Hacer una función que imprima los números del 1 al 10, un número cada segundo.
const oneSeg = 1000;

function numberCount(number) {
    for (let i = number; i >= 1; i--) {
        setTimeout(() => {
            console.log(i);
        }, (10 - i) * oneSeg);
    }
}

numberCount(10);