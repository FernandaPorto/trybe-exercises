let valorDeCusto = 5000;
let valorDeVenda = 9000;
let lucro = valorDeVenda-(1.2*valorDeCusto);


if (valorDeCusto<0 || valorDeVenda<0) {
    console.log("ERROR: Dados Inválidos: Os valores devem ser positivos!");
} 
else if(valorDeVenda>(valorDeCusto*1.2)) {
    console.log(lucro*1000);
} else {
    console.log("Não terá lucro com esse valor estipulado para a venda!! Melhor segurar!!");
}
