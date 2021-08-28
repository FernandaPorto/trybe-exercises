function decode(stringWithNumbers) {
    let result = [];
    for (let key in stringWithNumbers) {
      if (stringWithNumbers[key] === '1') {
        result += 'a';
      } else if (stringWithNumbers[key] === '2') {
        result += 'e';
      } else if (stringWithNumbers[key] === '3') {
        result += 'i';
      } else if (stringWithNumbers[key] === '4') {
        result += 'o';
      } else if (stringWithNumbers[key] === '5') {
        result += 'u';
      } else {
        result += stringWithNumbers[key];
      }
    }
    return result;
  }
  module.exports = decode;