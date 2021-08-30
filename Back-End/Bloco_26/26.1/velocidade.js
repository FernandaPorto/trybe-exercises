const readLine = require('readline-sync');

function velocidadeMedia() {
  const distancia = readLine.questionInt("Qual a distacia percorrida? ");
  const tempo = readLine.questionInt("Qual o tempo que vc gastou? ");
  const velocidade = distancia/tempo;
  return console.log({distancia, tempo, velocidade});
}

velocidadeMedia();
