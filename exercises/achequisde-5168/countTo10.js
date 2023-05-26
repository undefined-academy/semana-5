function secondsToMs(seconds) {
  return seconds * 1000;
}


function printFrom1to10() {
  let start = 1;
  let end = 10;

  let interval = setInterval(() => {
    if (start === end) clearInterval(interval);
    console.log(start++);
  }, secondsToMs(1));
}