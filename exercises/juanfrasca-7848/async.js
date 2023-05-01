for (let i = 0; i<10; i++){
    setTimeout(() => {
        console.log(i+1);   
    }, (i+1)*1000); 
}

/* 
function count(number){
    return new Promise((resolve) => {
        const newNumber = number +1;
        setTimeout(() => {
            resolve(newNumber)
        }, 1000);
    })
}

async function showSeconds(){
    for(let i=0;i<10;i++){
    const newNumber = await count(i)
    console.log(newNumber)
    }
    
}

showSeconds()
*/