const readLine = require('readline-sync');

function CalculaIMC() {
  const peso = readLine.questionFloat("Qual seu peso?");
  const altura = readLine.questionFloat("Qual sua altura?");
  const IMC = peso / Math.pow(altura,2);
  
  switch (true) {
    case (IMC < 18.5): 
    return console.log({peso, altura, IMC, situacao:"Abaixo do peso (magreza)"});
    case (18.5 >= IMC < 25): 
    return console.log({peso, altura, IMC, situacao:"Peso normal"});
    case (25 >= IMC < 30): 
    return console.log({peso, altura, IMC, situacao:"Acima do peso (sobrepeso)"});
    case (30 >= IMC < 35): 
    return console.log({peso, altura, IMC, situacao:"Obesidade grau I"});
    case (35 >= IMC < 40): 
    return console.log({peso, altura, IMC, situacao:"Obesidade grau II"});
    case (40 > IMC): 
    return console.log({peso, altura, IMC, situacao:"Obesidade graus III e IV"});
  }
}

CalculaIMC();
