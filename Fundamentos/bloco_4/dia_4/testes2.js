// Desafio 10
function techList(tech, name) {
    let objectListOutput = [];
    let object = {
      tech:tech,
      name: name
    }
    let ordenadedList = object.tech.sort();
    for(let key in ordenadedList) {    
      objectListOutput.push({
          tech: ordenadedList[key],
          name: name
      })
    }
    if (object.tech.length > 0) {
      return objectListOutput;
    } else {
      return 'Vazio!';
    }  
  }
  console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));