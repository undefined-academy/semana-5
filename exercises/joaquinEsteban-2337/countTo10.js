const oneSecond = 1000;

function returnCounter(counter){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(counter)
        },oneSecond)
    })
}


async function counter10(){
    for(let i = 0; i <= 10; i++){
        let counter = await returnCounter(i);
        console.log(counter)
    }
}

counter10()