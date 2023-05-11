function showAfter(seconds, data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), seconds * 1000);
    })
}

async function startTimer(endAt) {
    let currentSecond = 0;
    while (true) {
        const result = await showAfter(1, ++currentSecond);
        console.log(result);
        if (currentSecond == endAt) {
            break;
        }
    }
}

startTimer(10);