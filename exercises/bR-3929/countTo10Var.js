function main(){
    for(var i = 1; i <= 10; i = i + 1){
      function imprimir(i){
        return function(){
          console.log(i);
        }
      }
      setTimeOut(imprimir(i), 1000 * i);
    }
  }