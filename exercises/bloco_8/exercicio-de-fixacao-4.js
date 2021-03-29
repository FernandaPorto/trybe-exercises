const greaterThan = (firstNumber) => (secondNumber) => secondNumber > firstNumber;

const greaterThan10 = greaterThan(5);
console.log(greaterThan10(3));
// true