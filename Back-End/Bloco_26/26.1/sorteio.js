const readLine = require('readline-sync');

function sorteio() {
  const randomNumber = Math.ceil(Math.random()*10);
  const userNumber = readLine.questionInt("Chute seu numero: ");

  const comparison = userNumber === randomNumber 
  ? "Parabéns, número correto!" 
  : `Opa, não foi dessa vez. O número era ${randomNumber}`
  console.log(comparison);
  tryAgain();
}

function tryAgain() {
  const question = readLine.question("Gostaria de jogar novamente? (S/N)");
  
  if (question === "S") return sorteio();
  return;
}

sorteio();
