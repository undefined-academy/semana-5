function num1a10() {
    var numeroActual = 1;
    var intervalId = setInterval(function () {
        console.log(numeroActual);
        numeroActual++;
        if (numeroActual > 10) {
            clearInterval(intervalId);
        }
    }, 1000); // 1000 milisegundos = 1 segundo
}

num1a10();

//otra forma
function main(){
    for(var i =1; i<=10; i=i+1){
        function imprimir(i){
            //hago clousure para q la variable i no se reescriba
        return function (){
            console.log(i)
        }}
        setTimeout(imprimir(i), 1000*i)
} 
}
main()