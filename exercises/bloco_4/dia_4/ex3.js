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