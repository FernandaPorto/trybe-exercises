let valorDeCusto = 10;
let valorDeVenda = -9;


if(valorDeVenda>valorDeCusto*1.2) {
    let lucro = valorDeVenda-1.2*valorDeCusto;
    console.log(lucro);
} else if (valorDeCusto<0 || valorDeVenda<0) {
    console.log("ERROR: Dados Inválidos: Os valores devem ser positivos!"); 
} else {
    console.log("Não terá lucro com esse valor estipulado para a venda!! Melhor segurar!!")
}
