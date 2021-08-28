function verificaPalindromo(palavra){    
    let stringAoContrario = '';
    let resultado = '';
    for (let index = palavra.length-1; index >= 0; index -= 1){
        stringAoContrario += palavra[index];
    }
    if (palavra == stringAoContrario){
        resultado = 'true';       
    } else {
        resultado = 'false';        
    }
    return resultado;
}

console.log(verificaPalindromo('arara'));