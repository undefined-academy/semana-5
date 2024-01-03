const SECONDS = 1000;

for (var i = 1; i <= 10; i++) {
  setTimeout(() => {
    i == 1 ? console.log(`Me tarde ${i} segundo`) : console.log(`Me tarde ${i} segundos`);
  }, i * SECONDS)
}