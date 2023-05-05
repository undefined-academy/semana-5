const ONE_SECOND_IN_MS= 1000
    
function imprimirNumeros(){
    for (var i = 1; i <= 10; i++) {
        function print(){
            console.log(i);
        }
        setTimeout(print, ONE_SECOND_IN_MS * i);
    }
}

imprimirNumeros();