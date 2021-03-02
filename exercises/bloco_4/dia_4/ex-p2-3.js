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
