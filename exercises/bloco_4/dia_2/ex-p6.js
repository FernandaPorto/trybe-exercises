let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddnumbers = 0;

for (let index = 0 ; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0){
        oddnumbers += 1;
    }

}

if (oddnumbers == 0) {
    console.log("Nenhum valor Odd foi encontrado!!");
} else {
    console.log(oddnumbers);
}
