const ONE_SECOND_IN_MS = 1000;

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i + 1);
  }, ONE_SECOND_IN_MS * i);
}
