function fizzBuzz(arrayOfNumbers) {
    let result = [];
    for (let key in arrayOfNumbers) {
      if ((arrayOfNumbers[key] % 3 === 0) && (arrayOfNumbers[key] % 5 !== 0)) {
        result.push('fizz');
      } else if ((arrayOfNumbers[key] % 3 !== 0) && (arrayOfNumbers[key] % 5 === 0)) {
        result.push('buzz');
      } else if ((arrayOfNumbers[key] % 3 === 0) && (arrayOfNumbers[key] % 5 === 0)) {
        result.push('fizzBuzz');
      } else if ((arrayOfNumbers[key] % 3 !== 0) && (arrayOfNumbers[key] % 5 !== 0)) {
        result.push('bug!'); 
      }
    }
    return result;
  }
console.log(fizzBuzz([7, 9]));