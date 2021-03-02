function maiorDoArray([number1, number2, number3, number4, number5, number6]){
    let array = [number1, number2, number3, number4, number5, number6];
    let maiorNumero = 0;
    for (let index = 0; index < array.length; index += 1){
        if(array[index] > maiorNumero){
            maiorNumero = array[index];
        }
    }
    return array.indexOf(maiorNumero);    
}

console.log(maiorDoArray([2,3,6,7,10,1]));
