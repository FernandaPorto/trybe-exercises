function splitSentence(string) {
    let arrayStr = [];
    for (let i in string){
      if (string[i] == ' '){
       arrayStr.push(string[i+1]);
      } else {
        arrayStr += string[i];
      }
    } return arrayStr;
  }
  console.log(splitSentence('go Trybe'));