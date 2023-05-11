function showAfter(seconds, data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), seconds * 1000);
    })
}

async function startTimer(endAt) {
    let currentSecond = 0;

    for (var i = currentSecond; i !== endAt; i = currentSecond) {
        const result = await showAfter(1, ++currentSecond);
        console.log(result);
    }
    
}

startTimer(10);