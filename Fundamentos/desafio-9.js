// Desafio 9
function encode(string) {
    let result = [];
    for(let key in string){
      if (string[key] === 'a'){
        result += 1;
      } else if (string[key] === 'e') {
        result += 2;
      } else if (string[key] === 'i') {
        result += 3;
      } else if (string[key] === 'o') {
        result += 4;
      } else if (string[key] === 'u') {
        result += 5;
      } else {
        result += string[key];
      }
    }
    return result;
  }
  console.log(encode('How are you today?'));
  
  function decode(stringWithNumbers) {
    let result = [];
    for(let key in stringWithNumbers){
      if (stringWithNumbers[key] == 1){
        result += 'a';
      } else if (stringWithNumbers[key] == 2) {
        result += 'e';
      } else if (stringWithNumbers[key] == 3) {
        result += 'i';
      } else if (stringWithNumbers[key] == 4) {
        result += 'o';
      } else if (stringWithNumbers[key] == 5) {
        result += 'u';
      } else {
        result += stringWithNumbers[key];
      }
    }
    return result;
  }
  console.log(decode('H4w 1r2 y45 t4d1y?'));