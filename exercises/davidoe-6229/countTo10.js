const ONE_SEC_IN_MS = 1000;


function main() {
    for (let i = 1; i <=10; i++){
        function print() {console.log(i)}
        setTimeout(print, ONE_SEC_IN_MS * i)
    }
}


main()
