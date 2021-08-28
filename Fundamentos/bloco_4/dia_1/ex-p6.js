let piece = "ToWeR";

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
}
