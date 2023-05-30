//Hacer una función que imprima los números del 1 al 10, un número cada segundo, pero usando un ciclo for con un var.

const oneSeg = 1000;

function numberCount(number) {
    for (var i = number; i >= 1; i--) {
        let count = i;
        setTimeout(() => {
            console.log(count);
        }, (number - i) * oneSeg, i);
    }
}

numberCount(10);