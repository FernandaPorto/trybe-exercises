function hydrate(stringWithGlasses) {
    let getNumber = /\d+/g;
    let arrayWithNumbers = stringWithGlasses.match(getNumber);
    let sumOfGlasses = 0;
    for (let key in arrayWithNumbers) {
      if (arrayWithNumbers.length > 0) {
        sumOfGlasses += parseInt(arrayWithNumbers[key], 10); // Vi sobre o parseInt na aula ao vivo de hoje (5.3)
      }
    }
    if (arrayWithNumbers.length === 1) {
      return `${sumOfGlasses} copo de água`;
    } 
      return `${sumOfGlasses} copos de água`;
  }

  module.exports = hydrate;