function maiorDoArray([number1, number2, number3, number4, number5, number6, number7]){
    let array = [number1, number2, number3, number4, number5, number6, number7];
    let menorNumero = array[0];
    for (let index = 0; index < array.length; index += 1){
        if(array[index] < menorNumero){
            menorNumero = array[index];
        }
    }
    return array.indexOf(menorNumero);    
}

console.log(maiorDoArray([2,4,6,7,10,0,-3]));

// De acordo com o gabarito - eu nao queria ter olhado, mas fiquei curiosa se nao havia forma mais facil/resumida de se fazer este exercicio - pode-se utilizar aqui um objeto para definir os numeros e utilizar o for-in para localizar a propriedade desejada. Segue tentativa de resolucao seguindo esta ideia (fiz sem olhar o gabarito novamente!):

function higherArrayNumber(number){
    let smallerNumber = 0;
    for(let indice in number){
        if(number[smallerNumber] > number[indice]){
            smallerNumber = indice;
        }
    }
    return smallerNumber;
}
console.log(higherArrayNumber([2, 4, 6, 7, 10, 0, -3]));