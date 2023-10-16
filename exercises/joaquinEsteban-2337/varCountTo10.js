const oneSecond = 1000;

function contador(){
  for(var i = 0; i <= 10; i++){
    
    function imprimir(i){
        return function(){
            console.log(i)
        }
    }
  setTimeout(imprimir(i), oneSecond * i);
  
}
}

contador()
