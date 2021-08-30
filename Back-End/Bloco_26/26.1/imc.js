const readLine = require('readline-sync');
const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({messenge: "Response OK!!"})
})

app.listen(3000, () => {console.log("Ouvindo porta 3000")});

function CalculaIMC() {
  const peso = readLine.questionFloat("Qual seu peso?");
  const altura = readLine.questionFloat("Qual sua altura?");
  const IMC = peso / Math.pow(altura,2);
  
  switch (true) {
    case (IMC < 18.5): 
    return console.log({peso, altura, IMC, situacao:"Abaixo do peso (magreza)"});
    case (18.5 >= IMC <= 24.9): 
    return console.log({peso, altura, IMC, situacao:"Peso normal"});
    case (25 >= IMC <= 29.9): 
    return console.log({peso, altura, IMC, situacao:"Acima do peso (sobrepeso)"});
    case (30 >= IMC <= 34.9): 
    return console.log({peso, altura, IMC, situacao:"Obesidade grau I"});
    case (35 >= IMC <= 39.9): 
    return console.log({peso, altura, IMC, situacao:"Obesidade grau II"});
    case (35 >= IMC <= 39.9): 
    return console.log({peso, altura, IMC, situacao:"Obesidade graus III e IV"});
  }
}

CalculaIMC();
