let dropButton = document.querySelector('.dropbtn');
let listItem = document.querySelectorAll(".list-item");
let input = document.getElementById('CreateToDo');
let addTask = document.querySelector('.addTask');
let taskContainer = document.querySelector('.taskContainer');

let time = 'Time not defined';
let currentTask = '';

function updateDisplay(){
    dropButton.innerText = "Choose Time";
    input.value = "";
    time = "Time not defined";
}

listItem.forEach(button => {
    button.addEventListener('click', () => {
        time = button.innerText;
        dropButton.innerText = time;
    })
})

addTask.addEventListener('click', () =>{
    currentTask = input.value;
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = `${time}  \u00A0\u00A0\u00A0	${currentTask}`;
    taskContainer.appendChild(paragraph);
    paragraph.addEventListener('click',() => {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',() => {
        taskContainer.removeChild(paragraph);
    })
    updateDisplay();
})