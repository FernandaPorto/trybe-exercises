function techList(tech, name) {
    let objectListOutput = [];
    let object = {
      tech,
      name,
    };
    let ordenadedList = object.tech.sort();
    for (let key in ordenadedList) {
      objectListOutput.push({
        tech: ordenadedList[key],
        name,
      });
    }
    if (object.tech.length > 0) {
      return objectListOutput;
    }
    return 'Vazio!';
  }

  module.exports = techList;