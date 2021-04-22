function encode(string) {
    let result = [];
    for (let key in string) {
      if (string[key] === 'a') {
        result += '1';
      } else if (string[key] === 'e') {
        result += '2';
      } else if (string[key] === 'i') {
        result += '3';
      } else if (string[key] === 'o') {
        result += '4';
      } else if (string[key] === 'u') {
        result += '5';
      } else {
        result += string[key];
      }
    }
    return result;
  }

  module.exports = encode;