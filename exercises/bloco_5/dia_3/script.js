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
		
		// Exercício 2: 		
		function createHolidayButton() {
			const buttonFather = document.querySelector('.buttons-container');
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.innerHTML = 'Feriados';
			btn.id = 'btn-holiday';
			buttonFather.appendChild(btn);
		}
		createHolidayButton();

		// Exercício 3:
		document.querySelector('#btn-holiday').addEventListener('click', () => {
			const holidays = document.getElementsByClassName('holiday');
			for (let key in holidays) {
				if(holidays[key].style.backgroundColor === 'gray') {
					holidays[key].style.backgroundColor = 'rgb(238,238,238)';
					holidays[key].style.color = '#777'					
				} else {
					holidays[key].style.backgroundColor = 'gray';
					holidays[key].style.color = 'yellow'
				}
			}
		})

		// Exercício 4:
		function createFridayButton() {
			const buttonFather = document.querySelector('.buttons-container');
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.innerHTML = 'Sexta-feira';
			btn.id = 'btn-friday';
			buttonFather.appendChild(btn);
		}
		createFridayButton();

		// Exercício 5:
		document.querySelector('#btn-friday').addEventListener('click', () => {
			let dezFridays = [4, 11, 18, 25];
			const fridays = document.getElementsByClassName('friday');
			for (let key in fridays) {
				if(fridays[key].innerText === 'SEXTOU') {
					fridays[key].innerText = dezFridays[key];
					fridays[key].style.color = '#777'					
				} else {
					fridays[key].innerText = 'SEXTOU';
					fridays[key].style.color = 'green'
				}
			}
		})

		// Exercício 6: 
