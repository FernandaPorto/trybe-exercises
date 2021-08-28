const data = (nomeCompleto) => {
    const object = {
        name: nomeCompleto,
        mail: () => {
          const fullmail = nomeCompleto.toLowerCase().replace(' ', '_');
            return `${fullmail}@trybe.com`;
        }
    }
    
    return  {noma: nomeCompleto, email: object.mail()};
};
const newEmployees = (data) => {
    const employees = {
      id1: data('Pedro Guerra'),
      id2: data('Luiza Drumond'),
      id3: data('Carla Paiva'),
    }
    
    return employees;
  };
  console.log(newEmployees(data));


  // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
  // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
  // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro