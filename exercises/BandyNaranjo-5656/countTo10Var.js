function increaseNumber(number){
    return new Promise(function(resolve) {
        setTimeout(function(){
            resolve(number + 1)
        }, 1000);
    })
    
}

async function printNumbers(){
    var number  = 1;
    for (var index = 1; index < 11; index++) {
        console.log(number);
        number = await increaseNumber(number);    
    }
}
printNumbers();