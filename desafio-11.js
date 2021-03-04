function generatePhoneNumber(arrayOfNumber) {
    let telePhoneNumber = '(';
    for (let DDD = 0; DDD < 2; DDD += 1) {
      telePhoneNumber += arrayOfNumber[DDD];
    }
    telePhoneNumber += ') ';
    for (let first5Numbers = 2; first5Numbers < 7; first5Numbers += 1) {
      telePhoneNumber += arrayOfNumber[first5Numbers];
    }
    telePhoneNumber += '-';
    for (let last4Numbers = 7; last4Numbers < 11; last4Numbers += 1) {
      telePhoneNumber += arrayOfNumber[last4Numbers];
    }
    let repeated = 0;
    let numberCounter = 0;
    let numindex = 0;
    for (let key in arrayOfNumber) {
      let verifyNumber = arrayOfNumber[key];
      for (let key2 in arrayOfNumber) {
        if (verifyNumber === arrayOfNumber[key2]) {
          numberCounter += 1;
        }
      }
      if (numberCounter > repeated) {
        repeated = numberCounter;
        numindex = key;
      }
      numberCounter = 0;
    }
    let verifyNumberPossibility = 0;
    let verifyNumerOk = 0;
    for (let index = 0; index < arrayOfNumber.length; index += 1) {
      if (((arrayOfNumber[index]) < 0) || ((arrayOfNumber[index]) > 9) || (repeated >= 3)) {
        verifyNumberPossibility += 1;
      } else if ((arrayOfNumber[index] >= 0) && (arrayOfNumber[index] <= 9) && (arrayOfNumber.length == 11)) {
        verifyNumerOk += 1;
      }
      if (verifyNumerOk === 11) {
        return telePhoneNumber;
      } if (verifyNumberPossibility > 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else if (arrayOfNumber.length !== 11) {
        return 'Array com tamanho incorreto.';
      }
    }
  }
  console.log(generatePhoneNumber([]));