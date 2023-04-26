function cuentaProgresiva(callback) {
  let count = 1;
  const intervalId = setInterval(() => {
    if (count > 10) {
      clearInterval(intervalId);
    } else {
      callback(count);
      count++;
    }
  }, 1000);
}

cuentaProgresiva(num => console.log(num));
