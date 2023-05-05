const ONE_SECOND_IN_MS = 1000

function imprimirNumero(){
        for (let i = 1; i <= 10; i++) {
            function imprimir() {
                console.log(i);
            }
            setTimeout(imprimir, ONE_SECOND_IN_MS *i);
    }
}

imprimirNumero();