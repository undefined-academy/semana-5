const SECONDS = 1000;

for(let i = 1; i < 11 ; i++) {
  setTimeout(() => {
    i == 1 ? console.log(`Me tarde ${i} segundo`) : console.log(`Me tarde ${i} segundos`);
  }, i * SECONDS)
}