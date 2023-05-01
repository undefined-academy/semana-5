const ONE_SECOND_IN_MS = 1000

function generateNumber(number, callback, time){
    setTimeout(() => {
        callback(`${number} `)
    }, time * ONE_SECOND_IN_MS);
    
}

for(let i =1; i<=10; i++){
    generateNumber(i,console.log, i)
}