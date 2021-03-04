function maiorRepeticao(numeros) {
    let repeated = 0;
    let numberCounter = 0;
    let numindex = 0;    
    for(let key in numeros){
    let verifyNumber = numeros[key];
    for (let key2 in numeros) {
        if(verifyNumber === numeros[key2]) {
            numberCounter += 1;
        }
    }
    if (numberCounter > repeated) {
        repeated = numberCounter;
        numindex = key;
    }
    numberCounter = 0;
}
    return repeated; 
}  
console.log(maiorRepeticao([1, 2, 3, 3, 3, 6, 3, 3, 9, 3, 1]));