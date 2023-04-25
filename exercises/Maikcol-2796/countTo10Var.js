function main () {
 for (var i=1; i<= 10; i++){
  function a (j) {
    setTimeout(()=>console.log(j), 1000*j);
  }
   a(i);
}

}
main()