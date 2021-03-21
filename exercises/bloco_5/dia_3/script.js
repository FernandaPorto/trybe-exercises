function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Exercício 1:
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let key in dezDaysList) {
      const daysList = document.querySelector('#days');
			const createLi = document.createElement('li');
			createLi.className = 'day';
			createLi.innerText = dezDaysList[key];
			daysList.appendChild(createLi);

			if(dezDaysList[key] === 24 || dezDaysList[key] === 25 || dezDaysList[key] === 31) {
				createLi.classList.add('holiday');
			}

			if(dezDaysList[key] === 4 || dezDaysList[key] === 11 || dezDaysList[key] === 18 || dezDaysList[key] === 25) {
				createLi.classList.add('friday');
			}

  	}
	
	