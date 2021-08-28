function maiorDoArray([name1, name2, name3, name4, name5, name6]){
    let array = [name1, name2, name3, name4, name5, name6];
    let maiorNome = array[0];
    for (let index = 0; index < array.length; index += 1){
        if(array[index].length > maiorNome.length){
            maiorNome = array[index];
        }
    }
    return maiorNome;    
}

console.log(maiorDoArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// De acordo com o gabarito - eu nao queria ter olhado, mas fiquei curiosa se nao havia forma mais facil/resumida de se fazer este exercicio - pode-se utilizar aqui um objeto para definir os numeros e utilizar o for-in para localizar a propriedade desejada. Segue tentativa de resolucao seguindo esta ideia (fiz sem olhar o gabarito novamente!):

function bigestName(name){
    let biggerName = name[0];
    for (let indice in name) {
        if (biggerName.length < name[indice].length){
            biggerName = name[indice];
        }        
    }
    return biggerName; 
}

console.log(bigestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))