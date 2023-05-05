const SECOND_IN_MS = 1000

function imprimirNumero(){
        for (let i = 1; i <= 10; i++) {
        setTimeout(function(){
            console.log(i);
    }, (i + 1)*SECOND_IN_MS)
    }
}

imprimirNumero();