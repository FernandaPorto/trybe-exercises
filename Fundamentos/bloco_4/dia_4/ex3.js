// Questao 01:

function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a*b;
}

function division(a, b) {
    return a/b;
}

function module(a, b) {
    return a%b;
}


// Questao 02:

function higherNumber(a, b) {
    if(a>b){
        return a;
    } else {
        return b;
    }
}
console.log(higherNumber(20,10))

// Questao 03:

function higherNumber3(a, b, c) {
    let bigest = 0;
    if((a > b) && (a > c)) {
        bigest = a;
    } else if ((b > a) && (b > c)) {
        bigest = b;
    } else {
        bigest = c;
    }
    return bigest;
}

console.log(higherNumber3(5, 1000, 50));

// Questao 04:

function numberSignal(number) {
    let signal = '';
    if (number > 0) {
        signal = 'positive';
    } else if (number < 0) {
        signal = 'negative';
    } else {
        signal = 'zero';
    }
    return signal;
}
console.log(numberSignal(0));

// Questao 05:

function triangle (angle1, angle2, angle3) {
    let result = '';
    if ((angle1 + angle2 + angle3) == 180){
        result = 'true';
    } else {
        result = 'false';
    }
    return result;
}
console.log(triangle(90,45,45));

// Questao 06:

function pieceMovement(piece) {
    
    switch (piece.toLowerCase()){
        case "horse":
            console.log("L movement");
            break;
        case "tower":
            console.log("back, foward, right and left");
            break;
        case "bishop":
            console.log("diagonal");
            break;
        case "queen":
            console.log("A Rainha, também conhecida como Dama, é a peça mais poderosa do xadrez, ela pode ir para frente ou para trás, para direita ou para a esquerda, ou na diagonal, quantas casas quiser, mas não pode pular nenhuma outra peça.");
            break;
        case "king":
            console.log("O Rei movimenta-se apenas 1 casa em qualquer direção. O Rei nunca pode se movimentar para uma casa que esteja sob ataque ou capturar uma peça que esteja defendida por uma peça adversária. No diagrama o rei preto só pode ir para cima, pois indo para a esquerda ou em diagonal estará sob ataque da torre branca. Quando estudarmos os movimentos especiais veremos que existe uma situação em que o rei pode andar 2 casas");
            break;
        case "peão":
            console.log("O peão só se movimenta para frente, sendo a única peça que não se move para trás. No primeiro lance de cada peão ele pode avançar 1 ou 2 casas. À partir do segundo lance de cada peão ele irá movimenta-se apenas 1 casa.");
            break;
        default:
            console.log("Essa não é uma peça do jogo!!!");
            break;
    }
     
}
console.log(pieceMovement('ToWer'));

// Questao 07:

function notaConceitual(notaPercent) {
    let conceito = '';
    if ((notaPercent >= 90) && (notaPercent <=  100)) {
        conceito = 'O estudante obteve conceito A';
    } else if ((notaPercent >= 70) && (notaPercent < 80)) {
        conceito = 'O estudante obteve conceito B';
    } else if ((notaPercent >= 60) && (notaPercent < 70)) {
        conceito = 'O estudante obteve conceito C';
    } else if ((notaPercent >= 50) && (notaPercent < 60)) {
        conceito = 'O estudante obteve conceito D';
    } else if ((notaPercent < 50) && (notaPercent >= 0)) {
        conceito = 'O estudante obteve conceito F';
    } else {
        conceito = 'Nota invalida: Favor inserir nota percentual entre 0 e 100!'
    }
    return conceito;    
}

console.log(notaConceitual(-20));

// Questa 08:

function evenNumber(a, b, c) {
    let result = '';
    if ((a%2 == 0)|| (b%2 == 0) || (c%2 == 0)){
        result = 'True: Ao menos um dos numeros dados eh par!!';
    } else {
        result = 'False: Todos os numeros sao impar!!';
    }
    return result;
}
console.log(evenNumber(1,25,31));

// Questao 09:

function oddNumber(a, b, c) {
    let result = '';
    if ((a%2 != 0)|| (b%2 != 0) || (c%2 != 0)){
        result = 'True: Ao menos um dos numeros dados eh impar!!';
    } else {
        result = 'False: Todos os numeros sao par!!';
    }
    return result;
}
console.log(oddNumber(10,2,30));

// Questao 10:

function profit(costValue, saleValue) {    
    let profitValue = 0;
    if ((saleValue > 0) && (costValue > 0)){
        profitValue = saleValue - 1.2*costValue; 
    } else {
        console.log('Error: Os valores de entrada devem ser positivos!!');
    }
    return profitValue;
}
console.log(profit(10,-20));

// Questao 11:

function salarioLiquido(salarioBruto) {
    let aliquotaINSS = 0;
    if (salarioBruto < 1556.95){
        aliquotaINSS = 0.08*salarioBruto;
    } else if ((salarioBruto >= 1556.95) && (salarioBruto < 2594.93)) {
        aliquotaINSS = 0.09*salarioBruto;
    } else if ((salarioBruto >= 2594.93) && (salarioBruto < 5189.83)) {
        aliquotaINSS = 0.11*salarioBruto;
    } else {
        aliquotaINSS = 570.88;
    }
    let salarioBase = salarioBruto - aliquotaINSS;    
    let aliquotaIR = 0;
    if (salarioBase < 1903.99) {
        aliquotaIR = 0;
    } else if ((salarioBase >= 1903.99) && (salarioBase < 2826.66)) {
        aliquotaIR = 0.075*salarioBase - 142.8;
    } else if ((salarioBase >= 2826.66) && (salarioBase < 3751.06)) {
        aliquotaIR = 0.15*salarioBase - 354.8;
    } else if ((salarioBase >= 3751.06) && (salarioBase < 4664,69)) {
        aliquotaIR = 0.225*salarioBase - 636.13;
    } else {
        aliquotaIR = 0.275*salarioBase - 869.36;
    }
    let valorLiquido = salarioBase - aliquotaIR;
    return valorLiquido;
}
console.log(salarioLiquido(3000));