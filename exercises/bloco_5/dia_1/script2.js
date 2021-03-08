var heroTitle = document.querySelector("h1");
    heroTitle.innerText = "Admnistrador de Tempo da Fernanda!"
    heroTitle.style.color = "purple";

var container = document.getElementById("container");
    container.style.backgroundColor = "#f5f5f5";

var importantTasksHeaders = document.querySelectorAll(".emergency-tasks h3");
    importantTasksHeaders[0].style.backgroundColor = 'Silver';
    importantTasksHeaders[1].style.backgroundColor = 'Silver';
    importantTasksHeaders[0].style.color = 'black';
    importantTasksHeaders[1].style.color = 'black';

var notUrgentTasks = document.querySelectorAll(".no-emergency-tasks h3");
    for (let key in notUrgentTasks){
        notUrgentTasks[key].style.backgroundColor = "lightgreen"
        notUrgentTasks[key].style.color = 'black';
    }
