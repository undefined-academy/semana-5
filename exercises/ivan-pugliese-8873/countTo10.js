const ONE_SEC_IN_MS = 1000;

function main() {
    function imprimir(i) {
        console.log(i)
    }
    for(let i = 1; i <= 10; i++) {
        setTimeout(imprimir, ONE_SEC_IN_MS * i);
    }
}

main();