let taskInput = document.querySelector('input[type="text"]'); // поле для ввода новой задачи
let addBtn = document.querySelector(".add-task__btn"); // кнопка добавления новой задачи
let taskList = document.querySelector(".task-list"); // див, в котором будет лежать список задач
let deleteBtn = document.querySelector(".task-list__btn"); // кнопка очистки списка
let emptyList = document.querySelector(".task-list_empty"); // надпись "нет задач"

// вешаем слушатель событий на кнопки добавления задачи и очистки списка
addBtn.addEventListener("click", addTask);
deleteBtn.addEventListener("click", clearList);

// функция добавления новой задачи в список задач
function addTask() {
    if (taskInput.value !== "") {
        emptyList.hidden = true; // прячем надпись "нет задач"
        // добавляем новую задачу в список задач, добавляем стили и атрибуты
        let taskItem = document.createElement("div");
        taskItem.classList.add("task-list__item");
        let taskCheckbox = document.createElement("input");
        taskList.insertBefore(taskItem, deleteBtn);
        taskCheckbox.setAttribute("type", "checkbox");
        taskItem.textContent = taskInput.value; // добавляем текст из поля для ввода
        taskItem.appendChild(taskCheckbox);

        // активируем кнопку для очистки списка
        deleteBtn.disabled = false;

        // очищаем поле для ввода
        taskInput.value = "";
    }
}

// функция очистки списка задач
function clearList() {
    let taskItems = document.querySelectorAll('.task-list__item');  // все дивы, в которых лежат задачи
    let arrTaskItems = Array.from(taskItems);   // формируем массив из дивов с задачами
    for(let i = 0; i < arrTaskItems.length; i++){
        arrTaskItems[i].style.display = 'none';     // проходим по массиву и прячем все задачи
    }
    deleteBtn.disabled = true;  // деактивируем кнопку для очистки списка
    emptyList.hidden = false;   // возвращаем надпись "Нет задач"

}

